# Lesson 2: Design tokens and theming

**The idea in one sentence:** Tokens are named design decisions (`ink`, `canvas`, `accent`) stored once as CSS variables, so light and dark mode are just two sets of values.

**Why employers care:** This is where design and code meet. A token system is the core of every design system.

**Read:** [`app/globals.css`](../../app/globals.css) and [`tailwind.config.ts`](../../tailwind.config.ts) in this repo, plus MDN → "Using CSS custom properties".

## Where the values live

Each colour is a CSS variable holding three numbers (red, green, blue). Light is the default:

```css file=app/globals.css
  :root {
    color-scheme: light;
    --canvas: 246 246 242; /* #F6F6F2 */
    --surface: 255 255 255;
    --raised: 238 238 232; /* #EEEEE8 */
    --line: 220 220 212; /* #DCDCD4 */
    --control: 107 111 119; /* #6B6F77, 4.6:1 */
    --ink: 17 18 20; /* #111214, 17.3:1 */
    --muted: 79 82 89; /* #4F5259, 7.2:1 */
    --accent: 61 107 0; /* #3D6B00, 5.9:1; white on it 6.4:1 */
    --onaccent: 255 255 255;
```

Dark mode redefines the *same names* with different numbers:

```css file=app/globals.css
  :root[data-theme="dark"] {
    color-scheme: dark;
    --canvas: 11 12 14;
    --surface: 19 20 23;
    --raised: 26 28 32;
    --line: 38 40 45;
    --control: 92 96 104;
    --ink: 244 244 241;
    --muted: 166 168 174;
    --accent: 198 241 53; /* #C6F135, 14.6:1 */
```

Components never mention a colour value. They say `bg-canvas` or `text-muted`, and the browser looks up whichever set is active.

## How Tailwind connects to the variables

```ts file=tailwind.config.ts
        canvas: "rgb(var(--canvas) / <alpha-value>)", // page background
        surface: "rgb(var(--surface) / <alpha-value>)", // cards
        raised: "rgb(var(--raised) / <alpha-value>)", // inset panels inside cards
```

Why store three numbers and not a hex code? Because `<alpha-value>` lets Tailwind add transparency: `bg-accent/10` becomes `rgb(var(--accent) / 0.1)`. A hex value can't be combined with an opacity that way.

## How the theme switches

There are two triggers:

1. **The system setting.** A media query applies the dark values when the visitor's OS is dark, unless they've picked a theme:

```css file=app/globals.css
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
```

2. **The toggle.** [`ThemeToggle`](../../components/ThemeToggle.tsx) sets an attribute on the `<html>` element, and the `:root[data-theme="dark"]` rule above takes over:

```tsx file=components/ThemeToggle.tsx
    root.dataset.theme = next;
```

A tiny script in [`SiteShell.tsx`](../../components/SiteShell.tsx) re-applies a saved choice before the first paint, so a returning visitor never sees a flash of the wrong theme.

## Glossary

- **Token:** a named design decision, such as `accent`.
- **CSS variable (custom property):** a value stored under a name like `--accent` and reused with `var(--accent)`.
- **`:root`:** the top of the page (the `<html>` element), where global variables live.
- **Data attribute:** a custom label on an element, like `data-theme="dark"`, that CSS can target.
- **Media query:** a CSS condition, such as "the system is in dark mode".
- **Contrast ratio:** how different two colours are in brightness. WCAG AA needs 4.5:1 for body text.
- **Alpha:** transparency.

## Try it by hand (no AI)

In browser devtools, select `<html>` and add `--accent: 255 0 128;` in the Styles panel. Watch every accent on the site change. Then explain why the config uses `rgb(var(--accent) / <alpha-value>)`.

## Explain it back

1. Why store RGB channels and not hex?
2. How does `data-theme` on `<html>` switch themes?
3. Why does the site show contrast ratios in CSS comments?

<details>
<summary>Model answers</summary>

1. So Tailwind can insert an opacity (`bg-accent/10`). With a hex value there's no slot for it.
2. The CSS has one set of variables for `:root` and another for `:root[data-theme="dark"]`. Setting the attribute makes the second set win, and every `bg-canvas`, `text-ink` and so on re-resolves with no component changing.
3. They record that each text pairing was checked against WCAG AA, so a future colour edit has a number to beat.

</details>
