import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const NAV = [
  { href: "#sobre", key: "about" },
  { href: "#experiencia", key: "experience" },
  { href: "#projetos", key: "projects" },
  { href: "#contato", key: "contact" },
] as const;

/**
 * Sticky public navigation with language switcher.
 */
export async function SiteHeader() {
  const copy = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-pink focus:px-3 focus:py-2 focus:text-surface"
      >
        {copy("skip")}
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-mono text-sm tracking-tight text-purple">
          mauro.maio
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-comment transition-colors hover:text-foreground"
            >
              {copy(item.key)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
      <nav
        aria-label="Seções"
        className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-6 pb-3 md:hidden"
      >
        {NAV.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="whitespace-nowrap text-sm text-comment"
          >
            {copy(item.key)}
          </a>
        ))}
      </nav>
    </header>
  );
}
