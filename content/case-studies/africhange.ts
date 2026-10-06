import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/africhange/${name}.jpg`;

export const africhange: CaseStudy = {
  liveUrl: "https://africhange.com",
  liveLabel: "Visit Africhange",
  headline: "Cut transfers from North America to Africa from 2 hours to about a minute.",
  roles: ["Lead Designer", "Research to design system", "Mobile, web and marketing site"],
  summary: {
    problem:
      "Plenty of apps send money to Africa, but few make it fast and seamless. Transfers took up to two hours, and long sign-ups pushed people back to informal options.",
    did:
      "I led research with current and potential users in Canada and Africa, then designed a wallet-based experience, a faster onboarding, new ways to send, and a referral system, across mobile, web and a marketing site.",
    result:
      "A wallet system that cuts transfer time from roughly 2 hours to about a minute, with onboarding stripped back to the essentials.",
  },
  metrics: [
    { value: "~1 min", label: "transfers, down from ~2 hours" },
    { value: "10", label: "users interviewed in Canada and Africa" },
    { value: "4", label: "ways to send money" },
    { value: "3", label: "surfaces: mobile app, web app, website" },
  ],
  hero: {
    mobile: { src: img("wallet"), alt: "Africhange wallet showing balance in CAD and recent transfers" },
    desktop: { src: img("web-dashboard"), alt: "Africhange web dashboard with balances and recent transfers" },
  },
  meta: [
    { label: "Company", value: "Freelance, for Africhange Ltd" },
    { label: "Role", value: "Lead Designer (UX & UI)" },
    { label: "Team", value: "2 designers, PM, growth manager, 2 engineers" },
    { label: "Platform", value: "iOS, Android, web app, marketing site" },
    { label: "Tools", value: "Figma, Miro, Illustrator, Zoom" },
  ],

  context: {
    takeaway: "Sending money home shouldn’t take longer than a coffee break.",
    body: [
      "Africhange lets people in North America send money to Africa. The market is crowded, but the problem of fast, seamless transfers to and from Africa still wasn’t solved.",
      "The brief was to redesign the experience so the product could stand out on what matters most to the people using it: speed, trust and good rates.",
    ],
  },

  team: {
    takeaway: "I led design across research, product and the design system.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Lead Designer",
        owned: "Research plan, interviews, synthesis, user flows, design system, mobile and web UI, prototypes.",
        me: true,
      },
      { name: "Design", role: "Product Designer", owned: "Partnered on UI across the product." },
      { name: "Product & engineering", role: "PM, growth manager, 2 engineers", owned: "Priorities, growth and build." },
    ],
  },

  insights: {
    takeaway: "Speed and trust beat everything else, including the rate.",
    intro:
      "I recruited 6 current users and 4 potential users living in Canada and parts of Africa, and ran interviews and surveys with a written research plan and interview script.",
    items: [
      { title: "Speed is the product", body: "Waiting up to two hours for a transfer was the single biggest pain point." },
      { title: "Sign-up friction sends people elsewhere", body: "Some people used informal services with no sign-up at all, just to avoid lengthy onboarding and KYC." },
      { title: "Trust is earned by reliability", body: "Users trusted Africhange because their transfers always went through. That was worth protecting." },
      { title: "Money moves on a schedule", body: "Many transfers are recurring, like family support, so scheduling would save real effort." },
    ],
  },

  process: {
    takeaway: "From interviews to sketches to a mini design system.",
    steps: [
      { title: "Synthesise", body: "Affinity mapping, empathy mapping, Crazy 8s, a site map and user flows." },
      { title: "Sketch", body: "Collected screenshots and recordings of the old app, then sketched solutions on paper." },
      { title: "Systemise", body: "A mini design system before high fidelity, so every screen stayed consistent." },
    ],
    artifacts: [
      { src: img("sketches"), alt: "Paper sketches of new Africhange screens", caption: "Early sketches on paper." },
      { src: img("design-system"), alt: "Mini design system with icons, colours and components", caption: "A mini design system to keep things consistent." },
    ],
  },

  decisions: {
    takeaway: "Four decisions that made sending money faster and growth cheaper.",
    items: [
      {
        title: "Put a wallet at the centre",
        context: "Every transfer waited on a bank-to-bank journey that could take hours.",
        choice: "A wallet that holds funds, so transfers settle from balance.",
        why: "Transfer time dropped from roughly 2 hours to about a minute.",
      },
      {
        title: "Ask for less at sign-up",
        context: "Long onboarding drove people to informal alternatives.",
        choice: "Collect only the minimum at sign-up and defer the rest until it’s needed.",
        why: "Lower drop-off at the very first step.",
      },
      {
        title: "Send money the way people think about people",
        context: "Users send to family, friends and bank accounts, not ‘recipients’.",
        choice: "Four ways to send: to Africhange users, saved beneficiaries, phone contacts and bank accounts.",
        why: "Fewer steps for the transfers people make most.",
      },
      {
        title: "Let users grow the product",
        context: "Word of mouth was already how many users found Africhange.",
        choice: "A referral system with codes, share links and visible referral income.",
        why: "A cheaper acquisition channel that rewards loyal users.",
      },
    ],
  },

  mobile: {
    takeaway: "A mobile app built around the wallet.",
    shots: [
      { src: img("signup"), alt: "Short sign-up form", caption: "Sign-up with only the essentials." },
      { src: img("home"), alt: "Home screen with available balance and fund wallet button", caption: "Your balance, front and centre." },
      { src: img("wallet"), alt: "Wallet with balance and transfer history", caption: "Every transfer and its status." },
      { src: img("send-money"), alt: "Send money to a bank account with live rate conversion", caption: "Send with the rate shown up front." },
      { src: img("referral"), alt: "Referral screen with income, code and share options", caption: "Referrals that pay." },
    ],
  },

  web: {
    takeaway: "The same experience on the web, plus a marketing site to win new users.",
    shots: [
      { src: img("web-dashboard"), alt: "Web dashboard with wallet balances and transactions", caption: "Web dashboard." },
      { src: img("web-send"), alt: "Web send money form", caption: "Sending money on the web." },
      { src: img("web-withdraw"), alt: "Web withdraw funds flow", caption: "Withdrawing funds." },
      { src: img("web-login"), alt: "Web sign-in screen", caption: "Sign-in." },
    ],
  },

  outcomes: {
    takeaway: "Faster transfers, an easier start, and new ways to grow.",
    items: [
      "Wallet system reducing transfer time from about 2 hours to about a minute",
      "Fast onboarding with minimal sign-up information",
      "Four ways to send: Africhange users, beneficiaries, contacts and bank accounts",
      "Referral system to drive organic acquisition",
      "Delivered across mobile, web app and marketing website",
    ],
  },
};
