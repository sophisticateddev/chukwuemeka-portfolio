import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/nippyboxes/${name}.jpg`;

export const nippyboxes: CaseStudy = {
  headline: "An ‘Uber for deliveries’: compare couriers, book fast, track every parcel.",
  roles: ["Product Designer", "Customer app and partner platform", "Research to usability testing"],
  summary: {
    problem:
      "People and businesses sending parcels couldn’t compare couriers, were overcharged because parcels weren’t measured properly, and rarely trusted deliveries to arrive on time.",
    did:
      "I interviewed 15 senders, mapped flows for three user types, and designed a customer mobile app plus a web platform for fleet owners to manage vehicles, drivers and deliveries.",
    result:
      "A booking experience with price comparison across couriers, weight-based pricing, escrow-backed payments and tracking, validated with stakeholders and potential users.",
  },
  metrics: [
    { value: "80%", label: "of interviewees couldn’t compare courier prices" },
    { value: "15", label: "senders interviewed" },
    { value: "3", label: "user types: customers, businesses, fleets" },
    { value: "2", label: "products: customer app and partner web app" },
  ],
  hero: {
    mobile: { src: img("compare-services"), alt: "NippyBoxes delivery booking comparing prices from four couriers" },
    desktop: { src: img("web-dashboard"), alt: "NippyBoxes partner dashboard with delivery analytics" },
  },
  meta: [
    { label: "Role", value: "Product Designer (UX & UI)" },
    { label: "Team", value: "2 designers, PM, 2 business analysts, 4 engineers" },
    { label: "Platform", value: "Mobile app and web app" },
    { label: "Tools", value: "Figma, Miro, Illustrator, Zoom" },
  ],

  context: {
    takeaway: "Sending a parcel in Nigeria meant guessing the price and hoping it arrived.",
    body: [
      "NippyBoxes is a logistics booking and management platform: a delivery company with its own fleet and an aggregator of third-party couriers, for local, interstate and international deliveries.",
      "It had to work for three very different people: individuals sending a package, businesses shipping regularly, and fleet owners running vehicles and drivers.",
    ],
  },

  team: {
    takeaway: "I designed across both sides of the marketplace.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Product Designer",
        owned: "Interviews, user flows, design system, customer mobile app, partner web app, usability testing.",
        me: true,
      },
      { name: "Design", role: "Product Designer", owned: "Partnered on UI and the marketing site." },
      { name: "Product & engineering", role: "PM, 2 business analysts, 4 engineers", owned: "Requirements and build." },
    ],
  },

  insights: {
    takeaway: "People didn’t want the cheapest courier. They wanted to choose with confidence.",
    intro: "We interviewed 15 people, a mix of small businesses and individuals, in person and remotely, and ran a survey on which logistics platforms people use and why.",
    items: [
      { title: "No way to compare", body: "80% of the people we spoke to didn’t have time to check several platforms for the best price." },
      { title: "Prices felt made up", body: "Inaccurate parcel measurement led to overcharging." },
      { title: "Tracking was guesswork", body: "Many platforms didn’t use GPS, causing problems with pickup, delivery and tracking." },
      { title: "Trust was low", body: "Most participants didn’t trust that their package would arrive on time." },
    ],
  },

  process: {
    takeaway: "From brainstorms to user flows to a mini design system.",
    steps: [
      { title: "Prioritise", body: "Brainstorms with the team turned research and stakeholder requests into core features." },
      { title: "Map", body: "User flows for customers, businesses and fleet partners." },
      { title: "Sketch and systemise", body: "Paper sketches, wireframes, then a mini design system for type, colour and components." },
    ],
    artifacts: [
      { src: img("user-flow"), alt: "NippyBoxes user flow diagram", caption: "Mapping the booking flow." },
      { src: img("sketches"), alt: "Paper sketches of app screens", caption: "Sketching before pixels." },
      { src: img("colours"), alt: "Colour palette from the NippyBoxes design system", caption: "Colour styles." },
      { src: img("components"), alt: "Component library with buttons, inputs and date pickers", caption: "Core components." },
    ],
  },

  decisions: {
    takeaway: "The decisions that made a marketplace feel trustworthy.",
    items: [
      {
        title: "Show every courier’s price side by side",
        context: "People couldn’t compare logistics providers without visiting each one.",
        choice: "Booking ends with a choice of delivery services, each with its price and estimated pickup time.",
        why: "Price comparison drew the most interest when we tested with users."
      },
      {
        title: "Price by weight",
        context: "Overcharging came from guessing package size.",
        choice: "Package details and weight are captured during booking to calculate the price.",
        why: "Fairer, more predictable prices.",
      },
      {
        title: "Hold payments in escrow",
        context: "Payment validates a booking, but deliveries sometimes fail.",
        choice: "A wallet with escrow, so refunds are straightforward when something goes wrong.",
        why: "Customers can pay quickly without worrying about getting their money back.",
      },
      {
        title: "Give fleet owners their own tool",
        context: "Partners needed to onboard, verify documents and manage vehicles and drivers.",
        choice: "A dedicated web platform with guided verification, fleet and driver management, and delivery analytics.",
        why: "The supply side of the marketplace had to be as easy as the demand side.",
      },
    ],
  },

  mobile: {
    takeaway: "For customers: book, compare, pay and track from one app.",
    shots: [
      { src: img("register"), alt: "Registration with just a name and phone number", caption: "Sign up with a name and number." },
      { src: img("home"), alt: "Home with local, interstate and international delivery", caption: "Local, interstate or international." },
      { src: img("compare-services"), alt: "Comparing four delivery services with prices", caption: "Compare couriers, then choose." },
      { src: img("wallet"), alt: "Wallet with balance and transaction history", caption: "A wallet with escrow behind it." },
    ],
  },

  web: {
    takeaway: "For partners: a web platform to run a delivery business.",
    shots: [
      { src: img("web-dashboard"), alt: "Partner dashboard with delivery analytics", caption: "Delivery analytics at a glance." },
      { src: img("web-onboarding"), alt: "Partner onboarding choosing partner type", caption: "Guided partner onboarding." },
      { src: img("web-fleets"), alt: "Manage fleets table", caption: "Managing active and inactive fleets." },
      { src: img("web-drivers"), alt: "Manage drivers table", caption: "Inviting and monitoring drivers." },
    ],
  },

  outcomes: {
    takeaway: "Every goal met, and honest findings from testing.",
    items: [
      "Price comparison across logistics providers",
      "Weight-based estimates for fairer pricing",
      "Seamless onboarding for customers and partners",
      "Parcel tracking and a wallet with escrow",
      "Testing confirmed easier onboarding and strong interest in price comparison; it also showed assigning drivers was hard and the landing page undersold the product, both fed into the next iteration",
    ],
  },
};
