import Image from "next/image";
import type { Shot } from "@/lib/case-study";

/** Phone mockup sized for 390×844 captures (9:19.5). */
export function PhoneFrame({
  shot,
  priority = false,
  className = "",
  sizes = "280px",
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.4rem] border border-control/60 bg-[#050506] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="relative aspect-[390/844] overflow-hidden rounded-[1.9rem]">
        <Image src={shot.src} alt={shot.alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-3.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#050506]"
      />
    </div>
  );
}

/** Browser window mockup for 1440×900 captures (16:10). */
export function BrowserFrame({
  shot,
  url = "characterguess.com",
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 800px, 100vw",
}: {
  shot: Shot;
  url?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="mx-auto truncate rounded-md bg-canvas px-3 py-1 font-mono text-[11px] text-muted">{url}</span>
        <span className="w-[46px]" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={shot.src} alt={shot.alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
