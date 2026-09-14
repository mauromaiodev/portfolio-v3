"use client";

import { useState } from "react";
import { saveSkillGroupAction } from "@/app/admin/actions";
import { Field } from "@/components/admin/field";
import { FormActions } from "@/components/admin/form-actions";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { SkillGroupWithItems } from "@/lib/portfolio-types";

type ItemDraft = { name: string; iconifyTag: string };

export function SkillGroupForm({ item }: { item?: SkillGroupWithItems }) {
  const action = saveSkillGroupAction.bind(null, item?.id ?? null);
  const [rows, setRows] = useState<ItemDraft[]>(
    item?.items.map((skill) => ({ name: skill.name, iconifyTag: skill.iconifyTag })) ?? [
      { name: "", iconifyTag: "" },
    ],
  );

  return (
    <form action={action} className="max-w-3xl space-y-6">
      <Field label="Ordem" name="sortOrder" type="number" defaultValue={item?.sortOrder ?? 0} />
      <LocaleTabs
        pt={
          <>
            <Field label="Título (PT)" name="titlePt" defaultValue={item?.titlePt} required />
            <Field
              label="Highlights (PT, um por linha)"
              name="highlightsPt"
              defaultValue={item?.highlightsPt.join("\n")}
              textarea
            />
          </>
        }
        en={
          <>
            <Field label="Title (EN)" name="titleEn" defaultValue={item?.titleEn} required />
            <Field
              label="Highlights (EN, one per line)"
              name="highlightsEn"
              defaultValue={item?.highlightsEn.join("\n")}
              textarea
            />
          </>
        }
      />
      <fieldset className="rounded-xl border border-border p-4">
        <legend className="px-2 text-sm text-comment">Ícones (Iconify tag)</legend>
        <div className="space-y-3">
          {rows.map((row, index) => (
            <div key={index} className="grid gap-3 md:grid-cols-2">
              <input
                name="itemName"
                defaultValue={row.name}
                placeholder="Nome"
                className="h-11 rounded-lg border border-border bg-surface px-3 text-sm"
              />
              <input
                name="itemIcon"
                defaultValue={row.iconifyTag}
                placeholder="devicon:typescript"
                className="h-11 rounded-lg border border-border bg-surface px-3 text-sm"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setRows((current) => [...current, { name: "", iconifyTag: "" }])}
          className="mt-4 text-sm text-cyan"
        >
          Adicionar ícone
        </button>
      </fieldset>
      <FormActions submitLabel="Salvar grupo" hrefCancel="/admin/skills" />
    </form>
  );
}
