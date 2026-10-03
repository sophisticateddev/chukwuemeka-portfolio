"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/** The theme in effect: the visitor's saved choice, otherwise their system setting. */
function currentTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Light/dark switch. With no saved choice the site follows the system setting (handled in CSS);
 * choosing here stores the preference and sets data-theme on <html>.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  // null until mounted, so server and client render the same markup
  const [theme, setTheme] = useState<Theme | null>(null);
  const switching = useRef<number>();

  useEffect(() => {
    setTheme(currentTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => setTheme(currentTheme());
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Colours ease across the page for this switch only (see .theme-switching in globals.css)
    root.classList.add("theme-switching");
    window.clearTimeout(switching.current);
    switching.current = window.setTimeout(() => root.classList.remove("theme-switching"), 250);
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice still applies for this visit
    }
    setTheme(next);
  };

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      data-track="theme-toggle"
      data-track-to={next}
      aria-label={theme ? `Switch to ${next} theme` : "Switch theme"}
      title={theme ? `Switch to ${next} theme` : undefined}
      className={`flex h-11 w-11 items-center justify-center rounded-full text-muted transition-[background-color,color,transform] duration-150 ease-out hover:bg-surface motion-safe:active:scale-95 hover:text-ink ${className}`}
    >
      {/* Both icons are stacked; the one leaving turns away as the other turns in */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="overflow-visible">
        {/* Sun: shown in dark theme, as the way back to light */}
        <g
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          className={`origin-center transition-[opacity,transform] duration-200 ease-out ${
            theme === "dark" ? "opacity-100" : "opacity-0 motion-safe:-rotate-45"
          }`}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
        </g>
        <path
          d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          className={`origin-center transition-[opacity,transform] duration-200 ease-out ${
            theme === "dark" ? "opacity-0 motion-safe:rotate-45" : "opacity-100"
          }`}
        />
      </svg>
    </button>
  );
}
