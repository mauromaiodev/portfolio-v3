import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const profile = pgTable("profile", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  titlePt: text("title_pt").notNull(),
  titleEn: text("title_en").notNull(),
  bioPt: text("bio_pt").notNull(),
  bioEn: text("bio_en").notNull(),
  resumeUrl: text("resume_url"),
  email: text("email"),
  locationPt: text("location_pt"),
  locationEn: text("location_en"),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  instagramUrl: text("instagram_url"),
  githubUserName: text("github_user_name"),
  seoTitle: text("seo_title"),
  seoDescriptionPt: text("seo_description_pt"),
  seoDescriptionEn: text("seo_description_en"),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const skillGroups = pgTable("skill_groups", {
  id: uuid("id").primaryKey().defaultRandom(),
  titlePt: text("title_pt").notNull(),
  titleEn: text("title_en").notNull(),
  highlightsPt: jsonb("highlights_pt").$type<string[]>().notNull().default([]),
  highlightsEn: jsonb("highlights_en").$type<string[]>().notNull().default([]),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const skillItems = pgTable("skill_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  groupId: uuid("group_id")
    .notNull()
    .references(() => skillGroups.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  iconifyTag: text("iconify_tag").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const experiences = pgTable("experiences", {
  id: uuid("id").primaryKey().defaultRandom(),
  rolePt: text("role_pt").notNull(),
  roleEn: text("role_en").notNull(),
  company: text("company").notNull(),
  companyLogo: text("company_logo"),
  datePt: text("date_pt").notNull(),
  dateEn: text("date_en").notNull(),
  descPt: text("desc_pt").notNull(),
  descEn: text("desc_en").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const education = pgTable("education", {
  id: uuid("id").primaryKey().defaultRandom(),
  school: text("school").notNull(),
  subHeaderPt: text("sub_header_pt").notNull(),
  subHeaderEn: text("sub_header_en").notNull(),
  durationPt: text("duration_pt").notNull(),
  durationEn: text("duration_en").notNull(),
  descPt: text("desc_pt").notNull(),
  descEn: text("desc_en").notNull(),
  bulletsPt: jsonb("bullets_pt").$type<string[]>().notNull().default([]),
  bulletsEn: jsonb("bullets_en").$type<string[]>().notNull().default([]),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  descPt: text("desc_pt").notNull(),
  descEn: text("desc_en").notNull(),
  github: text("github"),
  liveUrl: text("live_url"),
  imageUrl: text("image_url"),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  feedbackPt: text("feedback_pt").notNull(),
  feedbackEn: text("feedback_en").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});
