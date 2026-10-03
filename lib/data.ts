import type { CaseStudy } from "./case-study";
import { characterGuess } from "@/content/case-studies/character-guess";
import { carbonLoans } from "@/content/case-studies/carbon-loans";
import { albert } from "@/content/case-studies/albert";
import { carbonZero } from "@/content/case-studies/carbon-zero";
import { africhange } from "@/content/case-studies/africhange";
import { nippyboxes } from "@/content/case-studies/nippyboxes";
import { coinbycedar } from "@/content/case-studies/coinbycedar";

export type ProjectImage = {
  src: string;        // e.g. /images/work/carbon-loans/hero.jpg
  alt: string;        // descriptive alt text for accessibility
  caption?: string;   // optional caption shown below the image
  wide?: boolean;     // true = spans full width; false (default) = 2-col grid
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  /** Shown as a full card on the homepage; the rest go in the compact "More work" row */
  featured?: boolean;
  /** Who the work was for, e.g. an employer, agency client or freelance client */
  client?: string;
  /** Headline fact shown on the card and case study hero */
  highlight: { value: string; label: string };
  /** Card cover image; falls back to details.hero, then the highlight metric */
  cover?: string;
  /** Rich, recruiter-focused case study. When present, it replaces the classic layout. */
  caseStudy?: CaseStudy;
  details?: {
    overview: string;
    role: string;
    team: string;
    timeline: string;
    problems?: string[];
    goals?: string[];
    process?: string;
    researchFindings?: string[];
    outcomes?: string[];
    /**
     * Hero image shown at the top of the case study page.
     * Drop the file in: public/images/work/<slug>/hero.jpg
     * Then set this to: "/images/work/<slug>/hero.jpg"
     */
    hero?: string;
    /**
     * Gallery images shown after Research Findings.
     * Drop files in: public/images/work/<slug>/
     * Use wide:true for full-width images (e.g. final screens, wireframe spreads).
     */
    images?: ProjectImage[];
  };
};

