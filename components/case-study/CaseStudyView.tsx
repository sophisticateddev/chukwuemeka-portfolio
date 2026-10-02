import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Arrow from "@/components/Arrow";
import CountUp from "@/components/CountUp";
import FadeUp from "@/components/FadeUp";
import RevealWords from "@/components/RevealWords";
import type { CaseStudy } from "@/lib/case-study";
import type { Project } from "@/lib/data";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Toc from "./Toc";

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-accent">
    <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** A numbered story section. The takeaway is the heading, so skimming the headings tells the story. */
function Block({ id, label, takeaway, children }: { id: string; label: string; takeaway: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 md:py-20">
      <FadeUp>
        <p className="eyebrow mb-4">{label}</p>
        <h2 id={`${id}-title`} className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em] md:text-4xl">
          {takeaway}
        </h2>
      </FadeUp>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function CaseStudyView({ project, cs, next }: { project: Project; cs: CaseStudy; next: Project }) {
  const sections = [
    cs.origin && { id: "origin", label: "Origin" },
    cs.context && { id: "context", label: "Problem & context" },
    cs.team && { id: "team", label: "Role & team" },
    cs.insights && { id: "insights", label: "Research & insights" },
    cs.process && { id: "process", label: "Process" },
    cs.decisions && { id: "decisions", label: "Key decisions" },
    cs.evolution && { id: "evolution", label: "How V1 evolved" },
    cs.before && { id: "before", label: "Before" },
    cs.mobile && { id: "mobile", label: "Mobile" },
    cs.web && { id: "web", label: "Web" },
    cs.designSystem && { id: "design-system", label: "Design system" },
    cs.accessibility && { id: "accessibility", label: "Accessibility" },
    cs.build && { id: "build", label: "How I built it" },
    cs.outcomes && { id: "outcomes", label: "Outcomes" },
    cs.reflection && { id: "reflection", label: "Reflection & next" },
  ].filter(Boolean) as { id: string; label: string }[];
  const label = (id: string) => sections.find((s) => s.id === id)!.label;
  const host = cs.liveUrl ? new URL(cs.liveUrl).host : project.title;

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      {/* ── Above the fold: the whole story in five seconds ── */}
      <header className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(900px circle at 80% 10%, rgba(198,241,53,0.08), transparent 60%)" }}
        />
        <div className="container-page pb-16 pt-28 md:pt-32">
          <Link
            href="/#work"
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Arrow direction="left" className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1" />{" "}
            All work
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <FadeUp>
                <p className="eyebrow flex flex-wrap items-center gap-3">
                  <span className="text-ink">{project.title}</span>
                  {cs.status && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 normal-case tracking-normal">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                      {cs.status}
                    </span>
                  )}
                </p>
              </FadeUp>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl xl:text-[3.5rem]">
                <span className="sr-only">{cs.headline}</span>
                <span aria-hidden="true">
                  <RevealWords text={cs.headline} trigger="mount" delay={0.05} />
                </span>
              </h1>

              <FadeUp delay={0.35}>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="My role">
                  {cs.roles.map((r) => (
                    <li key={r} className="rounded-full border border-control px-3.5 py-1.5 text-sm text-ink">
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {cs.liveUrl && (
                    <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                      View live product
                      <Arrow direction="up-right" className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                  {cs.decisions && (
                    <a href="#decisions" className="btn-secondary">
                      Jump to key decisions
                    </a>
                  )}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.25} className="relative pb-10 pr-6 sm:pr-16">
              {cs.hero.desktop && <BrowserFrame shot={cs.hero.desktop} url={host} priority />}
              <div
                className={
                  cs.hero.desktop ? "absolute -bottom-2 right-0 w-[34%] max-w-[200px]" : "mx-auto w-[60%] max-w-[280px]"
                }
              >
                <PhoneFrame shot={cs.hero.mobile} priority sizes="200px" />
              </div>
            </FadeUp>
          </div>

          {/* TL;DR */}
          <FadeUp delay={0.45}>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {[
                { k: "The problem", v: cs.summary.problem },
                { k: "What I did", v: cs.summary.did },
                { k: "The result", v: cs.summary.result },
              ].map((x) => (
                <div key={x.k} className="bg-canvas p-6">
                  <dt className="eyebrow text-accent">{x.k}</dt>
                  <dd className="mt-3 text-ink">{x.v}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <FadeUp delay={0.5}>
            <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {cs.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse gap-1 bg-canvas p-5 md:p-6">
                  <dt className="text-sm text-muted">{m.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-accent md:text-4xl">
                    <CountUp value={m.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <FadeUp delay={0.55}>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="mt-2 text-sm text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </header>

      {/* ── The story ── */}
      <div className="container-page grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <Toc items={sections} />
        </aside>

        <div className="min-w-0">
          {cs.origin && (
            <Block id="origin" label={label("origin")} takeaway={cs.origin.takeaway}>
              <div className="max-w-[68ch] space-y-5 text-lg text-muted">
                {cs.origin.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-ink" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </Block>
          )}

          {cs.context && (
            <Block id="context" label={label("context")} takeaway={cs.context.takeaway}>
              <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr]">
                <div className="max-w-[68ch] space-y-5 text-lg text-muted">
                  {cs.context.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {cs.context.constraints && (
                  <div className="h-fit rounded-2xl border border-line bg-surface p-6">
                    <h3 className="eyebrow text-accent">Constraints</h3>
                    <ul className="mt-4 space-y-3">
                      {cs.context.constraints.map((c) => (
                        <li key={c} className="flex gap-3 text-ink">
                          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Block>
          )}

          {cs.team && (
            <Block id="team" label={label("team")} takeaway={cs.team.takeaway}>
              <ul className="grid gap-4 md:grid-cols-3">
                {cs.team.members.map((m) => (
                  <li
                    key={m.name}
                    className={`rounded-2xl border p-6 ${m.me ? "border-accent/60 bg-accent/[0.06]" : "border-line bg-surface"}`}
                  >
                    {m.me && <p className="eyebrow mb-3 text-accent">That’s me</p>}
                    <h3 className="font-display text-xl font-semibold tracking-tight">{m.name}</h3>
                    <p className="mt-1 text-sm text-ink">{m.role}</p>
                    <p className="mt-4 text-muted">{m.owned}</p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {cs.insights && (
            <Block id="insights" label={label("insights")} takeaway={cs.insights.takeaway}>
              {cs.insights.intro && <p className="mb-8 max-w-[68ch] text-lg text-muted">{cs.insights.intro}</p>}
              <ol className="grid gap-4 md:grid-cols-2">
                {cs.insights.items.map((it, i) => (
                  <li key={it.title} className="rounded-2xl border border-line bg-surface p-6">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{it.title}</h3>
                    <p className="mt-2 text-muted">{it.body}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.process && (
            <Block id="process" label={label("process")} takeaway={cs.process.takeaway}>
              <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cs.process.steps.map((s, i) => (
                  <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.body}</p>
                  </li>
                ))}
              </ol>
              {cs.process.artifacts && (
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {cs.process.artifacts.map((a) => (
                    <figure key={a.src}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-white">
                        <Image src={a.src} alt={a.alt} fill sizes="(min-width: 768px) 450px, 100vw" className="object-contain p-2" />
                      </div>
                      {a.caption && <figcaption className="mt-3 text-sm text-muted">{a.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
            </Block>
          )}

          {cs.decisions && (
            <Block id="decisions" label={label("decisions")} takeaway={cs.decisions.takeaway}>
              <ol className="space-y-4">
                {cs.decisions.items.map((d, i) => (
                  <li key={d.title}>
                    <FadeUp>
                      <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
                        <div>
                          <p className="font-mono text-xs text-accent">Decision {String(i + 1).padStart(2, "0")}</p>
                          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight">{d.title}</h3>
                          <p className="mt-4 text-muted">{d.context}</p>
                          {d.options && (
                            <div className="mt-5">
                              <h4 className="eyebrow">Options considered</h4>
                              <ul className="mt-3 space-y-2">
                                {d.options.map((o) => (
                                  <li key={o} className="flex gap-3 text-sm text-muted">
                                    <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 rounded-full bg-control" />
                                    {o}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <dl className="space-y-5 border-line md:border-l md:pl-8">
                          <div>
                            <dt className="eyebrow text-accent">What we chose</dt>
                            <dd className="mt-2 text-ink">{d.choice}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow">Why</dt>
                            <dd className="mt-2 text-muted">{d.why}</dd>
                          </div>
                          {d.tradeoff && (
                            <div>
                              <dt className="eyebrow">The trade-off</dt>
                              <dd className="mt-2 text-muted">{d.tradeoff}</dd>
                            </div>
                          )}
                        </dl>
                      </article>
                    </FadeUp>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.evolution && (
            <Block id="evolution" label={label("evolution")} takeaway={cs.evolution.takeaway}>
              <ol className="relative space-y-8 border-l border-line pl-8">
                {cs.evolution.items.map((e) => (
                  <li key={e.date + e.title} className="relative">
                    <span aria-hidden="true" className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-accent" />
                    <p className="font-mono text-xs text-muted">{e.date}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{e.title}</h3>
                    <p className="mt-1 max-w-[62ch] text-muted">{e.body}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.before && (
            <Block id="before" label={label("before")} takeaway={cs.before.takeaway}>
              {cs.before.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.before.intro}</p>}
              <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {cs.before.shots.map((s) => (
                  <li key={s.src}>
                    <figure>
                      <PhoneFrame shot={s} sizes="(min-width: 640px) 220px, 45vw" className="opacity-90 grayscale-[35%]" />
                      {s.caption && <figcaption className="mt-4 text-sm text-muted">{s.caption}</figcaption>}
                    </figure>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {cs.mobile && (
            <Block id="mobile" label={label("mobile")} takeaway={cs.mobile.takeaway}>
              {cs.mobile.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.mobile.intro}</p>}
              <div
                role="region"
                aria-label="Mobile screens, scrollable"
                tabIndex={0}
                className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
              >
                {cs.mobile.shots.map((s) => (
                  <figure key={s.src} className="w-[230px] shrink-0 snap-start">
                    <PhoneFrame shot={s} sizes="230px" />
                    {s.caption && <figcaption className="mt-4 text-sm text-muted">{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
              <p className="mt-2 font-mono text-xs text-muted" aria-hidden="true">
                Scroll for more
              </p>
            </Block>
          )}

          {cs.web && (
            <Block id="web" label={label("web")} takeaway={cs.web.takeaway}>
              {cs.web.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.web.intro}</p>}
              <div className="grid gap-8 md:grid-cols-2">
                {cs.web.shots.map((s, i) => (
                  <figure key={s.src} className={i === 0 ? "md:col-span-2" : ""}>
                    <BrowserFrame shot={s} url={host} sizes={i === 0 ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 768px) 450px, 100vw"} />
                    {s.caption && <figcaption className="mt-3 text-sm text-muted">{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {cs.designSystem && (
            <Block id="design-system" label={label("design-system")} takeaway={cs.designSystem.takeaway}>
              <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="eyebrow">Colour</h3>
                  <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {cs.designSystem.colors.map((c) => (
                      <li key={c.name}>
                        <span aria-hidden="true" className="block h-16 rounded-xl border border-line" style={{ background: c.value }} />
                        <p className="mt-2 text-sm font-semibold text-ink">{c.name}</p>
                        <p className="font-mono text-xs text-muted">{c.value}</p>
                        <p className="mt-1 text-xs text-muted">{c.usage}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-full rounded-2xl border border-line bg-surface p-6">
                    <h3 className="eyebrow">Type</h3>
                    <p className="mt-4 font-display text-5xl font-bold tracking-tight" aria-hidden="true">
                      Aa
                    </p>
                    <p className="mt-2 font-semibold text-ink">{cs.designSystem.type.family}</p>
                    <p className="mt-1 text-sm text-muted">{cs.designSystem.type.notes}</p>
                  </div>
                </div>
              </div>

              {cs.designSystem.tokens && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-surface">
                  <table className="w-full min-w-[320px] text-left text-sm">
                    <caption className="eyebrow px-6 pb-2 pt-6 text-left">Semantic tokens</caption>
                    <thead>
                      <tr className="text-muted">
                        <th scope="col" className="px-6 py-2 font-medium">Token</th>
                        <th scope="col" className="px-3 py-2 font-medium">Light</th>
                        <th scope="col" className="px-3 py-2 pr-6 font-medium">Dark</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      {cs.designSystem.tokens.map((t) => (
                        <tr key={t.name} className="border-t border-line">
                          <td className="px-6 py-2.5 text-accent">{t.name}</td>
                          <td className="px-3 py-2.5 text-ink">{t.light}</td>
                          <td className="px-3 py-2.5 pr-6 text-ink">{t.dark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
                <h3 className="eyebrow">Components and their states</h3>
                <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {cs.designSystem.components.map((c) => (
                    <li key={c.name}>
                      <p className="font-semibold text-ink">{c.name}</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`${c.name} states`}>
                        {c.states.map((s) => (
                          <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {cs.designSystem.motion && (
                <p className="mt-4 rounded-2xl border border-line bg-surface p-6 text-muted">
                  <span className="eyebrow mr-3 text-accent">Motion</span>
                  {cs.designSystem.motion}
                </p>
              )}
            </Block>
          )}

          {cs.accessibility && (
            <Block id="accessibility" label={label("accessibility")} takeaway={cs.accessibility.takeaway}>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="eyebrow text-accent">What we built in</h3>
                  <ul className="mt-5 space-y-5">
                    {cs.accessibility.done.map((a) => (
                      <li key={a.title} className="flex gap-3">
                        <Check />
                        <div>
                          <p className="font-semibold text-ink">{a.title}</p>
                          <p className="mt-1 text-muted">{a.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {cs.accessibility.gaps && (
                  <div className="rounded-2xl border border-dashed border-control p-6">
                    <h3 className="eyebrow">What my audit found, and the fix</h3>
                    <ul className="mt-5 space-y-5">
                      {cs.accessibility.gaps.map((g) => (
                        <li key={g.title} className="flex gap-3">
                          <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent" />
                          <div>
                            <p className="font-semibold text-ink">{g.title}</p>
                            <p className="mt-1 text-muted">{g.body}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Block>
          )}

          {cs.build && (
            <Block id="build" label={label("build")} takeaway={cs.build.takeaway}>
              {cs.build.intro && <p className="mb-8 max-w-3xl text-lg text-muted">{cs.build.intro}</p>}
              {cs.build.stats && (
                <dl className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                  {cs.build.stats.map((s) => (
                    <div key={s.label} className="flex flex-col bg-surface p-5">
                      <dt className="text-sm text-muted">{s.label}</dt>
                      <dd className="order-first font-display text-2xl font-semibold tracking-tight text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cs.build.steps.map((s, i) => (
                  <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-xs font-medium text-onaccent">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.body}</p>
                  </li>
                ))}
              </ol>

              {cs.build.setup && (
                <div className="mt-14">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">How the repo keeps AI honest</h3>
                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {cs.build.setup.map((g) => (
                      <div key={g.title} className="rounded-2xl border border-line bg-surface p-6">
                        <h4 className="eyebrow text-accent">{g.title}</h4>
                        <ul className="mt-4 space-y-3">
                          {g.items.map((item) => (
                            <li key={item} className="flex gap-3 text-muted">
                              <Check />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cs.build.mistakes && (
                <div className="mt-14">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">What AI got wrong, and how I caught it</h3>
                  <ol className="mt-6 grid gap-4 md:grid-cols-2">
                    {cs.build.mistakes.map((m, i) => (
                      <li key={m.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                        <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                        <h4 className="mt-2 font-display text-lg font-semibold tracking-tight">{m.title}</h4>
                        <dl className="mt-4 space-y-3 text-sm">
                          <div>
                            <dt className="eyebrow text-[0.7rem]">What went wrong</dt>
                            <dd className="mt-1 text-muted">{m.wrong}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow text-[0.7rem] text-accent">How I caught it</dt>
                            <dd className="mt-1 text-ink">{m.caught}</dd>
                          </div>
                          {m.guardrail && (
                            <div>
                              <dt className="eyebrow text-[0.7rem]">So it can’t happen again</dt>
                              <dd className="mt-1 text-muted">{m.guardrail}</dd>
                            </div>
                          )}
                        </dl>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {cs.build.snippet && (
                <figure className="mt-14">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">One guardrail, in code</h3>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
                    <p className="border-b border-line px-5 py-3 font-mono text-xs text-muted">{cs.build.snippet.file}</p>
                    <pre
                      tabIndex={0}
                      aria-label={`Code from ${cs.build.snippet.file}`}
                      className="overflow-x-auto p-5 font-mono text-[0.8rem] [font-variant-ligatures:none] leading-relaxed text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <code>
                        {cs.build.snippet.code.split("\n").map((line, i) => (
                          <span key={i} className={`block ${/^\s*(\/\/|\/\*|\*)/.test(line) ? "text-muted" : ""}`}>
                            {line || " "}
                          </span>
                        ))}
                      </code>
                    </pre>
                  </div>
                  <figcaption className="mt-4 max-w-3xl text-muted">{cs.build.snippet.caption}</figcaption>
                </figure>
              )}
            </Block>
          )}

          {cs.outcomes && (
            <Block id="outcomes" label={label("outcomes")} takeaway={cs.outcomes.takeaway}>
              <ul className="grid gap-3 md:grid-cols-2">
                {cs.outcomes.items.map((o) => (
                  <li key={o} className="flex gap-3 rounded-2xl border border-line bg-surface p-5 text-ink">
                    <Check />
                    {o}
                  </li>
                ))}
              </ul>
              {cs.testimonials && cs.testimonials.length > 0 && (
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {cs.testimonials.map((t) => (
                    <li key={t.quote}>
                      <figure className="h-full rounded-2xl border-l-2 border-accent bg-surface p-6">
                        <blockquote className="font-display text-xl font-medium leading-snug">“{t.quote}”</blockquote>
                        <figcaption className="mt-4 text-sm text-muted">
                          {t.name}
                          {t.context && `, ${t.context}`}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              )}
            </Block>
          )}

          {cs.reflection && (
            <Block id="reflection" label={label("reflection")} takeaway={cs.reflection.takeaway}>
              <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                <ol className="space-y-4">
                  {cs.reflection.learned.map((l, i) => (
                    <li key={l} className="flex gap-4 text-lg text-ink">
                      <span className="font-mono text-sm leading-7 text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {l}
                    </li>
                  ))}
                </ol>
                {cs.reflection.next && (
                  <div className="h-fit rounded-2xl bg-accent p-6 text-onaccent md:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.14em]">Coming next</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{cs.reflection.next.title}</h3>
                    <p className="mt-3">{cs.reflection.next.body}</p>
                  </div>
                )}
              </div>
            </Block>
          )}
        </div>
      </div>

      <nav aria-label="Next case study" className="container-page py-16 md:py-24">
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-3 rounded-3xl border border-line bg-surface p-8 transition-[border-color,transform] duration-300 ease-out hover:border-control motion-safe:hover:-translate-y-1 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <span>
            <span className="eyebrow block">Next case study</span>
            <span className="mt-3 block font-display text-3xl font-semibold tracking-tight md:text-4xl">{next.title}</span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:-rotate-45"
          >
            <Arrow size={20} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
