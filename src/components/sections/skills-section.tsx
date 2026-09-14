import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import { SkillIcon } from "@/components/ui/skill-icon";
import { t, tList } from "@/lib/locale";
import type { SkillGroupWithItems } from "@/lib/portfolio-types";

type Props = {
  groups: SkillGroupWithItems[];
  locale: string;
};

/**
 * Skill groups with highlights and Iconify stack.
 */
export async function SkillsSection({ groups, locale }: Props) {
  const copy = await getTranslations("skills");

  return (
    <Section id="sobre" kicker={copy("kicker")} title={t(locale, "O que eu faço", "What I do")}>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group, index) => {
          const highlights = tList(locale, group.highlightsPt, group.highlightsEn);
          return (
            <article
              key={group.id}
              className="animate-enter rounded-xl border border-border bg-surface p-6"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3 className="text-lg font-medium text-cyan">
                {t(locale, group.titlePt, group.titleEn)}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-comment">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green" aria-hidden>
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.id}
                    title={item.name}
                    className="flex size-12 items-center justify-center rounded-lg border border-border bg-surface-2"
                  >
                    <SkillIcon tag={item.iconifyTag} label={item.name} />
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
