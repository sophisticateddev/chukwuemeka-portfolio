// Inline icon: the subsetted web fonts don't include arrow glyphs.
const rotation = { right: 0, left: 180, "up-right": -45 } as const;

export default function Arrow({
  direction = "right",
  size = 16,
  className = "",
}: {
  direction?: keyof typeof rotation;
  size?: number;
  /** Applied to a wrapper so hover transforms don't fight the rotation */
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`inline-flex ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        style={{ transform: `rotate(${rotation[direction]}deg)` }}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
