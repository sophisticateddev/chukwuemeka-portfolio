import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import Terminal from "./Terminal";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { t, type Locale } from "@/lib/i18n";

export default function BuildWithAI({ locale }: { locale: Locale }) {
  const d = t(locale).ai;
  const steps = d.steps;
  return (
    <section aria-labelledby="ai-title" id="ai" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="ai-title"
          label={d.label}
          title={d.title}
          titleMuted={d.titleMuted}
          intro={d.intro}
        />

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.step}>
              <FadeUp delay={i * 0.08} className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-control md:p-7">
                <p className="eyebrow flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent">
                    {i + 1}
                  </span>
                  {s.step}
                  {i < steps.length - 1 && (
                    <span aria-hidden="true" className="ml-auto hidden text-line md:inline">
                      <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 group-hover:text-accent" />
                    </span>
                  )}
                </p>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-muted">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={d.tools}>
                  {s.tools.map((t) => (
                    <Tag as="li" key={t}>
                      {t}
                    </Tag>
                  ))}
                </ul>
              </FadeUp>
            </li>
          ))}
        </ol>

        <FadeUp delay={0.1}>
          <figure className="mt-4 grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[1fr_1.4fr]">
            <figcaption className="flex flex-col justify-center p-6 md:p-8">
              <p className="eyebrow text-accent">{d.proofLabel}</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight">
                {d.proofTitle}
              </p>
              <p className="mt-3 text-muted">
                {d.proofBody}
              </p>
            </figcaption>
            <Terminal />
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
