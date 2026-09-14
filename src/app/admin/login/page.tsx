import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/admin");
  }

  const githubReady = Boolean(process.env.AUTH_GITHUB_ID);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-md rounded-xl border border-border bg-surface p-8">
        <p className="font-mono text-xs tracking-[0.18em] text-purple uppercase">
          Admin
        </p>
        <h1 className="mt-3 text-2xl font-semibold">Entrar no CMS</h1>
        <p className="mt-3 text-sm leading-6 text-comment">
          Acesso restrito ao GitHub <span className="text-pink">mauromaiodev</span>.
        </p>
        {githubReady ? (
          <form
            className="mt-8"
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/admin" });
            }}
          >
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-pink font-medium text-surface"
            >
              Continuar com GitHub
            </button>
          </form>
        ) : (
          <p className="mt-8 rounded-lg border border-border bg-background p-4 text-sm leading-6 text-orange">
            Defina <code className="font-mono text-yellow">AUTH_GITHUB_ID</code> e{" "}
            <code className="font-mono text-yellow">AUTH_GITHUB_SECRET</code> no
            ambiente para habilitar o login.
          </p>
        )}
      </section>
    </main>
  );
}
