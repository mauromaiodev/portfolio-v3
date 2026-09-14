import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import type { GithubProfile } from "@/lib/github";
import { t } from "@/lib/locale";
import type { ProfileRow } from "@/lib/portfolio-types";

type Props = {
  profile: ProfileRow;
  github: GithubProfile | null;
  locale: string;
};

/**
 * Hero with identity, CTAs, and optional GitHub snapshot.
 */
export async function HeroSection({ profile, github, locale }: Props) {
  const copy = await getTranslations("hero");
  const githubCopy = await getTranslations("github");
  const title = t(locale, profile.titlePt, profile.titleEn);
  const bio = t(locale, profile.bioPt, profile.bioEn);
  const location = t(
    locale,
    profile.locationPt ?? "",
    profile.locationEn ?? "",
  );

  return (
    <section className="grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr] md:items-center md:py-24">
      <div className="animate-enter">
        <p className="font-mono text-sm text-cyan">{title}</p>
        <h1 className="mt-4 bg-gradient-to-r from-foreground via-purple to-pink bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {profile.name}
        </h1>
        {location ? (
          <p className="mt-3 font-mono text-sm text-comment">{location}</p>
        ) : null}
        <p className="mt-6 max-w-xl text-lg leading-8 text-comment">{bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-pink px-5 font-medium text-surface transition-transform hover:-translate-y-0.5"
            >
              {copy("ctaResume")}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : null}
          <a
            href="#contato"
            className="inline-flex h-12 items-center rounded-lg border border-border-strong bg-surface px-5 font-medium text-foreground transition-colors hover:border-purple"
          >
            {copy("ctaContact")}
          </a>
        </div>
      </div>
      {github ? (
        <aside
          className="animate-enter rounded-xl border border-border bg-surface p-6"
          style={{ animationDelay: "80ms" }}
        >
          <Image
            src={github.avatar_url}
            alt={github.name ?? github.login}
            width={88}
            height={88}
            unoptimized
            className="rounded-xl border border-border"
          />
          <p className="mt-4 font-medium">{github.name ?? github.login}</p>
          <p className="mt-1 font-mono text-sm text-purple">@{github.login}</p>
          {github.bio ? (
            <p className="mt-3 text-sm leading-6 text-comment">{github.bio}</p>
          ) : null}
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-comment">{githubCopy("repos")}</dt>
              <dd className="mt-1 font-mono text-green">{github.public_repos}</dd>
            </div>
            <div>
              <dt className="text-comment">{githubCopy("followers")}</dt>
              <dd className="mt-1 font-mono text-green">{github.followers}</dd>
            </div>
          </dl>
        </aside>
      ) : null}
    </section>
  );
}
