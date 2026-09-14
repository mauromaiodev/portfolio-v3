"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getPortfolio, getProfileRow, requireDb } from "@/db/queries";
import { education, experiences, profile, projects, skillGroups, skillItems, testimonials } from "@/db/schema";
import { field, intField, lines, optionalUrl } from "@/lib/form";
import { requireAdmin } from "@/lib/require-admin";
import {
  educationSchema,
  experienceSchema,
  profileSchema,
  projectSchema,
  skillGroupSchema,
  testimonialSchema,
} from "@/schemas/cms";

function refreshPublic() {
  revalidatePath("/", "layout");
  revalidatePath("/en");
}

export async function saveProfileAction(formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const existing = await getProfileRow();
  const data = profileSchema.parse({
    name: field(formData, "name"),
    titlePt: field(formData, "titlePt"),
    titleEn: field(formData, "titleEn"),
    bioPt: field(formData, "bioPt"),
    bioEn: field(formData, "bioEn"),
    resumeUrl: optionalUrl(field(formData, "resumeUrl")),
    email: optionalUrl(field(formData, "email")),
    locationPt: optionalUrl(field(formData, "locationPt")),
    locationEn: optionalUrl(field(formData, "locationEn")),
    githubUrl: optionalUrl(field(formData, "githubUrl")),
    linkedinUrl: optionalUrl(field(formData, "linkedinUrl")),
    instagramUrl: optionalUrl(field(formData, "instagramUrl")),
    githubUserName: field(formData, "githubUserName"),
    seoTitle: field(formData, "seoTitle"),
    seoDescriptionPt: field(formData, "seoDescriptionPt"),
    seoDescriptionEn: field(formData, "seoDescriptionEn"),
  });

  if (existing) {
    await db
      .update(profile)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(profile.id, existing.id));
  } else {
    await db.insert(profile).values(data);
  }

  refreshPublic();
  redirect("/admin/profile");
}

export async function saveExperienceAction(id: string | null, formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const data = experienceSchema.parse({
    rolePt: field(formData, "rolePt"),
    roleEn: field(formData, "roleEn"),
    company: field(formData, "company"),
    datePt: field(formData, "datePt"),
    dateEn: field(formData, "dateEn"),
    descPt: field(formData, "descPt"),
    descEn: field(formData, "descEn"),
    sortOrder: intField(formData, "sortOrder"),
  });

  if (id) {
    await db.update(experiences).set(data).where(eq(experiences.id, id));
  } else {
    await db.insert(experiences).values(data);
  }

  refreshPublic();
  redirect("/admin/experiences");
}

export async function deleteExperienceAction(id: string) {
  await requireAdmin();
  await requireDb().delete(experiences).where(eq(experiences.id, id));
  refreshPublic();
  redirect("/admin/experiences");
}

export async function saveEducationAction(id: string | null, formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const data = educationSchema.parse({
    school: field(formData, "school"),
    subHeaderPt: field(formData, "subHeaderPt"),
    subHeaderEn: field(formData, "subHeaderEn"),
    durationPt: field(formData, "durationPt"),
    durationEn: field(formData, "durationEn"),
    descPt: field(formData, "descPt"),
    descEn: field(formData, "descEn"),
    bulletsPt: lines(field(formData, "bulletsPt")),
    bulletsEn: lines(field(formData, "bulletsEn")),
    sortOrder: intField(formData, "sortOrder"),
  });

  if (id) {
    await db.update(education).set(data).where(eq(education.id, id));
  } else {
    await db.insert(education).values(data);
  }

  refreshPublic();
  redirect("/admin/education");
}

export async function deleteEducationAction(id: string) {
  await requireAdmin();
  await requireDb().delete(education).where(eq(education.id, id));
  refreshPublic();
  redirect("/admin/education");
}

