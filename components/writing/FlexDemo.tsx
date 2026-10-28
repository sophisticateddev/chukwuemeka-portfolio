"use client";

import { useState } from "react";
import { useLocale } from "@/lib/useLocale";

type Dir = "row" | "column";
type Align = "flex-start" | "center" | "flex-end";

const copy = {
  en: {
    align: { "flex-start": "start", center: "center", "flex-end": "end" } as Record<Align, string>,
    direction: "Direction",
    alignment: "Alignment",
    horizontal: "Horizontal",
    vertical: "Vertical",
    gap: "Gap",
    autoLayout: "Auto layout: on",
    figmaDirection: (row: boolean) => `Direction: ${row ? "horizontal" : "vertical"}`,
    spacing: "Spacing between",
    preview: (row: boolean, gap: number, align: string) =>
      `Preview: three items laid out ${row ? "horizontally" : "vertically"}, ${gap} pixel gap, aligned ${align}`,
  },
  fr: {
    align: { "flex-start": "début", center: "centre", "flex-end": "fin" } as Record<Align, string>,
    direction: "Direction",
    alignment: "Alignement",
    horizontal: "Horizontale",
    vertical: "Verticale",
    gap: "Espacement",
    autoLayout: "Auto layout : activé",
    figmaDirection: (row: boolean) => `Direction : ${row ? "horizontale" : "verticale"}`,
    spacing: "Espacement entre",
    preview: (row: boolean, gap: number, align: string) =>
      `Aperçu : trois éléments disposés ${row ? "à l’horizontale" : "à la verticale"}, espacement de ${gap} pixels, alignés au ${align}`,
  },
};

/** Live flex container that prints both the CSS and the Figma Auto Layout equivalent. */
export default function FlexDemo() {
  const [dir, setDir] = useState<Dir>("row");
  const [gap, setGap] = useState(16);
  const [align, setAlign] = useState<Align>("center");
  const c = copy[useLocale().locale];
  const alignNames = c.align;

  return (
    <div className="grid gap-6 p-5 md:grid-cols-[1fr_1fr] md:p-8">
      <div className="space-y-5">
        <Segmented
          label={c.direction}
          value={dir}
          onChange={(v) => setDir(v as Dir)}
          options={[
            { value: "row", label: c.horizontal },
            { value: "column", label: c.vertical },
          ]}
        />
        <Segmented
          label={c.alignment}
          value={align}
          onChange={(v) => setAlign(v as Align)}
          options={(Object.keys(alignNames) as Align[]).map((a) => ({ value: a, label: alignNames[a] }))}
        />
        <div>
          <label htmlFor="flex-gap" className="eyebrow mb-2 block">
            {c.gap}: {gap}px
          </label>
          <input
            id="flex-gap"
            type="range"
            min={0}
            max={40}
            step={8}
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full accent-[rgb(var(--accent))]"
          />
        </div>

        <div className="grid gap-3 font-mono text-xs leading-6 sm:grid-cols-2 md:grid-cols-1">
          <div className="rounded-xl border border-line bg-raised p-4">
            <p className="mb-1 text-muted">CSS</p>
            <p>display: flex;</p>
            <p>flex-direction: {dir};</p>
            <p>gap: {gap}px;</p>
            <p>align-items: {align};</p>
          </div>
          <div className="rounded-xl border border-line bg-raised p-4">
            <p className="mb-1 text-muted">Figma</p>
            <p>{c.autoLayout}</p>
            <p>{c.figmaDirection(dir === "row")}</p>
            <p>
              {c.spacing}: {gap}
            </p>
            <p>
              {c.alignment}: {alignNames[align]}
            </p>
          </div>
        </div>
      </div>

      <div
        aria-label={c.preview(dir === "row", gap, alignNames[align])}
        role="img"
        className="flex min-h-[260px] rounded-xl border border-dashed border-accent/60 bg-raised p-6 transition-[gap] duration-300"
        style={{ flexDirection: dir, gap, alignItems: align }}
      >
        {[56, 88, 40].map((size, i) => (
          <div
            key={i}
            className={`shrink-0 rounded-lg transition-[width,height] duration-300 ${i === 1 ? "bg-accent" : "bg-line"}`}
            style={dir === "row" ? { width: 56, height: size } : { width: size + 40, height: 40 }}
          />
        ))}
      </div>
    </div>
  );
}

function Segmented({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow mb-2">{label}</legend>
      <div className="inline-flex flex-wrap rounded-full border border-line p-1">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex min-h-[36px] cursor-pointer items-center rounded-full px-4 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
              value === o.value ? "bg-accent text-onaccent" : "text-muted hover:text-ink"
            }`}
          >
            <input
              type="radio"
              name={label}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
