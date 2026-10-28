"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/useLocale";

/** Decorative: types the prompt, then streams steps. Hidden from assistive tech. */
export default function Terminal() {
  const { dict } = useLocale();
  const { prompt } = dict.ai.terminal;
  const steps = dict.ai.terminal.steps.map((text, i, all) =>
    i === all.length - 1 ? { mark: "✓", text, done: true } : { mark: "●", text, done: false },
  );
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setTyped(prompt.length);
      setShown(steps.length);
      return;
    }
    let t: ReturnType<typeof setTimeout>;
    let chars = 0;
    let lines = 0;
    const typeChar = () => {
      chars += 1;
      setTyped(chars);
      t = setTimeout(chars < prompt.length ? typeChar : nextLine, chars < prompt.length ? 32 : 400);
    };
    const nextLine = () => {
      lines += 1;
      setShown(lines);
      if (lines < steps.length) t = setTimeout(nextLine, 520);
    };
    t = setTimeout(typeChar, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  const finished = shown === steps.length;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative border-t border-line bg-raised p-6 font-mono text-[13px] leading-7 md:border-l md:border-t-0 md:p-8"
    >
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <p className="text-muted">~/portfolio</p>
      <p>
        <span className="text-accent">›</span> {prompt.slice(0, typed)}
        {typed < prompt.length && <Caret />}
      </p>
      {/* Every line is laid out up front (invisible) so streaming never shifts the page */}
      {steps.map((s, i) => (
        <p
          key={s.text}
          className={`${i < shown ? "motion-safe:animate-[line-in_0.35s_ease-out]" : "invisible"} ${
            s.done ? "text-ink" : "text-muted"
          }`}
        >
          <span className="text-accent">{s.mark}</span> {s.text}
        </p>
      ))}
      <p className={finished ? "" : "invisible"}>
        <span className="text-accent">›</span> <Caret />
      </p>
    </div>
  );
}

function Caret() {
  return (
    <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-accent motion-safe:animate-[blink_1s_steps(1)_infinite]" />
  );
}
