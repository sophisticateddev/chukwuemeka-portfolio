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
  roles: string[];
  summary: { problem: string; did: string; result: string };
  metrics: { value: string; label: string }[];
  hero: { mobile: Shot; desktop?: Shot };
  meta: { label: string; value: string }[];

  origin?: Section<{ body: string[] }>;
  context?: Section<{ body: string[]; constraints?: string[] }>;
  team?: Section<{
    members: { name: string; role: string; owned: string; me?: boolean }[];
  }>;
  insights?: Section<{ items: { title: string; body: string }[] }>;
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
  build?: Section<{ steps: { title: string; body: string }[] }>;
  outcomes?: Section<{ items: string[] }>;
  /** Real quotes only. The section is hidden while this is empty. */
  testimonials?: { quote: string; name: string; context?: string }[];
  reflection?: Section<{ learned: string[]; next?: { title: string; body: string } }>;
};
