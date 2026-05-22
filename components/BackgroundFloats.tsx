"use client";

import { useEffect, useRef } from "react";

// Each float: position, parallax depth, size, base rotation
const FLOATS = [
  // Top band
  { emoji: "⚽", left: "6%",  top: "8%",  depth: 0.018, size: 22, rotate: -12 },
  { emoji: "🍳", left: "28%", top: "4%",  depth: 0.022, size: 18, rotate: 8   },
  { emoji: "⚽", left: "52%", top: "6%",  depth: 0.014, size: 16, rotate: 20  },
  { emoji: "🌶️", left: "74%", top: "3%",  depth: 0.020, size: 17, rotate: -6  },
  { emoji: "🍳", left: "91%", top: "10%", depth: 0.025, size: 20, rotate: 14  },

  // Upper-mid band
  { emoji: "🥘", left: "2%",  top: "28%", depth: 0.017, size: 20, rotate: -10 },
  { emoji: "⚽", left: "18%", top: "22%", depth: 0.021, size: 19, rotate: 18  },
  { emoji: "🌶️", left: "43%", top: "20%", depth: 0.016, size: 16, rotate: -15 },
  { emoji: "⚽", left: "68%", top: "25%", depth: 0.023, size: 18, rotate: 5   },
  { emoji: "🍳", left: "88%", top: "30%", depth: 0.019, size: 17, rotate: -20 },

  // Mid band
  { emoji: "⚽", left: "3%",  top: "48%", depth: 0.020, size: 21, rotate: 10  },
  { emoji: "🥘", left: "22%", top: "52%", depth: 0.015, size: 18, rotate: -5  },
  { emoji: "🍳", left: "48%", top: "45%", depth: 0.024, size: 16, rotate: 25  },
  { emoji: "⚽", left: "72%", top: "50%", depth: 0.018, size: 20, rotate: -14 },
  { emoji: "🌶️", left: "93%", top: "55%", depth: 0.022, size: 17, rotate: 8   },

  // Lower-mid band
  { emoji: "🍳", left: "8%",  top: "68%", depth: 0.016, size: 19, rotate: -18 },
  { emoji: "⚽", left: "35%", top: "72%", depth: 0.021, size: 18, rotate: 12  },
  { emoji: "🥘", left: "60%", top: "65%", depth: 0.019, size: 20, rotate: -8  },
  { emoji: "⚽", left: "82%", top: "70%", depth: 0.023, size: 17, rotate: 22  },

  // Bottom band
  { emoji: "🌶️", left: "4%",  top: "85%", depth: 0.017, size: 16, rotate: 6   },
  { emoji: "⚽", left: "25%", top: "88%", depth: 0.020, size: 20, rotate: -16 },
  { emoji: "🍳", left: "50%", top: "92%", depth: 0.015, size: 18, rotate: 10  },
  { emoji: "⚽", left: "75%", top: "86%", depth: 0.022, size: 17, rotate: -5  },
  { emoji: "🥘", left: "93%", top: "90%", depth: 0.018, size: 19, rotate: 18  },
];

export default function BackgroundFloats() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      // Offset from viewport centre so movement feels centred
      mouse.current = {
        x: e.clientX - window.innerWidth  / 2,
        y: e.clientY - window.innerHeight / 2,
      };
    };

    const loop = () => {
      // Lerp for smooth lag
      current.current.x += (mouse.current.x - current.current.x) * 0.06;
      current.current.y += (mouse.current.y - current.current.y) * 0.06;

      refs.current.forEach((el, i) => {
        if (!el) return;
        const { depth, rotate } = FLOATS[i];
        const dx = current.current.x * depth;
        const dy = current.current.y * depth;
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
      });

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {FLOATS.map((f, i) => (
        <span
          key={i}
          ref={el => { refs.current[i] = el; }}
          style={{
            position: "absolute",
            left: f.left,
            top: f.top,
            fontSize: f.size,
            opacity: 0.12,
            transform: `rotate(${f.rotate}deg)`,
            willChange: "transform",
            userSelect: "none",
            filter: "grayscale(20%)",
            animation: `float-${i % 3} ${5 + i * 0.7}s ease-in-out infinite`,
          }}
        >
          {f.emoji}
        </span>
      ))}

      <style>{`
        @keyframes float-0 {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: -6px; }
        }
        @keyframes float-1 {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: -4px; }
        }
        @keyframes float-2 {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: -8px; }
        }
      `}</style>
    </div>
  );
}
