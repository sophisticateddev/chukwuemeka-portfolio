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
  { value: "10,000+", label: "users in month one", source: "NippyBoxes" },
  { value: "+25%", label: "accessibility & engagement", source: "BAFTA" },
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
            <FadeUp>
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-ink backdrop-blur">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span>
                  Open to work <span className="text-muted">· UK (GMT/BST) · Full right to work in the UK</span>
                </span>
              </p>
            </FadeUp>

            <h1
              id="hero-title"
              className="font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-[4.5rem]"
            >
              <span className="sr-only">I design products. Then I build them with AI.</span>
              <span aria-hidden="true" className="block">
                <RevealWords text="I design products." trigger="mount" delay={0.1} />
              </span>
              <span aria-hidden="true" className="block text-accent">
                <RevealWords text="Then I build them with AI." trigger="mount" delay={0.35} />
              </span>
            </h1>

            <FadeUp delay={0.7}>
              <p className="mt-6 max-w-xl text-lg text-muted md:text-xl md:leading-relaxed">
                Product Designer with 7 years shipping at{" "}
                <span className="text-ink">BAFTA, Carbon and Writesea</span>. I design the product, then build it
                with Claude Code. <span className="text-ink">Character Guess</span> is live, and I built it that way.
              </p>
            </FadeUp>

            <FadeUp delay={0.8}>
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
              {/* Quiet contact path for visitors ready to act now; the nav's button is hidden on mobile */}
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <a
                  href="mailto:kingsleyiheonye@gmail.com?subject=Let%E2%80%99s%20talk"
                  className="group inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-ink transition-colors hover:text-accent focus-visible:text-accent"
                >
                  <span className="link-grow">Hiring? Let’s talk</span>
                  <span className="sr-only">(opens your email app)</span>
                  <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
                </a>
                <span className="text-muted">I reply within 24 hours.</span>
              </p>
            </FadeUp>

            <FadeUp delay={0.9}>
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
                        className={`${logo.className} w-auto opacity-60 transition-opacity duration-300 [filter:brightness(0)_invert(1)] hover:opacity-100`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Portrait, with the live product it proves the headline with */}
          <FadeUp delay={0.5} className="mx-auto w-full max-w-md lg:-my-10 lg:max-w-none">
            <figure className="relative">
              {/* Transparent, feathered cut-outs: no frame, so they melt into the page and the glow behind.
                  The colour version is pixel-aligned with the B&W one and fades in on hover. */}
              <div className="group/portrait relative aspect-[8/9]">
                <Image
                  src="/images/portrait.webp"
                  alt="Chukwuemeka Iheonye"
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

              <Link
                href="/work/character-guess"
                className="group absolute bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-raised/90 p-3 pr-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur transition-colors duration-300 hover:border-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-0 sm:right-auto lg:-left-6"
              >
                <span className="relative h-14 w-10 shrink-0 overflow-hidden rounded-lg border border-line">
                  <Image
                    src="/images/work/character-guess/game-correct-mobile-dark.jpg"
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="min-w-0 text-sm">
                  <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                    Live
                  </span>
                  <span className="block font-semibold text-ink">Character Guess</span>
                  <span className="block text-muted">Designed &amp; built with AI</span>
                </span>
                <Arrow
                  direction="up-right"
                  className="ml-auto shrink-0 text-muted transition-[transform,color] duration-300 ease-out group-hover:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 sm:ml-3"
                />
              </Link>
            </figure>
          </FadeUp>
        </div>

        <FadeUp delay={0.9}>
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
