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
          The person behind the work
        </h2>
        <div className="mt-6 h-px bg-rim" />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — personal first, then professional */}
        <FadeUp delay={0.1}>
          <div className="space-y-6">
            <p className="text-base text-muted leading-relaxed">
              I'm Chukwuemeka — a product designer who grew up in Nigeria and
              now lives in Nottingham. I'm the kind of person who rewatches
              football matches to study formations, argues that jollof rice is
              a design problem (too many variables, not enough constraints), and
              genuinely believes the best ideas come from conversations that
              start with "what if we just…"
            </p>
            <p className="text-base text-muted leading-relaxed">
              Professionally, I've spent 6+ years designing digital products
              across fintech, SaaS, and enterprise — at places like BAFTA,
              Carbon MFB (3M+ users), and Writesea. I work across the full
              product lifecycle: from sitting with users to understand what's
              actually broken, to shipping high-fidelity designs that
              engineers can build without three rounds of back-and-forth.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I care about craft — but I care more about whether the thing
              actually works for the person using it. If the design is
              beautiful but confusing, it's not done yet.
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
                    className="text-sm px-3 py-1.5 rounded-full border border-rim text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right — specific personal things */}
        <FadeUp delay={0.2}>
          <div className="space-y-5">

            <div className="rounded-2xl bg-white border border-rim p-6">
              <span className="text-2xl mb-3 block">⚽</span>
              <h3 className="font-serif text-xl text-ink mb-2">
                Football is my other UX research
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I watch matches with a notebook. Literally. Formations, pressing
                triggers, how managers adapt at half-time — it's all systems
                thinking with better aesthetics. Will argue about it if you
                bring it up.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-rim p-6">
              <span className="text-2xl mb-3 block">🍳</span>
              <h3 className="font-serif text-xl text-ink mb-2">
                I used to cater for events
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Nigerian cuisine is my baseline — egusi, jollof, ofe onugbu.
                I cooked professionally for events before design took over full
                time. I cook from memory, not recipes, and I still get requests.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-rim p-6">
              <span className="text-2xl mb-3 block">📚</span>
              <h3 className="font-serif text-xl text-ink mb-2">
                I mentor on ADPList
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I spend time mentoring junior designers — particularly those
                breaking into the industry from non-traditional backgrounds.
                If you're early in your career and want to talk, my ADPList
                is open.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted pt-1">
              <span className="w-8 h-px bg-rim" />
              <span>Nottingham, UK · Originally from Nigeria</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
