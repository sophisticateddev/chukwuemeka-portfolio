import { Callout, Code, Figure } from "@/components/writing/Blocks";
import FlexDemo from "@/components/writing/FlexDemo";

const mapping = [
  { figma: "Auto layout on", css: "display: flex" },
  { figma: "Horizontal / Vertical", css: "flex-direction: row / column" },
  { figma: "Spacing between items", css: "gap" },
  { figma: "Padding", css: "padding" },
  { figma: "Alignment", css: "align-items + justify-content" },
  { figma: "Hug contents", css: "width: fit-content (the item sizes to its content)" },
  { figma: "Fill container", css: "flex: 1 (or align-self: stretch on the cross axis)" },
  { figma: "Fixed width", css: "width: 240px; flex-shrink: 0" },
  { figma: "Wrap", css: "flex-wrap: wrap" },
];

export default function Article() {
  return (
    <>
      <p>
        I learned Flexbox before I learned Auto Layout, mostly out of stubbornness. I wanted to
        know why engineers kept saying my designs were “hard to build”. Then Figma shipped Auto
        Layout in late 2019 and I had the strangest feeling of déjà vu. The panel on the right was
        Flexbox, wearing a designer’s jacket.
      </p>
      <p>
        That’s not a criticism. It’s the best thing about it. When your design tool thinks the way
        the browser thinks, the gap between what you draw and what ships gets very small.
      </p>

      <h2>Same idea, different names</h2>
      <p>
        Flexbox lays children out along one axis, with spacing and alignment rules, and lets items
        grow or shrink to fit. Auto Layout does exactly the same thing. Once you see the mapping,
        you can’t unsee it:
      </p>

      <div className="not-prose my-10 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] text-left text-sm">
          <caption className="sr-only">Figma Auto Layout settings and their CSS Flexbox equivalents</caption>
          <thead className="bg-surface">
            <tr>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                Figma
              </th>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                CSS
              </th>
            </tr>
          </thead>
          <tbody>
            {mapping.map((m) => (
              <tr key={m.figma} className="border-t border-line">
                <td className="px-5 py-3 text-ink">{m.figma}</td>
                <td className="px-5 py-3 font-mono text-[13px] text-accent">{m.css}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Play with it</h2>
      <p>
        Change the settings below. The preview is real CSS, and the panels show what you’d write in
        code and what you’d set in Figma. Same container, two vocabularies.
      </p>
      <Figure caption="Interactive: one flex container, described in CSS and in Figma terms at the same time.">
        <FlexDemo />
      </Figure>

      <h2>Why this makes you a better designer</h2>
      <h3>Your designs survive real content</h3>
      <p>
        A static frame looks perfect with the copy you typed. Auto Layout frames reflow when the
        button label is translated into German or the user’s name is 40 characters long. That’s the
        browser’s behaviour, and now your file has it too.
      </p>
      <h3>Handoff becomes a conversation, not a translation</h3>
      <p>
        When I say “this is a vertical stack, 16 gap, 24 padding, children fill the width”, an
        engineer can write it almost word for word:
      </p>
      <Code label="card.css">{`.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
}
.card > * {
  align-self: stretch; /* Fill container */
}`}</Code>
      <h3>You stop fighting the tool</h3>
      <p>
        Most Auto Layout frustration comes from nesting. In CSS, nobody builds a page from one
        giant flex container; you nest small ones. Treat frames the same way: a row inside a
        column inside a card. Each one does one job.
      </p>

      <Callout label="Try this">
        <p>
          Next time you hand off a component, open your browser’s dev tools on a similar component
          in production. Compare its flex settings to your Auto Layout panel. The first time they
          match exactly is oddly satisfying.
        </p>
      </Callout>

      <p>
        Figma didn’t invent this way of thinking, and that’s exactly why it works. The best design
        tools borrow from the medium we’re designing for. Learn a little of the medium, and the
        tool starts to make a lot more sense.
      </p>
    </>
  );
}
