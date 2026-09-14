import { config } from "dotenv";
import { portfolioSeed } from "../content";
import { getDb } from "./index";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  skillItems,
  testimonials,
} from "./schema";

config({ path: ".env.local" });

/**
 * Replaces CMS tables with the bilingual seed from the previous portfolio.
 */
async function seed() {
  const db = getDb();
  if (!db) {
    throw new Error("DATABASE_URL missing. Check .env.local");
  }

  await db.delete(skillItems);
  await db.delete(skillGroups);
  await db.delete(experiences);
  await db.delete(education);
  await db.delete(projects);
  await db.delete(testimonials);
  await db.delete(profile);

  await db.insert(profile).values({
    name: portfolioSeed.profile.name,
    titlePt: portfolioSeed.profile.title.pt,
    titleEn: portfolioSeed.profile.title.en,
    bioPt: portfolioSeed.profile.bio.pt,
    bioEn: portfolioSeed.profile.bio.en,
    resumeUrl: portfolioSeed.profile.resumeUrl,
    email: portfolioSeed.profile.email,
    locationPt: portfolioSeed.profile.location.pt,
    locationEn: portfolioSeed.profile.location.en,
    githubUrl: portfolioSeed.profile.githubUrl,
    linkedinUrl: portfolioSeed.profile.linkedinUrl,
    instagramUrl: portfolioSeed.profile.instagramUrl,
    githubUserName: portfolioSeed.profile.githubUserName,
    seoTitle: portfolioSeed.profile.seoTitle,
    seoDescriptionPt: portfolioSeed.profile.seoDescription.pt,
    seoDescriptionEn: portfolioSeed.profile.seoDescription.en,
  });

  for (const [index, group] of portfolioSeed.skillGroups.entries()) {
    const [created] = await db
      .insert(skillGroups)
      .values({
        titlePt: group.title.pt,
        titleEn: group.title.en,
        highlightsPt: group.highlights.pt,
        highlightsEn: group.highlights.en,
        sortOrder: index,
      })
      .returning({ id: skillGroups.id });

    if (!created) continue;

    await db.insert(skillItems).values(
      group.items.map((item, itemIndex) => ({
        groupId: created.id,
        name: item.name,
        iconifyTag: item.iconifyTag,
        sortOrder: itemIndex,
      })),
    );
  }

  await db.insert(experiences).values(
    portfolioSeed.experiences.map((item, index) => ({
      rolePt: item.role.pt,
      roleEn: item.role.en,
      company: item.company,
      datePt: item.date.pt,
      dateEn: item.date.en,
      descPt: item.desc.pt,
      descEn: item.desc.en,
      sortOrder: index,
    })),
  );

  await db.insert(education).values(
    portfolioSeed.education.map((item, index) => ({
      school: item.school,
      subHeaderPt: item.subHeader.pt,
      subHeaderEn: item.subHeader.en,
      durationPt: item.duration.pt,
      durationEn: item.duration.en,
      descPt: item.desc.pt,
      descEn: item.desc.en,
      bulletsPt: item.bullets.pt,
      bulletsEn: item.bullets.en,
      sortOrder: index,
    })),
  );

  await db.insert(projects).values(
    portfolioSeed.projects.map((item, index) => ({
      name: item.name,
      descPt: item.desc.pt,
      descEn: item.desc.en,
      github: item.github,
      liveUrl: item.liveUrl,
      featured: item.featured,
      sortOrder: index,
    })),
  );

  await db.insert(testimonials).values(
    portfolioSeed.testimonials.map((item, index) => ({
      name: item.name,
      feedbackPt: item.feedback.pt,
      feedbackEn: item.feedback.en,
      sortOrder: index,
    })),
  );

  console.log("Seed complete.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
