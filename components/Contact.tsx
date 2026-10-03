import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import Magnetic from "./Magnetic";
import RevealWords from "./RevealWords";

const email = "kingsleyiheonye@gmail.com";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/chukwuemeka-iheonye/" },
  { label: "Figma", href: "https://figma.com/@kingsleyiheonye" },
  { label: "ADPList", href: "https://adplist.org/mentors/chukwuemeka-iheonye" },
  { label: "X", href: "https://x.com/kingsleyiheonye" },
];

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-accent p-8 text-onaccent sm:p-12 md:p-16">
          {/* Slow-drifting rings, decorative only */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px]">
            <span className="absolute inset-0 rounded-full border border-onaccent/15 motion-safe:animate-[spin_40s_linear_infinite]" />
            <span className="absolute inset-12 rounded-full border border-dashed border-onaccent/20 motion-safe:animate-[spin_60s_linear_infinite_reverse]" />
            <span className="absolute inset-28 rounded-full border border-onaccent/10" />
          </div>

          <p className="relative font-mono text-xs uppercase tracking-[0.14em]">07 / Contact</p>
          <h2
            id="contact-title"
            className="relative mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl md:text-6xl"
          >
            <span className="sr-only">Need a designer who can also build it?</span>
            <span aria-hidden="true">
              <RevealWords text="Need a designer who can also build it?" />
            </span>
          </h2>
          <p className="relative mt-6 max-w-xl text-lg">
            Hiring for a product design role, or need a freelance designer for a new product,
            a design system or an AI-built prototype? I’d love to hear about it, and I reply
            within 24 hours.
          </p>

          <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="[&>a]:w-full">
              <a
                href={`mailto:${email}`}
                className="btn group bg-onaccent text-ink hover:shadow-[0_12px_30px_-10px_rgba(11,12,14,0.6)] focus-visible:outline-onaccent"
              >
                Let’s build something
                <span className="sr-only">(opens your email app)</span>
                <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </div>

          <ul className="relative mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Social profiles">
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
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
