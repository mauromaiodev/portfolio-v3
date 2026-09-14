import { AdminShell } from "@/components/admin/admin-shell";
import { SkillGroupForm } from "@/components/admin/skill-group-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewSkillPage() {
  await requireAdmin();
  return (
    <AdminShell title="Novo grupo de skills">
      <SkillGroupForm />
    </AdminShell>
  );
}
