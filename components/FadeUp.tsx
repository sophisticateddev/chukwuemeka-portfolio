"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades content up as it scrolls into view.
 * Always renders the same element on server and client: branching on reduced motion here
 * left server-rendered content stuck at opacity 0 for people who ask for less motion.
 * MotionProvider's reducedMotion="user" drops the movement for them and keeps a plain fade.
 */
export default function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
