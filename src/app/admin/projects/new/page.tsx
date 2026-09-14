import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewProjectPage() {
  await requireAdmin();
  return (
    <AdminShell title="Novo projeto">
      <ProjectForm />
    </AdminShell>
  );
}
