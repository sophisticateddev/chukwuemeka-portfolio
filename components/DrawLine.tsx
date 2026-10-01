"use client";

import { motion } from "framer-motion";

/** Divider that draws in from the left when scrolled into view. */
export default function DrawLine({ className = "bottom-0" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute left-0 h-px w-full origin-left bg-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
