import type { portfolioSeed } from "@/content";
import type { Portfolio } from "@/lib/portfolio-types";

type Seed = typeof portfolioSeed;

/**
 * Maps static seed data into the same shape returned by Neon queries.
 */
export function mapPortfolio(seed: Seed): Portfolio {
  return {
    profile: {
      id: "seed-profile",
      name: seed.profile.name,
      titlePt: seed.profile.title.pt,
      titleEn: seed.profile.title.en,
      bioPt: seed.profile.bio.pt,
      bioEn: seed.profile.bio.en,
      resumeUrl: seed.profile.resumeUrl,
      email: seed.profile.email,
      locationPt: seed.profile.location.pt,
      locationEn: seed.profile.location.en,
      githubUrl: seed.profile.githubUrl,
      linkedinUrl: seed.profile.linkedinUrl,
      instagramUrl: seed.profile.instagramUrl,
      githubUserName: seed.profile.githubUserName,
      seoTitle: seed.profile.seoTitle,
      seoDescriptionPt: seed.profile.seoDescription.pt,
      seoDescriptionEn: seed.profile.seoDescription.en,
      updatedAt: new Date(0),
    },
    skillGroups: seed.skillGroups.map((group, index) => ({
      id: `seed-skill-${index}`,
      titlePt: group.title.pt,
      titleEn: group.title.en,
      highlightsPt: group.highlights.pt,
      highlightsEn: group.highlights.en,
      sortOrder: index,
      items: group.items.map((item, itemIndex) => ({
        id: `seed-skill-item-${index}-${itemIndex}`,
        groupId: `seed-skill-${index}`,
        name: item.name,
        iconifyTag: item.iconifyTag,
        sortOrder: itemIndex,
      })),
    })),
    experiences: seed.experiences.map((item, index) => ({
      id: `seed-exp-${index}`,
      rolePt: item.role.pt,
      roleEn: item.role.en,
      company: item.company,
      companyLogo: null,
      datePt: item.date.pt,
      dateEn: item.date.en,
      descPt: item.desc.pt,
      descEn: item.desc.en,
      sortOrder: index,
    })),
    education: seed.education.map((item, index) => ({
      id: `seed-edu-${index}`,
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
    projects: seed.projects.map((item, index) => ({
      id: `seed-proj-${index}`,
      name: item.name,
      descPt: item.desc.pt,
      descEn: item.desc.en,
      github: item.github ?? null,
      liveUrl: item.liveUrl ?? null,
      imageUrl: null,
      featured: item.featured,
      sortOrder: index,
    })),
    testimonials: seed.testimonials.map((item, index) => ({
      id: `seed-test-${index}`,
      name: item.name,
      feedbackPt: item.feedback.pt,
      feedbackEn: item.feedback.en,
      sortOrder: index,
    })),
  };
}
