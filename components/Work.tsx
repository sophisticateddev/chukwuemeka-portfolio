import Link from "next/link";
import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { workProjects } from "@/lib/data";

export default function Work() {
  const [lead, ...featured] = workProjects.filter((p) => p.featured);
  const more = workProjects.filter((p) => !p.featured);

  return (
    <section aria-labelledby="work-title" id="work" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          index="01"
          label="Selected work"
          title="Products used by millions,"
          titleMuted="designed to be understood."
          intro="Four case studies in depth, from a game I built with AI to a bank serving 3M+ people."
        />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="md:col-span-2 lg:col-span-3">
            <FadeUp className="h-full">
              <WorkCard project={lead} index={0} featured />
            </FadeUp>
          </li>
          {featured.map((project, i) => (
            // On tablets the odd card out spans the row so the grid never leaves a hole
            <li key={project.id} className={i === featured.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}>
              <FadeUp delay={i * 0.08} className="h-full">
                <WorkCard project={project} index={i + 1} />
              </FadeUp>
            </li>
          ))}
        </ul>

        {more.length > 0 && (
          <div className="mt-16">
            <FadeUp>
              <h3 className="eyebrow mb-4">More work</h3>
            </FadeUp>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {more.map((project, i) => (
                <li key={project.id} className="bg-surface">
                  <FadeUp delay={i * 0.06} className="h-full">
                    <div className="group relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-raised focus-within:bg-raised">
                      <p className="font-mono text-xs text-muted">
                        {project.client} · {project.year}
                      </p>
                      <h4 className="mt-3 font-display text-xl font-semibold tracking-tight">
                        <Link
                          href={`/work/${project.slug}`}
                          className="outline-none after:absolute after:inset-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent"
                        >
                          {project.title}
                        </Link>
                      </h4>
                      <p className="mt-1 text-sm text-muted">{project.category}</p>
                      <div className="mt-6 flex items-end justify-between gap-4">
                        <p className="text-sm">
                          <span className="font-display text-lg font-semibold text-accent">{project.highlight.value}</span>{" "}
                          <span className="text-muted">{project.highlight.label}</span>
                        </p>
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent group-focus-within:border-accent group-focus-within:bg-accent group-focus-within:text-onaccent motion-safe:group-hover:translate-x-0.5"
                        >
                          <Arrow />
                        </span>
                      </div>
                    </div>
                  </FadeUp>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
