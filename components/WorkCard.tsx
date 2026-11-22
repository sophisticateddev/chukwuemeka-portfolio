"use client";

import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";
import type { Project } from "@/lib/data";
import { localeHref } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";

/** The web fonts are subsetted without arrow glyphs, so "30% → 55%" draws its arrow as an icon. */
function Metric({ value }: { value: string }) {
  const parts = value.split("→");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <span className="sr-only">→</span>
              <Arrow size={20} className="relative -top-[0.07em] mx-1 align-middle [&_svg]:h-[0.6em] [&_svg]:w-[0.6em]" />
            </>
          )}
          {part.trim()}
        </span>
      ))}
    </>
  );
}

/**
 * A project as an editorial entry rather than a boxed card: the screen, then the words,
 * then the one number that proves it. The whole entry is a single link (stretched).
 */
export default function WorkCard({
  project,
  index,
  featured = false,
  heading: Heading = "h3",
}: {
  project: Project;
  index: number;
  /** Lead case study: full width, a large screen, and its result set big beside the text */
  featured?: boolean;
  /** h2 on /work, where the section heading is the page's h1 */
  heading?: "h2" | "h3";
}) {
  const { locale, dict } = useLocale();
  const cover = project.cover ?? project.details?.hero;
  const href = localeHref(locale, `/work/${project.slug}`);

  const screen = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-raised ${
        featured ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]"
      }`}
    >
      {cover ? (
        <Image
          src={cover}
          alt=""
          fill
          sizes={featured ? "(min-width: 1152px) 1088px, 100vw" : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
        />
      ) : (
        <span className="absolute bottom-5 left-5 font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
      )}
    </div>
  );

  const title = (
    <Link
      href={href}
      className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 outline-none transition-[background-size] duration-500 ease-out after:absolute after:inset-0 after:rounded-2xl group-hover:bg-[length:100%_2px] focus-visible:bg-[length:100%_2px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent"
    >
      {project.title}
    </Link>
  );

  if (featured) {
    return (
      <article className="group relative">
        {screen}
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-16">
          <div>
            <p className="eyebrow">
              <span className="text-accent">{dict.work.featured}</span> · {project.category}
            </p>
            <Heading className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">{title}</Heading>
            {project.client && (
              <p className="mt-3 font-mono text-xs text-muted">
                {project.client} · {project.year}
              </p>
            )}
            <p className="mt-4 max-w-xl text-lg text-muted">{project.description}</p>
          </div>
          <p className="md:border-l md:border-line md:pl-8">
            <span className="block font-display text-6xl font-semibold leading-none tracking-[-0.03em] text-accent md:text-7xl">
              <Metric value={project.highlight.value} />
            </span>
            <span className="mt-3 block text-muted">{project.highlight.label}</span>
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col">
      {screen}
      <p className="eyebrow mt-5">{project.category}</p>
      <Heading className="mt-2 font-display text-2xl font-semibold tracking-tight">{title}</Heading>
      {project.client && (
        <p className="mt-2 font-mono text-xs text-muted">
          {project.client} · {project.year}
        </p>
      )}
      <p className="mt-3 flex-1 text-muted">{project.description}</p>
      <p className="mt-5 border-t border-line pt-4">
        <span className="block font-display text-3xl font-semibold tracking-tight text-accent">
          <Metric value={project.highlight.value} />
        </span>
        <span className="mt-1 block text-sm text-muted">{project.highlight.label}</span>
      </p>
    </article>
  );
}
