"use client";

import FadeUp from "./FadeUp";

const skills = [
  "End-to-End Product Design",
  "Interaction Design & UX Strategy",
  "Mobile Design (iOS & Android)",
  "User Research & Usability Testing",
  "Information Architecture",
  "Design Systems",
  "Wireframing & Prototyping",
  "Agile & Scrum",
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
              Product Designer with over six years of experience designing
              intuitive, user-centred digital products across fintech, SaaS, and
              emerging digital platforms. I work across the full product
              lifecycle — from user research and concept exploration to
              high-fidelity design and developer handoff.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I specialise in simplifying complex systems into clear, engaging
              user journeys, particularly for mobile and web applications. At
              BAFTA I led UX across digital platforms aligned to WCAG
              accessibility standards. At Carbon MFB I led redesigns that
              increased engagement by 40% and improved retention by 25% — for
              products used by over 3 million people.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Currently designing for Writesea, an AI writing and publishing
              platform. Based in Nottingham, UK — open to remote and
              hybrid-friendly roles.
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
                just systems design with better aesthetics. I watch more than I
                should, and argue about formations with anyone who'll listen.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="w-8 h-px bg-border" />
              <span>Nottingham, UK · Originally from Nigeria</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
