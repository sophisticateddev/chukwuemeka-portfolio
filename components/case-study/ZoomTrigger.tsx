"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Shot } from "@/lib/case-study";

const MIN = 1;
const MAX = 5;
const STEP = 1.5;

const copy = {
  en: { open: "Enlarge screen", close: "Close", zoomIn: "Zoom in", zoomOut: "Zoom out", reset: "Fit to screen", hint: "Scroll or pinch to zoom, drag to move", prev: "Previous screen", next: "Next screen", of: "of" },
  fr: { open: "Agrandir l’écran", close: "Fermer", zoomIn: "Zoom avant", zoomOut: "Zoom arrière", reset: "Ajuster à l’écran", hint: "Molette ou pincement pour zoomer, glisser pour déplacer", prev: "Écran précédent", next: "Écran suivant", of: "sur" },
};

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/**
 * Fills its (relatively positioned) parent with a button that opens the screen full size
 * in a modal viewer with zoom controls. Server components stay server components.
 */
export default function ZoomTrigger({ shot }: { shot: Shot }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [gallery, setGallery] = useState<{ shots: Shot[]; start: number }>({ shots: [shot], start: 0 });
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = copy[lang];

  useEffect(() => {
    setLang(document.documentElement.lang.startsWith("fr") ? "fr" : "en");
  }, []);

  return (
    <>
      <button
        type="button"
        ref={btnRef}
        data-zoom-src={shot.src}
        data-zoom-alt={shot.alt}
        data-zoom-caption={shot.caption ?? ""}
        onClick={() => {
          // The screens in the same list (marked data-zoom-list) become one gallery, in page order.
          const me = btnRef.current!;
          const scope = me.closest("[data-zoom-list]") ?? document;
          const nodes = Array.from(scope.querySelectorAll<HTMLElement>("button[data-zoom-src]"));
          const shots = nodes.map((n) => ({ src: n.dataset.zoomSrc!, alt: n.dataset.zoomAlt!, caption: n.dataset.zoomCaption || undefined }));
          setGallery({ shots, start: Math.max(0, nodes.indexOf(me)) });
          setOpen(true);
        }}
        aria-label={`${t.open}: ${shot.alt}`}
        aria-haspopup="dialog"
        className="group absolute inset-0 z-10 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/85 text-ink shadow-sm ring-1 ring-line backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10.5" cy="10.5" r="6" />
            <path d="m15 15 5 5M10.5 8v5M8 10.5h5" />
          </svg>
        </span>
      </button>
      {open && <Viewer shots={gallery.shots} start={gallery.start} t={t} onClose={() => setOpen(false)} />}
    </>
  );
}

