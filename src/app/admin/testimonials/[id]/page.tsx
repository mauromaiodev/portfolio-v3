import { AdminShell } from "@/components/admin/admin-shell";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { getTestimonial } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function EditTestimonialPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const item = await getTestimonial(id);
  if (!item) notFound();

  return (
    <AdminShell title="Editar depoimento">
      <TestimonialForm item={item} />
    </AdminShell>
  );
}
