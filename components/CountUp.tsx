"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts the first number in `value` up from zero when scrolled into view,
 * e.g. "+25%", "3M+", "< 1 min". Screen readers only ever get the final value.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const match = value.match(/\d+(\.\d+)?/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || reduceMotion || !inView) return;
    const target = parseFloat(match[0]);
    const decimals = match[1] ? match[1].length - 1 : 0;
    const [before, after] = [value.slice(0, match.index), value.slice(match.index! + match[0].length)];
    const controls = animate(0, target, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setDisplay(before + n.toFixed(decimals) + after),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {display}
      </span>
    </span>
  );
}
