import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

const skills = [
  "End-to-end product design",
  "AI-assisted prototyping",
  "Interaction design & UX strategy",
  "Mobile (iOS & Android)",
  "User research & usability testing",
  "Information architecture",
  "Design systems",
  "Accessibility (WCAG)",
];

const offDuty = [
  {
    label: "Football",
    title: "My other UX research",
    body: "I watch matches with a notebook. Formations, pressing triggers, half-time adjustments: systems thinking with better aesthetics.",
  },
  {
    label: "Food",
    title: "I used to cater events",
    body: "Nigerian cuisine is my baseline: egusi, jollof, ofe onugbu. I cook from memory, not recipes, and I still get requests.",
  },
  {
    label: "Mentoring",
    title: "I mentor on ADPList",
    body: "I help junior designers, especially those from non-traditional backgrounds, break into the industry.",
  },
];

export default function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="about-title"
          index="05"
          label="About"
          title="Craft matters."
          titleMuted="Whether it works matters more."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <FadeUp className="space-y-6 text-lg text-muted">
            <p>
              I’m Chukwuemeka, a product designer who grew up in Nigeria and now lives in
              the UK. I’ve spent 7+ years designing digital products at places like BAFTA,
              Carbon MFB and Writesea, where I design AI-powered writing and publishing tools.
            </p>
            <p>
              I work across the whole lifecycle: sitting with users to find what’s actually
              broken, shaping the system, and now building it myself with AI so engineers get
              something real, not three rounds of back-and-forth.
            </p>
            <p className="text-ink">If the design is beautiful but confusing, it’s not done yet.</p>

            <div className="pt-4">
              <h3 className="eyebrow mb-4">Disciplines</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-line px-4 py-2 text-sm text-ink">
                    {s}
                  </li>
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
