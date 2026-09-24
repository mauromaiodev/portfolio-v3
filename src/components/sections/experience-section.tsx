import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import { t } from "@/lib/locale";
import type { ExperienceRow } from "@/lib/portfolio-types";

type Props = {
  items: ExperienceRow[];
  locale: string;
};

/**
 * Career timeline with Dracula surfaces.
 */
export async function ExperienceSection({ items, locale }: Props) {
  const copy = await getTranslations("experience");

  return (
    <Section id="experiencia" kicker={copy("kicker")} title={copy("title")}>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="animate-enter"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <span
              className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-pink"
              aria-hidden
            />
            <p className="font-mono text-xs text-comment">
              {t(locale, item.datePt, item.dateEn)}
            </p>
            <h3 className="mt-2 text-lg font-medium">
              {t(locale, item.rolePt, item.roleEn)}
            </h3>
            <p className="mt-1 text-sm text-purple">{item.company}</p>
            <p className="mt-3 max-w-3xl whitespace-pre-line text-sm leading-7 text-comment">
              {t(locale, item.descPt, item.descEn)}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
