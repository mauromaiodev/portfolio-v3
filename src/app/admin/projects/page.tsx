import { deleteProjectAction } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PrimaryLink } from "@/components/admin/primary-link";
import { getPortfolio } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export default async function ProjectsPage() {
  await requireAdmin();
  const { projects } = await getPortfolio();

  return (
    <AdminShell
      title="Projetos"
      action={<PrimaryLink href="/admin/projects/new">Novo projeto</PrimaryLink>}
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {projects.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-comment">
                {item.featured ? "Destaque" : "Lista extra"}
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/projects/${item.id}`} className="text-cyan">
                Editar
              </Link>
              <form action={deleteProjectAction.bind(null, item.id)}>
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
