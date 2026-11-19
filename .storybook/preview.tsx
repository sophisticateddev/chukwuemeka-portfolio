import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs";
import { MotionConfig } from "framer-motion";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "../app/globals.css";

// The same three font families as the site (components/SiteShell.tsx), under the same CSS variables.
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const fontClasses = `${display.variable} ${sans.variable} ${mono.variable}`;

const preview: Preview = {
  initialGlobals: { theme: "light", motion: "normal", locale: "en" },
  globalTypes: {
    // Same mechanism as ThemeToggle: data-theme on <html>
    theme: {
      description: "Colour theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    motion: {
      description: "Motion preference",
      toolbar: {
        title: "Motion",
        icon: "play",
        items: [
          { value: "normal", title: "Normal motion" },
          { value: "reduced", title: "Reduced motion" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: "Site language",
      toolbar: {
        title: "Language",
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "fr", title: "Français" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, { globals }) => {
      const { theme, motion, locale } = globals;
      useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.add(...fontClasses.split(" "));
      }, [theme]);
      return (
        // lib/useLocale.ts reads the page address, so give it one: /fr for French
        <PathnameContext.Provider value={locale === "fr" ? "/fr" : "/"}>
          <MotionConfig reducedMotion={motion === "reduced" ? "always" : "user"}>
            <div className={`${fontClasses} bg-canvas p-6 font-sans text-ink`}>
              <Story />
            </div>
          </MotionConfig>
        </PathnameContext.Provider>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    controls: { matchers: { color: /(background|color)$/i } },
    // axe violations fail the test run (and show in the a11y panel)
    a11y: { test: "error" },
    docs: { toc: true },
  },
};
export default preview;
