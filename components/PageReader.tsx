"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/** Content blocks the reader steps through, in document order. */
const BLOCKS = "h1, h2, h3, h4, p, li, blockquote, figcaption, dl > div, img[alt]";
const RATES = [0.75, 1, 1.25, 1.5, 2];
const RATE_KEY = "reader-rate";
const ACCENT_KEY = "reader-accent";

/** The text a screen reader would announce: drops decorative nodes, keeps image descriptions. */
function spokenText(el: Element): string {
  if (el instanceof HTMLImageElement) return el.alt.trim() ? `Image: ${el.alt.trim()}` : "";
  const clone = el.cloneNode(true) as Element;
  clone.querySelectorAll("[aria-hidden='true'], script, style, svg:not([aria-label])").forEach((n) => n.remove());
  clone.querySelectorAll("img").forEach((img) => img.replaceWith(img.alt ? ` ${img.alt} ` : ""));
  clone.querySelectorAll("svg[aria-label]").forEach((svg) => svg.replaceWith(` ${svg.getAttribute("aria-label")} `));
  // A stat reads better value first: "85%. WCAG 2.2 AA pass rate"
  const value = clone.querySelector(":scope > dd");
  if (value) clone.prepend(value);
  // Separate neighbouring elements so their words don't run together when spoken
  clone.querySelectorAll("dd, dt").forEach((n) => n.append(". "));
  clone.querySelectorAll("*").forEach((n) => {
    n.before(" ");
    n.after(" ");
  });
  return (clone.textContent ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?)])/g, "$1")
    .replace(/\.\s*\./g, ".")
    .trim();
}

function collectBlocks(): { el: HTMLElement; text: string }[] {
  const main = document.getElementById("main");
  if (!main) return [];
  const out: { el: HTMLElement; text: string }[] = [];
  main.querySelectorAll<HTMLElement>(BLOCKS).forEach((el) => {
    if (el.closest("[hidden], [aria-hidden='true'], [inert], nav, [data-reader-skip]")) return; // skip menus and contents lists
    if (el.getClientRects().length === 0) return; // display: none
    if (!(el instanceof HTMLImageElement) && el.querySelector(BLOCKS.replace(", img[alt]", ""))) return; // a container: read its children instead
    if (el instanceof HTMLImageElement && el.closest("p, li, h1, h2, h3, h4, figcaption")) return; // read with its parent
    const text = spokenText(el);
    if (!/[A-Za-z0-9\u00C0-\uFFFF]/.test(text)) return; // nothing speakable
    out.push({ el, text });
  });
  return out;
}

/** Browsers cut off long utterances, so speak a block as sentence-sized pieces. */
function chunk(text: string, max = 220): string[] {
  const sentences = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text];
  const out: string[] = [];
  let current = "";
  for (const s of sentences) {
    if ((current + s).length > max && current) {
      out.push(current.trim());
      current = "";
    }
    current += s;
  }
  if (current.trim()) out.push(current.trim());
  return out;
}

type Accent = { lang: string; label: string; voice: SpeechSynthesisVoice };

/** Friendly names for the English voices browsers ship. Anything else falls back to its region name. */
const ACCENT_NAMES: Record<string, string> = {
  "en-gb": "British",
  "en-us": "American",
  "en-au": "Australian",
  "en-in": "Indian",
  "en-ie": "Irish",
  "en-za": "South African",
  "en-ng": "Nigerian",
  "en-ke": "Kenyan",
  "en-gh": "Ghanaian",
  "en-tz": "Tanzanian",
  "en-ca": "Canadian",
  "en-nz": "New Zealand",
  "en-sg": "Singaporean",
  "en-ph": "Filipino",
  "en-hk": "Hong Kong",
  "en-scotland": "Scottish",
  "en-gb-scotland": "Scottish",
  "en-gb-wls": "Welsh",
};

// macOS ships joke voices (bells, whispers, robots) tagged as English. Fun, but not accents.
const NOVELTY =
  /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Kathy|Ralph|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley)\b/i;

/** Higher is better: prefer natural-sounding voices, then Google's, then ones stored on the device. */
const voiceScore = (v: SpeechSynthesisVoice) =>
  (/natural|enhanced|premium|siri/i.test(v.name) ? 4 : 0) + (/google/i.test(v.name) ? 2 : 0) + (v.localService ? 1 : 0);

function accentLabel(lang: string): string {
  const known = ACCENT_NAMES[lang.toLowerCase()];
  if (known) return known;
  try {
    const region = lang.split("-")[1];
    return (region && new Intl.DisplayNames(["en"], { type: "region" }).of(region.toUpperCase())) || lang;
  } catch {
    return lang;
  }
}

// Shown first, and used by default, when the device has them
const PREFERRED = ["en-NG", "en-GB"];

