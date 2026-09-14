import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import { GithubIcon } from "@/components/ui/brand-icons";
import { t } from "@/lib/locale";
import type { ProjectRow } from "@/lib/portfolio-types";

type Props = {
  items: ProjectRow[];
  locale: string;
};

/**
 * Featured project cards plus a compact list of the rest.
 */
export async function ProjectsSection({ items, locale }: Props) {
  const copy = await getTranslations("projects");
  const featured = items.filter((item) => item.featured);
  const more = items.filter((item) => !item.featured);

  return (
    <Section id="projetos" kicker={copy("kicker")} title={copy("title")}>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((item, index) => (
          <article
            key={item.id}
            className="animate-enter flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-purple"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <h3 className="text-lg font-medium text-foreground">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-comment">
              {t(locale, item.descPt, item.descEn)}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {item.github ? (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm text-comment hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                  {copy("code")}
                </a>
              ) : null}
              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-current-line px-3 text-sm text-cyan"
                >
                  {copy("live")}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      {more.length > 0 ? (
        <div className="mt-12">
          <h3 className="font-mono text-sm text-comment">{copy("more")}</h3>
          <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
            {more.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-comment">
                    {t(locale, item.descPt, item.descEn)}
                  </p>
                </div>
                <div className="flex gap-3">
                  {item.github ? (
                    <a
                      href={item.github}
                      className="text-sm text-purple hover:text-pink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy("code")}
                    </a>
                  ) : null}
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      className="text-sm text-cyan hover:text-pink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy("live")}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
