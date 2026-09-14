import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2),
  titlePt: z.string().min(2),
  titleEn: z.string().min(2),
  bioPt: z.string().min(10),
  bioEn: z.string().min(10),
  resumeUrl: z.string().url().nullable(),
  email: z.string().email().nullable(),
  locationPt: z.string().nullable(),
  locationEn: z.string().nullable(),
  githubUrl: z.string().url().nullable(),
  linkedinUrl: z.string().url().nullable(),
  instagramUrl: z.string().url().nullable(),
  githubUserName: z.string().min(1),
  seoTitle: z.string().min(2),
  seoDescriptionPt: z.string().min(8),
  seoDescriptionEn: z.string().min(8),
});

export const experienceSchema = z.object({
  rolePt: z.string().min(2),
  roleEn: z.string().min(2),
  company: z.string().min(2),
  datePt: z.string().min(2),
  dateEn: z.string().min(2),
  descPt: z.string().min(8),
  descEn: z.string().min(8),
  sortOrder: z.number().int(),
});

export const educationSchema = z.object({
  school: z.string().min(2),
  subHeaderPt: z.string().min(2),
  subHeaderEn: z.string().min(2),
  durationPt: z.string().min(2),
  durationEn: z.string().min(2),
  descPt: z.string().min(8),
  descEn: z.string().min(8),
  bulletsPt: z.array(z.string()),
  bulletsEn: z.array(z.string()),
  sortOrder: z.number().int(),
});

export const projectSchema = z.object({
  name: z.string().min(2),
  descPt: z.string().min(8),
  descEn: z.string().min(8),
  github: z.string().url().nullable(),
  liveUrl: z.string().url().nullable(),
  featured: z.boolean(),
  sortOrder: z.number().int(),
});

export const skillGroupSchema = z.object({
  titlePt: z.string().min(2),
  titleEn: z.string().min(2),
  highlightsPt: z.array(z.string()),
  highlightsEn: z.array(z.string()),
  sortOrder: z.number().int(),
  items: z.array(
    z.object({
      name: z.string().min(1),
      iconifyTag: z.string().min(1),
    }),
  ),
});

export const testimonialSchema = z.object({
  name: z.string().min(2),
  feedbackPt: z.string().min(8),
  feedbackEn: z.string().min(8),
  sortOrder: z.number().int(),
});
