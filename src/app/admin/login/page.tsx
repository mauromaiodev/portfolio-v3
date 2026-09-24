import { AuthError } from "next-auth";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const session = await auth();
  if (session?.user) {
    redirect("/admin");
  }

  const params = await searchParams;
  const passwordReady = Boolean(
    process.env.AUTH_ADMIN_USER && process.env.AUTH_ADMIN_PASSWORD,
  );
  const failed = Boolean(params.error);

  async function login(formData: FormData) {
    "use server";
    try {
      await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirectTo: "/admin",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        redirect("/admin/login?error=credentials");
      }
      throw error;
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-md rounded-xl border border-border bg-surface p-8">
        <p className="font-mono text-xs tracking-[0.18em] text-purple uppercase">
          Admin
        </p>
        <h1 className="mt-3 text-2xl font-semibold">Entrar no CMS</h1>
        <p className="mt-3 text-sm leading-6 text-comment">
          Acesso com usuário e senha.
        </p>
        {passwordReady ? (
          <form className="mt-8 space-y-4" action={login}>
            <label className="block text-sm">
              <span className="text-comment">Usuário</span>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-3"
              />
            </label>
            <label className="block text-sm">
              <span className="text-comment">Senha</span>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-3"
              />
            </label>
            {failed ? (
              <p className="text-sm text-orange">Usuário ou senha inválidos.</p>
            ) : null}
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-pink font-medium text-surface"
            >
              Entrar
            </button>
          </form>
        ) : (
          <p className="mt-8 rounded-lg border border-border bg-background p-4 text-sm leading-6 text-orange">
            Defina <code className="font-mono text-yellow">AUTH_ADMIN_USER</code> e{" "}
            <code className="font-mono text-yellow">AUTH_ADMIN_PASSWORD</code> no
            ambiente para habilitar o login.
          </p>
        )}
      </section>
    </main>
  );
}
