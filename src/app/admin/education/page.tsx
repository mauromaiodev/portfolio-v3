import { deleteEducationAction } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PrimaryLink } from "@/components/admin/primary-link";
import { getPortfolio } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export default async function EducationListPage() {
  await requireAdmin();
  const { education } = await getPortfolio();

  return (
    <AdminShell
      title="Educação"
      action={<PrimaryLink href="/admin/education/new">Nova formação</PrimaryLink>}
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {education.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="font-medium">{item.school}</p>
              <p className="text-sm text-comment">{item.subHeaderPt}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/education/${item.id}`} className="text-cyan">
                Editar
              </Link>
              <form action={deleteEducationAction.bind(null, item.id)}>
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