export async function saveProjectAction(id: string | null, formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const data = projectSchema.parse({
    name: field(formData, "name"),
    descPt: field(formData, "descPt"),
    descEn: field(formData, "descEn"),
    github: optionalUrl(field(formData, "github")),
    liveUrl: optionalUrl(field(formData, "liveUrl")),
    featured: formData.get("featured") === "on",
    sortOrder: intField(formData, "sortOrder"),
  });

  if (id) {
    await db.update(projects).set(data).where(eq(projects.id, id));
  } else {
    await db.insert(projects).values(data);
  }

  refreshPublic();
  redirect("/admin/projects");
}

export async function deleteProjectAction(id: string) {
  await requireAdmin();
  await requireDb().delete(projects).where(eq(projects.id, id));
  refreshPublic();
  redirect("/admin/projects");
}

export async function saveTestimonialAction(id: string | null, formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const data = testimonialSchema.parse({
    name: field(formData, "name"),
    feedbackPt: field(formData, "feedbackPt"),
    feedbackEn: field(formData, "feedbackEn"),
    sortOrder: intField(formData, "sortOrder"),
  });

  if (id) {
    await db.update(testimonials).set(data).where(eq(testimonials.id, id));
  } else {
    await db.insert(testimonials).values(data);
  }

  refreshPublic();
  redirect("/admin/testimonials");
}

export async function deleteTestimonialAction(id: string) {
  await requireAdmin();
  await requireDb().delete(testimonials).where(eq(testimonials.id, id));
  refreshPublic();
  redirect("/admin/testimonials");
}

export async function saveSkillGroupAction(id: string | null, formData: FormData) {
  await requireAdmin();
  const db = requireDb();
  const names = formData.getAll("itemName").map((value) => String(value).trim());
  const icons = formData.getAll("itemIcon").map((value) => String(value).trim());
  const items = names
    .map((name, index) => ({ name, iconifyTag: icons[index] ?? "" }))
    .filter((item) => item.name && item.iconifyTag);

  const data = skillGroupSchema.parse({
    titlePt: field(formData, "titlePt"),
    titleEn: field(formData, "titleEn"),
    highlightsPt: lines(field(formData, "highlightsPt")),
    highlightsEn: lines(field(formData, "highlightsEn")),
    sortOrder: intField(formData, "sortOrder"),
    items,
  });

  if (id) {
    await db
      .update(skillGroups)
      .set({
        titlePt: data.titlePt,
        titleEn: data.titleEn,
        highlightsPt: data.highlightsPt,
        highlightsEn: data.highlightsEn,
        sortOrder: data.sortOrder,
      })
      .where(eq(skillGroups.id, id));
    await db.delete(skillItems).where(eq(skillItems.groupId, id));
    if (data.items.length) {
      await db.insert(skillItems).values(
        data.items.map((item, index) => ({
          groupId: id,
          name: item.name,
          iconifyTag: item.iconifyTag,
          sortOrder: index,
        })),
      );
    }
  } else {
    const [created] = await db
      .insert(skillGroups)
      .values({
        titlePt: data.titlePt,
        titleEn: data.titleEn,
        highlightsPt: data.highlightsPt,
        highlightsEn: data.highlightsEn,
        sortOrder: data.sortOrder,
      })
      .returning({ id: skillGroups.id });
    if (created && data.items.length) {
      await db.insert(skillItems).values(
        data.items.map((item, index) => ({
          groupId: created.id,
          name: item.name,
          iconifyTag: item.iconifyTag,
          sortOrder: index,
        })),
      );
    }
  }

  refreshPublic();
  redirect("/admin/skills");
}

export async function deleteSkillGroupAction(id: string) {
  await requireAdmin();
  await requireDb().delete(skillGroups).where(eq(skillGroups.id, id));
  refreshPublic();
  redirect("/admin/skills");
}

export async function getAdminCounts() {
  const data = await getPortfolio();
  return {
    experiences: data.experiences.length,
    education: data.education.length,
    projects: data.projects.length,
    skills: data.skillGroups.length,
    testimonials: data.testimonials.length,
  };
}
