import { AdminShell } from "@/components/admin/admin-shell";
import { EducationForm } from "@/components/admin/education-form";
import { getEducationItem } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function EditEducationPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const item = await getEducationItem(id);
  if (!item) notFound();

  return (
    <AdminShell title="Editar formação">
      <EducationForm item={item} />
    </AdminShell>
  );
}
