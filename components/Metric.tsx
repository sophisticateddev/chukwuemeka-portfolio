import Arrow from "./Arrow";

/**
 * A result such as "+20%" or "30% → 55%". The web fonts are subsetted without arrow glyphs,
 * so the arrow is drawn as an icon, nudged up to sit on the numerals rather than the x-height.
 */
export default function Metric({ value }: { value: string }) {
  const parts = value.split("→");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <span className="sr-only">→</span>
              <Arrow size={20} className="relative -top-[0.07em] mx-1 align-middle [&_svg]:h-[0.6em] [&_svg]:w-[0.6em]" />
            </>
          )}
          {part.trim()}
        </span>
      ))}
    </>
  );
}
