import { saveExperienceAction } from "@/app/admin/actions";
import { Field } from "@/components/admin/field";
import { FormActions } from "@/components/admin/form-actions";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { ExperienceRow } from "@/lib/portfolio-types";

export function ExperienceForm({ item }: { item?: ExperienceRow }) {
  const action = saveExperienceAction.bind(null, item?.id ?? null);

  return (
    <form action={action} className="max-w-3xl space-y-6">
      <Field label="Empresa" name="company" defaultValue={item?.company} required />
      <Field label="Ordem" name="sortOrder" type="number" defaultValue={item?.sortOrder ?? 0} />
      <LocaleTabs
        pt={
          <>
            <Field label="Cargo (PT)" name="rolePt" defaultValue={item?.rolePt} required />
            <Field label="Período (PT)" name="datePt" defaultValue={item?.datePt} required />
            <Field label="Descrição (PT)" name="descPt" defaultValue={item?.descPt} textarea required />
          </>
        }
        en={
          <>
            <Field label="Role (EN)" name="roleEn" defaultValue={item?.roleEn} required />
            <Field label="Dates (EN)" name="dateEn" defaultValue={item?.dateEn} required />
            <Field label="Description (EN)" name="descEn" defaultValue={item?.descEn} textarea required />
          </>
        }
      />
      <FormActions submitLabel="Salvar experiência" hrefCancel="/admin/experiences" />
    </form>
  );
}
