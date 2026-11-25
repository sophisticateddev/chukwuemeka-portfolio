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
          mutedTail={false}
          intro={d.intro}
        />

        <ul className="grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-24 lg:grid-cols-3">
          <li className="md:col-span-2 lg:col-span-3">
            <FadeUp className="h-full">
              <WorkCard project={lead} index={0} featured />
            </FadeUp>
          </li>
          {featured.map((project, i) => (
            <li key={project.id}>
              <FadeUp delay={i * 0.08} className="h-full">
                <WorkCard project={project} index={i + 1} />
              </FadeUp>
            </li>
          ))}
        </ul>

        <FadeUp className="mt-12 md:mt-16">
          <Link
            href={localeHref(locale, "/work")}
            className="group flex min-h-[44px] items-center justify-between gap-6 border-y border-line py-6 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:py-8"
          >
            <span className="min-w-0">
              <span className="block font-serif text-2xl font-medium leading-tight tracking-[-0.01em] md:text-4xl">
                {d.seeAll(workProjects.length)}
              </span>
              <span className="mt-1.5 block text-sm text-muted md:text-base">{d.seeAllNote}</span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-onaccent transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 md:h-14 md:w-14">
              <Arrow />
            </span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
