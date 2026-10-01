import { Callout, DoDont, Figure, Quote } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        This morning, before I’d finished my tea, AI had already made a dozen decisions for me. My
        phone sorted my notifications. My email filtered out the spam. My music app picked a playlist
        that was, annoyingly, exactly right. My keyboard finished three of my sentences. None of it
        announced itself as “AI”. It just felt like the product being good.
      </p>
      <p>
        That’s the part designers sometimes miss. We talk about AI as if it’s a chatbot in the
        corner of the screen. Most of the time, it’s the invisible layer underneath the interface,
        deciding what to show, in what order, and when.
      </p>

      <Quote cite="Mark Weiser, Scientific American, 1991">
        The most profound technologies are those that disappear.
      </Quote>

      <h2>The layer you’re already designing</h2>
      <p>
        Every time you design a feed, a search result, a “recommended for you” row or a smart
        default, you’re designing the surface of a model. The UI is the part people see; the
        predictions underneath shape what they experience.
      </p>
      <Figure caption="The interface people see sits on top of decisions a model is making about what they’ll see.">
        <svg viewBox="0 0 640 300" role="img" aria-label="Three stacked layers: interface on top, decisions in the middle, model and data at the bottom" className="h-auto w-full">
          <rect width="640" height="300" fill="#131417" />
          {[
            { y: 40, label: "Interface", sub: "What people see and touch", fill: "#C6F135", text: "#0B0C0E" },
            { y: 120, label: "Decisions", sub: "Ranking, defaults, suggestions, filters", fill: "#1A1C20", text: "#F4F4F1" },
            { y: 200, label: "Model + data", sub: "Patterns learned from behaviour", fill: "#1A1C20", text: "#F4F4F1" },
          ].map((l, i) => (
            <g key={l.label}>
              <rect x={60 + i * 20} y={l.y} width={520 - i * 40} height="64" rx="14" fill={l.fill} stroke="#26282D" />
              <text x={88 + i * 20} y={l.y + 30} fontFamily="sans-serif" fontSize="18" fontWeight="700" fill={l.text}>
                {l.label}
              </text>
              <text x={88 + i * 20} y={l.y + 50} fontFamily="sans-serif" fontSize="13" fill={l.text} opacity="0.75">
                {l.sub}
              </text>
            </g>
          ))}
          <path d="M560 232 C 610 200, 610 110, 560 80" stroke="#C6F135" strokeWidth="2" fill="none" strokeDasharray="5 5" />
          <text x="596" y="160" fontFamily="monospace" fontSize="11" fill="#A6A8AE" transform="rotate(90 596 160)">
            feedback loop
          </text>
        </svg>
      </Figure>

      <h2>What changes when the system can be wrong</h2>
      <p>
        Traditional software is predictable: press the button, get the result. AI is
        probabilistic. It’s usually right, sometimes confidently wrong. That one difference changes
        how I design in three ways.
      </p>

      <h3>1. Show your working</h3>
      <p>
        People trust a suggestion more when they can see why it appeared. A short “because you
        read…” line does more for trust than any amount of polish.
      </p>
      <DoDont
        dontLabel="A confident black box. Why this? Can I change it? Nobody knows."
        doLabel="The suggestion explains itself and leaves the person in control."
        dont={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">We rewrote your intro</p>
            <p className="mt-2 text-sm text-muted">Your changes have been applied.</p>
          </div>
        }
        doThis={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Suggested: a shorter intro</p>
            <p className="mt-1 text-xs text-muted">Because your first paragraph is 3× your usual length</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-onaccent">Apply</span>
              <span className="rounded-full border border-control px-3 py-1.5 text-xs text-ink">Compare</span>
              <span className="rounded-full px-3 py-1.5 text-xs text-muted">Dismiss</span>
            </div>
          </div>
        }
      />

      <h3>2. Make undo effortless</h3>
      <p>
        If the system will sometimes guess wrong, recovering has to cost almost nothing. Undo,
        “not interested”, easy edits. At Writesea, where I design AI-assisted writing tools, my rule
        is simple: the writer should never feel the AI took something from them.
      </p>

      <h3>3. Design for the “I don’t know”</h3>
      <p>
        Good AI products have a graceful state for low confidence. Instead of a bad guess, they ask
        a question, offer a couple of options, or step back and let the person lead. Designing that
        state is as important as designing the happy path.
      </p>

      <h2>AI is changing how I work, too</h2>
      <p>
        It’s not just the products. AI has changed my process. I use it to cluster research notes,
        draft first-pass UX copy, and build working prototypes in code instead of clickable
        mock-ups. This portfolio, for instance, was built with Claude Code.
      </p>
      <p>
        But the judgement calls stay with me: what problem we’re solving, who we might be leaving
        out, and whether the thing actually helps. AI makes me faster. It doesn’t make me right.
      </p>

      <Callout label="Questions for your next AI feature review">
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          <li>Can a person tell why the system did what it did?</li>
          <li>How fast can they undo or correct it?</li>
          <li>What happens when the model isn’t confident?</li>
          <li>Who might this get wrong more often, and have we tested with them?</li>
        </ul>
      </Callout>
    </>
  );
}