export const workProjects: Project[] = [
  {
    id: 7,
    slug: "character-guess",
    featured: true,
    client: "Co-founder",
    title: "Character Guess",
    category: "Consumer · Game · Designed & built with AI",
    year: "2025–now",
    description:
      "A family game night turned into a live multiplayer quiz game. I designed it end to end and built the front end with Claude Code.",
    tags: ["Product design", "AI-built", "Design system"],
    color: "#1A1033",
    highlight: { value: "100+", label: "beta players, all word of mouth" },
    cover: "/images/work/character-guess/landing-desktop-dark.jpg",
    caseStudy: characterGuess,
  },
  {
    id: 2,
    slug: "carbon-loans",
    featured: true,
    client: "Carbon MFB",
    title: "Carbon Loans",
    category: "Fintech · Product Design",
    year: "2023",
    description:
      "End-to-end redesign of Carbon MFB's loan product. Loan applications rose 20%, beating the 15% target, while drop-offs and non-performing loans each fell 10%.",
    tags: ["Fintech", "Mobile", "Redesign"],
    color: "#E8E4DC",
    highlight: { value: "+20%", label: "loan applications, beating a 15% target" },
    cover: "/images/work/carbon-loans/cover.jpg",
    caseStudy: carbonLoans,
    details: {
      overview:
        "The redesign aimed to reward loyal customers, enhance the user experience across the loan journey, and increase profit margins. Carbon MFB is one of Africa's fastest-growing digital banks, serving over 3 million users across Nigeria.",
      role: "Lead Product Designer (UX & UI)",
      team: "3 Designers (incl. me as lead), 1 Product Manager, 6 Developers, 1 QA, 1 Scrum Master",
      timeline: "2023",
      problems: [
        "Poor UX across the loan application journey led to high drop-off rates",
        "Inadequate error handling left users confused when applications failed",
        "Confusing decline and rejection messages damaged trust and retention",
        "Weak UX writing throughout the flow contributed to churn",
      ],
      goals: [
        "Reduce churn and drop-offs by 10%",
        "Reduce non-taken-up loans",
        "Increase loan applications by 15%",
      ],
      process:
        "Conducted user interviews and surveys to understand pain points across the loan journey. Users wanted flexible tenures, the ability to top up loans, incentives for early repayment, and clearer visibility of their credit tracking. Findings informed a sprint that produced a new loan dashboard, a redesigned application flow with clearer offer presentation, and an improved repayment interface.",
      researchFindings: [
        "Users needed flexible loan tenures to fit different repayment capacities",
        "Loan top-up capability was a highly requested feature to reduce re-application friction",
        "Incentives for early repayment would drive better financial behaviour",
        "Credit tracking visibility was low — users didn't know where they stood",
      ],
      outcomes: [
        "New loan dashboard giving quick access to loan history and status",
        "Redesigned application flow with clearer loan offer presentation",
        "Improved repayment interface with multiple funding options",
        "Loan applications up 20% against a 15% target",
        "Loan drop-offs down 10%, meeting the target",
        "Non-performing loans down 10%",
      ],
    },
  },
  {
    id: 1,
    slug: "albert-sustainability-platform",
    featured: true,
    client: "BAFTA (contract)",
    title: "albert — Sustainability Platform",
    category: "Sustainability · Product Design",
    year: "2024–2025",
    description:
      "Rebuilt BAFTA albert's carbon toolkit for UK film and TV around the people who hold the data. Productions starting their footprint in pre-production rose from 30% to 55%, and WCAG 2.2 AA criteria passed from 60% to 85%.",
    tags: ["Sustainability", "Enterprise", "Accessibility"],
    color: "#DDE4DC",
    highlight: { value: "30% → 55%", label: "productions starting in pre-production" },
    cover: "/images/work/albert/cover.webp",
    caseStudy: albert,
    details: {
      overview:
        "Led UX design across albert's digital platforms — the UK's leading sustainability initiative for the media industry, operating under BAFTA. The work spanned from research and discovery through to delivery, with a strong emphasis on accessibility and cross-stakeholder alignment.",
      role: "Senior Product Designer",
      team: "Product Designer, Product Manager, Engineering team",
      timeline: "Jul 2024 – Aug 2025",
      goals: [
        "Improve platform accessibility to WCAG standards",
        "Increase engagement across media industry users",
        "Develop journey maps and user flows aligned with stakeholder needs",
        "Advocate for user-centred design principles across the organisation",
      ],
      outcomes: [
        "25% improvement in accessibility and engagement",
        "Journey maps, user flows, and UI designs aligned with WCAG standards",
        "Strengthened design advocacy across digital teams and stakeholders",
      ],
    },
  },
  {
    id: 4,
    slug: "africhange",
    featured: true,
    client: "Freelance for Africhange Ltd",
    title: "Africhange",
    category: "Fintech · UX Design",
    year: "2022",
    description:
      "Redesigned how the diaspora sends money from North America to Africa. A wallet system cut transfers from about 2 hours to about a minute, with faster onboarding and four ways to send.",
    tags: ["Fintech", "Redesign", "Research"],
    color: "#E4DDE4",
    highlight: { value: "1 min", label: "transfer time, down from 2 hours" },
    cover: "/images/work/africhange/cover.jpg",
    caseStudy: africhange,
    details: {
      overview:
        "The goal was to redesign and improve the user experience of a money transfer product enabling individuals to send money from North America to Africa with ease. Despite many competing apps in the space, few had solved truly seamless and fast cross-border transfers to Africa.",
      role: "Lead Designer (UX & UI)",
      team: "2 Lead Designers, 1 Product Manager, 1 Growth Manager, 2 Software Developers",
      timeline: "2022",
      problems: [
        "Existing money transfer apps were slow — transactions took up to 2 hours",
        "Onboarding required too much information, creating friction for new users",
        "The product lacked differentiation in an increasingly crowded market",
        "Users had limited flexibility in how they sent money to recipients",
      ],
      process:
        "Conducted interviews and surveys to validate the problem statement and understand user pain points. Applied affinity mapping, Crazy 8 exercises, empathy mapping, site mapping, and user flow creation to synthesise findings into a cohesive design direction.",
      researchFindings: [
        "Transfer speed was the single biggest pain point — 2-hour waits were unacceptable",
        "Users wanted to send to multiple recipient types: Africhange users, saved beneficiaries, contacts, bank accounts",
        "Minimal onboarding information would significantly improve conversion",
        "A referral acquisition system was identified as a growth lever",
      ],
      outcomes: [
        "Fast onboarding through minimal required signup information",
        "Wallet system reducing transaction time from 2 hours to 1 minute",
        "Multiple send options: Africhange users, beneficiary lists, contacts, and bank accounts",
        "Referral acquisition system to drive organic growth",
        "Delivered across both web application and marketing website",
      ],
    },
  },
  {
    id: 3,
    slug: "carbon-zero",
    client: "Carbon MFB",
    title: "Carbon Zero",
    category: "Fintech · Product Design",
    year: "2023",
    description:
      "Designed Carbon's Buy Now Pay Later product from concept to launch — a zero-interest credit facility enabling customers to purchase today and spread payments over time in under one minute.",
    tags: ["BNPL", "Fintech", "B2C"],
    color: "#E4E1D8",
    highlight: { value: "< 1 min", label: "from purchase to payment" },
    cover: "/images/work/carbon-zero/cover.jpg",
    caseStudy: carbonZero,
    details: {
      overview:
        "Carbon Zero gives customers the power to make purchases on credit with zero percent interest, distributed over time. The product's long-term goal was to become a top-three purchase choice for consumers — requiring a flow that was fast, clear, and trustworthy.",
      role: "Lead Product Designer (UX & UI)",
      team: "1 Product Manager, 1 Product Designer, 4 Engineers, 2 Marketers",
      timeline: "2023",
      problems: [
        "The purchase-to-payment flow needed to complete in under one minute",
        "Zero-interest terms had to be communicated clearly to build trust",
        "Required customer information needed to be reduced to minimise friction",
        "Early repayment had to be surfaced prominently as a key business protection mechanism",
      ],
      process:
        "After talking to users, merchants, and stakeholders, the team ran sprint sessions to map ideas. Crazy 8 sketching exercises encouraged uninhibited ideation without judgment, quickly generating concepts before moving into wireframes and high-fidelity prototypes.",
      outcomes: [
        "New dashboard design providing clear overview of active credits",
        "Simplified purchase flow completing in under one minute",
        "Account transfer payment option added for broader accessibility",
        "Prominent early repayment button surfaced as a priority UI element",
        "Repayment screen redesigned as a critical business protection touchpoint",
      ],
    },
  },
  {
    id: 5,
    slug: "nippyboxes",
    client: "SBSC (consulting agency)",
    title: "NippyBoxes",
    category: "Logistics · Product Design",
    year: "2021",
    description:
      "Designed a logistics marketplace, an 'Uber for delivery', where people compare couriers, book and track parcels. It launched with 50+ vendors and 200+ riders and drivers, and passed 10,000 users in its first month.",
    tags: ["Logistics", "Mobile", "B2C"],
    color: "#DCE0E4",
    highlight: { value: "10,000+", label: "users in the first month" },
    cover: "/images/work/nippyboxes/cover.jpg",
    caseStudy: nippyboxes,
    details: {
      overview:
        "NippyBoxes is a decentralised logistics booking and management system acting as both a delivery agent and an aggregator of third-party delivery agents — essentially an 'Uber for delivery services' with its own fleet of vehicles. The platform serves individuals, corporate clients, and fleet owners.",
      role: "Product Designer (UX & UI)",
      team: "2 Designers, 1 Product Manager, 2 Business Analysts, 4 Software Engineers",
      timeline: "2021",
      problems: [
        "Users had no way to compare prices across different logistics providers",
        "GPS navigation was rarely used by logistics platforms, causing pickup and tracking failures",
        "Package costs were overpriced due to inaccurate measurement methods",
        "80% of those interviewed couldn't check multiple logistics platforms for best pricing",
        "Existing logistics apps were difficult to navigate and lacked user trust",
      ],
      goals: [
        "Enable price comparison across logistics providers",
        "Provide accurate package weight estimation to improve pricing",
        "Deliver seamless onboarding for all user types",
        "Enable real-time parcel tracking",
        "Build trust through transparent delivery timelines",
      ],
      process:
        "Discovery involved stakeholder interviews, persona creation, heuristic evaluations, and user research. Design moved from sketches through wireframes to a full design system and high-fidelity prototypes. An escrow-based wallet was introduced to handle payments and potential refunds safely.",
      researchFindings: [
        "80% of interviewed users lacked a way to compare logistics pricing",
        "GPS non-adoption caused consistent failures in pickup and delivery tracking",
        "Trust in on-time delivery was low across the board",
        "Package weight estimation was a root cause of pricing inaccuracy",
      ],
      outcomes: [
        "Seamless onboarding with minimal required information for all user types",
        "Wallet with escrow system for fast payments and safe refund handling",
        "Quick booking covering local, interstate, and international deliveries",
        "Price comparison across multiple delivery services",
        "Fleet management dashboard for active and inactive vehicle tracking",
      ],
    },
  },
  {
    id: 6,
    slug: "coinbycedar",
    client: "SBSC (consulting agency)",
    title: "Coinbycedar3",
    category: "Web3 · Product Design",
    year: "2021",
    description:
      "Designed a cryptocurrency wallet system for web and mobile — making digital asset management approachable for first-time users through reduced cognitive load, clear education, and a simple portfolio dashboard.",
    tags: ["Web3", "Crypto", "Mobile"],
    color: "#E4DDD8",
    highlight: { value: "Web + mobile", label: "crypto wallet for first-timers" },
    cover: "/images/work/coinbycedar/cover.jpg",
    caseStudy: coinbycedar,
    details: {
      overview:
        "CoinbyCedar is a robust cryptocurrency wallet system for web and mobile, enabling users to buy, sell, send, and receive cryptocurrencies, access live pricing, and stay up to date with a crypto news feed. The system integrates with global payment gateways and provides dashboards and transaction reports.",
      role: "Product Designer (UX & UI)",
      team: "1 Product Manager, 2 Product Designers, 4 Software Developers",
      timeline: "2021",
      problems: [
        "The crypto industry suffered from over-reliance on technical jargon, alienating newcomers",
        "Existing platforms assumed users understood finance and crypto — creating a steep learning curve",
        "Cognitive load on trading interfaces was too high for first-time and intermediate users",
        "Users lacked access to educational materials within the product itself",
      ],
      process:
        "Conducted stakeholder interviews, user research through surveys, persona creation, and competitive benchmarking — studying Binance (praised for coin variety and approachability) and Luno (recognised for usability and simple UI). Moved from sketches to wireframes to high-fidelity prototypes with a full design system.",
      researchFindings: [
        "Technical jargon was the primary barrier to adoption for new users",
        "Binance was valued for its coin variety and beginner-friendly onboarding",
        "Luno was praised for clean UI and ease of use — a benchmark for simplicity",
        "Users wanted portfolio visibility and transaction history in one clear view",
      ],
      outcomes: [
        "Quick, secure onboarding with KYC verification built in",
        "Wallet with buy, sell, send, and receive functionality",
        "Portfolio dashboard with real-time coin pricing and transaction history",
        "Crypto news feed integrated into the main experience",
        "Conversion-focused landing page for user acquisition",
      ],
    },
  },
];

