"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { articles } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeUp className="mb-14">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-xs text-accent tracking-widest uppercase mb-2">Writing</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Articles
            </h2>
          </div>
        </div>
        <div className="mt-6 h-px bg-rim" />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article, i) => (
          <FadeUp key={article.id} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group cursor-pointer rounded-2xl border border-rim bg-white p-6 hover:border-ink/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-paper text-muted border border-rim tracking-wide">
                  {article.tag}
                </span>
                <span className="text-xs text-muted">{article.readTime}</span>
              </div>

              <h3 className="font-serif text-xl text-ink mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{article.date}</span>
                <span className="text-xs text-ink flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read →
                </span>
              </div>
            </motion.article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
