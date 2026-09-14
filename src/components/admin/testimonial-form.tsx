import { saveTestimonialAction } from "@/app/admin/actions";
import { Field } from "@/components/admin/field";
import { FormActions } from "@/components/admin/form-actions";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { TestimonialRow } from "@/lib/portfolio-types";

export function TestimonialForm({ item }: { item?: TestimonialRow }) {
  const action = saveTestimonialAction.bind(null, item?.id ?? null);

  return (
    <form action={action} className="max-w-3xl space-y-6">
      <Field label="Nome" name="name" defaultValue={item?.name} required />
      <Field label="Ordem" name="sortOrder" type="number" defaultValue={item?.sortOrder ?? 0} />
      <LocaleTabs
        pt={
          <Field
            label="Depoimento (PT)"
            name="feedbackPt"
            defaultValue={item?.feedbackPt}
            textarea
            required
          />
        }
        en={
          <Field
            label="Testimonial (EN)"
            name="feedbackEn"
            defaultValue={item?.feedbackEn}
            textarea
            required
          />
        }
      />
      <FormActions submitLabel="Salvar depoimento" hrefCancel="/admin/testimonials" />
    </form>
  );
}
