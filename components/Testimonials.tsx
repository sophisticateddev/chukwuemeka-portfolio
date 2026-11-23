import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import { recommendationsUrl, type Testimonial } from "@/lib/data";
import { getTestimonials } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/** The home page quotes three: one who managed me, one who reported to me, plus the featured one. The rest are on LinkedIn. */
const SHOWN = ["Nabeel Ishaq", "Afiola Etomi", "Olumide Olusesi"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

function Attribution({ t }: { t: Testimonial }) {
  return (
    <figcaption className="mt-6 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-raised font-mono text-xs text-ink"
      >
        {initials(t.name)}
      </span>
      <span className="text-sm">
        <span className="block font-semibold text-ink">{t.name}</span>
        <span className="block text-muted">
          {/* Their LinkedIn headline, quoted as written */}
          <span lang="en">{t.title}</span> · {t.relationship}, {t.date}
        </span>
      </span>
    </figcaption>
  );
}

export default function Testimonials({ locale, items }: { locale: Locale; /** Quotes to show as given, instead of the site's own (used by Storybook) */ items?: Testimonial[] }) {
  const d = t(locale).testimonials;
  const [featured, ...rest] = items ?? getTestimonials(locale).filter((x) => SHOWN.includes(x.name));

  return (
    <section aria-labelledby="testimonials-title" id="testimonials" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          id="testimonials-title"
          label={d.label}
          title={d.title}
          titleMuted={d.titleMuted}
          intro={d.note}
          variant="quiet"
          className="mb-8"
        />

        {/* The lead quote is the section's headline: no box, set in the display face */}
        <figure className="max-w-4xl">
          <blockquote lang="en" className="space-y-4 font-serif text-xl font-medium leading-[1.3] tracking-[-0.01em] text-ink md:text-[1.75rem]">
            {/* Lines starting with "- " were bullets in the original recommendation */}
            {featured.quote
              .split("\n")
              .filter(Boolean)
              .map((line, i, lines) =>
                line.startsWith("- ") ? (
                  <p key={line} className="flex gap-3 pl-1">
                    <span aria-hidden="true" className="text-accent">
                      –
                    </span>
                    {line.slice(2)}
                  </p>
                ) : (
                  <p key={line}>
                    {i === 0 && <span aria-hidden="true" className="text-accent">“</span>}
                    {line}
                    {i === lines.length - 1 && <span aria-hidden="true" className="text-accent">”</span>}
                  </p>
                ),
              )}
          </blockquote>
          <Attribution t={featured} />
        </figure>

        <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {rest.map((t, i) => (
            // An odd one out at the end spans both columns instead of leaving a gap
            <li key={t.name} className={rest.length % 2 === 1 && i === rest.length - 1 ? "md:col-span-2" : undefined}>
              <FadeUp delay={(i % 2) * 0.06} className="h-full">
                <figure className="flex h-full flex-col justify-between border-t border-line pt-6">
                  {/* pre-line keeps the line breaks and bullets of the original */}
                  <blockquote lang="en" className="whitespace-pre-line text-ink/90">“{t.quote}”</blockquote>
                  <Attribution t={t} />
                </figure>
              </FadeUp>
            </li>
          ))}
        </ul>

        <FadeUp className="mt-8">
          <a
            href={recommendationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-ink focus-visible:text-ink"
          >
            <span className="link-grow">{d.all}</span>
            <span className="sr-only">{t(locale).newTab}</span>
            <Arrow
              direction="up-right"
              className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
