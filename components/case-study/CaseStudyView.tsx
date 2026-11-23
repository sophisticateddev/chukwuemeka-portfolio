import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Arrow from "@/components/Arrow";
import Metric from "@/components/Metric";
import type { CaseStudy } from "@/lib/case-study";
import type { Project } from "@/lib/data";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Toc from "./Toc";
import Tag from "@/components/Tag";
import { localeHref, t, type Locale } from "@/lib/i18n";

/** A one-line-tall box, so an icon centres on the first line of the text beside it at any size or line height. */
const LineIcon = ({ children }: { children: ReactNode }) => (
  <span aria-hidden="true" className="flex h-[1lh] shrink-0 items-center">
    {children}
  </span>
);

const Check = () => (
  <LineIcon>
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </LineIcon>
);

/** A result set large beside a section's headline, like a magazine pull-quote. */
function PullFigure({ label, value, caption }: { label: string; value: string; caption: string }) {
  return (
    <figure className="hidden border-l border-line pl-6 lg:block">
      <figcaption className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">{label}</figcaption>
      <p className="mt-3 font-serif text-5xl font-medium leading-none tracking-[-0.02em] text-accent">
        <Metric value={value} />
      </p>
      <p className="mt-3 text-sm text-muted">{caption}</p>
    </figure>
  );
}

