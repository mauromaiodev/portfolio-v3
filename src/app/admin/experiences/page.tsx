import { deleteExperienceAction } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PrimaryLink } from "@/components/admin/primary-link";
import { getPortfolio } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export default async function ExperiencesPage() {
  await requireAdmin();
  const { experiences } = await getPortfolio();

  return (
    <AdminShell
      title="Experiências"
      action={<PrimaryLink href="/admin/experiences/new">Nova experiência</PrimaryLink>}
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {experiences.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="font-medium">{item.rolePt}</p>
              <p className="text-sm text-comment">{item.company}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/experiences/${item.id}`} className="text-cyan">
                Editar
              </Link>
              <form action={deleteExperienceAction.bind(null, item.id)}>
                <button type="submit" className="text-red">
                  Excluir
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </AdminShell>
  );
}
