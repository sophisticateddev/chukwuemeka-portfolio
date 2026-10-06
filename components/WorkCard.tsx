"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";
import CountUp from "./CountUp";
import type { Project } from "@/lib/data";
import Tag from "./Tag";

export default function WorkCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  /** Lead case study: spans the grid, cover beside the text on desktop */
  featured?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const cover = project.cover ?? project.details?.hero;

  // Spotlight follows the pointer via CSS variables — no re-renders.
  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      className={`group relative isolate flex h-full flex-col ${featured ? "md:flex-row md:gap-2" : ""} rounded-2xl border border-line bg-surface p-3 transition-[border-color,transform,box-shadow] duration-300 ease-out hover:border-control focus-within:border-control motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgb(var(--accent)/0.25)]`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), rgb(var(--accent) / 0.09), transparent 45%)",
        }}
      />

      {/* Cover — real image when provided, headline metric otherwise */}
      <div className={`relative aspect-[16/9] overflow-hidden rounded-xl bg-raised ${featured ? "md:aspect-auto md:min-h-[360px] md:w-[58%] md:shrink-0" : ""}`}>
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-5 md:p-6">
            <div className="flex items-center justify-between font-mono text-xs text-muted">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.year}</span>
            </div>
            <div className="transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1">
              <p className="font-display text-4xl font-semibold tracking-[-0.02em] text-accent md:text-5xl">
                <CountUp value={project.highlight.value} />
              </p>
              <p className="mt-1 text-sm text-muted">{project.highlight.label}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        {featured && (
          <p className="eyebrow mb-3 flex items-center gap-2 text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
            Featured case study
          </p>
        )}
        <p className="eyebrow">{project.category}</p>
        <h3 className={`mt-2 font-display font-semibold tracking-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {/* Stretched link: the whole card is one click target, one tab stop */}
          <Link
            href={`/work/${project.slug}`}
            className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 outline-none transition-[background-size] duration-500 ease-out after:absolute after:inset-0 after:rounded-2xl group-hover:bg-[length:100%_2px] focus-visible:bg-[length:100%_2px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
          >
            {project.title}
          </Link>
        </h3>
        {project.client && <p className="mt-2 font-mono text-xs text-muted">{project.client} · {project.year}</p>}
        <p className="mt-3 flex-1 text-muted">{project.description}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2" aria-label="Tags">
            {project.tags.map((tag) => (
              <Tag as="li" key={tag}>
                {tag}
              </Tag>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent group-focus-within:border-accent group-focus-within:bg-accent group-focus-within:text-onaccent motion-safe:group-hover:-rotate-45 motion-safe:group-focus-within:-rotate-45"
          >
            <Arrow />
          </span>
        </div>
      </div>
    </article>
  );
}
