import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import { alternates } from "@/lib/alternates";
import { getProjects } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/** Every project, shared by /work and /fr/work. The home page shows only the featured four. */
export function workIndexMetadata(locale: Locale): Metadata {
  const d = t(locale).workIndex;
  return { title: `${d.title} — Chukwuemeka Iheonye`, description: d.intro, alternates: alternates(locale, "/work") };
}

export default function WorkIndexPage({ locale }: { locale: Locale }) {
  const d = t(locale).workIndex;
  const projects = getProjects(locale);
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <section aria-labelledby="work-title" className="py-24 pt-32 md:py-32 md:pt-40">
        <div className="container-page">
          <SectionHeading as="h1" id="work-title" label={d.label} title={d.title} titleMuted={d.titleMuted} intro={d.intro} />
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <li key={project.id}>
                <FadeUp delay={(i % 3) * 0.08} className="h-full">
                  <WorkCard project={project} index={i} heading="h2" />
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
