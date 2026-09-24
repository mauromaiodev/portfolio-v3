import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import { t, tList } from "@/lib/locale";
import type { EducationRow } from "@/lib/portfolio-types";

type Props = {
  items: EducationRow[];
  locale: string;
};

/**
 * Education cards with bullet highlights.
 */
export async function EducationSection({ items, locale }: Props) {
  const copy = await getTranslations("education");

  return (
    <Section id="educacao" kicker={copy("kicker")} title={copy("title")}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => {
          const bullets = tList(locale, item.bulletsPt, item.bulletsEn);
          return (
            <article
              key={item.id}
              className="animate-enter rounded-xl border border-border bg-surface p-6"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <p className="font-mono text-xs text-comment">
                {t(locale, item.durationPt, item.durationEn)}
              </p>
              <h3 className="mt-2 text-lg font-medium">{item.school}</h3>
              <p className="mt-1 text-sm text-purple">
                {t(locale, item.subHeaderPt, item.subHeaderEn)}
              </p>
              <p className="mt-3 text-sm leading-6 text-comment">
                {t(locale, item.descPt, item.descEn)}
              </p>
              {bullets.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm text-comment">
                  {bullets.map((bullet) => (
                    <li key={bullet}>— {bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
