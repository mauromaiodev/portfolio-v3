import { saveProjectAction } from "@/app/admin/actions";
import { Field } from "@/components/admin/field";
import { FormActions } from "@/components/admin/form-actions";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { ProjectRow } from "@/lib/portfolio-types";

export function ProjectForm({ item }: { item?: ProjectRow }) {
  const action = saveProjectAction.bind(null, item?.id ?? null);

  return (
    <form action={action} className="max-w-3xl space-y-6">
      <Field label="Nome" name="name" defaultValue={item?.name} required />
      <Field label="GitHub" name="github" defaultValue={item?.github} />
      <Field label="Demo" name="liveUrl" defaultValue={item?.liveUrl} />
      <Field label="Ordem" name="sortOrder" type="number" defaultValue={item?.sortOrder ?? 0} />
      <label className="flex items-center gap-2 text-sm text-comment">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={item?.featured}
          className="size-4 accent-pink"
        />
        Destaque na home
      </label>
      <LocaleTabs
        pt={
          <Field label="Descrição (PT)" name="descPt" defaultValue={item?.descPt} textarea required />
        }
        en={
          <Field label="Description (EN)" name="descEn" defaultValue={item?.descEn} textarea required />
        }
      />
      <FormActions submitLabel="Salvar projeto" hrefCancel="/admin/projects" />
    </form>
  );
}
