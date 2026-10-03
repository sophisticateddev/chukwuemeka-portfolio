"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Arrow from "./Arrow";
import DrawLine from "./DrawLine";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import ArticleCover from "./writing/ArticleCover";
import { articles } from "@/lib/data";

// One stretched link per row: the whole row is a single click target and tab stop.
const linkClass =
  "bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 outline-none transition-[background-size] duration-500 ease-out after:absolute after:-inset-x-3 after:inset-y-2 after:rounded-xl group-hover:bg-[length:100%_2px] focus-visible:bg-[length:100%_2px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent";

/** Newest articles shown up front; the rest open on demand so the page stays short. */
const VISIBLE = 2;

export default function Writing() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hiddenCount = articles.length - VISIBLE;

  const toggle = () => {
    setExpanded((open) => {
      // Collapsing removes content above the button, so bring it back into view
      if (open) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: "center" }));
      return !open;
    });
  };

  return (
    <section aria-labelledby="writing-title" id="writing" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="writing-title"
          index="06"
          label="Writing"
          title="Notes on AI,"
          titleMuted="accessibility and craft."
          intro="Practical pieces from the work: what I’ve learned, what I got wrong, and what I’d do differently."
        />

        <ul id="writing-list" className="relative">
          <DrawLine className="top-0" />
          {articles.map((article, i) => (
            <li key={article.id} className="relative" hidden={!expanded && i >= VISIBLE}>
              <DrawLine />
              <FadeUp delay={(i % 4) * 0.04}>
                <article className="group relative grid items-center gap-5 py-6 sm:grid-cols-[180px_1fr_auto] md:gap-8">
                  <div className="hidden overflow-hidden rounded-xl border border-line sm:block">
                    <ArticleCover
                      slug={article.slug}
                      className="block aspect-[16/10] w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="flex flex-wrap items-center gap-x-2 font-mono text-xs text-muted">
                      <span className="transition-colors duration-300 group-hover:text-accent">{article.tag}</span>
                      <span aria-hidden="true">·</span>
                      <time>{article.date}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      {article.source && (
                        <span className="ml-1 rounded-full border border-line px-2 py-0.5">{article.source}</span>
                      )}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {article.url ? (
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {article.title}
                          <span className="sr-only">(on {article.source ?? "an external site"}, opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link href={`/writing/${article.slug}`} className={linkClass}>
                          {article.title}
                        </Link>
                      )}
                    </h3>
                    <p className="mt-2 max-w-2xl text-muted">{article.excerpt}</p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden h-10 w-10 items-center justify-center rounded-full border border-line transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent group-focus-within:border-accent group-focus-within:bg-accent group-focus-within:text-onaccent sm:flex"
                  >
                    <Arrow direction={article.url ? "up-right" : "right"} />
                  </span>
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>

        {hiddenCount > 0 && (
          <FadeUp className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              {expanded ? `Showing all ${articles.length} articles.` : `${hiddenCount} more on accessibility, AI, Figma and process.`}
            </p>
            <button
              ref={toggleRef}
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls="writing-list"
              className="btn-secondary group self-start sm:self-auto"
            >
              {expanded ? "Show fewer" : `Show all ${articles.length} articles`}
              <Arrow
                direction={expanded ? "up" : "down"}
                className={`transition-transform duration-300 ease-out ${expanded ? "motion-safe:group-hover:-translate-y-0.5" : "motion-safe:group-hover:translate-y-0.5"}`}
              />
            </button>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
