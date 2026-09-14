import { getTranslations } from "next-intl/server";

/**
 * Compact footer with a Dracula credit line.
 */
export async function SiteFooter({ name }: { name: string }) {
  const copy = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-8 w-full max-w-5xl border-t border-border px-6 py-10 text-sm text-comment">
      <p>
        © {year} {name}. {copy("rights")}
      </p>
    </footer>
  );
}
