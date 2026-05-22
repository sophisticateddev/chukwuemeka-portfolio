"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 pt-32 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Top status pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 text-xs text-muted border border-border rounded-full px-3 py-1.5 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Open to remote &amp; hybrid
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6 max-w-3xl"
      >
        Senior Product
        <br />
        <span className="italic text-muted">Designer</span>
      </motion.h1>

      {/* Location + divider */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-4 text-sm text-muted"
      >
        <span>Nottingham, UK</span>
        <span className="w-px h-4 bg-border" />
        <span>Fintech · SaaS · Enterprise</span>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-16 md:mt-24 flex items-center gap-3 text-xs text-muted tracking-widest uppercase"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-muted/40"
        />
        Scroll
      </motion.div>
    </section>
  );
}