export type Article = {
  id: number;
  /** Used for on-site articles at /writing/<slug> and for the cover illustration */
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  /** Set for articles published elsewhere; omit for articles hosted on this site */
  url?: string;
  source?: "Medium";
};

// Newest first. On-site article bodies live in content/articles/<slug>.tsx.
export const articles: Article[] = [
  {
    id: 9,
    slug: "design-for-the-person-holding-the-receipt",
    title: "Design for the Person Holding the Receipt",
    date: "October 3, 2026",
    readTime: "6 min read",
    tag: "Research",
    excerpt:
      "What albert and Writesea taught me: the person with the login is rarely the person with the details. Design for both.",
  },
  {
    id: 1,
    slug: "mastering-the-8pt-grid",
    title: "Mastering the 8pt Grid: The Secret to Pixel-Perfect UI",
    date: "April 21, 2025",
    readTime: "6 min read",
    tag: "Design",
    excerpt:
      "The 8pt grid isn't a constraint, it's a cheat code. Here's how I use it to build interfaces that feel effortlessly precise.",
  },
  {
    id: 2,
    slug: "designing-for-everyone",
    title: "Designing for Everyone: 5 Accessibility Tips Every Designer Should Know",
    date: "March 13, 2025",
    readTime: "7 min read",
    tag: "Accessibility",
    excerpt:
      "Accessibility is not a feature. It's a baseline. Five practical things you can bring to your next design review.",
  },
  {
    id: 3,
    slug: "how-ai-is-shaping-better-ux",
    title: "How AI Is Shaping Better UX, Whether You Know It or Not",
    date: "February 14, 2025",
    readTime: "6 min read",
    tag: "AI & Design",
    excerpt:
      "AI is already embedded in the products we design. Understanding it changes how you make decisions, not just how fast you make them.",
  },
  {
    id: 4,
    slug: "from-flexbox-to-figma",
    title: "From Flexbox to Figma: How Flexbox Inspired Auto Layout",
    date: "January 1, 2025",
    readTime: "6 min read",
    tag: "Figma",
    excerpt:
      "Auto Layout didn't come from nowhere. Understanding its CSS roots makes you dramatically better at using it, and at talking to engineers.",
  },
  {
    id: 5,
    slug: "how-to-prioritize-like-a-pro",
    title: "How to Prioritize Like a Pro: Juggling Multiple Design Projects Without Losing Your Mind",
    date: "December 5, 2024",
    readTime: "6 min read",
    tag: "Process",
    excerpt:
      "Most designers don't have a prioritisation problem. They have a clarity problem. Here's the framework that fixed mine.",
  },
];

