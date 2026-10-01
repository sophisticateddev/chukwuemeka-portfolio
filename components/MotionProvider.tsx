"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// "user" = framer skips transform/layout animations when the OS asks for reduced motion.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
