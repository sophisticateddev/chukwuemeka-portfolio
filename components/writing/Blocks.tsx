import { ReactNode } from "react";

/** Figure with a numbered, visible caption. */
export function Figure({ children, caption, wide = false }: { children: ReactNode; caption: ReactNode; wide?: boolean }) {
  return (
    <figure className={`not-prose my-10 ${wide ? "md:-mx-16" : ""}`}>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">{children}</div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

/** Pull quote. Pass `cite` only for real, verifiable attributions. */
export function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="not-prose my-10 border-l-2 border-accent pl-6 md:pl-8">
      <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
        {children}
      </blockquote>
      {cite && <figcaption className="mt-4 font-mono text-sm text-muted">— {cite}</figcaption>}
    </figure>
  );
}

export function Callout({ label = "Try this", children }: { label?: string; children: ReactNode }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-line bg-surface p-6 md:p-7">
      <p className="eyebrow text-accent">{label}</p>
      <div className="mt-3 space-y-3 text-ink">{children}</div>
    </aside>
  );
}

/** Side-by-side comparison. The verdict is spelled out in text, never colour alone. */
export function DoDont({
  dont,
  doThis,
  dontLabel,
  doLabel,
}: {
  dont: ReactNode;
  doThis: ReactNode;
  dontLabel: string;
  doLabel: string;
}) {
  return (
    <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
      {[
        { ok: false, body: dont, label: dontLabel },
        { ok: true, body: doThis, label: doLabel },
      ].map((c) => (
        <figure key={String(c.ok)} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex min-h-[160px] flex-1 items-center justify-center p-6">{c.body}</div>
          <figcaption className="flex items-start gap-3 border-t border-line p-4 text-sm">
            <span
              aria-hidden="true"
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                c.ok ? "bg-accent text-onaccent" : "border border-control text-ink"
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={c.ok ? "M2 5.2l2 2L8 3" : "M2.5 2.5l5 5M7.5 2.5l-5 5"} />
              </svg>
            </span>
            <span>
              <strong className="text-ink">{c.ok ? "Do: " : "Don’t: "}</strong>
              <span className="text-muted">{c.label}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Small, readable code sample. */
export function Code({ children, label }: { children: string; label?: string }) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-raised">
      {label && <p className="border-b border-line px-5 py-2.5 font-mono text-xs text-muted">{label}</p>}
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-6 text-ink">
        <code>{children}</code>
      </pre>
    </div>
  );
}
