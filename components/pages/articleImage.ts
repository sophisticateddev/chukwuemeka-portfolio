import { getArticles } from "@/lib/content";
import { articleImage } from "@/lib/og";
import type { Locale } from "@/lib/i18n";

/** Link preview for an article in either language: its title, tag and reading time. */
export function articleShareImage(locale: Locale, slug: string) {
  const article = getArticles(locale).find((a) => a.slug === slug);
  const fallback = locale === "fr" ? "Articles" : "Writing";
  return articleImage(article?.title ?? fallback, article ? `${article.tag} · ${article.readTime}` : fallback);
}

export const articleImageParams = () =>
  getArticles("en")
    .filter((a) => !a.url)
    .map((a) => ({ slug: a.slug }));
