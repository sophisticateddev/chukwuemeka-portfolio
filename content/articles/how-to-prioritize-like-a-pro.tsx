import { Callout, Figure, Quote } from "@/components/writing/Blocks";

const tasks = [
  { x: 470, y: 90, label: "Fix checkout error copy", q: "win" },
  { x: 470, y: 150, label: "Update empty states", q: "win" },
  { x: 90, y: 90, label: "Redesign onboarding", q: "bet" },
  { x: 140, y: 150, label: "Design system audit", q: "bet" },
  { x: 480, y: 290, label: "Icon tidy-up", q: "fill" },
  { x: 70, y: 300, label: "Rebuild settings from scratch", q: "pit" },
];

export default function Article() {
  return (
    <>
      <p>
        Before design took over my life full time, I cooked for events. Big crowds, several
        dishes, one kitchen, and a client who wants the jollof out first. The thing that saved me
        wasn’t speed. It was <strong>mise en place</strong>: before any heat goes on, everything is
        chopped, measured and lined up in the order you’ll need it.
      </p>
      <p>
        I didn’t realise how much I needed that habit in design until I was juggling three
        projects, two stakeholders who each believed theirs was the priority, and a Slack that never
        slept. I wasn’t short of time. I was short of clarity.
      </p>

      <Quote cite="Dwight D. Eisenhower, 1954">
        What is important is seldom urgent and what is urgent is seldom important.
      </Quote>

      <h2>1. Get it all out of your head</h2>
      <p>
        Every Monday I do a brain dump: every task, request, half-promise and “quick favour”, on one
        list. You can’t prioritise what you can’t see, and a head full of open loops makes
        everything feel urgent.
      </p>

      <h2>2. Plot impact against effort</h2>
      <p>
        Then I sort the list on two questions: how much will this move the outcome we care about,
        and how much will it cost? It sounds basic. It is. It also ends most arguments, because it
        turns “mine is more important” into a picture everyone can look at together.
      </p>
      <Figure caption="An impact/effort matrix from a typical week. Quick wins first, big bets scheduled, money pits challenged.">
        <svg viewBox="0 0 640 380" role="img" aria-labelledby="matrix-desc" className="h-auto w-full">
          <desc id="matrix-desc">
            Quick wins, high impact and low effort: fix checkout error copy, update empty states.
            Big bets, high impact and high effort: redesign onboarding, design system audit.
            Fill-ins, low impact and low effort: icon tidy-up. Money pit, low impact and high
            effort: rebuild settings from scratch.
          </desc>
          <rect width="640" height="380" fill="rgb(var(--surface))" />
          <rect x="330" y="30" width="280" height="160" rx="12" fill="rgb(var(--accent))" opacity="0.1" />
          <line x1="320" y1="24" x2="320" y2="356" stroke="rgb(var(--control))" />
          <line x1="40" y1="190" x2="610" y2="190" stroke="rgb(var(--control))" />
          <g fontFamily="monospace" fontSize="12" fill="rgb(var(--muted))">
            <text x="50" y="48">BIG BETS · schedule</text>
            <text x="340" y="48" fill="rgb(var(--accent))">QUICK WINS · do first</text>
            <text x="50" y="348">MONEY PIT · challenge</text>
            <text x="340" y="348">FILL-INS · batch</text>
            <text x="20" y="110" transform="rotate(-90 20 110)">MORE IMPACT</text>
            <text x="560" y="210" textAnchor="end">LESS EFFORT</text>
            <text x="50" y="210">MORE EFFORT</text>
          </g>
          {tasks.map((t) => (
            <g key={t.label}>
              <circle cx={t.x - 14} cy={t.y - 4} r="6" fill={t.q === "win" ? "rgb(var(--accent))" : t.q === "bet" ? "rgb(var(--ink))" : "rgb(var(--control))"} />
              <text x={t.x} y={t.y} fontFamily="sans-serif" fontSize="13" fill="rgb(var(--ink))">
                {t.label}
              </text>
            </g>
          ))}
        </svg>
      </Figure>
      <p>
        Quick wins get done this week. Big bets get time blocked on the calendar. Fill-ins get
        batched into one low-energy afternoon. Money pits get a polite but honest conversation.
      </p>

      <h2>3. One priority per day</h2>
      <p>
        Not three. One. If I finish nothing else today, what one thing would make it a good day? I
        write it on a sticky note and put it on my monitor. It’s low-tech and it works embarrassingly
        well.
      </p>

      <h2>4. Protect deep work like a meeting</h2>
      <p>
        Design needs long stretches of uninterrupted thinking. I block two mornings a week as
        “focus” in my calendar, notifications off, and treat them exactly like a meeting with my
        most important stakeholder. Because they are.
      </p>

      <h2>5. Say the trade-off out loud</h2>
      <p>
        Most prioritisation pain is really communication pain. When someone drops a new request on
        you, don’t just say yes or no. Make the trade-off visible:
      </p>
      <figure className="not-prose my-8 rounded-2xl border border-line bg-surface p-6">
        <figcaption className="eyebrow mb-3">A script I use</figcaption>
        <p className="font-display text-xl font-medium leading-relaxed text-ink">
          “Happy to pick this up. To do it this week, I’d need to push the onboarding flow to next
          sprint. Which matters more to you right now?”
        </p>
      </figure>
      <p>
        Nine times out of ten the answer is “oh, the onboarding, this can wait”, and nobody had to
        feel ignored.
      </p>

      <Callout label="My Friday 15">
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          <li>Clear the brain-dump list: done, delegate, drop or schedule.</li>
          <li>Re-plot anything new on the impact/effort matrix.</li>
          <li>Pick next Monday’s one priority before I log off.</li>
          <li>Block next week’s focus mornings if they aren’t already there.</li>
        </ul>
      </Callout>

      <p>
        Juggling multiple projects never really gets easy. But it gets calm. And in my experience,
        calm designers make much better decisions than busy ones.
      </p>
    </>
  );
}
