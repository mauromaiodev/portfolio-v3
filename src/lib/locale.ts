/**
 * Picks the translated field for the active locale.
 */
export function t(locale: string, pt: string, en: string) {
  return locale === "en" ? en : pt;
}

export function tList(locale: string, pt: string[], en: string[]) {
  return locale === "en" ? en : pt;
}
