import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import Terminal from "./Terminal";
import { t, type Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const d = t(locale).about;
  const ai = t(locale).ai;
  const { skills, mentoring } = d;
  return (
    <section aria-labelledby="about-title" id="about" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="about-title"
          label={d.label}
          title={d.title}
          titleMuted={d.titleMuted}
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <FadeUp className="space-y-6 text-lg text-muted">
            {d.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-ink">{d.closing}</p>
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-8">
            <div>
              <h3 className="eyebrow mb-4">{d.disciplines}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Tag as="li" size="md" key={s}>
                    {s}
                  </Tag>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow text-accent">{mentoring.label}</p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{mentoring.title}</h3>
              <p className="mt-2 text-muted">{mentoring.body}</p>
            </div>
          </FadeUp>
        </div>

        {/* Proof of the "build it with AI" claim in the hero: this site */}
        <FadeUp delay={0.1}>
          <figure className="mt-12 grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[1fr_1.4fr]">
            <figcaption className="flex flex-col justify-center p-6 md:p-8">
              <p className="eyebrow text-accent">{ai.proofLabel}</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight">{ai.proofTitle}</p>
              <p className="mt-3 text-muted">{ai.proofBody}</p>
            </figcaption>
            <Terminal />
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
