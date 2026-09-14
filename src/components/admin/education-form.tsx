import { saveEducationAction } from "@/app/admin/actions";
import { Field } from "@/components/admin/field";
import { FormActions } from "@/components/admin/form-actions";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { EducationRow } from "@/lib/portfolio-types";

export function EducationForm({ item }: { item?: EducationRow }) {
  const action = saveEducationAction.bind(null, item?.id ?? null);

  return (
    <form action={action} className="max-w-3xl space-y-6">
      <Field label="Instituição" name="school" defaultValue={item?.school} required />
      <Field label="Ordem" name="sortOrder" type="number" defaultValue={item?.sortOrder ?? 0} />
      <LocaleTabs
        pt={
          <>
            <Field label="Curso (PT)" name="subHeaderPt" defaultValue={item?.subHeaderPt} required />
            <Field label="Período (PT)" name="durationPt" defaultValue={item?.durationPt} required />
            <Field label="Descrição (PT)" name="descPt" defaultValue={item?.descPt} textarea required />
            <Field
              label="Tópicos (PT, um por linha)"
              name="bulletsPt"
              defaultValue={item?.bulletsPt.join("\n")}
              textarea
            />
          </>
        }
        en={
          <>
            <Field label="Course (EN)" name="subHeaderEn" defaultValue={item?.subHeaderEn} required />
            <Field label="Dates (EN)" name="durationEn" defaultValue={item?.durationEn} required />
            <Field label="Description (EN)" name="descEn" defaultValue={item?.descEn} textarea required />
            <Field
              label="Highlights (EN, one per line)"
              name="bulletsEn"
              defaultValue={item?.bulletsEn.join("\n")}
              textarea
            />
          </>
        }
      />
      <FormActions submitLabel="Salvar educação" hrefCancel="/admin/education" />
    </form>
  );
}
