interface SectionHeadingProps {
  label: string;
  title: string;
  /** Optional trailing phrase. Muted by default; `mutedTail={false}` sets the whole title in ink. */
  titleMuted?: string;
  mutedTail?: boolean;
  intro?: string;
  id: string;
  /** h1 when the section is the whole page, e.g. /work */
  as?: "h1" | "h2";
  /**
   * "statement" (default): small label above a large display title.
   * "quiet": the label itself is the heading, set small, so the content below
   * (a quote, a list) carries the section instead of another big headline.
   */
  variant?: "statement" | "quiet";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  titleMuted,
  mutedTail = true,
  intro,
  id,
  as: Heading = "h2",
  variant = "statement",
  className = "mb-10 md:mb-12",
}: SectionHeadingProps) {
  if (variant === "quiet") {
    return (
      <div className={className}>
        <Heading id={id} className="eyebrow text-accent">
          {label}
          <span className="sr-only">: {title} {titleMuted}</span>
        </Heading>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      </div>
    );
  }
  return (
    <div className={className}>
      <p className="mb-3 text-sm font-medium text-accent">{label}</p>
      <Heading
        id={id}
        className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.015em] md:text-5xl"
      >
        {title}
        {titleMuted && <span className={mutedTail ? "text-muted" : undefined}> {titleMuted}</span>}
      </Heading>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </div>
  );
}
