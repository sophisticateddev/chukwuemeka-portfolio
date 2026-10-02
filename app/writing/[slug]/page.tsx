import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import FadeUp from "@/components/FadeUp";
import RevealWords from "@/components/RevealWords";
import ArticleCover from "@/components/writing/ArticleCover";
import { articles } from "@/lib/data";
import { articleBodies } from "@/content/articles";

interface Props {
  params: { slug: string };
}

const onSite = articles.filter((a) => !a.url && articleBodies[a.slug]);

export function generateStaticParams() {
  return onSite.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = onSite.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Chukwuemeka Iheonye`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = onSite.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const Body = articleBodies[article.slug];
  const index = onSite.indexOf(article);
  const next = onSite[(index + 1) % onSite.length];

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <article>
        <header className="container-page pb-12 pt-28 md:pt-36">
          <Link
            href="/#writing"
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Arrow
              direction="left"
              className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1"
            />{" "}
            All writing
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
              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-mono text-xs font-medium text-onaccent"
                >
                  CI
                </span>
                <p className="text-sm">
                  <span className="block font-medium text-ink">Chukwuemeka Iheonye</span>
                  <span className="text-muted">Product Designer</span>
                </p>
              </div>
            </FadeUp>
          </div>
        </header>

        <FadeUp delay={0.4} className="container-page">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line">
            <ArticleCover slug={article.slug} decorative={false} className="block aspect-[16/9] w-full" />
          </div>
        </FadeUp>

        <div className="container-page py-16 md:py-24">
          <div className="prose-article mx-auto">
            <Body />
          </div>
        </div>
      </article>

      <aside aria-label="About the author" className="container-page">
        <div className="mx-auto flex max-w-[68ch] flex-col gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-medium text-onaccent"
          >
            CI
          </span>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold">Written by Chukwuemeka Iheonye</p>
            <p className="mt-1 text-muted">
              Product Designer in Nottingham. I design products, then build them with AI.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary group shrink-0">
            Work with me
            <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>
      </aside>

      <nav aria-label="Next article" className="container-page py-16 md:py-24">
        <Link
          href={`/writing/${next.slug}`}
          className="group mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 ease-out hover:border-control motion-safe:hover:-translate-y-1 md:grid-cols-[1fr_280px]"
        >
          <span className="flex flex-col justify-center p-8 md:p-10">
            <span className="eyebrow block">Read next</span>
            <span className="mt-3 block font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {next.title}
            </span>
            <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:-rotate-45">
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
