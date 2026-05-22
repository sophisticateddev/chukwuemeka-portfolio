export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
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
  };
};

export const workProjects: Project[] = [
  {
    id: 1,
    slug: "albert-sustainability-platform",
    title: "albert — Sustainability Platform",
    category: "Product Design",
    year: "2024–2025",
    description:
      "Redesigned the UK's national media sustainability platform for BAFTA's albert initiative, achieving a 25% improvement in accessibility and engagement across the media industry.",
    tags: ["Sustainability", "Enterprise", "Accessibility"],
    color: "#DDE4DC",
    details: {
      overview:
        "Led UX design across albert's digital platforms — the UK's leading sustainability initiative for the media industry, operating under BAFTA. The work spanned from research and discovery through to delivery, with a strong emphasis on accessibility and cross-stakeholder alignment.",
      role: "Senior Product Designer",
      team: "Product Designer, Product Manager, Engineering team",
      timeline: "Jul 2024 – Jun 2025",
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
    id: 2,
    slug: "carbon-loans",
    title: "Carbon Loans",
    category: "Fintech · Product Design",
    year: "2023",
    description:
      "End-to-end redesign of Carbon MFB's loan product — improving the application journey, error handling, and UX writing to increase loan applications by 15% and reduce drop-offs by 10%.",
    tags: ["Fintech", "Mobile", "Redesign"],
    color: "#E8E4DC",
    details: {
      overview:
        "The redesign aimed to reward loyal customers, enhance the user experience across the loan journey, and increase profit margins. Carbon MFB is one of Africa's fastest-growing digital banks, serving over 3 million users across Nigeria.",
      role: "Lead Product Designer (UX & UI)",
      team: "1 Senior UX Designer, 2 Designers, 1 Product Manager, 6 Developers, 1 QA, 1 Scrum Master",
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
        "Targeted 15% increase in loan applications and 10% reduction in drop-offs",
      ],
    },
  },
  {
    id: 3,
    slug: "carbon-zero",
    title: "Carbon Zero",
    category: "Fintech · Product Design",
    year: "2023",
    description:
      "Designed Carbon's Buy Now Pay Later product from concept to launch — a zero-interest credit facility enabling customers to purchase today and spread payments over time in under one minute.",
    tags: ["BNPL", "Fintech", "B2C"],
    color: "#E4E1D8",
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
    id: 4,
    slug: "africhange",
    title: "Africhange",
    category: "Fintech · UX Design",
    year: "2022",
    description:
      "Redesigned the global money transfer experience for Africhange — reducing transaction time from 2 hours to 1 minute through a wallet system, seamless onboarding, and multiple send options for diaspora users.",
    tags: ["Fintech", "Redesign", "Research"],
    color: "#E4DDE4",
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
    id: 5,
    slug: "nippyboxes",
    title: "NippyBoxes",
    category: "Logistics · Product Design",
    year: "2021",
    description:
      "Designed a decentralised logistics booking platform — an 'Uber for delivery' enabling individuals and businesses to compare prices across providers, track parcels, and book local, interstate, and international deliveries.",
    tags: ["Logistics", "Mobile", "B2C"],
    color: "#DCE0E4",
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
    title: "Coinbycedar",
    category: "Web3 · Product Design",
    year: "2021",
    description:
      "Designed a cryptocurrency wallet system for web and mobile — making digital asset management approachable for first-time users through reduced cognitive load, clear education, and a simple portfolio dashboard.",
    tags: ["Web3", "Crypto", "Mobile"],
    color: "#E4DDD8",
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

export const articles = [
  {
    id: 1,
    title: "Mastering the 8pt Grid: The Secret to Pixel-Perfect UI",
    date: "April 21, 2025",
    readTime: "4 min read",
    tag: "Design",
    excerpt:
      "The 8pt grid isn't a constraint — it's a cheat code. Here's how to use it to build interfaces that feel effortlessly precise.",
  },
  {
    id: 2,
    title: "Designing for Everyone: 5 Accessibility Tips Every Designer Should Know",
    date: "March 13, 2025",
    readTime: "5 min read",
    tag: "Accessibility",
    excerpt:
      "Accessibility is not a feature. It's a baseline. Here are five practical things you can do in your next design review.",
  },
  {
    id: 3,
    title: "How AI Is Shaping Better UX — Whether You Know It or Not",
    date: "February 14, 2025",
    readTime: "5 min read",
    tag: "AI & Design",
    excerpt:
      "AI is already embedded in the products we design. Understanding it changes how you make decisions, not just how fast you make them.",
  },
  {
    id: 4,
    title: "From Flexbox to Figma: How Flexbox Inspired Auto Layout",
    date: "January 1, 2025",
    readTime: "4 min read",
    tag: "Figma",
    excerpt:
      "Auto Layout in Figma didn't come from nowhere. Understanding its CSS roots makes you dramatically better at using it.",
  },
  {
    id: 5,
    title: "How to Prioritize Like a Pro: Juggling Multiple Design Projects Without Losing Your Mind",
    date: "December 5, 2024",
    readTime: "5 min read",
    tag: "Process",
    excerpt:
      "Most designers don't have a prioritisation problem. They have a clarity problem. Here's the framework that fixed mine.",
  },
];

export const experience = [
  {
    id: 1,
    role: "Product Designer",
    company: "Writesea",
    location: "Remote",
    period: "Oct 2024 — Present",
    description:
      "Leading UX and product design for an AI-powered writing and publishing platform. Designing end-to-end flows from onboarding to content creation, running usability testing, and contributing to the design system — shipping AI-enabled features iteratively in agile sprints.",
  },
  {
    id: 2,
    role: "Senior Product Designer",
    company: "BAFTA",
    location: "London, UK",
    period: "Jul 2024 — Jun 2025",
    description:
      "Led UX design across digital platforms from research through delivery. Developed journey maps, user flows, and UI designs aligned with WCAG accessibility standards. Advocated for user-centred design principles across stakeholders and digital teams.",
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
    period: "Jul 2021 — Aug 2022",
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
      "Designed responsive web and mobile fintech applications. Conducted usability testing and delivered iterative design improvements across client engagements.",
  },
];
