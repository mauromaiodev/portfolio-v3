import { getTranslations } from "next-intl/server";
import { Section } from "@/components/sections/section";
import { t } from "@/lib/locale";
import type { TestimonialRow } from "@/lib/portfolio-types";

type Props = {
  items: TestimonialRow[];
  locale: string;
};

/**
 * Social-proof quotes from colleagues.
 */
export async function TestimonialsSection({ items, locale }: Props) {
  const copy = await getTranslations("testimonials");

  return (
    <Section id="depoimentos" kicker={copy("kicker")} title={copy("title")}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <blockquote
            key={item.id}
            className="animate-enter rounded-xl border border-border bg-surface p-6"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p className="text-sm leading-7 text-comment">
              “{t(locale, item.feedbackPt, item.feedbackEn)}”
            </p>
            <footer className="mt-4 font-mono text-sm text-green">
              {item.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
