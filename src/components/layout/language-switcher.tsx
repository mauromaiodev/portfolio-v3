"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const LOCALES = [
  { id: "pt", label: "PT" },
  { id: "en", label: "EN" },
] as const;

/**
 * Switches locale and persists the choice via next-intl cookie.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex rounded-lg border border-border bg-surface p-1"
    >
      {LOCALES.map((item) => {
        const active = locale === item.id;
        return (
          <Link
            key={item.id}
            href={pathname}
            locale={item.id}
            className={`inline-flex h-8 min-w-10 items-center justify-center rounded-md px-2 font-mono text-xs transition-colors ${
              active
                ? "bg-current-line text-pink"
                : "text-comment hover:text-foreground"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
