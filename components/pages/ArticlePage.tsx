import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import ArticleCover from "@/components/writing/ArticleCover";
import LangLink from "@/components/LangLink";
import { articleBodies } from "@/content/articles";
import { articleBodiesFr } from "@/content/articles/fr";
import { alternates } from "@/lib/alternates";
import { getArticles } from "@/lib/content";
import { localeHref, t, type Locale } from "@/lib/i18n";

/** An article page, shared by /writing/<slug> and /fr/writing/<slug>. */
const bodies = { en: articleBodies, fr: articleBodiesFr };
const onSite = (locale: Locale) => getArticles(locale).filter((a) => !a.url && bodies[locale][a.slug]);

export const articleParams = () => onSite("en").map((a) => ({ slug: a.slug }));

export function articleMetadata(locale: Locale, slug: string): Metadata {
  const article = onSite(locale).find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Chukwuemeka Iheonye`,
    description: article.excerpt,
    alternates: alternates(locale, `/writing/${slug}`),
    openGraph: { title: article.title, description: article.excerpt, type: "article", locale: t(locale).ogLocale },
  };
}

export default function ArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const articles = onSite(locale);
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const d = t(locale).article;

  const Body = bodies[locale][article.slug];
  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];

  return (
    // data-paper switches the whole page (nav and footer included) to the warm paper palette, as on case studies
    <main id="main" tabIndex={-1} data-paper className="outline-none">
      <article>
        <header className="container-page pb-12 pt-28 md:pt-36">
          <Link
            href={localeHref(locale, "/writing")}
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Arrow
              direction="left"
              className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1"
            />{" "}
            {d.allWriting}
          </Link>

          <div className="mx-auto max-w-4xl">
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              <span className="text-accent">{article.tag}</span>
              <span aria-hidden="true">·</span>
              <time>{article.date}</time>
              <span aria-hidden="true">·</span>
              {article.readTime}
            </p>
            <h1 className="mt-6 font-serif text-[2.625rem] font-medium leading-[1.05] tracking-[-0.02em] md:text-6xl xl:text-[4.25rem]">
              {article.title}
            </h1>
            {/* Standfirst */}
            <p className="mt-6 max-w-3xl font-serif text-xl leading-snug text-muted md:text-2xl">{article.excerpt}</p>
            {d.translated && (
              <p className="mt-4 text-sm text-muted">
                {d.translated}{" "}
                <LangLink to="en" href={`/writing/${article.slug}`} className="link-grow text-ink">
                  {d.original}
                </LangLink>
              </p>
            )}
            {/* Byline, set between rules */}
            <div className="mt-10 flex items-center gap-3 border-y border-line py-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-mono text-xs font-medium text-onaccent"
              >
                CI
              </span>
              <p className="text-sm">
                <span className="block font-medium text-ink">Chukwuemeka Iheonye</span>
                <span className="text-muted">{d.role}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="container-page">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line">
            <ArticleCover slug={article.slug} decorative={false} locale={locale} className="block aspect-[16/9] w-full" />
          </div>
        </div>

        <div className="container-page py-16 md:py-24">
          <div className="prose-article mx-auto">
            <Body />
          </div>
        </div>
      </article>

      {/* About the author: a ruled sign-off, not a card */}
      <aside aria-label={d.aboutAuthor} className="container-page">
        <div className="mx-auto flex max-w-[68ch] flex-col gap-5 border-t-2 border-ink pt-6 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-medium text-onaccent"
          >
            CI
          </span>
          <div className="flex-1">
            <p className="font-serif text-xl font-medium">{d.writtenBy}</p>
            <p className="mt-1 text-muted">{d.bio}</p>
          </div>
          <Link href={localeHref(locale, "/#contact")} className="btn-primary group shrink-0">
            {d.workWithMe}
            <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>
      </aside>

      {/* Read next: serif headline beside its cover */}
      <nav aria-label={d.nextLabel} className="container-page py-16 md:py-24">
        <Link
          href={localeHref(locale, `/writing/${next.slug}`)}
          className="group mx-auto grid max-w-5xl gap-8 border-t-2 border-ink pt-8 md:grid-cols-[1fr_300px] md:items-center md:gap-12"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted">{d.readNext}</span>
            <span className="mt-4 block font-serif text-3xl font-medium leading-tight tracking-[-0.015em] transition-colors group-hover:text-accent md:text-5xl">
              {next.title}
            </span>
            <span className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-control transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:translate-x-1">
              <Arrow size={20} />
            </span>
          </span>
          <span className="hidden overflow-hidden rounded-2xl border border-line md:block">
            <ArticleCover
              slug={next.slug}
              className="block aspect-[4/3] h-full w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
            />
          </span>
        </Link>
      </nav>
    </main>
  );
}
