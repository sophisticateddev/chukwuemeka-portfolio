import { Callout, DoDont, Figure } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        Halfway through a research session on albert, BAFTA’s carbon toolkit for film and TV, I
        asked a simple question: who actually knows what happened on set last week? Session after
        session, the answer was the same. Not the person with the login. The detail lived with the
        crew, the heads of department, the finance team, and in receipts nobody had time to type
        up.
      </p>
      <p>
        That moment changed how I design. A year later, working on Writesea’s writing platform for
        universities, I ran into the same problem from the other side. Here’s what both projects
        taught me, and the questions I now ask before I draw a single screen.
      </p>

      <h2>The login and the knowledge live in different places</h2>
      <p>
        Most enterprise tools are designed for the person who signs in. It feels obvious: that’s
        who uses the product. But in a lot of organisations, the person who signs in is a
        coordinator. They’re collecting information that other people have, often weeks after it
        happened.
      </p>
      <p>
        On albert, that gap had a cost. The toolkit was hard to navigate, so teams put it off until
        post-production. By then, most of the actions and evidence were gone. Productions
        weren’t failing because they didn’t care about sustainability. They were failing because
        the tool asked the wrong person, at the wrong time, to remember everything.
      </p>

      <Figure caption="The person with access and the people with the details are rarely the same. Good design connects them.">
        <svg viewBox="0 0 640 300" role="img" aria-label="On the left, a coordinator with the login. On the right, crew, finance and receipts that hold the details. Arrows labelled assign, import and estimate connect them." className="h-auto w-full">
          <rect width="640" height="300" fill="rgb(var(--surface))" />
          <rect x="40" y="100" width="170" height="100" rx="16" fill="rgb(var(--raised))" stroke="rgb(var(--accent))" strokeWidth="1.5" />
          <text x="62" y="140" fontFamily="sans-serif" fontSize="17" fontWeight="700" fill="rgb(var(--ink))">Has the login</text>
          <text x="62" y="166" fontFamily="sans-serif" fontSize="13" fill="rgb(var(--muted))">Coordinator, admin</text>
          {[
            { y: 40, t: "Crew & departments", s: "What was actually done" },
            { y: 120, t: "Finance", s: "Spend, invoices" },
            { y: 200, t: "Receipts & files", s: "The evidence" },
          ].map((b) => (
            <g key={b.t}>
              <rect x="430" y={b.y} width="170" height="62" rx="14" fill="rgb(var(--raised))" stroke="rgb(var(--line))" />
              <text x="450" y={b.y + 27} fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="rgb(var(--ink))">{b.t}</text>
              <text x="450" y={b.y + 47} fontFamily="sans-serif" fontSize="12" fill="rgb(var(--muted))">{b.s}</text>
            </g>
          ))}
          {[
            { y: 71, label: "assign" },
            { y: 151, label: "import" },
            { y: 231, label: "estimate" },
          ].map((a) => (
            <g key={a.label}>
              <path d={`M214 150 C 300 150, 330 ${a.y}, 426 ${a.y}`} stroke="rgb(var(--accent))" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
              <text x="318" y={(150 + a.y) / 2 - 6} fontFamily="monospace" fontSize="12" fill="rgb(var(--accent))">{a.label}</text>
            </g>
          ))}
        </svg>
      </Figure>

      <h2>Design the hand-off, not just the form</h2>
      <p>
        Once we saw the gap, the brief changed. The job wasn’t to make a better form for the
        coordinator. It was to get information from the people who have it, while it’s still fresh.
        Three design moves did most of the work.
      </p>

      <h3>1. Let people assign the work</h3>
      <p>
        In the redesigned action plan, any suggested action can be added to the plan, assigned to
        a named person and given a frequency. That person sees it in their own task list and
        updates it as they go. The coordinator stops chasing and starts reviewing.
      </p>

      <h3>2. Accept the format people already use</h3>
      <p>
        Finance teams don’t think in forms, they think in spreadsheets. So we added an import that
        takes a CSV or Excel file of up to 1,000 rows, with a template to start from, and an
        editable table for anything that needs fixing afterwards. The evidence already existed.
        We just stopped making people retype it.
      </p>

      <h3>3. Make “roughly right now” better than “perfect later”</h3>
      <p>
        Plenty of productions don’t have meter readings for a studio or an office. Instead of a
        dead end, we offered benchmarks: pick the type of space and log an honest estimate today.
        Something recorded during production beats nothing recorded at the end.
      </p>

      <DoDont
        dontLabel="One long form, filled in by one person, months after the work happened."
        doLabel="Small tasks, owned by the people who did the work, recorded as it happens."
        dont={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Carbon footprint</p>
            <p className="mt-1 text-xs text-muted">Section 4 of 12 · Energy, materials, travel…</p>
            <div className="mt-3 h-2 w-full rounded-full bg-line" />
          </div>
        }
        doThis={
          <div className="w-full space-y-2 rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Switch to LED lighting</p>
            <p className="text-xs text-muted">Assigned to: Gaffer · Weekly</p>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-onaccent">
              In progress
            </span>
          </div>
        }
      />

      <p>
        The share of productions starting their footprint in pre-production, instead of after
        wrapping, rose from 30% to 55%. That number matters more to me than any screen I designed,
        because it was the problem the research pointed at.
      </p>

      <h2>Writesea: the same lesson from the other side</h2>
      <p>
        At Writesea I designed for universities. Career coaches set the standards, students do the
        writing, and administrators at universities and resellers set everything up. Three groups,
        three very different jobs, one product.
      </p>
      <p>
        When we built the template builder, it would have been easy to design for the person
        configuring it and hand students a blank page with lots of options. Instead, coaches set the
        structure once, and students start from a template that already reflects what good looks
        like. Fewer decisions, clearer feedback, less back-and-forth. Launching it shortened time to
        market and cut the support workload by about half a person’s time.
      </p>
      <p>
        The admin modules followed the same idea. The people setting up a university aren’t the
        people using it day to day, so the admin side did the heavy lifting once, and everyone
        else got a simpler product.
      </p>

      <Callout label="Four questions I ask at every kickoff">
        <p>
          <strong>Who has the login?</strong> That’s who the tool is usually designed for.
        </p>
        <p>
          <strong>Who has the information?</strong> That’s who the tool actually depends on.
        </p>
        <p>
          <strong>When does the information exist?</strong> Design for that moment, not the
          deadline.
        </p>
        <p>
          <strong>What do they already use?</strong> Spreadsheets, receipts, templates, email. Meet
          them there.
        </p>
      </Callout>

      <h2>What I’d do differently</h2>
      <p>
        I’d map who holds which information on day one, before talking about features. On albert we
        found the gap through research, which is the right way to find it, but a simple “who knows
        what, and when” map in the first week would have got us there faster.
      </p>
      <p>
        The best enterprise tools don’t just serve the person signing in. They quietly connect them
        to everyone else who makes the work happen. Design for the person holding the receipt, and
        the person holding the login has a much easier job.
      </p>
    </>
  );
}
