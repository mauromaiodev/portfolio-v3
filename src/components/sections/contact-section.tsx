import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/brand-icons";
import type { ProfileRow } from "@/lib/portfolio-types";

type Props = {
  profile: ProfileRow;
};

/**
 * Contact block with social and email links.
 */
export async function ContactSection({ profile }: Props) {
  const copy = await getTranslations("contact");

  const links = [
    profile.email
      ? { href: `mailto:${profile.email}`, label: profile.email, icon: Mail }
      : null,
    profile.linkedinUrl
      ? { href: profile.linkedinUrl, label: "LinkedIn", icon: LinkedinIcon }
      : null,
    profile.githubUrl
      ? { href: profile.githubUrl, label: "GitHub", icon: GithubIcon }
      : null,
    profile.instagramUrl
      ? { href: profile.instagramUrl, label: "Instagram", icon: InstagramIcon }
      : null,
  ].filter(Boolean) as { href: string; label: string; icon: typeof Mail }[];

  return (
    <Section id="contato" kicker={copy("kicker")} title={copy("title")}>
      <p className="max-w-2xl text-lg leading-8 text-comment">{copy("body")}</p>
      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm text-foreground transition-colors hover:border-pink"
              >
                <Icon className="size-4 text-pink" aria-hidden />
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
