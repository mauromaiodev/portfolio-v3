import type { InferSelectModel } from "drizzle-orm";
import type {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  skillItems,
  testimonials,
} from "@/db/schema";

export type ProfileRow = InferSelectModel<typeof profile>;
export type SkillGroupRow = InferSelectModel<typeof skillGroups>;
export type SkillItemRow = InferSelectModel<typeof skillItems>;
export type ExperienceRow = InferSelectModel<typeof experiences>;
export type EducationRow = InferSelectModel<typeof education>;
export type ProjectRow = InferSelectModel<typeof projects>;
export type TestimonialRow = InferSelectModel<typeof testimonials>;

export type SkillGroupWithItems = SkillGroupRow & { items: SkillItemRow[] };

export type Portfolio = {
  profile: ProfileRow;
  skillGroups: SkillGroupWithItems[];
  experiences: ExperienceRow[];
  education: EducationRow[];
  projects: ProjectRow[];
  testimonials: TestimonialRow[];
};
