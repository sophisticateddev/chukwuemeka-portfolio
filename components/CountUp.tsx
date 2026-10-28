"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// The first number in a value, in English or French form: "10,000", "10 000", "2.2", "3,3".
const NUMBER = /\d+(?:[,\u00A0\u202F ]\d{3})*(?:[.,]\d+)?/;

/** How to count up to a written number and print each frame with the same separators. */
function counter(raw: string) {
  const group = /^\d{1,3}(?:[,\u00A0\u202F ]\d{3})+(?:[.,]\d+)?$/.test(raw) ? raw.match(/\d([,\u00A0\u202F ])\d{3}/)![1] : "";
  const plain = group ? raw.split(group).join("") : raw;
  const fraction = plain.match(/([.,])(\d+)$/);
  const decimals = fraction ? fraction[2].length : 0;
  const format = (n: number) => {
    const [whole, part] = n.toFixed(decimals).split(".");
    const grouped = group ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, group) : whole;
    return part ? grouped + fraction![1] + part : grouped;
  };
  return { target: parseFloat(plain.replace(",", ".")), format };
}

/**
 * Counts the first number in `value` up from zero when scrolled into view,
 * e.g. "+25%", "3M+", "< 1 min", "10 000+". Screen readers only ever get the final value.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const match = value.match(NUMBER);
  // Frames are written straight to this node so the count doesn't re-render React 60 times a second
  const visual = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || reduceMotion || !inView) return;
    const { target, format } = counter(match[0]);
    const [before, after] = [value.slice(0, match.index), value.slice(match.index! + match[0].length)];
    const controls = animate(0, target, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        if (visual.current) visual.current.textContent = before + format(n) + after;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span ref={visual} aria-hidden="true" className="tabular-nums">
        {value}
      </span>
    </span>
  );
}
