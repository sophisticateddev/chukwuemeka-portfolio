"use client";

import { useState } from "react";
import { useLocale } from "@/lib/useLocale";

const copy = {
  en: {
    controls: "Demo controls",
    random: "Eyeballed spacing",
    grid: "8pt spacing",
    show: "Show 8pt grid",
    hide: "Hide 8pt grid",
    title: "Weekend in Lagos",
    meta: "3 nights · from £420",
    book: "Book now",
    readout: (s: { pad: number; title: number; gap: number; button: number }) =>
      `padding ${s.pad} · title ${s.title} · text ${s.gap} · button ${s.button}`,
    multiples: "  (all multiples of 8)",
    noRhythm: "  (no shared rhythm)",
  },
  fr: {
    controls: "Commandes de la démo",
    random: "Espacement à l’œil",
    grid: "Espacement de 8 pt",
    show: "Afficher la grille de 8 pt",
    hide: "Masquer la grille de 8 pt",
    title: "Week-end à Lagos",
    meta: "3 nuits · à partir de 420 £",
    book: "Réserver",
    readout: (s: { pad: number; title: number; gap: number; button: number }) =>
      `marge ${s.pad} · titre ${s.title} · texte ${s.gap} · bouton ${s.button}`,
    multiples: "  (tous multiples de 8)",
    noRhythm: "  (aucun rythme commun)",
  },
};

const spacing = {
  random: { pad: 19, gap: 11, title: 13, button: 23 },
  grid: { pad: 24, gap: 8, title: 16, button: 24 },
};

/** Same card twice: eyeballed spacing vs 8pt spacing, with an optional grid overlay. */
export default function GridDemo() {
  const [mode, setMode] = useState<"random" | "grid">("random");
  const [overlay, setOverlay] = useState(false);
  const s = spacing[mode];
  const c = copy[useLocale().locale];

  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-wrap items-center gap-3" role="group" aria-label={c.controls}>
        <div className="inline-flex rounded-full border border-line p-1">
          {(["random", "grid"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={`min-h-[36px] rounded-full px-4 text-sm font-medium transition-colors ${
                mode === m ? "bg-accent text-onaccent" : "text-muted hover:text-ink"
              }`}
            >
              {m === "random" ? c.random : c.grid}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-pressed={overlay}
          onClick={() => setOverlay((o) => !o)}
          className="min-h-[36px] rounded-full border border-control px-4 text-sm text-ink transition-colors hover:border-ink"
        >
          {overlay ? c.hide : c.show}
        </button>
      </div>

      <div className="relative mt-6 flex justify-center rounded-xl bg-raised p-8">
        {overlay && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgb(var(--accent) / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--accent) / 0.18) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
        )}
        <div
          className="relative w-full max-w-[280px] rounded-2xl border border-line bg-canvas transition-[padding] duration-500 ease-out"
          style={{ padding: s.pad }}
        >
          <div className="aspect-[16/9] rounded-lg bg-line" />
          <p className="font-display text-lg font-semibold" style={{ marginTop: s.title }}>
            {c.title}
          </p>
          <p className="text-sm text-muted" style={{ marginTop: s.gap }}>
            {c.meta}
          </p>
          <div
            className="flex min-h-[40px] items-center justify-center rounded-full bg-accent text-sm font-semibold text-onaccent"
            style={{ marginTop: s.button }}
          >
            {c.book}
          </div>
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-muted" aria-live="polite">
        {c.readout(s)}
        {mode === "grid" ? c.multiples : c.noRhythm}
      </p>
    </div>
  );
}
