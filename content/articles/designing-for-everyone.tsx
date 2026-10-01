import { Callout, DoDont, Quote } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        When I worked on albert, BAFTA’s sustainability platform for the screen industry, meeting
        WCAG standards was an explicit goal. I came away with a line I’ve repeated in every team
        since: the product has to work for everyone who makes film and TV. That includes the producer reading on a cracked phone in
        bright sunlight, the editor who navigates entirely by keyboard, and the runner who’s
        colour-blind and has never mentioned it.
      </p>
      <p>
        Accessibility isn’t a feature you add at the end. It’s a baseline, like spelling. Here are
        five things I check in every design review. None of them require a specialist, and all of
        them make the product better for everyone, not just the people we usually picture when we
        say “accessibility”.
      </p>

      <Quote cite="Tim Berners-Lee, W3C, 1997">
        The power of the Web is in its universality. Access by everyone regardless of disability is
        an essential aspect.
      </Quote>

      <h2>1. Contrast is not a vibe</h2>
      <p>
        Light grey text on white looks elegant in Dribbble shots and is unreadable in real life.
        WCAG asks for a contrast ratio of at least <strong>4.5:1</strong> for body text and{" "}
        <strong>3:1</strong> for large text and UI elements like input borders. Check it with a
        plugin; don’t trust your expensive monitor.
      </p>
      <DoDont
        dontLabel="Pale grey on white, about 1.9:1. Elegant, and unreadable outdoors."
        doLabel="Dark ink on white, well above 4.5:1. Still calm, actually readable."
        dont={
          <div role="img" aria-label="Example: pale grey text on a white card" className="w-full rounded-xl bg-white p-5">
            <p className="font-display text-lg font-semibold text-[#B5B5B5]">Payment scheduled</p>
            <p className="mt-1 text-sm text-[#C4C4C4]">Your next repayment is on 12 March.</p>
          </div>
        }
        doThis={
          <div role="img" aria-label="Example: dark text on a white card" className="w-full rounded-xl bg-white p-5">
            <p className="font-display text-lg font-semibold text-[#111]">Payment scheduled</p>
            <p className="mt-1 text-sm text-[#4A4A4A]">Your next repayment is on 12 March.</p>
          </div>
        }
      />

      <h2>2. Never let colour do the talking alone</h2>
      <p>
        Roughly 1 in 12 men and 1 in 200 women have some form of colour vision deficiency. If the
        only thing telling someone a field is wrong is a red border, a lot of people won’t see the
        problem at all. Pair colour with an icon, a word, or both.
      </p>
      <DoDont
        dontLabel="The error is shown only by a red border."
        doLabel="An icon and a sentence explain what’s wrong and how to fix it."
        dont={
          <div className="w-full">
            <p className="mb-2 text-sm text-ink">Email</p>
            <div className="rounded-lg border-2 border-[#E5484D] bg-raised px-4 py-3 text-sm text-ink">
              ada@gmial.com
            </div>
          </div>
        }
        doThis={
          <div className="w-full">
            <p className="mb-2 text-sm text-ink">Email</p>
            <div className="rounded-lg border-2 border-[#E5484D] bg-raised px-4 py-3 text-sm text-ink">
              ada@gmial.com
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm text-ink">
              <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E5484D] text-[10px] font-bold text-white">
                !
              </span>
              Check the spelling: did you mean gmail.com?
            </p>
          </div>
        }
      />

      <h2>3. Design the focus state, don’t delete it</h2>
      <p>
        Lots of people never touch a mouse: keyboard users, switch users, people with a broken
        trackpad. The focus ring is their cursor. Designers often hide it because the browser
        default is ugly. The fix isn’t removing it; it’s <strong>designing a better one</strong>{" "}
        and putting it in the component library next to hover and pressed.
      </p>
      <DoDont
        dontLabel="No visible focus. A keyboard user has no idea where they are."
        doLabel="A clear, on-brand ring that meets 3:1 contrast against the background."
        dont={
          <div className="flex gap-3">
            <span className="rounded-full bg-raised px-5 py-2.5 text-sm text-ink">Back</span>
            <span className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent">Continue</span>
          </div>
        }
        doThis={
          <div className="flex gap-3">
            <span className="rounded-full bg-raised px-5 py-2.5 text-sm text-ink">Back</span>
            <span className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent outline outline-2 outline-offset-4 outline-ink">
              Continue
            </span>
          </div>
        }
      />
      <p>
        Try it on this page: press <code>Tab</code> a few times. Every link and button you land on
        should be obvious. If it isn’t, that’s a bug, and I’d genuinely like to hear about it.
      </p>

      <h2>4. Give every control a name and room to breathe</h2>
      <p>
        An icon-only button is a riddle for a screen reader unless it has an accessible label, and a
        24px tap target is a riddle for anyone with large thumbs or a shaky bus ride. Aim for{" "}
        <strong>at least 44 by 44 points</strong>, and label icons in the design file so engineers
        know what to announce.
      </p>
      <DoDont
        dontLabel="A tiny, unlabelled icon. Screen readers announce “button”."
        doLabel="A 44pt target with a visible label, or at minimum an aria-label in the spec."
        dont={
          <span className="flex h-6 w-6 items-center justify-center rounded border border-control text-xs text-ink">
            <svg width="16" height="4" viewBox="0 0 16 4" aria-hidden="true" fill="currentColor"><circle cx="2" cy="2" r="1.6" /><circle cx="8" cy="2" r="1.6" /><circle cx="14" cy="2" r="1.6" /></svg>
          </span>
        }
        doThis={
          <span className="flex min-h-[44px] items-center gap-2 rounded-full border border-control px-5 text-sm text-ink">
            <svg width="16" height="4" viewBox="0 0 16 4" aria-hidden="true" fill="currentColor"><circle cx="2" cy="2" r="1.6" /><circle cx="8" cy="2" r="1.6" /><circle cx="14" cy="2" r="1.6" /></svg> More options
          </span>
        }
      />

      <h2>5. Write like you’re standing next to them</h2>
      <p>
        This one surprises people, but words are accessibility too. On the Carbon loans redesign,
        a real chunk of the work was rewriting decline and error messages that confused people,
        not drawing new UI. Plain language helps people with cognitive disabilities, people
        reading in a second language, and every stressed person trying to sort out their money at
        11pm.
      </p>
      <ul>
        <li>Say what happened, why, and what to do next, in that order.</li>
        <li>Use the words your users use, not your internal ones.</li>
        <li>Write alt text that describes the purpose of the image, not just its pixels.</li>
      </ul>

      <Callout label="The 5-minute review">
        <p>Before your next handoff, run through these out loud with the team:</p>
        <ol className="list-decimal space-y-2 pl-5 marker:text-accent">
          <li>Does all text pass 4.5:1, and UI elements 3:1?</li>
          <li>Is anything communicated by colour alone?</li>
          <li>Is there a designed focus state for every interactive component?</li>
          <li>Are targets at least 44pt, and are icon buttons labelled?</li>
          <li>Would a stressed, distracted person understand every message?</li>
        </ol>
      </Callout>

      <p>
        None of this makes design less creative. If anything, it makes it more honest. A beautiful
        screen that some people can’t use isn’t finished yet.
      </p>
    </>
  );
}