/** A numbered story section. The takeaway is the heading, so skimming the headings tells the story. */
function Block({
  id,
  label,
  index,
  takeaway,
  pull,
  children,
}: {
  id: string;
  label: string;
  index: number;
  takeaway: string;
  /** Optional result shown beside the headline on wide screens */
  pull?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 md:py-24">
      <div className={pull ? "grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-14" : undefined}>
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> · {label}
          </p>
          <h2
            id={`${id}-title`}
            className="max-w-3xl font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.015em] md:text-[2.75rem]"
          >
            {takeaway}
          </h2>
        </div>
        {pull}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export default function CaseStudyView({
  project,
  cs,
  next,
  locale,
}: {
  project: Project;
  cs: CaseStudy;
  next: Project;
  locale: Locale;
}) {
  const L = t(locale).caseStudy;
  const present: Record<keyof typeof L.sections, unknown> = {
    origin: cs.origin,
    context: cs.context,
    team: cs.team,
    insights: cs.insights,
    process: cs.process,
    decisions: cs.decisions,
    evolution: cs.evolution,
    before: cs.before,
    mobile: cs.mobile,
    web: cs.web,
    "design-system": cs.designSystem,
    accessibility: cs.accessibility,
    build: cs.build,
    outcomes: cs.outcomes,
    reflection: cs.reflection,
  };
  const sections = (Object.keys(present) as (keyof typeof present)[])
    .filter((id) => present[id])
    .map((id) => ({ id, label: L.sections[id] }));
  const label = (id: string) => sections.find((s) => s.id === id)!.label;
  const index = (id: string) => sections.findIndex((s) => s.id === id);
  /** Section props shared by every Block */
  const blk = (id: keyof typeof present) => ({ id, label: label(id), index: index(id) });
  // Results repeated as pull-figures beside three headlines: the opening section, the decisions and the outcomes
  const pullFor = (id: keyof typeof present) => {
    const slot = id === sections[0]?.id ? 0 : id === "decisions" ? 1 : id === "outcomes" ? 2 : -1;
    const m = slot >= 0 ? cs.metrics[slot] : undefined;
    return m ? <PullFigure label={L.result} value={m.value} caption={m.label} /> : undefined;
  };
  const host = cs.liveUrl ? new URL(cs.liveUrl).host.replace(/^www\./, "") : project.title;

  return (
    // data-paper switches the whole page (nav and footer included) to the warm paper palette
    <main id="main" tabIndex={-1} data-paper className="outline-none">
      {/* ── Above the fold, set like a magazine feature: kicker, headline, deck, then the work ── */}
      <header>
        <div className="container-page pb-16 pt-28 md:pt-32">
          <Link
            href={localeHref(locale, "/work")}
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Arrow direction="left" className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1" />{" "}
            {L.allWork}
          </Link>

          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="text-ink">{project.title}</span>
            {cs.status && (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {cs.status}
                </span>
              </>
            )}
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[2.625rem] font-medium leading-[1.04] tracking-[-0.02em] md:text-6xl xl:text-[4.5rem]">
            {cs.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">
            <span className="sr-only">{L.myRole}: </span>
            {cs.roles.join(" · ")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {cs.liveUrl && (
              <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                {cs.liveLabel ?? L.viewLive}
                <Arrow direction="up-right" className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5" />
                <span className="sr-only">{t(locale).newTab}</span>
              </a>
            )}
            {cs.decisions && (
              <a href="#decisions" className="btn-secondary">
                {L.jumpToDecisions}
              </a>
            )}
          </div>

          {/* The work, full width */}
          <div className={`relative mt-14 md:mt-16 ${cs.hero.desktop ? "pb-10 pr-6 sm:pr-16" : ""}`}>
            {cs.hero.desktop && (
              <BrowserFrame shot={cs.hero.desktop} url={host} priority sizes="(min-width: 1152px) 1024px, 100vw" />
            )}
            {cs.hero.mobile && (
              <div
                className={
                  cs.hero.desktop ? "absolute -bottom-2 right-0 w-[26%] max-w-[240px]" : "mx-auto w-[60%] max-w-[300px]"
                }
              >
                <PhoneFrame shot={cs.hero.mobile} priority sizes="240px" />
              </div>
            )}
          </div>

          {/* In brief: three ruled columns, newspaper style */}
          <dl className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              { k: L.problem, v: cs.summary.problem },
              { k: L.did, v: cs.summary.did },
              { k: L.result, v: cs.summary.result },
            ].map((x) => (
              <div key={x.k} className="border-t-2 border-ink pt-5">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{x.k}</dt>
                <dd className="mt-3 text-lg text-ink">{x.v}</dd>
              </div>
            ))}
          </dl>

          {/* Results, set large */}
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end gap-3 border-l border-line pl-5">
                <dt className="text-sm text-muted">{m.label}</dt>
                <dd className="font-serif text-4xl font-medium leading-none tracking-[-0.02em] text-accent md:text-5xl">
                  <Metric value={m.value} />
                </dd>
              </div>
            ))}
          </dl>

          <dl className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">{m.label}</dt>
                <dd className="mt-2 text-sm text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ── The story ── */}
      <div className="container-page grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <Toc items={sections} />
        </aside>

        <div className="min-w-0">
          {cs.origin && (
            <Block {...blk("origin")} pull={pullFor("origin")} takeaway={cs.origin.takeaway}>
              <div className="max-w-[68ch] space-y-5 text-lg text-muted">
                {cs.origin.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "font-serif text-2xl leading-snug text-ink md:text-[1.75rem]" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </Block>
          )}

          {cs.context && (
            <Block {...blk("context")} pull={pullFor("context")} takeaway={cs.context.takeaway}>
              <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr]">
                <div className="max-w-[68ch] space-y-5 text-lg text-muted">
                  {cs.context.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {cs.context.constraints && (
                  <div className="h-fit border-l-2 border-accent pl-6">
                    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{L.constraints}</h3>
                    <ul className="mt-4 space-y-3">
                      {cs.context.constraints.map((c) => (
                        <li key={c} className="flex gap-3 text-ink">
                          <LineIcon>
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          </LineIcon>
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
            <Block {...blk("team")} pull={pullFor("team")} takeaway={cs.team.takeaway}>
              <ul className="grid gap-8 md:grid-cols-3">
                {cs.team.members.map((m) => (
                  <li
                    key={m.name}
                    className={`pt-5 ${m.me ? "border-t-2 border-accent" : "border-t border-line"}`}
                  >
                    {m.me && <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{L.thatsMe}</p>}
                    <h3 className="font-serif text-2xl font-medium tracking-tight">{m.name}</h3>
                    <p className="mt-1 text-sm text-ink">{m.role}</p>
                    <p className="mt-4 text-muted">{m.owned}</p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {cs.insights && (
            <Block {...blk("insights")} pull={pullFor("insights")} takeaway={cs.insights.takeaway}>
              {cs.insights.intro && <p className="mb-8 max-w-[68ch] text-lg text-muted">{cs.insights.intro}</p>}
              <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                {cs.insights.items.map((it, i) => (
                  <li key={it.title} className="border-t border-line pt-5">
                    <span className="font-serif text-3xl italic leading-none text-accent">{i + 1}</span>
                    <h3 className="mt-4 font-serif text-xl font-medium tracking-tight">{it.title}</h3>
                    <p className="mt-2 text-muted">{it.body}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.process && (
            <Block {...blk("process")} pull={pullFor("process")} takeaway={cs.process.takeaway}>
              <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                {cs.process.steps.map((s, i) => (
                  <li key={s.title} className="border-t border-line pt-5">
                    <span className="font-serif text-3xl italic leading-none text-accent">{i + 1}</span>
                    <h3 className="mt-4 font-serif text-xl font-medium tracking-tight">{s.title}</h3>
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
            <Block {...blk("decisions")} pull={pullFor("decisions")} takeaway={cs.decisions.takeaway}>
              <ol className="space-y-14">
                {cs.decisions.items.map((d, i) => (
                  <li key={d.title}>
                      <article className="grid gap-8 border-t-2 border-ink pt-6 md:grid-cols-[1fr_1.2fr] md:gap-10">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{L.decision} {String(i + 1).padStart(2, "0")}</p>
                          <h3 className="mt-3 font-serif text-[1.75rem] font-medium leading-tight tracking-[-0.01em]">{d.title}</h3>
                          <p className="mt-4 text-muted">{d.context}</p>
                          {d.options && (
                            <div className="mt-5">
                              <h4 className="eyebrow">{L.options}</h4>
                              <ul className="mt-3 space-y-2">
                                {d.options.map((o) => (
                                  <li key={o} className="flex gap-3 text-sm text-muted">
                                    <LineIcon>
                                      <span className="h-1 w-3 rounded-full bg-control" />
                                    </LineIcon>
                                    {o}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <dl className="space-y-5 border-line md:border-l md:pl-8">
                          <div>
                            <dt className="eyebrow text-accent">{L.chose}</dt>
                            <dd className="mt-2 text-ink">{d.choice}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow">{L.why}</dt>
                            <dd className="mt-2 text-muted">{d.why}</dd>
                          </div>
                          {d.tradeoff && (
                            <div>
                              <dt className="eyebrow">{L.tradeoff}</dt>
                              <dd className="mt-2 text-muted">{d.tradeoff}</dd>
                            </div>
                          )}
                        </dl>
                      </article>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.evolution && (
            <Block {...blk("evolution")} pull={pullFor("evolution")} takeaway={cs.evolution.takeaway}>
              {/* Each item draws the segment from its dot down to the next dot, so the line starts at the
                  first dot, ends at the last, and runs through every dot's centre.
                  Geometry: 13px dot centred on the 16px date line (centre 8px from the top); 1px line at
                  6px, the dot's centre; 32px between items, so a segment reaches 32 + 8px past the item. */}
              <ol className="space-y-8">
                {cs.evolution.items.map((e) => (
                  <li
                    key={e.date + e.title}
                    className="relative pl-9 before:absolute before:-bottom-10 before:left-[6px] before:top-2 before:w-px before:bg-line before:content-[''] last:before:hidden"
                  >
                    <span aria-hidden="true" className="absolute left-0 top-[1.5px] h-[13px] w-[13px] rounded-full border-2 border-canvas bg-accent" />
                    <p className="font-mono text-xs text-muted">{e.date}</p>
                    <h3 className="mt-1 font-serif text-xl font-medium tracking-tight">{e.title}</h3>
                    <p className="mt-1 max-w-[62ch] text-muted">{e.body}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {cs.before && (
            <Block {...blk("before")} pull={pullFor("before")} takeaway={cs.before.takeaway}>
              {cs.before.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.before.intro}</p>}
              {cs.before.frame === "browser" ? (
                <ul className="grid gap-8 md:grid-cols-2">
                  {cs.before.shots.map((s) => (
                    <li key={s.src} className="min-w-0">
                      <figure>
                        <BrowserFrame shot={s} sizes="(min-width: 768px) 450px, 100vw" className="opacity-90 grayscale-[35%]" />
                        {s.caption && <figcaption className="mt-3 text-sm text-muted">{s.caption}</figcaption>}
                      </figure>
                    </li>
                  ))}
                </ul>
              ) : (
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
              )}
            </Block>
          )}

          {cs.mobile && (
            <Block {...blk("mobile")} pull={pullFor("mobile")} takeaway={cs.mobile.takeaway}>
              {cs.mobile.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.mobile.intro}</p>}
              <div
                role="region"
                aria-label={L.mobileRegion}
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
                {L.scrollMore}
              </p>
            </Block>
          )}

          {cs.web && (
            <Block {...blk("web")} pull={pullFor("web")} takeaway={cs.web.takeaway}>
              {cs.web.intro && <p className="mb-10 max-w-[68ch] text-lg text-muted">{cs.web.intro}</p>}
              <div className="grid gap-8 md:grid-cols-2">
                {cs.web.shots.map((s, i) => (
                  <figure key={s.src} className={`min-w-0 ${i === 0 ? "md:col-span-2" : ""}`}>
                    <BrowserFrame shot={s} url={host} sizes={i === 0 ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 768px) 450px, 100vw"} />
                    {s.caption && <figcaption className="mt-3 text-sm text-muted">{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {cs.designSystem && (
            <Block {...blk("design-system")} pull={pullFor("design-system")} takeaway={cs.designSystem.takeaway}>
              <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="eyebrow">{L.colour}</h3>
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
                    <h3 className="eyebrow">{L.type}</h3>
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
                    <caption className="eyebrow px-6 pb-2 pt-6 text-left">{L.semanticTokens}</caption>
                    <thead>
                      <tr className="text-muted">
                        <th scope="col" className="px-6 py-2 font-medium">{L.token}</th>
                        <th scope="col" className="px-3 py-2 font-medium">{L.light}</th>
                        <th scope="col" className="px-3 py-2 pr-6 font-medium">{L.dark}</th>
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
                <h3 className="eyebrow">{L.components}</h3>
                <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {cs.designSystem.components.map((c) => (
                    <li key={c.name}>
                      <p className="font-semibold text-ink">{c.name}</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={L.states(c.name)}>
                        {c.states.map((s) => (
                          <Tag as="li" key={s}>
                            {s}
                          </Tag>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {cs.designSystem.motion && (
                <p className="mt-4 rounded-2xl border border-line bg-surface p-6 text-muted">
                  <span className="eyebrow mr-3 text-accent">{L.motion}</span>
                  {cs.designSystem.motion}
                </p>
              )}
            </Block>
          )}

          {cs.accessibility && (
            <Block {...blk("accessibility")} pull={pullFor("accessibility")} takeaway={cs.accessibility.takeaway}>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
                <div className="border-t-2 border-ink pt-5">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{L.builtIn}</h3>
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
                  <div className="border-t-2 border-dashed border-control pt-5">
                    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{L.audit}</h3>
                    <ul className="mt-5 space-y-5">
                      {cs.accessibility.gaps.map((g) => (
                        <li key={g.title} className="flex gap-3">
                          <LineIcon>
                            <span className="h-2.5 w-2.5 rounded-full border-2 border-accent" />
                          </LineIcon>
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
            <Block {...blk("build")} pull={pullFor("build")} takeaway={cs.build.takeaway}>
              {cs.build.intro && <p className="mb-8 max-w-3xl text-lg text-muted">{cs.build.intro}</p>}
              {cs.build.stats && (
                <dl className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
                  {cs.build.stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-2 border-l border-line pl-5">
                      <dt className="text-sm text-muted">{s.label}</dt>
                      <dd className="order-first font-serif text-3xl font-medium tracking-[-0.01em] text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                {cs.build.steps.map((s, i) => (
                  <li key={s.title} className="border-t border-line pt-5">
                    <span className="font-serif text-3xl italic leading-none text-accent">{i + 1}</span>
                    <h3 className="mt-4 font-serif text-xl font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.body}</p>
                  </li>
                ))}
              </ol>

              {cs.build.setup && (
                <div className="mt-14">
                  <h3 className="font-serif text-[1.75rem] font-medium tracking-[-0.01em]">{L.repoHonest}</h3>
                  <div className="mt-8 grid gap-10 lg:grid-cols-3">
                    {cs.build.setup.map((g) => (
                      <div key={g.title} className="border-t border-line pt-5">
                        <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{g.title}</h4>
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
                  <h3 className="font-serif text-[1.75rem] font-medium tracking-[-0.01em]">{L.aiWrong}</h3>
                  <ol className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
                    {cs.build.mistakes.map((m, i) => (
                      <li key={m.title} className="flex flex-col border-t border-line pt-5">
                        <p className="font-serif text-2xl italic leading-none text-accent">{i + 1}</p>
                        <h4 className="mt-3 font-serif text-xl font-medium tracking-tight">{m.title}</h4>
                        <dl className="mt-4 space-y-3 text-sm">
                          <div>
                            <dt className="eyebrow text-[0.7rem]">{L.wentWrong}</dt>
                            <dd className="mt-1 text-muted">{m.wrong}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow text-[0.7rem] text-accent">{L.caught}</dt>
                            <dd className="mt-1 text-ink">{m.caught}</dd>
                          </div>
                          {m.guardrail && (
                            <div>
                              <dt className="eyebrow text-[0.7rem]">{L.again}</dt>
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
                  <h3 className="font-serif text-[1.75rem] font-medium tracking-[-0.01em]">{L.guardrail}</h3>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
                    <p className="border-b border-line px-5 py-3 font-mono text-xs text-muted">{cs.build.snippet.file}</p>
                    <pre
                      tabIndex={0}
                      aria-label={L.codeFrom(cs.build.snippet.file)}
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
            <Block {...blk("outcomes")} pull={pullFor("outcomes")} takeaway={cs.outcomes.takeaway}>
              <ul className="grid gap-x-10 md:grid-cols-2">
                {cs.outcomes.items.map((o) => (
                  <li key={o} className="flex gap-3 border-t border-line py-4 text-lg text-ink">
                    <Check />
                    {o}
                  </li>
                ))}
              </ul>
              {cs.testimonials && cs.testimonials.length > 0 && (
                <ul className="mt-14 grid gap-12 md:grid-cols-2">
                  {cs.testimonials.map((t) => (
                    <li key={t.quote}>
                      <figure className="h-full border-l-2 border-accent pl-6">
                        <blockquote lang="en" className="font-serif text-2xl italic leading-snug md:text-[1.75rem]">“{t.quote}”</blockquote>
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
            <Block {...blk("reflection")} pull={pullFor("reflection")} takeaway={cs.reflection.takeaway}>
              <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
                <ol className="space-y-6">
                  {cs.reflection.learned.map((l, i) => (
                    <li key={l} className="flex gap-5 font-serif text-xl leading-snug text-ink md:text-2xl">
                      <span className="w-6 shrink-0 italic text-accent">{i + 1}</span>
                      {l}
                    </li>
                  ))}
                </ol>
                {cs.reflection.next && (
                  <div className="h-fit border-t-2 border-accent bg-surface p-6 md:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{L.comingNext}</p>
                    <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight">{cs.reflection.next.title}</h3>
                    <p className="mt-3 text-muted">{cs.reflection.next.body}</p>
                  </div>
                )}
              </div>
            </Block>
          )}
        </div>
      </div>

      <nav aria-label={L.next} className="container-page py-16 md:py-24">
        <Link
          href={localeHref(locale, `/work/${next.slug}`)}
          className="group flex flex-col gap-4 border-t-2 border-ink pt-8 md:flex-row md:items-end md:justify-between"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted">{L.next}</span>
            <span className="mt-4 block font-serif text-4xl font-medium tracking-[-0.02em] transition-colors group-hover:text-accent md:text-6xl">
              {next.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-control transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:translate-x-1"
          >
            <Arrow size={20} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
