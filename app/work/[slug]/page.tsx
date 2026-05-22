import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { workProjects } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = workProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Chukwuemeka Iheonye`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = workProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = workProjects.findIndex((p) => p.slug === params.slug);
  const next = workProjects[(currentIndex + 1) % workProjects.length];

  return (
    <main className="bg-bg min-h-screen">
      {/* Back nav */}
      <div className="px-6 md:px-10 max-w-6xl mx-auto pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All work
        </Link>
      </div>

      {/* Hero */}
      <header className="px-6 md:px-10 max-w-6xl mx-auto pt-16 pb-14 border-b border-border">
        <p className="text-xs text-accent tracking-widest uppercase mb-4">
          {project.category}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight mb-6 max-w-3xl">
          {project.title}
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs px-3 py-1.5 rounded-full border border-border text-muted">
            {project.year}
          </span>
        </div>
      </header>

      {/* Thumbnail placeholder */}
      <div
        className="w-full h-[420px] md:h-[560px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-64 h-64 rounded-full border-2 border-ink" />
          <div className="w-44 h-44 rounded-full border border-ink absolute translate-x-20 translate-y-12" />
          <div className="w-32 h-32 rounded-full border border-ink absolute -translate-x-16 -translate-y-8" />
        </div>
        <p className="relative z-10 text-sm text-ink/40 tracking-widest uppercase">
          Case study images coming soon
        </p>
      </div>

      {/* Case study content placeholder */}
      <div className="px-6 md:px-10 max-w-3xl mx-auto py-20 space-y-16">
        <section>
          <h2 className="font-serif text-2xl text-ink mb-4">Overview</h2>
          <p className="text-base text-muted leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-muted tracking-widest uppercase mb-2">Role</p>
            <p className="text-sm text-ink">Product Designer</p>
          </div>
          <div>
            <p className="text-xs text-muted tracking-widest uppercase mb-2">Year</p>
            <p className="text-sm text-ink">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-muted tracking-widest uppercase mb-2">Deliverables</p>
            <p className="text-sm text-ink">{project.tags.join(", ")}</p>
          </div>
        </section>

        <div className="h-px bg-border" />

        <section className="rounded-2xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted mb-2">Full case study in progress</p>
          <p className="text-xs text-muted/60">
            Detailed process, research, and outcomes will be added here shortly.
          </p>
        </section>
      </div>

      {/* Next project */}
      <div className="border-t border-border px-6 md:px-10 max-w-6xl mx-auto py-14">
        <p className="text-xs text-muted tracking-widest uppercase mb-4">Next project</p>
        <Link
          href={`/work/${next.slug}`}
          className="group inline-flex items-center gap-3 hover:gap-5 transition-all duration-300"
        >
          <span className="font-serif text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors duration-200">
            {next.title}
          </span>
          <span className="text-muted group-hover:text-accent transition-colors duration-200">→</span>
        </Link>
      </div>
    </main>
  );
}
