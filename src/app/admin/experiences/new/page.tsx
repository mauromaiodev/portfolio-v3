import { AdminShell } from "@/components/admin/admin-shell";
import { ExperienceForm } from "@/components/admin/experience-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewExperiencePage() {
  await requireAdmin();
  return (
    <AdminShell title="Nova experiência">
      <ExperienceForm />
    </AdminShell>
  );
}
