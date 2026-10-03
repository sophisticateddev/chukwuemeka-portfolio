import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import { recommendationsUrl, testimonials, type Testimonial } from "@/lib/data";

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
          {t.title} · {t.relationship}, {t.date}
        </span>
      </span>
    </figcaption>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials-title" id="testimonials" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="testimonials-title"
          label="Kind words"
          title="From the people I’ve led"
          titleMuted="and the people who’ve led me."
        />

        <FadeUp>
          <figure className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-6 select-none font-display text-[10rem] leading-none text-accent/10 md:right-12"
            >
              “
            </span>
            <blockquote className="relative max-w-3xl space-y-3 font-display text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
              {/* Lines starting with "- " were bullets in the original recommendation */}
              {featured.quote
                .split("\n")
                .filter(Boolean)
                .map((line) =>
                  line.startsWith("- ") ? (
                    <p key={line} className="flex gap-3 pl-1">
                      <span aria-hidden="true" className="text-accent">
                        –
                      </span>
                      {line.slice(2)}
                    </p>
                  ) : (
                    <p key={line}>{line}</p>
                  ),
                )}
            </blockquote>
            <Attribution t={featured} />
          </figure>
        </FadeUp>

        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((t, i) => (
            <li key={t.name}>
              <FadeUp delay={(i % 2) * 0.06} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-control md:p-8">
                  <blockquote className="text-ink/90">“{t.quote}”</blockquote>
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
            <span className="link-grow">All recommendations on LinkedIn</span>
            <span className="sr-only">(opens in a new tab)</span>
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
