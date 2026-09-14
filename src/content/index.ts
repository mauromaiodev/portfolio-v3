import { educationSeed } from "./education";
import { experiencesSeed } from "./experiences";
import { profileSeed } from "./profile";
import { projectsSeed } from "./projects";
import { skillGroupsSeed } from "./skills";
import { testimonialsSeed } from "./testimonials";

export const portfolioSeed = {
  profile: profileSeed,
  skillGroups: skillGroupsSeed,
  experiences: experiencesSeed,
  education: educationSeed,
  projects: projectsSeed,
  testimonials: testimonialsSeed,
};

export * from "./types";
