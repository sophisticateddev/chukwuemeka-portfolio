import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // All text pairings meet WCAG AA (most AAA) against canvas and surface.
      colors: {
        canvas: "#0B0C0E", // page background
        surface: "#131417", // cards
        raised: "#1A1C20", // inset panels inside cards
        line: "#26282D", // decorative dividers / card borders
        control: "#5C6068", // interactive borders (≥3:1 on canvas)
        ink: "#F4F4F1", // primary text — 17.9:1 on canvas
        muted: "#A6A8AE", // secondary text — 8.1:1 on canvas
        accent: "#C6F135", // electric lime — 14.6:1 on canvas
        onaccent: "#0B0C0E", // text on accent fills
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