/** One voice per English accent the visitor's browser offers: Nigerian first, then British. */
function listAccents(): Accent[] {
  const best = new Map<string, SpeechSynthesisVoice>();
  for (const v of window.speechSynthesis.getVoices()) {
    const lang = v.lang.replace("_", "-");
    if (!/^en(-|$)/i.test(lang) || NOVELTY.test(v.name)) continue;
    const current = best.get(lang);
    if (!current || voiceScore(v) > voiceScore(current)) best.set(lang, v);
  }
  const rank = (lang: string) => {
    const i = PREFERRED.indexOf(lang);
    return i === -1 ? PREFERRED.length : i;
  };
  return Array.from(best, ([lang, voice]) => ({ lang, label: accentLabel(lang), voice })).sort(
    (a, b) => rank(a.lang) - rank(b.lang) || a.label.localeCompare(b.label),
  );
}

type Status = "idle" | "playing" | "paused";

/**
 * "Listen to this page": reads the main content aloud with the browser's built-in speech,
 * highlighting each block as it goes. It complements screen readers rather than replacing
 * them, for people with low vision, dyslexia or tired eyes.
 */
export default function PageReader() {
  const pathname = usePathname();
  const [supported, setSupported] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [rate, setRate] = useState(1);
  const [accents, setAccents] = useState<Accent[]>([]);
  const [accent, setAccent] = useState("");
  const [position, setPosition] = useState({ index: 0, total: 0 });
  const [announcement, setAnnouncement] = useState("");

  const blocks = useRef<{ el: HTMLElement; text: string }[]>([]);
  const index = useRef(0);
  const run = useRef(0); // bumps on every stop/skip so stale speech callbacks are ignored
  const rateRef = useRef(1);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    try {
      const saved = Number(localStorage.getItem(RATE_KEY));
      if (RATES.includes(saved)) {
        setRate(saved);
        rateRef.current = saved;
      }
    } catch {
      // storage unavailable: use the default speed
    }
  }, []);

  // Voices load asynchronously in most browsers, so listen for them arriving
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    const load = () => {
      const found = listAccents();
      setAccents(found);
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(ACCENT_KEY);
      } catch {
        // no saved accent
      }
      const chosen = found.find((a) => a.lang === saved) ?? found[0];
      voiceRef.current = chosen?.voice ?? null;
      setAccent(chosen?.lang ?? "");
    };
    load();
    synth.addEventListener?.("voiceschanged", load);
    return () => synth.removeEventListener?.("voiceschanged", load);
  }, []);

  const clearHighlight = () =>
    document.querySelectorAll("[data-reading]").forEach((el) => el.removeAttribute("data-reading"));

  const stop = useCallback((message?: string) => {
    run.current += 1;
    window.speechSynthesis?.cancel();
    clearHighlight();
    setStatus("idle");
    if (message) setAnnouncement(message);
  }, []);

  const speakFrom = useCallback(
    (start: number) => {
      const synth = window.speechSynthesis;
      run.current += 1;
      const thisRun = run.current;
      synth.cancel();

      const next = (i: number) => {
        if (thisRun !== run.current) return;
        const block = blocks.current[i];
        if (!block) {
          stop("Finished reading the page.");
          return;
        }
        index.current = i;
        setPosition({ index: i, total: blocks.current.length });
        clearHighlight();
        block.el.setAttribute("data-reading", "true");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        block.el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });

        const parts = chunk(block.text);
        parts.forEach((part, n) => {
          const u = new SpeechSynthesisUtterance(part);
          const voice = voiceRef.current;
          if (voice) u.voice = voice;
          u.lang = voice?.lang ?? "en-GB";
          u.rate = rateRef.current;
          if (n === parts.length - 1) {
            u.onend = () => next(i + 1);
            u.onerror = (e) => {
              // "interrupted"/"canceled" come from our own stop or skip
              if (e.error !== "interrupted" && e.error !== "canceled") next(i + 1);
            };
          }
          synth.speak(u);
        });
      };

      setStatus("playing");
      next(start);
    },
    [stop],
  );

  const play = () => {
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
      setAnnouncement("Reading resumed.");
      return;
    }
    blocks.current = collectBlocks();
    if (blocks.current.length === 0) {
      setAnnouncement("There is nothing to read on this page.");
      return;
    }
    // Start from the first block on screen, so "listen" continues from where you are
    const header = 80;
    const first = blocks.current.findIndex((b) => b.el.getBoundingClientRect().bottom > header);
    setAnnouncement("Reading started.");
    speakFrom(Math.max(first, 0));
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setStatus("paused");
    setAnnouncement("Reading paused.");
  };

  const skip = (by: number) => {
    if (blocks.current.length === 0) return;
    const target = Math.min(Math.max(index.current + by, 0), blocks.current.length - 1);
    speakFrom(target);
  };

  const changeRate = (value: number) => {
    setRate(value);
    rateRef.current = value;
    try {
      localStorage.setItem(RATE_KEY, String(value));
    } catch {
      // not saved, still applies now
    }
    if (status === "playing") speakFrom(index.current); // restart the current block at the new speed
  };

  const changeAccent = (lang: string) => {
    const chosen = accents.find((a) => a.lang === lang);
    if (!chosen) return;
    setAccent(lang);
    voiceRef.current = chosen.voice;
    try {
      localStorage.setItem(ACCENT_KEY, lang);
    } catch {
      // not saved, still applies now
    }
    setAnnouncement(`${chosen.label} accent selected.`);
    if (status === "playing") {
      speakFrom(index.current); // carry on from the same place in the new voice
    } else if (status === "idle") {
      // A quick hello so you can hear the accent before pressing play
      const synth = window.speechSynthesis;
      synth.cancel();
      const sample = new SpeechSynthesisUtterance(`Hello. This is the ${chosen.label} voice.`);
      sample.voice = chosen.voice;
      sample.lang = chosen.voice.lang;
      sample.rate = rateRef.current;
      synth.speak(sample);
    }
  };

  const close = () => {
    stop("Reader closed.");
    setOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  };

  // Stop when the page changes or is hidden for good
  useEffect(() => {
    stop();
    setOpen(false);
  }, [pathname, stop]);

  useEffect(() => {
    const onHide = () => window.speechSynthesis?.cancel();
    window.addEventListener("pagehide", onHide);
    return () => {
      window.removeEventListener("pagehide", onHide);
      window.speechSynthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    playRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!supported) return null;

  const control = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors";
  const iconButton = `${control} text-ink hover:bg-raised disabled:opacity-40`;
  const primaryButton = `${control} bg-accent text-onaccent hover:bg-ink`;

  return (
    <div
      data-reader-skip
      // On phones the open panel sits above the back-to-top button rather than under it
      className={`fixed left-3 z-40 md:bottom-8 md:left-8 ${open ? "bottom-20" : "bottom-5"}`}
    >
      {/* Announces state changes only, so it never talks over a screen reader mid-sentence */}
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>

      {!open ? (
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-controls="page-reader"
          className="flex h-12 items-center gap-2 rounded-full border border-control bg-surface/90 px-4 text-sm font-semibold text-ink shadow-lg backdrop-blur-md transition-colors hover:border-accent hover:bg-accent hover:text-onaccent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-7h3M4 13v5a2 2 0 0 0 2 2h1v-7H4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            Listen<span className="sr-only"> to this page</span>
          </span>
        </button>
      ) : (
        <div
          id="page-reader"
          role="group"
          aria-label="Page reader"
          className="flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center gap-0.5 rounded-2xl border border-control bg-surface/95 p-1.5 shadow-lg backdrop-blur-md sm:flex-nowrap sm:gap-1 sm:p-2"
        >
          <button type="button" onClick={() => skip(-1)} disabled={status === "idle"} aria-label="Previous section" className={iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h2v14H7zM20 5v14L10 12z" />
            </svg>
          </button>

          {status === "playing" ? (
            <button ref={playRef} type="button" onClick={pause} aria-label="Pause reading" className={primaryButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            </button>
          ) : (
            <button
              ref={playRef}
              type="button"
              onClick={play}
              aria-label={status === "paused" ? "Resume reading" : "Read this page aloud"}
              className={primaryButton}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <button type="button" onClick={() => skip(1)} disabled={status === "idle"} aria-label="Next section" className={iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M15 5h2v14h-2zM4 5v14l10-7z" />
            </svg>
          </button>

          <button type="button" onClick={() => stop("Reading stopped.")} disabled={status === "idle"} aria-label="Stop reading" className={iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="6" width="12" height="12" rx="1.5" />
            </svg>
          </button>

          {/* On phones the two pickers drop to a second row under the transport buttons */}
          <div className="order-last flex w-full items-center gap-2 px-1 pt-1 sm:order-none sm:w-auto sm:px-0 sm:pt-0">
            {accents.length > 1 && (
              <label className="flex min-w-0 flex-1 items-center gap-2 text-sm text-muted sm:ml-1 sm:flex-none">
                <span className="sr-only sm:not-sr-only">Accent</span>
                <select
                  value={accent}
                  onChange={(e) => changeAccent(e.target.value)}
                  className="h-11 w-full min-w-0 rounded-full border border-control bg-surface px-3 text-sm text-ink sm:w-auto"
                >
                  {accents.map((a) => (
                    <option key={a.lang} value={a.lang}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="flex items-center gap-2 text-sm text-muted">
              <span className="sr-only sm:not-sr-only">Speed</span>
              <select
                value={rate}
                onChange={(e) => changeRate(Number(e.target.value))}
                className="h-11 rounded-full border border-control bg-surface px-3 text-sm text-ink"
              >
                {RATES.map((r) => (
                  <option key={r} value={r}>
                    {r}×
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="hidden px-2 font-mono text-xs text-muted sm:block">
            {status === "idle" ? "Ready" : `Section ${position.index + 1} of ${position.total}`}
          </p>

          <button type="button" onClick={close} aria-label="Close page reader" className={`${iconButton} ml-auto sm:ml-0`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
