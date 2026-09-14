import { routing } from "@/i18n/routing";

export default function sitemap() {
  const base = process.env.AUTH_URL ?? "https://mauromaio.vercel.app";

  return routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        pt: `${base}/pt`,
        en: `${base}/en`,
      },
    },
  }));
}
