# Lesson 4: Accessibility in practice

**The idea in one sentence:** Accessible UI works for people using a keyboard, a screen reader or reduced motion. WCAG 2.1 AA is the usual standard to aim for.

**Why employers care:** It's a core design engineer skill and most portfolios can't prove it.

**Read:** web.dev → "Learn Accessibility" (the Focus, ARIA and Motion modules), plus the WCAG quick reference for 1.4.3 (contrast), 2.1.1 (keyboard), 2.4.7 (focus visible) and 2.3.3 (animation from interactions).

## Examples already in this repo

**Focus you can see.** One global rule gives every focusable thing a visible ring (WCAG 2.4.7):

```css file=app/globals.css
  :focus-visible {
    outline: 2px solid rgb(var(--accent));
    outline-offset: 3px;
    border-radius: 4px;
  }
```

`:focus-visible` shows the ring for keyboard users and hides it for mouse clicks.

**A name for a screen reader.** [`ThemeToggle`](../../components/ThemeToggle.tsx) is an icon-only button, so it carries a text label that says what it will do:

```tsx file=components/ThemeToggle.tsx
      aria-label={theme ? dict.theme.to(next) : dict.theme.generic}
```

The icons are hidden from assistive tech with `aria-hidden="true"` so they aren't announced as noise.

**Reduced motion.** [`Magnetic`](../../components/Magnetic.tsx) pulls a button toward the pointer. People with vestibular disorders can find that movement uncomfortable, so it checks the OS setting first and does nothing:

```tsx file=components/Magnetic.tsx
    if (reduceMotion || e.pointerType !== "mouse" || !ref.current) return;
```

Touch screens are skipped too, because there's no pointer to follow.

**Sizes.** The `.btn` class has `min-h-[44px]`, a comfortable touch target, and the icon buttons are `h-11 w-11` (44px).

**Hidden-but-readable text.** [`CountUp`](../../components/CountUp.tsx) animates a number visually but gives screen readers only the final value:

```tsx file=components/CountUp.tsx
      <span className="sr-only">{value}</span>
      <span ref={visual} aria-hidden="true" className="tabular-nums">
```

## Glossary

- **WCAG:** the Web Content Accessibility Guidelines. Levels A, AA and AAA; AA is the usual target.
- **ARIA:** extra attributes that tell assistive tech what an element is or does (`aria-label`, `aria-pressed`).
- **Accessible name:** the text a screen reader announces for a control.
- **Focus ring:** the outline showing which element the keyboard is on.
- **`sr-only`:** text visually hidden but still read by screen readers.
- **Reduced motion:** an OS setting asking apps to avoid animation.
- **`aria-pressed`:** tells a screen reader a toggle button is on or off.
- **Target size:** how big the clickable area is; WCAG 2.2 AA asks for at least 24 by 24px.

## Try it by hand (no AI)

Unplug the mouse and use the site with Tab, Shift+Tab, Enter and Space. Then turn on macOS System Settings → Accessibility → Display → Reduce motion, and reload. Write down three things you notice.

## Explain it back

1. What does `aria-pressed` tell a screen reader?
2. Why does `Magnetic` do nothing under reduced motion?
3. Why does `ThemeToggle` need an `aria-label`?

<details>
<summary>Model answers</summary>

1. That a button is a toggle, and whether it's currently on or off. (`ThemeToggle` avoids needing it: its label changes to say what it *will do*, "Switch to dark theme", which is the other accepted pattern.)
2. Movement that follows the pointer can cause discomfort for some people. The OS setting is how they ask us not to, so we respect it.
3. It only contains an icon. Without a text label a screen reader would say just "button".

</details>
