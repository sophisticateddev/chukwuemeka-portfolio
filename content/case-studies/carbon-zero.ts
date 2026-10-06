import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/carbon-zero/${name}.jpg`;

export const carbonZero: CaseStudy = {
  liveUrl: "https://getcarbon.co",
  liveLabel: "Visit Carbon",
  headline: "Buy now, pay later at 0% interest, from purchase to payment in under a minute.",
  roles: ["Lead Product Designer", "Design sprint lead", "Research to handoff"],
  summary: {
    problem:
      "Carbon Zero lets people buy today and pay in instalments at 0% interest, but the flow was slow, asked for too much, and didn’t make the ‘zero’ obvious.",
    did:
      "I ran discovery with customers, merchants and stakeholders, led a design sprint, and redesigned the dashboard, purchase, payment and repayment flows.",
    result:
      "A faster purchase flow with an on-the-spot payment option, a prominent ‘pay early’ action that improved early repayments, and shareable receipts merchants trust.",
  },
  metrics: [
    { value: "0%", label: "interest, communicated at every step" },
    { value: "< 1 min", label: "target from purchase to payment" },
    { value: "4", label: "instalments to split a purchase" },
    { value: "Top 3", label: "long-term goal: consumers’ choice to pay" },
  ],
  hero: {
    mobile: { src: img("new-purchase"), alt: "Carbon Zero new purchase screen with a payment plan split into instalments" },
  },
  meta: [
    { label: "Company", value: "Carbon MFB" },
    { label: "Role", value: "Lead Product Designer" },
    { label: "Team", value: "3 designers, 1 PM, 5 engineers, 1 scrum master" },
    { label: "Platform", value: "iOS and Android" },
    { label: "Tools", value: "Figma, Miro, Confluence, Jira" },
  ],

  context: {
    takeaway: "Credit only works if people trust it, and understand it in seconds.",
    body: [
      "Carbon Zero is a Buy Now Pay Later product: customers buy today and split payments over time at zero interest. The long-term goal was for it to become one of consumers’ top three ways to pay.",
      "To get there, the whole flow had to feel instant and the ‘0% interest’ promise had to be unmistakable, while still protecting the business from missed repayments.",
    ],
    constraints: [
      "Repayment protects the business: it had to stay prominent without feeling threatening",
      "Card requests could take up to a week, too slow for an in-store purchase",
      "Under NDA: personal details in the screens below are blurred",
    ],
  },

  team: {
    takeaway: "I led design and facilitated the sprint that shaped the product.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Lead Product Designer",
        owned: "Discovery, sprint facilitation, interaction design, UI and prototypes; led two designers.",
        me: true,
      },
      { name: "Design", role: "2 Product Designers", owned: "UI production and design QA." },
      { name: "Product & engineering", role: "PM, 5 engineers, scrum master", owned: "Scope, build and delivery." },
    ],
  },

  process: {
    takeaway: "A design sprint took us from risks to sketches to a plan.",
    steps: [
      { title: "Listen", body: "Conversations with customers, merchants and stakeholders to understand what was slowing purchases down." },
      { title: "Map", body: "A sprint map of the long-term goal, metrics to watch, risks, and ‘How might we’ questions." },
      { title: "Sketch and decide", body: "Crazy 8s where no idea was too wild, then voting on the concepts to prototype." },
    ],
    artifacts: [
      { src: img("research-map"), alt: "Sprint map with long-term goal, metrics and risks", caption: "Mapping goals, metrics and risks." },
      { src: img("crazy-8"), alt: "Crazy 8 sketches pinned to a decision board", caption: "Crazy 8 sketches, then a decision." },
    ],
  },

  decisions: {
    takeaway: "Each decision made buying faster or repaying easier.",
    items: [
      {
        title: "Pay by transfer, on the spot",
        context: "Getting a Carbon card could take up to a week, too slow for someone standing at a till.",
        choice: "Added merchant account transfer as a payment option alongside the card.",
        why: "Customers can complete a purchase immediately, which is what ‘buy now’ should mean.",
      },
      {
        title: "Choose the amount and the split together",
        context: "The old purchase flow asked for details across several screens before showing a plan.",
        choice: "One screen to enter the amount, see the instalment plan, and adjust the down payment.",
        why: "Fewer steps, and the 0% interest is visible right next to the numbers.",
      },
      {
        title: "Make ‘pay early’ impossible to miss",
        context: "Unpaid credit hurts the business, and early repayment was hidden.",
        choice: "A prominent ‘Pay early’ button on purchase details, with the full repayment schedule below.",
        why: "It improved early repayments without making customers feel chased.",
      },
      {
        title: "A receipt merchants can trust",
        context: "There was no way to prove a payment had gone through.",
        choice: "A shareable transaction receipt for every purchase.",
        why: "Customers can show proof of payment instantly, which builds trust on both sides of the counter.",
      },
    ],
  },

  before: {
    takeaway: "Where we started: a good idea hidden behind a slow flow.",
    shots: [
      { src: img("before-dashboard"), alt: "Old Carbon Zero dashboard with an empty state", caption: "An empty, unclear starting point." },
      { src: img("before-fund"), alt: "Old fund a new purchase form with many fields", caption: "Too many questions up front." },
      { src: img("before-repayment"), alt: "Old repayment details screen", caption: "A plan that was hard to read." },
    ],
  },

  mobile: {
    takeaway: "Buy, split and repay, all designed for speed and clarity.",
    shots: [
      { src: img("welcome"), alt: "Carbon Zero welcome screen: buy anything, pay in 4 at 0% interest", caption: "The promise, up front." },
      { src: img("dashboard"), alt: "Dashboard with spending limit and purchase history", caption: "Spending limit and every purchase at a glance." },
      { src: img("new-purchase"), alt: "New purchase with instalment plan and down payment slider", caption: "Amount and plan on one screen." },
      { src: img("payment-options"), alt: "Choose between Carbon card and merchant account transfer", caption: "Pay by card or transfer." },
      { src: img("purchase-summary"), alt: "Purchase summary with fees and amount due today", caption: "No surprises at checkout." },
      { src: img("purchase-details"), alt: "Purchase details with Pay early button and repayment schedule", caption: "‘Pay early’, front and centre." },
      { src: img("repay"), alt: "Repay screen with next or full repayment", caption: "Repaying in a couple of taps." },
      { src: img("receipt"), alt: "Shareable transaction receipt (personal details blurred)", caption: "Proof of payment to share." },
    ],
  },

  outcomes: {
    takeaway: "A Buy Now Pay Later flow designed around speed and trust.",
    items: [
      "New dashboard showing current and past purchases at a glance",
      "Simplified purchase flow with amount and instalments together",
      "Account transfer added so purchases can happen on the spot",
      "Prominent early repayment, which improved early repayments",
      "Shareable receipts that give merchants proof of payment",
    ],
  },
};
