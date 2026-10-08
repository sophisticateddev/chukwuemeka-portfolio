// Structure for recruiter-focused case studies. Every section is optional except the hero,
// so older projects can use only the parts they have material for.

export type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Section<T> = {
  /** One bold sentence that tells the story of the section to someone skimming */
  takeaway: string;
} & T;

export type Decision = {
  title: string;
  context: string;
  options?: string[];
  choice: string;
  why: string;
  tradeoff?: string;
};

export type CaseStudy = {
  /** Outcome-led line shown above the fold. Lead with the result, not the project name. */
  headline: string;
  status?: string;
  liveUrl?: string;
  /** Button text for liveUrl. Defaults to "View live product"; use "Visit …" when the link is the company's site rather than the exact product shown */
  liveLabel?: string;
  roles: string[];
  summary: { problem: string; did: string; result: string };
  metrics: { value: string; label: string }[];
  /** At least one of the two. Desktop-only products can leave out the phone. */
  hero: { mobile?: Shot; desktop?: Shot };
  meta: { label: string; value: string }[];

  origin?: Section<{ body: string[] }>;
  context?: Section<{ body: string[]; constraints?: string[] }>;
  team?: Section<{
    members: { name: string; role: string; owned: string; me?: boolean }[];
  }>;
  insights?: Section<{ intro?: string; items: { title: string; body: string }[] }>;
  /** How the work was done, with research and design artefacts */
  process?: Section<{ steps: { title: string; body: string }[]; artifacts?: Shot[] }>;
  /** The starting point of a redesign */
  /** "browser" for desktop products; phone frames by default */
  before?: Section<{ intro?: string; shots: Shot[]; frame?: "phone" | "browser" }>;
  decisions?: Section<{ items: Decision[] }>;
  evolution?: Section<{ items: { date: string; title: string; body: string }[] }>;
  mobile?: Section<{ intro?: string; shots: Shot[] }>;
  web?: Section<{ intro?: string; shots: Shot[] }>;
  designSystem?: Section<{
    colors: { name: string; value: string; usage: string }[];
    type: { family: string; notes: string };
    tokens?: { name: string; light: string; dark: string }[];
    components: { name: string; states: string[] }[];
    motion?: string;
  }>;
  accessibility?: Section<{
    done: { title: string; body: string }[];
    gaps?: { title: string; body: string }[];
  }>;
  build?: Section<{
    intro?: string;
    /** Headline numbers for the build, e.g. commits or tests */
    stats?: { value: string; label: string }[];
    steps: { title: string; body: string }[];
    /** How the repo is set up so AI output stays reviewable */
    setup?: { title: string; items: string[] }[];
    /** One real snippet from the codebase, with why it exists */
    snippet?: { file: string; language: string; code: string; caption: string };
    /** Real mistakes AI made and how they were caught. Each should trace to a commit. */
    mistakes?: { title: string; wrong: string; caught: string; guardrail?: string }[];
  }>;
  outcomes?: Section<{ items: string[] }>;
  /** Real quotes only. The section is hidden while this is empty. */
  testimonials?: { quote: string; name: string; context?: string }[];
  reflection?: Section<{ learned: string[]; next?: { title: string; body: string } }>;
};
