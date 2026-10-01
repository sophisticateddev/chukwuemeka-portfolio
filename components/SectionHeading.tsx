import FadeUp from "./FadeUp";
import RevealWords from "./RevealWords";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  /** Optional trailing phrase rendered in the muted colour */
  titleMuted?: string;
  intro?: string;
  id: string;
}

export default function SectionHeading({ index, label, title, titleMuted, intro, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <FadeUp>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          {label}
        </p>
      </FadeUp>
      <h2
        id={id}
        className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl"
      >
        <span className="sr-only">{titleMuted ? `${title} ${titleMuted}` : title}</span>
        <span aria-hidden="true">
          <RevealWords text={title} />
          {titleMuted && (
            <>
              {" "}
              <span className="text-muted">
                <RevealWords text={titleMuted} delay={0.15} />
              </span>
            </>
          )}
        </span>
      </h2>
      {intro && (
        <FadeUp delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>
        </FadeUp>
      )}
    </div>
  );
}
