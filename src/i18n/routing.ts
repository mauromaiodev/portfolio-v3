import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "always",
  localeDetection: true,
});

export type AppLocale = (typeof routing.locales)[number];
