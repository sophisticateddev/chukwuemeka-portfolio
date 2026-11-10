import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import type { ExperienceItem } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/** The three most recent roles; the earlier ones are named, and the CV has the full history. */
const VISIBLE = 3;

export default function Experience({
  items: experience,
  cv,
  locale,
}: {
  items: ExperienceItem[];
  cv: { href: string; label: string };
  locale: Locale;
}) {
  const d = t(locale).experience;
  const shortName = (company: string) => company.replace(/ \(.*\)$/, "");
  const shown = experience.slice(0, VISIBLE);
  const shownCompanies = new Set(shown.map((e) => shortName(e.company)));
  // Name the role when the company already appears above, e.g. a second role at Carbon
  const earlierCompanies = Array.from(
    new Set(
      experience
        .slice(VISIBLE)
        .map((e) => (shownCompanies.has(shortName(e.company)) ? `${shortName(e.company)} (${e.role})` : shortName(e.company))),
    ),
  );

  return (
    <section aria-labelledby="experience-title" id="experience" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading id="experience-title" label={d.label} title={d.title} titleMuted={d.titleMuted} />

        <ol className="divide-y divide-line border-y border-line">
          {shown.map((item) => (
            <li key={item.id}>
              <FadeUp className="grid gap-2 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="font-mono text-sm text-muted">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.role} <span className="text-muted">· {item.company}</span>
                  </h3>
                  <p className="mt-3 max-w-3xl text-muted">{item.description}</p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ol>

        {earlierCompanies.length > 0 && (
          <FadeUp className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              {d.earlier} <span className="text-ink">{earlierCompanies.join(", ")}</span>
            </p>
            <a
              href={cv.href}
              download={cv.href.slice(1)}
              className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-ink focus-visible:text-ink"
              data-track="cv-download"
              data-track-where="experience"
            >
              <span className="link-grow">{d.fullHistory}</span> <span className="sr-only">(PDF)</span>
              <Arrow direction="down" className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-0.5" />
            </a>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
