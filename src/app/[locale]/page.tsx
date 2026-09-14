import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { getPortfolio } from "@/db/queries";
import { getGithubProfile } from "@/lib/github";
import { t } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = await getTranslations({ locale, namespace: "meta" });
  const data = await getPortfolio();

  return {
    title: copy("title"),
    description: t(
      locale,
      data.profile.seoDescriptionPt ?? copy("description"),
      data.profile.seoDescriptionEn ?? copy("description"),
    ),
    authors: [{ name: data.profile.name }],
    openGraph: {
      title: copy("title"),
      description: copy("description"),
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await getPortfolio();
  const github = data.profile.githubUserName
    ? await getGithubProfile(data.profile.githubUserName)
    : null;

  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="mx-auto w-full max-w-5xl px-6">
        <HeroSection profile={data.profile} github={github} locale={locale} />
        <SkillsSection groups={data.skillGroups} locale={locale} />
        <ExperienceSection items={data.experiences} locale={locale} />
        <ProjectsSection items={data.projects} locale={locale} />
        <EducationSection items={data.education} locale={locale} />
        <TestimonialsSection items={data.testimonials} locale={locale} />
        <ContactSection profile={data.profile} />
      </main>
      <SiteFooter name={data.profile.name} />
    </>
  );
}
