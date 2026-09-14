import { signOut } from "@/auth";
import Link from "next/link";

const LINKS = [
  { href: "/admin", label: "Visão geral" },
  { href: "/admin/profile", label: "Perfil" },
  { href: "/admin/experiences", label: "Experiências" },
  { href: "/admin/education", label: "Educação" },
  { href: "/admin/projects", label: "Projetos" },
  { href: "/admin/skills", label: "Skills" },
  { href: "/admin/testimonials", label: "Depoimentos" },
];

type Props = {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

/**
 * Admin chrome: sidebar, title, and sign-out.
 */
export function AdminShell({ title, children, action }: Props) {
  return (
    <div className="min-h-screen bg-background md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-b border-border bg-surface md:min-h-screen md:border-r md:border-b-0">
        <div className="px-5 py-6">
          <p className="font-mono text-xs tracking-[0.16em] text-purple uppercase">
            CMS
          </p>
          <p className="mt-1 text-sm text-comment">portfolio-v3</p>
        </div>
        <nav className="flex flex-col gap-1 px-3 pb-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-comment transition-colors hover:bg-current-line hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-cyan hover:bg-current-line"
          >
            Ver site
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button
              type="submit"
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-red hover:bg-current-line"
            >
              Sair
            </button>
          </form>
        </nav>
      </aside>
      <div className="px-6 py-8 md:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {action}
        </div>
        {children}
      </div>
    </div>
  );
}