function Viewer({ shots, start, t, onClose }: { shots: Shot[]; start: number; t: (typeof copy)["en"]; onClose: () => void }) {
  const [index, setIndex] = useState(start);
  const shot = shots[index];
  const many = shots.length > 1;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });
  const go = useCallback(
    (d: number) => {
      setIndex((i) => (i + d + shots.length) % shots.length);
      setView({ scale: 1, x: 0, y: 0 });
    },
    [shots.length],
  );
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const last = useRef<{ dist: number } | null>(null);
  const moved = useRef(false);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    d.showModal();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      if (d.open) d.close();
    };
  }, []);

  useEffect(() => {
    if (!many) return;
    [1, -1].forEach((d) => {
      const im = new window.Image();
      im.src = shots[(index + d + shots.length) % shots.length].src;
    });
  }, [index, many, shots]);

  /** Keep the image from being dragged out of view: it may overhang the stage edge by 48px at most. */
  const bound = (scale: number, x: number, y: number) => {
    const img = imgRef.current;
    const stage = stageRef.current;
    if (!img || !stage || scale <= MIN) return { scale, x: 0, y: 0 };
    const mx = Math.max(0, (img.offsetWidth * scale - stage.clientWidth) / 2) + 48;
    const my = Math.max(0, (img.offsetHeight * scale - stage.clientHeight) / 2) + 48;
    return { scale, x: clamp(x, -mx, mx), y: clamp(y, -my, my) };
  };

  /** Zoom by a factor around a point (relative to the stage centre), keeping that point still. */
  const zoomAt = useCallback((factor: number, cx = 0, cy = 0) => {
    setView((v) => {
      const scale = clamp(v.scale * factor, MIN, MAX);
      const k = scale / v.scale;
      return bound(scale, cx - (cx - v.x) * k, cy - (cy - v.y) * k);
    });
  }, []);

  const centre = (clientX: number, clientY: number) => {
    const r = stageRef.current!.getBoundingClientRect();
    return { cx: clientX - r.left - r.width / 2, cy: clientY - r.top - r.height / 2 };
  };

  // Wheel needs a non-passive listener to stop the page behind from scrolling.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { cx, cy } = centre(e.clientX, e.clientY);
      zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0025)), cx, cy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "+" || e.key === "=") zoomAt(STEP);
      else if (e.key === "-" || e.key === "_") zoomAt(1 / STEP);
      else if (e.key === "0") setView({ scale: 1, x: 0, y: 0 });
      else if (many && e.key === "PageDown") go(1);
      else if (many && e.key === "PageUp") go(-1);
      else if (many && view.scale === 1 && (e.key === "ArrowRight" || e.key === "ArrowLeft")) go(e.key === "ArrowRight" ? 1 : -1);
      else if (e.key.startsWith("Arrow")) {
        const d = 60;
        setView((v) =>
          bound(v.scale, v.x + (e.key === "ArrowLeft" ? d : e.key === "ArrowRight" ? -d : 0), v.y + (e.key === "ArrowUp" ? d : e.key === "ArrowDown" ? -d : 0)),
        );
      } else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomAt, go, many, view.scale]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    if (pointers.current.size === 1) swipeStart.current = { x: e.clientX, y: e.clientY };
    if (pointers.current.size === 2) {
      swipeStart.current = null;
      const [a, b] = Array.from(pointers.current.values());
      last.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) };
    }
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const p = pointers.current.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && last.current) {
      const [a, b] = Array.from(pointers.current.values());
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const { cx, cy } = centre((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomAt(dist / last.current.dist, cx, cy);
      last.current = { dist };
      moved.current = true;
    } else if (pointers.current.size === 1) {
      if (Math.abs(dx) + Math.abs(dy) > 0) moved.current = true;
      setView((v) => bound(v.scale, v.x + dx, v.y + dy));
    }
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const s0 = swipeStart.current;
    if (s0 && e.type === "pointerup" && many && view.scale === 1 && pointers.current.size === 1) {
      const dx = e.clientX - s0.x;
      const dy = e.clientY - s0.y;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    }
    swipeStart.current = null;
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) last.current = null;
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (view.scale > 1) setView({ scale: 1, x: 0, y: 0 });
    else {
      const { cx, cy } = centre(e.clientX, e.clientY);
      zoomAt(2.5, cx, cy);
    }
  };

  const btn =
    "flex h-11 min-w-[44px] items-center justify-center rounded-full px-3 text-ink transition-colors hover:bg-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-40 disabled:hover:bg-transparent";

  const arrow =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/90 text-ink shadow-sm ring-1 ring-line backdrop-blur transition-colors hover:bg-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-label={shot.alt}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-ink backdrop:bg-canvas/[0.97] backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col">
        <div className="relative flex min-h-0 flex-1">
        <div
          ref={stageRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={onDoubleClick}
          onClick={(e) => {
            if (e.target === e.currentTarget && !moved.current) onClose();
          }}
          className={`relative flex min-h-0 flex-1 touch-none select-none items-center justify-center overflow-hidden p-4 md:p-8 ${view.scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={shot.src}
            alt={shot.alt}
            draggable={false}
            style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
            className="max-h-full max-w-full rounded-lg object-contain shadow-[0_30px_80px_-30px_var(--elev)] will-change-transform motion-safe:transition-transform motion-safe:duration-150 [&:active]:transition-none"
          />
        </div>
        {many && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t.prev} className={`${arrow} left-2 md:left-4`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-7 7 7 7" /></svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.next} className={`${arrow} right-2 md:right-4`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 5 7 7-7 7" /></svg>
            </button>
          </>
        )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line bg-surface px-3 py-2 md:px-6">
          <p className="hidden min-w-0 flex-1 truncate text-sm text-muted md:block">
            {many && <span className="mr-3 font-mono tabular-nums text-ink">{index + 1} {t.of} {shots.length}</span>}
            {shot.caption ?? t.hint}
          </p>
          {many && (
            <span className="font-mono text-sm tabular-nums text-muted md:hidden" aria-live="polite">
              {index + 1} {t.of} {shots.length}
            </span>
          )}
          <div className="mx-auto flex items-center gap-1 md:mx-0">
            <button type="button" className={btn} onClick={() => zoomAt(1 / STEP)} disabled={view.scale <= MIN} aria-label={t.zoomOut}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14" /></svg>
            </button>
            <button type="button" className={`${btn} font-mono text-sm tabular-nums`} onClick={() => setView({ scale: 1, x: 0, y: 0 })} aria-label={t.reset} disabled={view.scale === 1 && view.x === 0 && view.y === 0}>
              {Math.round(view.scale * 100)}%
            </button>
            <button type="button" className={btn} onClick={() => zoomAt(STEP)} disabled={view.scale >= MAX} aria-label={t.zoomIn}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5v14" /></svg>
            </button>
          </div>
          <button type="button" className={`${btn} ring-1 ring-inset ring-control`} onClick={onClose} aria-label={t.close} autoFocus>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>
    </dialog>
  );
}
