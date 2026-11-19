# Lesson 3: Storybook (a workshop for components)

**The idea in one sentence:** Storybook shows each component on its own, in every state, outside the app. It's a Figma component page that actually runs.

**Why employers care:** A public Storybook is the clearest proof you build production UI.

**Read:** storybook.js.org → "Why Storybook?", "What's a story?", "Args", "Decorators", "Docs / MDX".

## Key words

- **Story:** one state of a component (for example, a `Tag` with a very long label).
- **Args:** the props a story uses. Storybook shows them as live **controls** so you can edit them in the browser.
- **Decorator:** a wrapper around every story. This repo uses decorators for theme, language and motion.
- **Addon:** a plugin, such as the accessibility checker.
- **Autodocs:** a documentation page Storybook generates from the stories and the component's comments.

## What a story file looks like

A story file sits next to its component. It says which component it describes, then lists states:

```tsx
// components/Tag.stories.tsx (once Phase 1 lands)
const meta = { title: "Primitives/Tag", component: Tag } satisfies Meta<typeof Tag>;
export default meta;

export const Small: Story = { args: { children: "Fintech" } };
```

`satisfies Meta<typeof Tag>` asks TypeScript to check that the args match `Tag`'s real props. If `Tag` changes, the story fails to compile, so the docs can't drift from the code.

## Why some components need a decorator

[`ThemeToggle`](../../components/ThemeToggle.tsx) calls `useLocale()`:

```tsx file=components/ThemeToggle.tsx
  const { dict } = useLocale();
```

and [`useLocale`](../../lib/useLocale.ts) reads the page address to decide English or French:

```ts file=lib/useLocale.ts
export function useLocale() {
  const locale = localeFromPath(usePathname());
```

In the real app the address exists. In Storybook there is no page, so the component would have nothing to read. A decorator (or a Storybook setting that fakes the address) supplies it, which is why `ThemeToggle`, `BackToTop` and `Terminal` need one to render.

Likewise, [`MotionProvider`](../../components/MotionProvider.tsx) tells every animation to respect the visitor's reduced-motion setting. Storybook's "Motion" toolbar does the same job for stories:

```tsx file=components/MotionProvider.tsx
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

## Glossary

- **Story / args / decorator / addon / autodocs:** see above.
- **Controls:** the live form Storybook builds from args.
- **CSF3:** "Component Story Format 3", the plain-object style of story files.
- **MDX:** Markdown that can also contain React components. Used for the written docs pages.
- **Toolbar global:** a switch in Storybook's top bar (theme, motion, language) that applies to every story.

## Try it by hand (no AI)

After Phase 1 lands, write one story yourself: a `Tag` story with `size: "md"` and a very long label. Does it wrap? Does it still look right in dark mode?

## Explain it back

1. What's a decorator?
2. Why does `Terminal` need one to render?
3. Why does the story use `satisfies Meta<typeof Tag>`?

<details>
<summary>Model answers</summary>

1. A wrapper around a story that supplies the world the component expects, such as a theme, a language or a motion setting.
2. `Terminal` reads its text from `useLocale()`, which reads the page address. Storybook has no page address, so the decorator or a Storybook setting provides one.
3. It makes TypeScript check the story against the component's real props, so a renamed prop breaks the story instead of leaving stale docs.

</details>