export const experience = [
  {
    id: 9,
    role: "Co-founder, Product Design & Front-end",
    company: "Character Guess",
    location: "Remote, UK",
    period: "Aug 2025 — Present",
    description:
      "Co-founded a live multiplayer quiz game and lead product design end to end, from research and the design system to every screen. I build the front end with Claude Code, working with a backend engineer and a product manager. 100+ beta players by word of mouth, 3,000+ questions across 6 categories and 3 languages.",
  },
  {
    id: 1,
    role: "Product Designer",
    company: "Writesea",
    location: "Remote",
    period: "Oct 2024 — Sep 2026",
    description:
      "Designed end-to-end flows for an AI-powered writing and publishing platform, from onboarding to content creation. Launched a template builder that shortened time to market and cut support workload by 0.5 FTE, and designed admin modules for universities and resellers. Ran usability tests and contributed to the design system.",
  },
  {
    id: 2,
    role: "Senior Product Designer (Contract)",
    company: "BAFTA",
    location: "London, UK",
    period: "Jul 2024 — Aug 2025",
    description:
      "Led UX for albert, BAFTA’s sustainability platform for the UK media industry, from discovery through delivery. Ran research with productions and broadcasters and redesigned the carbon toolkit for every role, raising the WCAG 2.2 AA pass rate from 60% to 85%, satisfaction from 3.3 to 4.3 out of 5, and productions starting in pre-production from 30% to 55%.",
  },
  {
    id: 3,
    role: "Lead Product Designer",
    company: "Carbon MFB",
    location: "Remote",
    period: "Nov 2022 — Mar 2024",
    description:
      "Designed and launched mobile financial products across iOS and Android. Led end-to-end redesign of savings and BNPL journeys, increasing engagement by 40%. Maintained and extended a scalable design system across multiple product lines, and presented design strategy to senior leadership.",
  },
  {
    id: 4,
    role: "Senior UX Researcher",
    company: "Carbon MFB",
    location: "Remote",
    period: "Mar 2022 — Nov 2022",
    description:
      "Conducted qualitative and quantitative research to inform product decisions. Developed information architecture models, optimised onboarding workflows, and delivered design iterations that improved user retention by 25%.",
  },
  {
    id: 5,
    role: "Senior Product Designer",
    company: "Softcom",
    location: "Lagos, Nigeria",
    period: "Jul 2021 — Mar 2022",
    description:
      "Designed B2C and B2B2C SaaS applications with a strong focus on usability and accessibility. Created mobile-first, platform-specific experiences and worked closely with developers to ensure implementation aligned with design intent.",
  },
  {
    id: 6,
    role: "Senior UX/UI Designer",
    company: "SBSC",
    location: "Lagos, Nigeria",
    period: "Oct 2020 — Jun 2021",
    description:
      "Designed products for NIBSS (Nigeria Inter-Bank Settlement System) used internally by every bank in Nigeria, under NDA. Also designed client products including NippyBoxes, a logistics marketplace, and Coinbycedar, a crypto wallet, running usability tests and iterating on the results.",
  },
  {
    id: 7,
    role: "Product Designer",
    company: "ThankYouCash (Connected Analytics)",
    location: "Lagos, Nigeria",
    period: "Dec 2019 — Sep 2020",
    description:
      "Designed loyalty and rewards experiences for 400+ merchants, from fuel stations to coffee brands, serving 200K+ customers. Shaped how businesses issue rewards and how customers earn and redeem them across web and mobile.",
  },
  {
    id: 8,
    role: "Product Designer & Front-end Developer",
    company: "Traindemy",
    location: "Lagos, Nigeria",
    period: "Jun 2019 — Dec 2019",
    description:
      "Where it started: designing and building a platform to take vocational education digital. Worked across design and front-end code for 40+ teachers and 10,000+ learners.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  /** Their headline on LinkedIn when this was added */
  title: string;
  /** How we worked together, as LinkedIn records it */
  relationship: string;
  date: string;
}

// Verbatim from LinkedIn recommendations (public on the profile). Keep the wording as written.
export const recommendationsUrl = "https://www.linkedin.com/in/chukwuemeka-iheonye/details/recommendations/";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Emeka was a great Design Leader to work with:\n- He led the successful introduction of a design system into Carbon\n- He championed UI & UX improvements that energised our users while mentoring & developing a great design org\n\nFor these & his strong design research skills - I'd work with him in the future!",
    name: "Afiola Etomi",
    title: "Product at Mondly",
    relationship: "Managed me at Carbon",
    date: "Mar 2024",
  },
  {
    // First paragraph of a longer recommendation
    quote:
      "Chukwuemeka is thorough and has his critical thinking cap on at all times. While working with him, he sees through the immediate scope of work. He identifies dependencies, edge cases, potential failure points which makes him an exceptional UX designer.",
    name: "Olumide Olusesi",
    title: "Senior Product Designer in Fintech",
    relationship: "Reported to me",
    date: "Mar 2024",
  },
  {
    quote:
      "Chukwuemeka is an exceptional designer, his UX skills and the ability to approach user problems from a different perspective was invaluable to our team. He's not afraid to push people to reach their full potential. He has an impressive ability to motivate and inspire the team while consistently setting high standards for us all. Working with him was an absolute delight.",
    name: "Mojolaade Adegbite",
    title: "Product (UI/UX) Designer",
    relationship: "Reported to me",
    date: "Mar 2024",
  },
  {
    quote:
      "Thrilled to celebrate the exceptional talent of Chukwuemeka, whom I had the pleasure of working with at Softcom. His innovative design approach, keen eye for detail, and unwavering commitment significantly contributed to the success of our products. Emeka consistently demonstrated a rare blend of creativity and strategic thinking, making a lasting impact on our team.",
    name: "Habeeb Sanni",
    title: "Senior Product Designer",
    relationship: "Managed me at Softcom",
    date: "Mar 2024",
  },
  {
    quote:
      "Emeka’s UI skill is remarkable. He’s fully committed to getting the job done and he collaborates quite well with other designers.",
    name: "Samuel Olumoyeke",
    title: "Senior B2B SaaS Designer",
    relationship: "Managed me",
    date: "May 2021",
  },
];
