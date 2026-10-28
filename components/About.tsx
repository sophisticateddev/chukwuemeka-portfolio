import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { t, type Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const d = t(locale).about;
  const { skills, offDuty } = d;
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

            <div className="pt-4">
              <h3 className="eyebrow mb-4">{d.disciplines}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Tag as="li" size="md" key={s}>
                    {s}
                  </Tag>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="grid gap-4">
              {offDuty.map((item) => (
                <li
                  key={item.label}
                  className="group rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-control"
                >
                  <p className="eyebrow flex items-center gap-2 text-accent">
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-accent transition-[width] duration-300 ease-out group-hover:w-8"
                    />
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
