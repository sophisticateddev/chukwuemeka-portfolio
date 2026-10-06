import { ReactNode } from "react";

/**
 * A label for a skill, tool, category or state. Filled and square-cornered on purpose:
 * pills with an outline are what buttons look like on this site, and tags aren't clickable.
 */
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
  const sizes = { sm: "px-2 py-0.5 text-xs", md: "px-2.5 py-1 text-sm" };
  return (
    <Element className={`inline-flex items-center gap-1.5 rounded-md bg-raised text-muted ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Element>
  );
}
