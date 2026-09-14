import { getAdminCounts } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

const CARDS = [
  { key: "experiences", href: "/admin/experiences", label: "Experiências" },
  { key: "education", href: "/admin/education", label: "Educação" },
  { key: "projects", href: "/admin/projects", label: "Projetos" },
  { key: "skills", href: "/admin/skills", label: "Skills" },
  { key: "testimonials", href: "/admin/testimonials", label: "Depoimentos" },
] as const;

export default async function AdminHomePage() {
  await requireAdmin();
  const counts = await getAdminCounts();

  return (
    <AdminShell title="Visão geral">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-purple"
          >
            <p className="text-sm text-comment">{card.label}</p>
            <p className="mt-3 font-mono text-3xl text-green">{counts[card.key]}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
