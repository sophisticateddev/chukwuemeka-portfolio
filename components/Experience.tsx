"use client";

import FadeUp from "./FadeUp";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeUp className="mb-14">
        <p className="text-xs text-accent tracking-widest uppercase mb-2">Background</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">Experience</h2>
        <div className="mt-6 h-px bg-border" />
      </FadeUp>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-10 md:space-y-0">
          {experience.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.1}>
              <div className="md:flex gap-0">
                {/* Date column */}
                <div className="md:w-[180px] shrink-0 md:pr-10 mb-2 md:mb-0 md:pt-1">
                  <div className="md:text-right">
                    <p className="text-xs text-muted tracking-wide">{item.period}</p>
                    <p className="text-xs text-muted/60 mt-0.5">{item.location}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start pt-1.5 px-0">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-border border-2 border-bg ring-1 ring-border -translate-x-[5px]" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:pl-8 pb-10 md:pb-12 flex-1 border-b border-border last:border-0">
                  <h3 className="font-serif text-xl text-ink leading-snug mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent mb-3">{item.company}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
