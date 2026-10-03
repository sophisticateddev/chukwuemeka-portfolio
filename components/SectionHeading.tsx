interface SectionHeadingProps {
  label: string;
  title: string;
  /** Optional trailing phrase rendered in the muted colour */
  titleMuted?: string;
  intro?: string;
  id: string;
}

export default function SectionHeading({ label, title, titleMuted, intro, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 text-sm font-medium text-accent">{label}</p>
      <h2
        id={id}
        className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl"
      >
        {title}
        {titleMuted && <span className="text-muted"> {titleMuted}</span>}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </div>
  );
}
