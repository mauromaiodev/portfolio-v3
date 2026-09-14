import { eq } from "drizzle-orm";
import { portfolioSeed } from "@/content";
import { getDb } from "@/db";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  skillItems,
  testimonials,
} from "@/db/schema";
import { mapPortfolio } from "@/lib/mappers";
import type { Portfolio } from "@/lib/portfolio-types";

/**
 * Loads CMS content from Neon, falling back to the static seed.
 */
export async function getPortfolio(): Promise<Portfolio> {
  const db = getDb();
  if (!db) return mapPortfolio(portfolioSeed);

  try {
    const [profileRow] = await db.select().from(profile).limit(1);
    if (!profileRow) return mapPortfolio(portfolioSeed);

    const [groupRows, itemRows, experienceRows, educationRows, projectRows, testimonialRows] =
      await Promise.all([
        db.select().from(skillGroups).orderBy(skillGroups.sortOrder),
        db.select().from(skillItems).orderBy(skillItems.sortOrder),
        db.select().from(experiences).orderBy(experiences.sortOrder),
        db.select().from(education).orderBy(education.sortOrder),
        db.select().from(projects).orderBy(projects.sortOrder),
        db.select().from(testimonials).orderBy(testimonials.sortOrder),
      ]);

    return {
      profile: profileRow,
      skillGroups: groupRows.map((group) => ({
        ...group,
        items: itemRows.filter((item) => item.groupId === group.id),
      })),
      experiences: experienceRows,
      education: educationRows,
      projects: projectRows,
      testimonials: testimonialRows,
    };
  } catch {
    return mapPortfolio(portfolioSeed);
  }
}

export async function getProfileRow() {
  const db = requireDb();
  const [row] = await db.select().from(profile).limit(1);
  return row ?? null;
}

export function requireDb() {
  const db = getDb();
  if (!db) {
    throw new Error("DATABASE_URL is not configured.");
  }
  return db;
}

export async function getExperience(id: string) {
  const db = requireDb();
  const [row] = await db.select().from(experiences).where(eq(experiences.id, id));
  return row ?? null;
}

export async function getEducationItem(id: string) {
  const db = requireDb();
  const [row] = await db.select().from(education).where(eq(education.id, id));
  return row ?? null;
}

export async function getProject(id: string) {
  const db = requireDb();
  const [row] = await db.select().from(projects).where(eq(projects.id, id));
  return row ?? null;
}

export async function getSkillGroup(id: string) {
  const db = requireDb();
  const [row] = await db.select().from(skillGroups).where(eq(skillGroups.id, id));
  return row ?? null;
}

export async function getTestimonial(id: string) {
  const db = requireDb();
  const [row] = await db.select().from(testimonials).where(eq(testimonials.id, id));
  return row ?? null;
}
