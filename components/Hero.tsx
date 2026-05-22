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
        className="flex items-center gap-4 text-sm text-muted mb-8"
      >
        <span>Nottingham, UK</span>
        <span className="w-px h-4 bg-border" />
        <span>Fintech · SaaS · Enterprise</span>
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex items-center gap-3"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          href="/Chukwuemeka_Iheonye_Resume.pdf"
          download="Chukwuemeka_Iheonye_Resume.pdf"
          className="inline-flex items-center gap-2 bg-ink text-bg text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download CV
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:kingsleyiheonye@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-muted border border-border px-5 py-2.5 rounded-full hover:border-ink hover:text-ink transition-colors duration-200"
        >
          Get in touch
        </motion.a>
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
