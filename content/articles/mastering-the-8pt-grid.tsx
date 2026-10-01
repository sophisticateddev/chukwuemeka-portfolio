import { Callout, Code, Figure, Quote } from "@/components/writing/Blocks";
import GridDemo from "@/components/writing/GridDemo";

export default function Article() {
  return (
    <>
      <p>
        For the first couple of years of my career, I spaced things by feel. Twelve pixels here
        because it looked right. Fifteen there because twelve looked tight. Nineteen under a heading
        because I nudged it with the arrow keys until my eyes stopped complaining. Every screen
        looked fine on its own. Put them side by side, and something always felt slightly off, like a
        song where the drummer is half a beat late.
      </p>
      <p>
        The 8pt grid fixed that. Not because it’s magic, but because it took a thousand tiny
        decisions off my plate and replaced them with one: <strong>everything is a multiple of 8.</strong>
      </p>

      <h2>Why 8, and not 5 or 10?</h2>
      <p>
        Most popular screen sizes divide cleanly by 8, and so do the scaling factors devices use
        (1x, 1.5x, 2x, 3x). An 8pt value at 1.5x is a whole 12px, so you avoid the blurry half-pixels
        you get from odd numbers. It’s also big enough to make differences visible. Going from 8 to
        16 is a real step; going from 10 to 12 is a shrug.
      </p>
      <p>
        Google’s Material Design and most mature design systems I’ve worked with use an
        8-based scale for exactly this reason. You’re not adopting a fad; you’re joining a default.
      </p>

      <h2>See the difference</h2>
      <p>
        Here’s the same card twice. The first uses the kind of spacing I used to eyeball. The second
        snaps everything to 8. Toggle the grid overlay and watch the second one lock into place.
      </p>
      <Figure caption="Interactive: switch between eyeballed spacing and 8pt spacing, and toggle the grid overlay.">
        <GridDemo />
      </Figure>
      <p>
        Neither card is ugly. But the 8pt version has a rhythm your eye picks up even if you can’t
        name it. That’s the whole game: <strong>consistency people feel, not see.</strong>
      </p>

      <h2>The rules I actually follow</h2>
      <ol>
        <li>
          <strong>Spacing is always a multiple of 8:</strong> 8, 16, 24, 32, 40, 48, 64, 80. If I
          need something smaller for tight components like chips and icon padding, I allow 4 as a
          half-step. Nothing else.
        </li>
        <li>
          <strong>Component heights snap too.</strong> Buttons at 40 or 48, inputs at 48, list rows
          at 56 or 64. That also keeps touch targets above the 44px minimum without thinking about it.
        </li>
        <li>
          <strong>Line heights are multiples of 4.</strong> A 16px body with a 24px line height, an
          18px lead with 28. Type doesn’t sit on the grid perfectly, so I let the line box do the
          work.
        </li>
        <li>
          <strong>Inner spacing is smaller than outer spacing.</strong> Things that belong together
          get 8 or 16; groups get 24 or 32; sections get 64 and up. Proximity does half your
          hierarchy for free.
        </li>
      </ol>

      <Quote cite="Dieter Rams">Good design is as little design as possible.</Quote>

      <h2>Turn it into tokens</h2>
      <p>
        A grid in your head is a suggestion. A grid in your design tokens is a system. I name
        spacing by step, not by pixel, so nobody is tempted to type a random number:
      </p>
      <Code label="tokens.css">{`:root {
  --space-1: 4px;   /* half-step, use sparingly */
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
}`}</Code>
      <p>
        In Figma, the same scale lives as spacing variables, and Auto Layout gaps pull from them.
        When the engineer’s CSS and my Figma file share the same names, handoff conversations get
        noticeably shorter.
      </p>

      <h2>“But it feels restrictive”</h2>
      <p>
        I hear this a lot from designers I mentor. It does feel restrictive, for about a week. Then
        you notice you’ve stopped agonising over 14 versus 15, and you’re spending that energy on
        things that matter, like whether the flow makes sense. Constraints don’t limit good design;
        they clear the table for it.
      </p>

      <Callout label="Try this today">
        <p>
          Open your last project, select everything, and inspect the spacing. Count how many
          different values you used. If it’s more than eight, you’ve found your weekend project.
        </p>
      </Callout>
    </>
  );
}
