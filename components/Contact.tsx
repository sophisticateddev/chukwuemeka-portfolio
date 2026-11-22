import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import { regionCopy, type Region } from "@/lib/region";
import { t, type Locale } from "@/lib/i18n";

const email = "kingsleyiheonye@gmail.com";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/chukwuemeka-iheonye/" },
  { label: "Figma", href: "https://figma.com/@kingsleyiheonye" },
  { label: "ADPList", href: "https://adplist.org/mentors/chukwuemeka-iheonye" },
  { label: "X", href: "https://x.com/kingsleyiheonye" },
];

export default function Contact({ region, locale }: { region: Region; locale: Locale }) {
  const { contactNote } = regionCopy(region, locale);
  const d = t(locale).contact;
  return (
    <section aria-labelledby="contact-title" id="contact" className="py-16 md:py-24">
      <div className="container-page">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-accent p-8 text-onaccent sm:p-12 md:p-16">
          <p className="relative font-mono text-xs uppercase tracking-[0.14em]">{d.label}</p>
          <h2
            id="contact-title"
            className="relative mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl md:text-6xl"
          >
            {d.title}
          </h2>
          <p className="relative mt-6 max-w-xl text-lg">
            {d.body}
          </p>
          {contactNote && <p className="relative mt-3 max-w-xl text-lg">{contactNote}</p>}

          <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${email}`}
                className="btn group bg-onaccent text-ink hover:shadow-[0_12px_30px_-10px_rgba(11,12,14,0.6)] focus-visible:outline-onaccent"
              >
                {d.cta}
                <span className="sr-only">{d.ctaHint}</span>
                <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
              </a>
          </div>

          <ul className="relative mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label={d.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-1 font-medium underline decoration-onaccent/40 underline-offset-4 transition-[text-decoration-color] hover:decoration-onaccent focus-visible:outline-onaccent"
                >
                  {s.label}
                  <Arrow
                    direction="up-right"
                    size={14}
                    className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">{t(locale).newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
