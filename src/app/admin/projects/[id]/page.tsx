import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";
import { getProject } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function EditProjectPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const item = await getProject(id);
  if (!item) notFound();

  return (
    <AdminShell title="Editar projeto">
      <ProjectForm item={item} />
    </AdminShell>
  );
}
