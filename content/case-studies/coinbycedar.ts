import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/coinbycedar/${name}.jpg`;

export const coinbycedar: CaseStudy = {
  headline: "Made buying and selling crypto feel simple for first-timers.",
  roles: ["Senior UI/UX Designer", "Led a team of 2 designers", "Mobile and web"],
  summary: {
    problem:
      "Crypto platforms assumed users understood finance and spoke in jargon, so first-timers were overwhelmed before they made a single trade.",
    did:
      "I led research and competitive analysis during the pandemic, then designed a wallet system for mobile and web: onboarding with KYC, buy, sell, send and receive, a live market and a conversion-focused landing page.",
    result:
      "A crypto wallet that reduces cognitive load at every step, with balances at a glance and plain-language flows.",
  },
  metrics: [
    { value: "2", label: "platforms: mobile and web" },
    { value: "4", label: "core actions: buy, sell, send, receive" },
    { value: "2", label: "market leaders benchmarked: Binance, Luno" },
    { value: "KYC", label: "built into onboarding" },
  ],
  hero: {
    mobile: { src: img("wallet"), alt: "Coinbycedar3 wallet showing total balance and individual coin balances" },
    desktop: { src: img("web-dashboard"), alt: "Coinbycedar3 web dashboard with portfolio value and holdings" },
  },
  meta: [
    { label: "Company", value: "At SBSC, a software consulting agency" },
    { label: "Role", value: "Senior UI/UX Designer (design lead)" },
    { label: "Team", value: "3 designers, PM, 2 engineers, business analyst" },
    { label: "Platform", value: "iOS, Android and web" },
    { label: "Tools", value: "Figma, Miro, Google Docs, Jira" },
  ],

  context: {
    takeaway: "Crypto was built for insiders. We designed for everyone else.",
    body: [
      "Coinbycedar3 is a crypto wallet for web and mobile: buy, sell, send and receive coins, follow prices, and keep up with crypto news, connected to a global payment gateway.",
      "Most people don’t understand crypto trading, and most platforms are too complicated to navigate. Our job was to make the first trade feel safe and obvious.",
    ],
    constraints: ["Research during COVID-19, so all interviews were remote", "Strict identity checks (KYC) to prevent fraud"],
  },

  team: {
    takeaway: "I led design for both apps.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Senior UI/UX Designer",
        owned: "Research, competitive analysis, interaction design, mobile and web UI; led two designers.",
        me: true,
      },
      { name: "Design", role: "2 Product Designers", owned: "UI production across mobile and web." },
      { name: "Product & engineering", role: "PM, 2 engineers, business analyst", owned: "Requirements and build." },
    ],
  },

  insights: {
    takeaway: "The industry’s biggest barrier was its own language.",
    intro:
      "Because of COVID-19, we interviewed crypto adopters over Zoom and Google Meet, ran surveys, and did a heuristic evaluation and competitive analysis.",
    items: [
      { title: "Jargon shuts people out", body: "Platforms over-relied on technical terms and assumed users already understood finance and crypto." },
      { title: "Binance won on choice", body: "Praised for its variety of coins and a simplified, beginner-friendly app." },
      { title: "Luno won on simplicity", body: "Praised for usability and a clean, simple interface." },
      { title: "People wanted to learn in context", body: "Education inside the product mattered as much as the trading tools." },
    ],
  },

  process: {
    takeaway: "Benchmarking the leaders, then sketching something simpler.",
    steps: [
      { title: "Benchmark", body: "Listed competitors, compared features side by side, and studied what made Binance and Luno work." },
      { title: "Sketch", body: "Brainstormed and sketched ways to simplify buying and selling." },
      { title: "Design", body: "High-fidelity mobile and web flows with consistent patterns across both." },
    ],
    artifacts: [
      { src: img("competitors"), alt: "Table of competitors with ratings and downloads", caption: "Who we were up against." },
      { src: img("feature-matrix"), alt: "Feature comparison matrix across competitors", caption: "Feature comparison across competitors." },
    ],
  },

  decisions: {
    takeaway: "Every decision aimed to lower cognitive load.",
    items: [
      {
        title: "One balance, then the detail",
        context: "Portfolios across many coins are hard to read.",
        choice: "A wallet that shows the total balance first, with each coin’s balance below.",
        why: "Answers ‘how am I doing?’ before ‘what do I hold?’.",
      },
      {
        title: "Receive with a QR code or an address",
        context: "Long wallet addresses are error-prone to share.",
        choice: "A receive screen with both a QR code and a copyable address.",
        why: "Fewer failed or mistaken transfers.",
      },
      {
        title: "Buy and sell without a middleman",
        context: "Many users had to find external buyers or sellers.",
        choice: "Buy and sell directly in the app, with a clear confirmation of fees before every order.",
        why: "Simpler and safer, with no surprises on price.",
      },
      {
        title: "Make KYC part of onboarding",
        context: "As a financial product, fraud prevention was non-negotiable.",
        choice: "Identity verification, including facial recognition, built into a short onboarding.",
        why: "Security without making sign-up feel like paperwork.",
      },
    ],
  },

  mobile: {
    takeaway: "A mobile app that makes the first trade feel obvious.",
    shots: [
      { src: img("home"), alt: "Home with learning cards, watchlist and top gainers", caption: "Learning, watchlist and top movers." },
      { src: img("market"), alt: "Market list of coins with prices and changes", caption: "The market at a glance." },
      { src: img("coin-detail"), alt: "Bitcoin detail with price chart and news", caption: "Price, context and news." },
      { src: img("wallet"), alt: "Wallet with total balance and coin balances", caption: "Total first, then each coin." },
      { src: img("receive"), alt: "Receive Bitcoin with QR code and address", caption: "Receive with a QR code." },
      { src: img("send"), alt: "Send coins to an external address", caption: "Send to any address." },
      { src: img("sell"), alt: "Amount to sell keypad", caption: "Selling made simple." },
      { src: img("confirm"), alt: "Order confirmation with fees", caption: "Fees shown before you confirm." },
      { src: img("kyc"), alt: "Facial recognition step in identity verification", caption: "KYC built into onboarding." },
    ],
  },

  web: {
    takeaway: "The same simplicity on a bigger screen.",
    shots: [
      { src: img("web-dashboard"), alt: "Web dashboard with portfolio and holdings", caption: "Portfolio dashboard." },
      { src: img("web-landing"), alt: "Landing page: buying and selling crypto has never been this simple", caption: "A landing page built to convert." },
      { src: img("web-coin"), alt: "Coin detail page with chart and order panel", caption: "Coin detail with trading panel." },
      { src: img("web-buy"), alt: "Buy crypto form with order summary", caption: "Buying on the web." },
    ],
  },

  outcomes: {
    takeaway: "A crypto wallet designed for the people the industry forgot.",
    items: [
      "Quick, secure onboarding with KYC verification built in",
      "Wallet with buy, sell, send and receive",
      "Portfolio dashboard with live prices and transaction history",
      "Crypto news feed integrated into the experience",
      "Conversion-focused landing page for user acquisition",
    ],
  },
};
