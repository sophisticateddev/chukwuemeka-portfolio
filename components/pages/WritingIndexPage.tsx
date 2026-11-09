import type { Metadata } from "next";
import Writing from "@/components/Writing";
import { alternates } from "@/lib/alternates";
import { getArticles } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/** Every article, shared by /writing and /fr/writing. */
export function writingIndexMetadata(locale: Locale): Metadata {
  const d = t(locale).writing;
  return {
    title: `${d.label} — Chukwuemeka Iheonye`,
    description: d.intro,
    alternates: alternates(locale, "/writing"),
  };
}

export default function WritingIndexPage({ locale }: { locale: Locale }) {
  return (
    <main id="main" tabIndex={-1} className="pt-8 outline-none">
      <Writing items={getArticles(locale)} page />
    </main>
  );
}
