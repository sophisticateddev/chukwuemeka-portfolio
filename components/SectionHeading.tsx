interface SectionHeadingProps {
  label: string;
  title: string;
  /** Optional trailing phrase rendered in the muted colour */
  titleMuted?: string;
  intro?: string;
  id: string;
  /** h1 when the section is the whole page, e.g. /work */
  as?: "h1" | "h2";
}

export default function SectionHeading({ label, title, titleMuted, intro, id, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="mb-3 text-sm font-medium text-accent">{label}</p>
      <Heading
        id={id}
        className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl"
      >
        {title}
        {titleMuted && <span className="text-muted"> {titleMuted}</span>}
      </Heading>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </div>
  );
}
