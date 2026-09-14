import { FormActions } from "@/components/admin/form-actions";
import { Field } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { saveProfileAction } from "@/app/admin/actions";
import type { ProfileRow } from "@/lib/portfolio-types";

export function ProfileForm({ profile }: { profile: ProfileRow | null }) {
  return (
    <form action={saveProfileAction} className="max-w-3xl space-y-6">
      <Field label="Nome" name="name" defaultValue={profile?.name} required />
      <LocaleTabs
        pt={
          <>
            <Field label="Título (PT)" name="titlePt" defaultValue={profile?.titlePt} required />
            <Field label="Bio (PT)" name="bioPt" defaultValue={profile?.bioPt} textarea required />
            <Field label="Local (PT)" name="locationPt" defaultValue={profile?.locationPt} />
            <Field
              label="SEO description (PT)"
              name="seoDescriptionPt"
              defaultValue={profile?.seoDescriptionPt}
              textarea
              rows={3}
              required
            />
          </>
        }
        en={
          <>
            <Field label="Title (EN)" name="titleEn" defaultValue={profile?.titleEn} required />
            <Field label="Bio (EN)" name="bioEn" defaultValue={profile?.bioEn} textarea required />
            <Field label="Location (EN)" name="locationEn" defaultValue={profile?.locationEn} />
            <Field
              label="SEO description (EN)"
              name="seoDescriptionEn"
              defaultValue={profile?.seoDescriptionEn}
              textarea
              rows={3}
              required
            />
          </>
        }
      />
      <Field label="SEO title" name="seoTitle" defaultValue={profile?.seoTitle} required />
      <Field label="E-mail" name="email" type="email" defaultValue={profile?.email} />
      <Field label="Currículo (URL)" name="resumeUrl" defaultValue={profile?.resumeUrl} />
      <Field label="GitHub username" name="githubUserName" defaultValue={profile?.githubUserName} required />
      <Field label="GitHub URL" name="githubUrl" defaultValue={profile?.githubUrl} />
      <Field label="LinkedIn URL" name="linkedinUrl" defaultValue={profile?.linkedinUrl} />
      <Field label="Instagram URL" name="instagramUrl" defaultValue={profile?.instagramUrl} />
      <FormActions submitLabel="Salvar perfil" />
    </form>
  );
}
