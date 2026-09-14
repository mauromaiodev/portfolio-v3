import { AdminShell } from "@/components/admin/admin-shell";
import { EducationForm } from "@/components/admin/education-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewEducationPage() {
  await requireAdmin();
  return (
    <AdminShell title="Nova formação">
      <EducationForm />
    </AdminShell>
  );
}
