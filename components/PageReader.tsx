"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/** Content blocks the reader steps through, in document order. */
const BLOCKS = "h1, h2, h3, h4, p, li, blockquote, figcaption, dl > div, img[alt]";
const RATES = [0.75, 1, 1.25, 1.5, 2];
const RATE_KEY = "reader-rate";

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

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === "en-GB" && v.localService) ??
    voices.find((v) => v.lang === "en-GB") ??
    voices.find((v) => v.lang.startsWith("en")) ??
    null
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
  const [position, setPosition] = useState({ index: 0, total: 0 });
  const [announcement, setAnnouncement] = useState("");

  const blocks = useRef<{ el: HTMLElement; text: string }[]>([]);
  const index = useRef(0);
  const run = useRef(0); // bumps on every stop/skip so stale speech callbacks are ignored
  const rateRef = useRef(1);
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
          const voice = pickVoice();
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
          className="flex max-w-[calc(100vw-1.5rem)] items-center gap-0.5 rounded-2xl border border-control bg-surface/95 p-1.5 shadow-lg backdrop-blur-md sm:gap-1 sm:p-2"
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

          <label className="ml-1 flex items-center gap-2 text-sm text-muted">
            <span className="sr-only sm:not-sr-only">Speed</span>
            <select
              value={rate}
              onChange={(e) => changeRate(Number(e.target.value))}
              className="h-11 rounded-full border border-control bg-surface px-2 text-sm text-ink sm:px-3"
            >
              {RATES.map((r) => (
                <option key={r} value={r}>
                  {r}×
                </option>
              ))}
            </select>
          </label>

          <p className="hidden px-2 font-mono text-xs text-muted sm:block">
            {status === "idle" ? "Ready" : `Section ${position.index + 1} of ${position.total}`}
          </p>

          <button type="button" onClick={close} aria-label="Close page reader" className={iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
