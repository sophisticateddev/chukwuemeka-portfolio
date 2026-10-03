"use client";

import { useEffect } from "react";
import Script from "next/script";

type Props = Record<string, string>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Props) => void };
  }
}

/** The page section a click happened in, e.g. "hero" or "contact". */
function sectionOf(el: Element) {
  const section = el.closest("section, header, footer, nav");
  return section?.id || section?.getAttribute("aria-labelledby")?.replace(/-title$/, "") || section?.tagName.toLowerCase() || "page";
}

/** Works out what a click means. Returns nothing for clicks that aren't worth recording. */
function describe(target: Element): [string, Props] | undefined {
  // Buttons and controls opt in with data-track="event-name" (plus optional data-track-* details)
  const tracked = target.closest<HTMLElement>("[data-track]");
  if (tracked && !(tracked instanceof HTMLSelectElement)) {
    const props: Props = {};
    for (const [key, value] of Object.entries(tracked.dataset)) {
      if (key.startsWith("track") && key !== "track" && value) props[key.slice(5).toLowerCase()] = value;
    }
    return [tracked.dataset.track!, props];
  }

  // Links are recognised by where they go, so new links are covered without extra markup
  const link = target.closest("a");
  const href = link?.getAttribute("href");
  if (!link || !href) return;
  const where = sectionOf(link);
  if (link.hasAttribute("download")) return ["cv-download", { where }];
  if (href.startsWith("mailto:")) return ["email-click", { where }];
  if (href.startsWith("/work/")) return ["case-study-open", { project: href.slice(6), where }];
  if (href.startsWith("/writing/")) return ["article-open", { article: href.slice(9), where }];
  if (href === "/#contact") return ["contact-cta", { where }];
  if (/^https?:/.test(href)) {
    const host = new URL(href).hostname.replace(/^www\./, "");
    if (host !== location.hostname) return ["outbound-click", { to: host, where }];
  }
}

/**
 * Cookieless analytics (Umami). Page views are counted by Umami's script; this adds the
 * activities: CV downloads, contact clicks, case studies opened, outbound links, reader use.
 * Renders nothing, and records nothing, until a website ID is set. Visitors who send
 * "Do Not Track" are not counted, and only the production domain reports.
 */
export default function Analytics({ websiteId, domain }: { websiteId: string; domain: string }) {
  useEffect(() => {
    if (!websiteId) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const event = describe(e.target);
      if (event) window.umami?.track(event[0], event[1]);
    };
    const onChange = (e: Event) => {
      const el = e.target;
      if (el instanceof HTMLSelectElement && el.dataset.track) {
        window.umami?.track(el.dataset.track, { value: el.value });
      }
    };
    document.addEventListener("click", onClick, { capture: true, passive: true });
    document.addEventListener("change", onChange, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("change", onChange, { capture: true });
    };
  }, [websiteId]);

  if (!websiteId) return null;
  return (
    <Script
      src="https://cloud.umami.is/script.js"
      strategy="afterInteractive"
      data-website-id={websiteId}
      data-domains={domain}
      data-do-not-track="true"
    />
  );
}
