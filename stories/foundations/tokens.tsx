"use client";

import { useEffect, useState } from "react";

/** The colour tokens from tailwind.config.ts, with the role comment written there. */
export const TOKENS = [
  { name: "canvas", role: "Page background" },
  { name: "surface", role: "Cards" },
  { name: "raised", role: "Inset panels inside cards" },
  { name: "line", role: "Decorative dividers and card borders" },
  { name: "control", role: "Interactive borders (needs 3:1 on canvas)" },
  { name: "ink", role: "Primary text" },
  { name: "muted", role: "Secondary text" },
  { name: "accent", role: "Lime in dark, deep green in light" },
  { name: "onaccent", role: "Text on accent fills" },
] as const;

type Rgb = [number, number, number];
export type Theme = "light" | "dark";
export type Resolved = Record<Theme, Record<string, Rgb>>;

/**
 * Reads every token's real value from the stylesheet for both themes. The variables live on the
 * root element, so each theme is read by briefly setting data-theme (no paint happens in between),
 * then the visitor's theme is put back. Nothing here is copied from the CSS, so it can't go stale.
 */
function resolve(): Resolved {
  const root = document.documentElement;
  const original = root.dataset.theme;
  const out = { light: {}, dark: {} } as Resolved;
  for (const theme of ["light", "dark"] as const) {
    root.dataset.theme = theme;
    const style = getComputedStyle(root);
    for (const { name } of TOKENS) {
      out[theme][name] = style.getPropertyValue(`--${name}`).trim().split(/\s+/).map(Number) as Rgb;
    }
  }
  if (original === undefined) delete root.dataset.theme;
  else root.dataset.theme = original;
  return out;
}

export function useResolvedTokens(): Resolved | null {
  const [value, setValue] = useState<Resolved | null>(null);
  useEffect(() => setValue(resolve()), []);
  return value;
}

export const hex = ([r, g, b]: Rgb) => "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("").toUpperCase();

/** WCAG 2.1 relative luminance and contrast ratio. */
const channel = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]: Rgb) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
export function contrast(a: Rgb, b: Rgb) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
