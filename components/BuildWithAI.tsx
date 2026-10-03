import Arrow from "./Arrow";
import FadeUp from "./FadeUp";
import Terminal from "./Terminal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "Design",
    title: "Research, flows and systems",
    body: "I start with users, not tools. AI speeds up synthesis and lets me explore more directions, but the judgement calls stay human.",
    tools: ["Figma", "User research", "Design systems"],
  },
  {
    step: "Build",
    title: "Prototypes in real code",
    body: "I turn designs into working React and Tailwind prototypes with Claude Code, so ideas get tested in the browser, not just on a canvas.",
    tools: ["Claude Code", "Next.js", "TypeScript"],
  },
  {
    step: "Ship",
    title: "Accessible, production-ready UI",
    body: "Tokenised components engineers can adopt, checked for contrast, keyboard access and reduced motion before anyone asks.",
    tools: ["Tailwind", "WCAG 2.2", "Design tokens"],
  },
];

export default function BuildWithAI() {
  return (
    <section aria-labelledby="ai-title" id="ai" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="ai-title"
          label="AI practice"
          title="Design and build in one loop,"
          titleMuted="with AI in the middle."
          intro="The gap between a mock-up and a shipped feature is where products lose their shape. I close it by building what I design."
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
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools">
                  {s.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 group-hover:border-control"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </li>
          ))}
        </ol>

        <FadeUp delay={0.1}>
          <figure className="mt-4 grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[1fr_1.4fr]">
            <figcaption className="flex flex-col justify-center p-6 md:p-8">
              <p className="eyebrow text-accent">Proof of practice</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight">
                This portfolio was redesigned and coded with Claude Code.
              </p>
              <p className="mt-3 text-muted">
                Same workflow I bring to product teams: a clear brief, a design system, and code
                that is reviewed, accessible and shipped.
              </p>
            </figcaption>
            <Terminal />
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
