"use client";

import FadeUp from "./FadeUp";

const skills = [
  "Product Strategy",
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeUp className="mb-14">
        <p className="text-xs text-accent tracking-widest uppercase mb-2">About</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">
          The Designer
        </h2>
        <div className="mt-6 h-px bg-border" />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — professional */}
        <FadeUp delay={0.1}>
          <div className="space-y-6">
            <p className="text-base text-muted leading-relaxed">
              I'm a Senior Product Designer with 7+ years of experience building
              digital products that people actually want to use. I sit at the
              intersection of research, craft, and strategy — equally comfortable
              in a discovery workshop and pixel-pushing in Figma.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I've designed across fintech, health, and B2B SaaS — often as the
              only designer on a team, which means I've learned to work fast,
              communicate clearly, and advocate hard for the user when everyone
              else is looking at the backlog.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Right now I'm based in the UK and open to senior IC or lead roles,
              full-time or contract. Remote-first. Occasional London.
            </p>

            {/* Skills */}
            <div className="pt-2">
              <p className="text-xs text-muted tracking-widest uppercase mb-3">
                Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-full border border-border text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right — personal */}
        <FadeUp delay={0.2}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-white border border-border p-6">
              <span className="text-2xl mb-3 block">🍳</span>
              <h3 className="font-serif text-xl text-ink mb-2">
                Cooking is my other design practice
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I approach the kitchen the same way I approach a product — with
                curiosity, iteration, and a healthy disregard for recipes as
                written. Nigerian cuisine is my foundation; everything else is
                exploration.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-border p-6">
              <span className="text-2xl mb-3 block">⚽</span>
              <h3 className="font-serif text-xl text-ink mb-2">
                Football keeps me honest
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A lifelong football fan who believes the beautiful game is really
                just systems design with better aesthetics. I play when I can,
                watch more than I should, and argue about formations with
                anyone who'll listen.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="w-8 h-px bg-border" />
              <span>Based in the UK · Originally from Nigeria</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
