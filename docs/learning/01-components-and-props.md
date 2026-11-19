# Lesson 1: Components and props

**The idea in one sentence:** A component is a reusable piece of UI, and props are its settings, the way a Figma component has variants and properties.

**Why employers care:** A design engineer's main output is components other people can reuse safely.

**Read:** react.dev → "Your First Component" and "Passing Props to a Component".

## A real component from your site

[`Tag`](../../components/Tag.tsx) is the label you see on work cards ("Fintech", "Design systems"). The whole top of the file is the component's *interface*:

```tsx file=components/Tag.tsx
export default function Tag({
  children,
  as: Element = "span",
  size = "sm",
  className = "",
  ...rest
}: {
  children: ReactNode;
  /** "li" inside a list of tags, "span" inline */
  as?: "li" | "span";
  size?: "sm" | "md";
  className?: string;
}) {
```

Read it like a Figma component panel:

| In the code | In Figma terms |
|---|---|
| `children` | The text layer you type into |
| `size?: "sm" \| "md"` | A variant property with two options |
| `size = "sm"` | The default variant |
| `as?: "li" \| "span"` | A property that changes which HTML element is drawn |
| `className?: string` | A "let the parent add extra styling" escape hatch |

The `?` means *optional*: you can leave it out and the default applies. The `"sm" | "md"` part is TypeScript. It means "only these two words are allowed", so a typo like `size="large"` is caught before the site ships.

Now the body, where the props are used:

```tsx file=components/Tag.tsx
  const sizes = { sm: "px-2 py-0.5 text-xs", md: "px-2.5 py-1 text-sm" };
  return (
    <Element className={`inline-flex items-center gap-1.5 rounded-md bg-raised text-muted ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Element>
  );
```

`sizes[size]` picks the right spacing for the chosen variant. `bg-raised` and `text-muted` are *token* classes (see Lesson 2), never raw colours.

## Why `as="li" | "span"`?

[`WorkCard`](../../components/WorkCard.tsx) puts tags inside a `<ul>`. A list may only contain list items, so there the tag must be an `<li>`. Elsewhere a tag sits inside a sentence and should be a `<span>`. One component, two correct HTML elements. Screen readers announce "list, 3 items" only when the markup is a real list.

```tsx file=components/WorkCard.tsx
            {project.tags.map((tag) => (
              <Tag as="li" key={tag}>
                {tag}
              </Tag>
            ))}
```

## Props vs state

- **Props** come from the parent. The component can't change them. Think "the settings someone picked in the Figma properties panel".
- **State** belongs to the component and can change over time. Think "which tab is currently open". [`ThemeToggle`](../../components/ThemeToggle.tsx) has state: `const [theme, setTheme] = useState<Theme | null>(null);`. When `setTheme` is called, React redraws the button.

## Glossary

- **Component:** a function that returns a piece of UI.
- **Prop:** one setting passed into a component.
- **State:** a value a component remembers and can change; changing it redraws the UI.
- **JSX:** the HTML-looking syntax inside the code. It's JavaScript underneath.
- **TypeScript type:** a rule describing what values are allowed, checked before the site runs.
- **Default value:** what a prop is when nobody sets it (`size = "sm"`).
- **Children:** whatever is placed between a component's opening and closing tags.

## Try it by hand (no AI)

Open [`Tag.tsx`](../../components/Tag.tsx). Add a `tone="accent"` prop that switches the background to `bg-accent text-onaccent`. Run the site, see it work, then undo it with `git checkout components/Tag.tsx`.

## Explain it back

1. What's the difference between a prop and state?
2. Why does `Tag` take `as="li" | "span"`?
3. Why is `size` typed as `"sm" | "md"` and not just `string`?

<details>
<summary>Model answers</summary>

1. A prop is passed in by the parent and the component treats it as read-only. State is owned by the component and changing it makes React redraw. A prop is a Figma variant someone chose; state is the thing the user is currently doing.
2. Tags appear in two places: inside a list (`<ul>` can only hold `<li>`) and inline in text. `as` lets one component produce valid HTML for both, so assistive tech announces a real list.
3. A union of two exact strings stops typos and shows editors the valid options. `string` would accept `"large"` and silently fall back to nothing.

</details>
