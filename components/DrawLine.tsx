/** Hairline divider between rows. */
export default function DrawLine({ className = "bottom-0" }: { className?: string }) {
  return <span aria-hidden="true" className={`absolute left-0 h-px w-full bg-line ${className}`} />;
}
