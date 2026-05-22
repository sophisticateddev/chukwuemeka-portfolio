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

  const d = project.details;
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All work
        </Link>
      </div>

      {/* Hero */}
      <header className="px-6 md:px-10 max-w-6xl mx-auto pt-14 pb-12 border-b border-border">
        <p className="text-xs text-accent tracking-widest uppercase mb-4">{project.category}</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight mb-6 max-w-3xl">
          {project.title}
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-8">
          {project.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {d?.role && (
            <div>
              <p className="text-[11px] text-muted tracking-widest uppercase mb-1">Role</p>
              <p className="text-sm text-ink">{d.role}</p>
            </div>
          )}
          {d?.team && (
            <div>
              <p className="text-[11px] text-muted tracking-widest uppercase mb-1">Team</p>
              <p className="text-sm text-ink">{d.team}</p>
            </div>
          )}
          {d?.timeline && (
            <div>
              <p className="text-[11px] text-muted tracking-widest uppercase mb-1">Timeline</p>
              <p className="text-sm text-ink">{d.timeline}</p>
            </div>
          )}
          <div>
            <p className="text-[11px] text-muted tracking-widest uppercase mb-1">Disciplines</p>
            <p className="text-sm text-ink">{project.tags.join(" · ")}</p>
          </div>
        </div>
      </header>

      {/* Thumbnail */}
      <div
        className="w-full h-[340px] md:h-[500px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-72 h-72 rounded-full border-2 border-ink" />
          <div className="w-48 h-48 rounded-full border border-ink absolute translate-x-24 translate-y-12" />
          <div className="w-32 h-32 rounded-full border border-ink absolute -translate-x-20 -translate-y-8" />
        </div>
        <p className="relative z-10 text-xs text-ink/30 tracking-widest uppercase">
          Project visuals coming soon
        </p>
      </div>

      {/* Case study body */}
      {d && (
        <div className="px-6 md:px-10 max-w-3xl mx-auto py-20 space-y-16">

          {/* Overview */}
          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Overview</h2>
            <p className="text-base text-muted leading-relaxed">{d.overview}</p>
          </section>

          {/* Problems */}
          {d.problems && d.problems.length > 0 && (
            <section>
              <div className="h-px bg-border mb-10" />
              <h2 className="font-serif text-2xl text-ink mb-6">The Problem</h2>
              <ul className="space-y-3">
                {d.problems.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Goals */}
          {d.goals && d.goals.length > 0 && (
            <section>
              <div className="h-px bg-border mb-10" />
              <h2 className="font-serif text-2xl text-ink mb-6">Goals</h2>
              <ul className="space-y-3">
                {d.goals.map((g, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink/30 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Process */}
          {d.process && (
            <section>
              <div className="h-px bg-border mb-10" />
              <h2 className="font-serif text-2xl text-ink mb-4">Process</h2>
              <p className="text-base text-muted leading-relaxed">{d.process}</p>
            </section>
          )}

          {/* Research findings */}
          {d.researchFindings && d.researchFindings.length > 0 && (
            <section>
              <div className="h-px bg-border mb-10" />
              <h2 className="font-serif text-2xl text-ink mb-6">Research Findings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {d.researchFindings.map((f, i) => (
                  <div key={i} className="rounded-xl border border-border bg-white p-5">
                    <p className="text-sm text-muted leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          {d.outcomes && d.outcomes.length > 0 && (
            <section>
              <div className="h-px bg-border mb-10" />
              <h2 className="font-serif text-2xl text-ink mb-6">Outcomes</h2>
              <ul className="space-y-3">
                {d.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>
      )}

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
