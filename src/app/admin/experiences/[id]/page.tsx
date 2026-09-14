import { AdminShell } from "@/components/admin/admin-shell";
import { ExperienceForm } from "@/components/admin/experience-form";
import { getExperience } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function EditExperiencePage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const item = await getExperience(id);
  if (!item) notFound();

  return (
    <AdminShell title="Editar experiência">
      <ExperienceForm item={item} />
    </AdminShell>
  );
}
