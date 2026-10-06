import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";
import CountUp from "./CountUp";
import FadeUp from "./FadeUp";
import HeroGlow from "./HeroGlow";
import Magnetic from "./Magnetic";
import RevealWords from "./RevealWords";

// Outcomes, each tied to where it happened, so every number is checkable in a case study.
const stats = [
  { value: "+20%", label: "loan applications", source: "Carbon" },
  { value: "200+", label: "riders and drivers at launch", source: "NippyBoxes" },
  { value: "85%", label: "WCAG 2.2 AA pass rate, up from 60%", source: "BAFTA albert" },
  { value: "100+", label: "players on a game I built with AI", source: "Character Guess" },
];

// Official marks, shown as uniform white silhouettes so four brands read as one quiet row.
// Heights are tuned by eye so each logo carries similar visual weight.
const shippedAt = [
  { name: "BAFTA", src: "/images/logos/bafta.svg", width: 185, height: 58, className: "h-7" },
  { name: "Carbon", src: "/images/logos/carbon.png", width: 1124, height: 268, className: "h-[1.375rem]" },
  { name: "Writesea", src: "/images/logos/writesea.png", width: 242, height: 99, className: "h-8" },
  { name: "Softcom", src: "/images/logos/softcom.svg", width: 97, height: 20, className: "h-5" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <HeroGlow />
      <div className="container-page pb-20 pt-28 md:pb-28 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,31rem)]">
          <div>
            <FadeUp animate>
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-ink backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  Open to work <span className="text-muted">· UK · Full right to work</span>
                </span>
              </p>
            </FadeUp>

            <h1
              id="hero-title"
              className="font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.025em] sm:text-6xl md:text-7xl xl:text-[4.5rem]"
            >
              <span className="sr-only">I design products. Then I build them with AI.</span>
              <span aria-hidden="true" className="block">
                <RevealWords text="I design products." trigger="mount" delay={0.05} />
              </span>
              <span aria-hidden="true" className="block text-accent">
                <RevealWords text="Then I build them with AI." trigger="mount" delay={0.2} />
              </span>
            </h1>

            <FadeUp animate delay={0.25}>
              <p className="mt-6 max-w-xl text-lg text-muted md:text-xl md:leading-relaxed">
                Product Designer with 7+ years in fintech, SaaS and enterprise. I design the product, then build
                it with Claude Code.
              </p>
            </FadeUp>

            <FadeUp animate delay={0.32}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic className="[&>a]:w-full">
                  <Link href="/#work" className="btn-primary group">
                    View selected work
                    <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <a
                  href="/Chukwuemeka_Iheonye_Resume.pdf"
                  download="Chukwuemeka_Iheonye_Resume.pdf"
                  className="btn-secondary group"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M8 2v8M5 7l3 3 3-3M3 13h10"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-0.5"
                    />
                  </svg>
                  Download CV <span className="sr-only">(PDF)</span>
                </a>
              </div>
            </FadeUp>

            <FadeUp animate delay={0.4}>
              <div className="mt-8">
                <p className="eyebrow">Shipped at</p>
                <ul className="mt-4 grid grid-cols-2 items-center gap-x-8 gap-y-5 sm:flex sm:flex-wrap">
                  {shippedAt.map((logo) => (
                    <li key={logo.name}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG/PNG marks, no optimisation needed */}
                      <img
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className={`${logo.className} w-auto opacity-60 transition-opacity duration-300 [filter:var(--logo-filter)] hover:opacity-100`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Portrait */}
          <FadeUp animate delay={0.2} className="mx-auto w-full max-w-md lg:-my-10 lg:max-w-none">
            <figure className="relative">
              {/* Transparent, feathered cut-outs: no frame, so they melt into the page and the glow behind.
                  The colour version is pixel-aligned with the B&W one and fades in on hover. */}
              <div className="group/portrait relative aspect-[8/9]">
                <Image
                  src="/images/portrait.webp"
                  alt="Portrait of Chukwuemeka Iheonye, smiling, in a polo shirt"
                  fill
                  priority
                  sizes="(min-width: 1280px) 496px, (min-width: 1024px) 416px, 448px"
                  className="object-contain object-bottom"
                />
                <Image
                  src="/images/portrait-colour.webp"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1280px) 496px, (min-width: 1024px) 416px, 448px"
                  className="object-contain object-bottom opacity-0 transition-opacity duration-700 ease-out group-hover/portrait:opacity-100 motion-reduce:transition-none"
                />
              </div>
            </figure>
          </FadeUp>
        </div>

        <FadeUp animate delay={0.45}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col-reverse gap-2 bg-canvas p-5 transition-colors duration-300 hover:bg-surface md:p-6"
              >
                <dt className="text-sm text-muted">
                  {s.label}
                  <span className="mt-1 block font-mono text-xs text-muted/80">{s.source}</span>
                </dt>
                <dd className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
