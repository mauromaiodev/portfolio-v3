import { AdminShell } from "@/components/admin/admin-shell";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewTestimonialPage() {
  await requireAdmin();
  return (
    <AdminShell title="Novo depoimento">
      <TestimonialForm />
    </AdminShell>
  );
}
