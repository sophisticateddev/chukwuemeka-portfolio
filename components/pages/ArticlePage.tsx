import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import FadeUp from "@/components/FadeUp";
import RevealWords from "@/components/RevealWords";
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
    <main id="main" tabIndex={-1} className="outline-none">
      <article>
        <header className="container-page pb-12 pt-28 md:pt-36">
          <Link
            href={localeHref(locale, "/#writing")}
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Arrow
              direction="left"
              className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1"
            />{" "}
            {d.allWriting}
          </Link>

          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <p className="eyebrow mt-10 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-accent">{article.tag}</span>
                <span aria-hidden="true">·</span>
                <time>{article.date}</time>
                <span aria-hidden="true">·</span>
                {article.readTime}
              </p>
            </FadeUp>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">
              <span className="sr-only">{article.title}</span>
              <span aria-hidden="true">
                <RevealWords text={article.title} trigger="mount" delay={0.05} />
              </span>
            </h1>
            <FadeUp delay={0.3}>
              <p className="mt-6 text-xl leading-relaxed text-muted">{article.excerpt}</p>
              {d.translated && (
                <p className="mt-4 text-sm text-muted">
                  {d.translated}{" "}
                  <LangLink to="en" href={`/writing/${article.slug}`} className="link-grow text-ink">
                    {d.original}
                  </LangLink>
                </p>
              )}
              <div className="mt-8 flex items-center gap-3">
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
            </FadeUp>
          </div>
        </header>

        <FadeUp delay={0.4} className="container-page">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line">
            <ArticleCover slug={article.slug} decorative={false} locale={locale} className="block aspect-[16/9] w-full" />
          </div>
        </FadeUp>

        <div className="container-page py-16 md:py-24">
          <div className="prose-article mx-auto">
            <Body />
          </div>
        </div>
      </article>

      <aside aria-label={d.aboutAuthor} className="container-page">
        <div className="mx-auto flex max-w-[68ch] flex-col gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-medium text-onaccent"
          >
            CI
          </span>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold">{d.writtenBy}</p>
            <p className="mt-1 text-muted">
              {d.bio}
            </p>
          </div>
          <Link href={localeHref(locale, "/#contact")} className="btn-primary group shrink-0">
            {d.workWithMe}
            <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>
      </aside>

      <nav aria-label={d.nextLabel} className="container-page py-16 md:py-24">
        <Link
          href={localeHref(locale, `/writing/${next.slug}`)}
          className="group mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 ease-out hover:border-control motion-safe:hover:-translate-y-1 md:grid-cols-[1fr_280px]"
        >
          <span className="flex flex-col justify-center p-8 md:p-10">
            <span className="eyebrow block">{d.readNext}</span>
            <span className="mt-3 block font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {next.title}
            </span>
            <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:-rotate-45">
              <Arrow />
            </span>
          </span>
          <span className="hidden overflow-hidden border-l border-line md:block">
            <ArticleCover
              slug={next.slug}
              className="h-full w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
            />
          </span>
        </Link>
      </nav>
    </main>
  );
}
