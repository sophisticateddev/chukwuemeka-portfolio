import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import { alternates } from "@/lib/alternates";
import { getProjects } from "@/lib/content";
import Arrow from "@/components/Arrow";
import { t, type Locale } from "@/lib/i18n";
import { componentLibraryUrl } from "@/lib/site";

/** Every project, shared by /work and /fr/work. The home page shows only the featured four. */
export function workIndexMetadata(locale: Locale): Metadata {
  const d = t(locale).workIndex;
  return { title: `${d.label} — Chukwuemeka Iheonye`, description: d.intro, alternates: alternates(locale, "/work") };
}

export default function WorkIndexPage({ locale }: { locale: Locale }) {
  const d = t(locale).workIndex;
  const projects = getProjects(locale);
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <section aria-labelledby="work-title" className="py-16 pt-32 md:py-24 md:pt-36">
        <div className="container-page">
          <SectionHeading as="h1" id="work-title" label={d.label} title={d.title} titleMuted={d.titleMuted} intro={d.intro} />
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <li key={project.id}>
                <FadeUp delay={(i % 3) * 0.08} className="h-full">
                  <WorkCard project={project} index={i} heading="h2" />
                </FadeUp>
              </li>
            ))}
          </ul>
          <FadeUp className="mt-12 max-w-2xl">
            <p className="text-lg text-muted">{d.library.text}</p>
            <a
              href={componentLibraryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-ink"
            >
              <span className="link-grow">{d.library.link}</span>
              <span className="sr-only">{t(locale).newTab}</span>
              <Arrow
                direction="up-right"
                className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
              />
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
