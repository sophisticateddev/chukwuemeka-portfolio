"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Off by default: content further down the page is simply there when you reach it.
   * Turned on for the hero's load sequence and for rows a visitor reveals with "Show all".
   */
  animate?: boolean;
}

/**
 * With `animate`, fades content up as it comes into view. The element is the same on server
 * and client either way; MotionProvider's reducedMotion="user" keeps it to a plain fade
 * for people who ask for less motion.
 */
export default function FadeUp({ children, delay = 0, className = "", animate = false }: FadeUpProps) {
  if (!animate) return <div className={className}>{children}</div>;
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
