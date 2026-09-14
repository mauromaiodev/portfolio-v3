export type Localized = {
  pt: string;
  en: string;
};

export type ProfileSeed = {
  name: string;
  title: Localized;
  bio: Localized;
  resumeUrl: string;
  email: string;
  location: Localized;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUserName: string;
  seoTitle: string;
  seoDescription: Localized;
};

export type SkillItemSeed = {
  name: string;
  iconifyTag: string;
};

export type SkillGroupSeed = {
  title: Localized;
  highlights: { pt: string[]; en: string[] };
  items: SkillItemSeed[];
};

export type ExperienceSeed = {
  role: Localized;
  company: string;
  date: Localized;
  desc: Localized;
};

export type EducationSeed = {
  school: string;
  subHeader: Localized;
  duration: Localized;
  desc: Localized;
  bullets: { pt: string[]; en: string[] };
};

export type ProjectSeed = {
  name: string;
  desc: Localized;
  github?: string;
  liveUrl?: string;
  featured: boolean;
};

export type TestimonialSeed = {
  name: string;
  feedback: Localized;
};
