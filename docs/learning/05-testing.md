# Lesson 5: Testing (proof it keeps working)

**The idea in one sentence:** Tests are small scripts that check a component behaves as intended, so later changes can't quietly break it.

**Why employers care:** "Ship fast" only works safely with tests, and interviewers ask about it.

**Read:** storybook.js.org → "Interaction tests" (`play` functions) and "Accessibility tests"; testing-library.com → "Guiding Principles" ("query by role, the way users do").

## Two kinds of test in this repo

**1. Interaction tests.** A `play` function is a short script attached to a story. It acts like a user: tab to a button, press Enter, then check what happened. For `ThemeToggle` that means "after pressing it, `<html>` has the opposite `data-theme`":

```tsx
// the shape of a play function (see components/ThemeToggle.stories.tsx once Phase 4 lands)
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
  await expect(document.documentElement.dataset.theme).toBeDefined();
},
```

**2. Accessibility tests.** The test runner opens every story in a real browser and runs **axe**, an engine that checks for known accessibility failures such as low contrast or missing labels. Any violation fails the run.

## Why query by role

`getByRole("button")` finds the element the way a screen reader user would: "the thing that's a button". Querying a CSS class like `.btn-primary` breaks when someone restyles it, and proves nothing about accessibility. If the role query *can't* find your control, that's a real bug: the markup isn't semantic.

## What axe catches, and what it can't

Catches (roughly a third of WCAG issues): missing accessible names, colour contrast of text, invalid ARIA, duplicate IDs.

Can't catch: whether the focus order makes sense, whether the label is *helpful*, whether an animation is too much, whether a keyboard user can operate a custom widget. Those need a human with a keyboard and a screen reader.

## What the repo's tests protect

- [`ThemeToggle`](../../components/ThemeToggle.tsx): pressing it flips `data-theme`, and the accessible name changes to match.
- [`Magnetic`](../../components/Magnetic.tsx): under reduced motion, the transform stays at 0 after a pointer move.
- [`LanguageSwitch`](../../components/LanguageSwitch.tsx): reachable by keyboard, with a correct name.
- [`BackToTop`](../../components/BackToTop.tsx): appears after scrolling, and moves the user to the top.

## Glossary

- **Test:** code that checks other code.
- **Assertion:** one check, such as `expect(x).toBe(y)`.
- **Play function:** a script that drives a story like a user.
- **Testing Library:** the toolkit (`within`, `getByRole`) for finding elements the way users do.
- **axe:** the accessibility rules engine.
- **Test runner:** the program that opens each story in a real browser and runs the checks.
- **CI:** a robot that runs the tests on every change (Lesson 6).

## Try it by hand (no AI)

Once the `ThemeToggle` play test exists, change an expected label so it fails. Run `npm run test-storybook` and read the failure. Then fix it.

## Explain it back

1. Why query `getByRole("button")` and not a CSS class?
2. What does the axe test catch, and what can't it catch?
3. Why test a reduced-motion story at all?

<details>
<summary>Model answers</summary>

1. Roles match how users and assistive tech find things, so the test survives restyling and also fails if the markup stops being a real button.
2. It catches mechanical failures (contrast, names, invalid ARIA). It can't judge focus order, label quality, or how a flow feels with a screen reader.
3. A fallback nobody exercises breaks silently. The test proves the no-motion path still works.

</details>
