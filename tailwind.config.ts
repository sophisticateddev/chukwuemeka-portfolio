import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colours are CSS variables (RGB channels) defined per theme in app/globals.css,
      // so one class works in light and dark. Every text pairing meets WCAG AA in both.
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)", // page background
        surface: "rgb(var(--surface) / <alpha-value>)", // cards
        raised: "rgb(var(--raised) / <alpha-value>)", // inset panels inside cards
        line: "rgb(var(--line) / <alpha-value>)", // decorative dividers / card borders
        control: "rgb(var(--control) / <alpha-value>)", // interactive borders (≥3:1 on canvas)
        ink: "rgb(var(--ink) / <alpha-value>)", // primary text
        muted: "rgb(var(--muted) / <alpha-value>)", // secondary text
        accent: "rgb(var(--accent) / <alpha-value>)", // lime in dark, deep green in light
        onaccent: "rgb(var(--onaccent) / <alpha-value>)", // text on accent fills
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
