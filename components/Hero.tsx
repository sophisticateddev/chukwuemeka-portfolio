"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

        {/* Left — role + tagline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted tracking-widest uppercase">
              Open to remote &amp; hybrid
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-6xl text-ink leading-[1.08] tracking-tight max-w-xl"
          >
            Senior Product Designer
            <br />
            <span className="italic text-muted">making complex things clear.</span>
          </motion.h1>
        </div>

        {/* Right — details + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-5 md:items-end shrink-0"
        >
          <div className="text-sm text-muted md:text-right space-y-1">
            <p>Nottingham, UK</p>
            <p>Fintech · SaaS · Enterprise</p>
            <p>6+ years experience</p>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="/Chukwuemeka_Iheonye_Resume.pdf"
              download="Chukwuemeka_Iheonye_Resume.pdf"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:kingsleyiheonye@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted border border-rim px-5 py-2.5 rounded-full hover:border-ink hover:text-ink transition-colors duration-200"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
