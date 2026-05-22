"use client";

import { useEffect, useRef, useState } from "react";

interface Splash {
  id: number;
  x: number;
  y: number;
}

// Fixed angles + distances to avoid Math.random() on render
const DROPLETS = [
  { angle: 0,   dist: 38 },
  { angle: 42,  dist: 44 },
  { angle: 85,  dist: 36 },
  { angle: 128, dist: 42 },
  { angle: 172, dist: 40 },
  { angle: 215, dist: 45 },
  { angle: 258, dist: 37 },
  { angle: 305, dist: 41 },
];

export default function CustomCursor() {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const trailRef  = useRef<HTMLDivElement>(null);
  const [splashes, setSplashes]     = useState<Splash[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  const mouse    = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });
  const rafId    = useRef<number>();

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onClick = (e: MouseEvent) => {
      const id = performance.now() + Math.random();
      setSplashes(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes(prev => prev.filter(s => s.id !== id)), 900);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[role=button],input,textarea,select,label")) {
        setIsHovering(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[role=button],input,textarea,select,label")) {
        setIsHovering(false);
      }
    };

    const loop = () => {
      trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.1;
      trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.1;

      bubbleRef.current?.style.setProperty(
        "transform", `translate(${mouse.current.x}px,${mouse.current.y}px)`
      );
      trailRef.current?.style.setProperty(
        "transform", `translate(${trailPos.current.x}px,${trailPos.current.y}px)`
      );

      rafId.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("click",     onClick);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click",     onClick);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Lagging trail orb */}
      <div ref={trailRef} className="c-layer">
        <div className={`c-trail${isHovering ? " c-trail--hover" : ""}`} />
      </div>

      {/* Main bubble */}
      <div ref={bubbleRef} className="c-layer">
        <div className={`c-bubble${isHovering ? " c-bubble--hover" : ""}`}>
          <span className="c-hl1" />
          <span className="c-hl2" />
        </div>
      </div>

      {/* Click splashes */}
      {splashes.map(s => (
        <div
          key={s.id}
          className="c-layer"
          style={{ transform: `translate(${s.x}px,${s.y}px)` }}
        >
          {/* Three expanding rings */}
          <div className="c-ring" />
          <div className="c-ring" style={{ animationDelay: "90ms"  }} />
          <div className="c-ring" style={{ animationDelay: "180ms" }} />

          {/* Scattered droplets */}
          {DROPLETS.map((d, i) => {
            const rad = (d.angle * Math.PI) / 180;
            return (
              <div
                key={i}
                className="c-drop"
                style={{
                  "--dx": `${Math.round(Math.cos(rad) * d.dist)}px`,
                  "--dy": `${Math.round(Math.sin(rad) * d.dist)}px`,
                  animationDelay: `${i * 18}ms`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      ))}

      <style>{`
        /* Hide OS cursor on pointer-capable devices */
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }

        .c-layer {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
        }

        /* ── Bubble ──────────────────────────────────── */
        .c-bubble {
          width: 32px; height: 32px;
          margin: -16px 0 0 -16px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 34% 30%,
            rgba(255,255,255,0.65)  0%,
            rgba(190,228,255,0.20) 45%,
            rgba(130,198,255,0.07) 100%
          );
          border: 1.5px solid rgba(160,215,255,0.55);
          box-shadow:
            inset 0 0 12px rgba(255,255,255,0.45),
            0 6px 20px rgba(80,160,255,0.10);
          backdrop-filter: blur(1.5px);
          transition:
            width  .22s cubic-bezier(.34,1.56,.64,1),
            height .22s cubic-bezier(.34,1.56,.64,1),
            margin .22s cubic-bezier(.34,1.56,.64,1),
            border-color .22s ease,
            background   .22s ease;
          animation: bubble-wobble 4.5s ease-in-out infinite;
        }
        .c-bubble--hover {
          width: 54px; height: 54px;
          margin: -27px 0 0 -27px;
          border-color: rgba(200,115,58,0.45);
          background: radial-gradient(
            circle at 34% 30%,
            rgba(255,255,255,0.55)  0%,
            rgba(255,205,165,0.20) 45%,
            rgba(200,115,58,0.07)  100%
          );
        }

        /* Soap-bubble specular highlights */
        .c-hl1 {
          position: absolute;
          top: 18%; left: 19%;
          width: 33%; height: 18%;
          background: rgba(255,255,255,0.82);
          border-radius: 50%;
          transform: rotate(-38deg);
          filter: blur(1.2px);
        }
        .c-hl2 {
          position: absolute;
          bottom: 20%; right: 19%;
          width: 15%; height: 9%;
          background: rgba(255,255,255,0.48);
          border-radius: 50%;
          filter: blur(0.6px);
        }

        @keyframes bubble-wobble {
          0%,100% { border-radius: 50%; }
          18%  { border-radius: 48% 52% 54% 46% / 46% 54% 46% 54%; }
          36%  { border-radius: 54% 46% 47% 53% / 52% 48% 53% 47%; }
          54%  { border-radius: 46% 54% 52% 48% / 54% 46% 54% 46%; }
          72%  { border-radius: 53% 47% 48% 52% / 47% 53% 47% 53%; }
        }

        /* ── Trailing orb ────────────────────────────── */
        .c-trail {
          width: 8px; height: 8px;
          margin: -4px 0 0 -4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(140,205,255,0.7), rgba(90,165,255,0.15));
          filter: blur(1.5px);
          transition:
            width  .22s ease,
            height .22s ease,
            margin .22s ease;
        }
        .c-trail--hover {
          width: 5px; height: 5px;
          margin: -2.5px 0 0 -2.5px;
        }

        /* ── Splash rings ────────────────────────────── */
        .c-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(110,190,255,0.72);
          animation: ring-expand 0.72s cubic-bezier(0.1, 0.6, 0.3, 1) both;
        }
        @keyframes ring-expand {
          0%   { width: 4px;  height: 4px;  margin: -2px 0 0 -2px;   opacity: 0.95; }
          100% { width: 96px; height: 96px; margin: -48px 0 0 -48px; opacity: 0;    }
        }

        /* ── Scatter droplets ────────────────────────── */
        .c-drop {
          position: absolute;
          width: 5px; height: 5px;
          margin: -2.5px 0 0 -2.5px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(185,225,255,0.95), rgba(105,178,255,0.35));
          animation: drop-fly 0.58s cubic-bezier(0.2, 0.8, 0.3, 1) both;
        }
        @keyframes drop-fly {
          0%   { transform: translate(0,0) scale(1.3); opacity: 1;   }
          65%  { opacity: 0.55; }
          100% { transform: translate(var(--dx),var(--dy)) scale(0); opacity: 0; }
        }
      `}</style>
    </>
  );
}
