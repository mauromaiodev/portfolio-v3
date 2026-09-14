import { deleteSkillGroupAction } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PrimaryLink } from "@/components/admin/primary-link";
import { getPortfolio } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export default async function SkillsPage() {
  await requireAdmin();
  const { skillGroups } = await getPortfolio();

  return (
    <AdminShell
      title="Skills"
      action={<PrimaryLink href="/admin/skills/new">Novo grupo</PrimaryLink>}
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {skillGroups.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="font-medium">{item.titlePt}</p>
              <p className="text-sm text-comment">{item.items.length} ícones</p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/skills/${item.id}`} className="text-cyan">
                Editar
              </Link>
              <form action={deleteSkillGroupAction.bind(null, item.id)}>
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
