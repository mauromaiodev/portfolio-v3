import { AdminShell } from "@/components/admin/admin-shell";
import { SkillGroupForm } from "@/components/admin/skill-group-form";
import { getPortfolio, getSkillGroup } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function EditSkillPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const group = await getSkillGroup(id);
  if (!group) notFound();
  const { skillGroups } = await getPortfolio();
  const item = skillGroups.find((entry) => entry.id === id);
  if (!item) notFound();

  return (
    <AdminShell title="Editar grupo de skills">
      <SkillGroupForm item={item} />
    </AdminShell>
  );
}
