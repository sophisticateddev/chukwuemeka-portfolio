import Link from "next/link";
import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { getProjects } from "@/lib/content";
import { localeHref, t, type Locale } from "@/lib/i18n";

export default function Work({ locale }: { locale: Locale }) {
  const d = t(locale).work;
  const workProjects = getProjects(locale);
  const [lead, ...featured] = workProjects.filter((p) => p.featured);

  return (
    <section
      aria-labelledby="work-title"
      id="work"
      className="border-t border-line py-16 md:py-24"
    >
      <div className="container-page">
        <SectionHeading
          id="work-title"
          label={d.label}
          title={d.title}
          titleMuted={d.titleMuted}
          intro={d.intro}
        />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="md:col-span-2 lg:col-span-3">
            <FadeUp className="h-full">
              <WorkCard project={lead} index={0} featured />
            </FadeUp>
          </li>
          {featured.map((project, i) => (
            // On tablets the odd card out spans the row so the grid never leaves a hole
            <li
              key={project.id}
              className={
                i === featured.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }
            >
              <FadeUp delay={i * 0.08} className="h-full">
                <WorkCard project={project} index={i + 1} />
              </FadeUp>
            </li>
          ))}
        </ul>

        <FadeUp className="mt-8">
          <Link
            href={localeHref(locale, "/work")}
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-ink focus-visible:text-ink"
          >
            <span className="link-grow">{d.seeAll(workProjects.length)}</span>
            <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
