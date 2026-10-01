"use client";

import { motion } from "framer-motion";

interface RevealWordsProps {
  text: string;
  delay?: number;
  /** "mount" for above-the-fold text, "view" to play when scrolled into view */
  trigger?: "mount" | "view";
}

/**
 * Masked word-by-word reveal. Purely visual: callers render the full text
 * for assistive tech separately and mark this aria-hidden.
 */
export default function RevealWords({ text, delay = 0, trigger = "view" }: RevealWordsProps) {
  const words = text.split(" ");
  const play = trigger === "mount" ? { animate: "shown" } : { whileInView: "shown" };

  return (
    <motion.span
      initial="hidden"
      {...play}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, shown: { y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
