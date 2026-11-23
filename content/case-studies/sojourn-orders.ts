import type { CaseStudy } from "@/lib/case-study";

// Screens are from a local copy of the app with demo data (people, sites, suppliers and amounts are made up).
// Sources: the project's docs/PRODUCT.md, docs/DECISIONS.md and docs/DESIGN-SYSTEM.md.
// Live figures (11 people, £3,580 of orders) were given by the owner of this site on 2026-11-23: update before reuse.
// Keep out: the owner's name, running costs, account details, handover terms, and the Clock-in app (not public yet).
const img = (name: string) => `/images/work/sojourn-orders/${name}.jpg`;

export const sojournOrders: CaseStudy = {
  headline: "Quicker to ask than to just buy.",
  status: "Live",
  liveUrl: "https://orders.sojournapps.co.uk",
  liveLabel: "Visit Sojourn Orders",
  roles: ["Client project", "Designed end to end", "Built with AI (Claude Code)", "Shipped to production"],
  summary: {
    problem:
      "Staff at Sojourn, a UK building firm, bought materials without approval, and the owner found out when the invoice arrived. The approved route was slower than just buying.",
    did:
      "I designed and built a phone app for purchase orders: raise an order in four questions, approve with one tap or a swipe, and track what’s on its way. I built it with Claude Code, from the first sketch to the live app.",
    result:
      "Live, with all of Sojourn’s staff on it: 7 staff, 3 authorizers and 1 admin. It has processed £3,580 of orders so far.",
  },
  metrics: [
    { value: "11", label: "people use it: 7 staff, 3 authorizers and 1 admin" },
    { value: "£3,580", label: "of orders processed so far" },
    { value: "4", label: "questions to raise an order; everything else is optional" },
    { value: "1 tap", label: "or a swipe to approve, from the Approvals list" },
  ],
  hero: {
    mobile: {
      src: img("approvals"),
      alt: "Sojourn Orders Approvals screen on a phone: three orders waiting, each with the amount, who raised it, the site and supplier, and an Approve button",
    },
  },
  meta: [
    { label: "Client", value: "Sojourn Limited, a UK building firm" },
    { label: "Role", value: "Product designer and builder (with AI)" },
    { label: "Team", value: "Me, working directly with the owner" },
    { label: "Timeline", value: "Oct 2026 – present" },
    { label: "Platform", value: "Installable web app (PWA) for phones and desktop" },
  ],

  context: {
    takeaway: "Staff weren’t ignoring the process. The process ignored where they work.",
    body: [
      "Sojourn’s people are on building sites. They need materials today, they’re wearing gloves, the sun is on the screen and the signal comes and goes. A long form, or a phone call to chase a manager, loses to just buying what they need.",
      "So the owner kept finding out about spending when the invoice landed, with no record of who asked, why, or who said yes. The brief I set myself was simple: make the approved path the easiest path. If raising an order isn’t quicker than a text message, people won’t use it.",
    ],
    constraints: [
      "Site staff rarely open an app and won’t remember a password",
      "Gloves, sunlight and patchy 4G on site",
      "Approvers decide on the move, often between calls or while driving",
      "Business rules about money had to hold even if the app were bypassed",
    ],
  },

  team: {
    takeaway: "A small project with one designer and builder, shaped every week by the person paying the invoices.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Product designer and builder",
        owned:
          "Working out the needs with the owner, the design system, every screen and flow, the build with Claude Code, testing, security and the go-live setup.",
        me: true,
      },
      {
        name: "Sojourn’s owner",
        role: "Client and admin",
        owned: "Approval rules and limits, feedback from real use, and the final say on choices like the app lock and sign-in.",
      },
    ],
  },

  insights: {
    takeaway: "Four kinds of people use the app, and each needed something different from it.",
    items: [
      {
        title: "Site staff want to get back to work",
        body: "They fear forms and being told off. The fastest way to win them over is to ask for less: what, roughly how much, delivery or collection, and when.",
      },
      {
        title: "Office staff order the same things again",
        body: "Retyping last week’s order is what they hate most. “Order again” fills in the item, cost, site and supplier with one tap.",
      },
      {
        title: "Approvers decide in seconds, but need context",
        body: "They’re busy and often driving. The card has to say who, what, how much, for which site and by when, so they can decide without opening anything.",
      },
      {
        title: "The owner wants a trail, not a chase",
        body: "Spend by site and person, who approved what, and a weekly summary in the inbox, without having to open the app.",
      },
    ],
  },

  decisions: {
    takeaway: "Every decision was judged by one question: is this quicker than a text message?",
    items: [
      {
        title: "Four questions, then “Add if you like”",
        context:
          "The first New order screen showed eight boxes once you opened More details. The owner called it messy and intimidating.",
        options: ["One long form", "A multi-step wizard", "Four required answers, with everything else tucked away"],
        choice:
          "What do you need, rough cost, delivery or collection, and when. Priority, site, supplier, a quote photo and a note sit in an “Add if you like” list, each row showing its value and opening a sheet.",
        why: "It keeps the form to four decisions on one screen. “Snap the quote” is often quicker than typing the details, so it sits right there.",
        tradeoff: "Some orders arrive with less detail, so approvers can ask a question on the order instead of rejecting it.",
      },
      {
        title: "Approval rules by amount, not a fixed chain",
        context: "Small orders shouldn’t wait for anyone, and big ones shouldn’t rest on one person’s say-so.",
        options: ["Any single approver", "A fixed sequence of approvers", "Rules by amount"],
        choice:
          "Orders under a threshold are approved straight away. Above it, any approver whose limit covers the amount can approve, and the largest orders need two approvals. The admin can change all of it in Settings.",
        why: "Most orders are small and routine, so most never wait. The rules live in the database, so they hold even if someone works around the app.",
        tradeoff: "More rules to explain, so every order says who it’s waiting for, such as “Waiting for Mark”.",
      },
      {
        title: "Sign in with a text code, then a PIN only where money moves",
        context: "Site staff rarely check email and hate passwords. But an approver’s phone can approve spending.",
        choice:
          "Staff sign in once with a code sent to their phone. Approvers and admins also set a 4-digit PIN, with Face ID or a fingerprint as an option, and the app locks after 30 minutes away. Site staff can turn the lock on, but never have to.",
        why: "The lock protects against a borrowed phone without slowing down the people who only raise orders. The owner chose this over locking everyone, every time.",
        tradeoff: "Two sign-in moments for approvers, so the PIN screen always has a clear way back.",
      },
      {
        title: "Swipe right to approve, left to reject",
        context: "Approvers decide between calls. Aiming for a button on a moving phone is slow.",
        choice:
          "Swipe right on a card to approve. The owner then asked for swipe left to reject, to match. Cards follow the finger and show when letting go will act, and Approve and Reject buttons stay on every card for anyone who doesn’t swipe.",
        why: "It’s the quickest gesture on a phone, and the buttons keep it accessible.",
        tradeoff: "This is money, so the motion stays subtle rather than playful.",
      },
      {
        title: "No signal is normal, not an error",
        context: "On site, the connection drops in the middle of an order.",
        choice:
          "Drafts save on the phone as you type. An order sent without signal says “Saved on your phone” and appears on Home under “Waiting for signal”, then sends itself when the connection is back.",
        why: "Nothing typed on site is ever lost, so nobody gives up and buys it anyway.",
        tradeoff: "The app had to stop reloading itself after updates, because a reload wiped what people had typed. It now waits for a tap on “Update ready”.",
      },
    ],
  },

  evolution: {
    takeaway: "Built in weeks, then reshaped by the owner’s feedback once it was in their hands.",
    items: [
      {
        date: "Oct 2026",
        title: "Brief, brand and approval engine",
        body: "The product brief, a design system sampled from Sojourn’s website and logo, and the approval rules written as database functions.",
      },
      {
        date: "Oct 2026",
        title: "Every screen, alerts and the app lock",
        body: "Sign-in, Home, New order, Approvals, Deliveries and Admin. Then push, email and a 7am digest, first-time tips and the PIN lock.",
      },
      {
        date: "Oct 2026",
        title: "The owner’s feedback",
        body: "New order became four questions. Cards were redesigned so each kind of fact looks different, swipes were added, and every screen was checked against Apple’s design guidelines for iPhone.",
      },
      {
        date: "Oct 2026",
        title: "Security and speed",
        body: "An end-to-end security review, and a rework so the phone answers first and the network second.",
      },
      {
        date: "Nov 2026",
        title: "Live",
        body: "A final security check, weekly and monthly summary emails for the owner, and the live app at orders.sojournapps.co.uk. All of Sojourn’s staff now use it.",
      },
    ],
  },

  mobile: {
    takeaway: "Built for one thumb, gloves and bright sunlight.",
    intro:
      "One main action per screen, in the thumb zone. Every order shows what happens next. Screens below use demo data: the people, sites, suppliers and amounts are made up.",
    shots: [
      { src: img("tips"), alt: "First-time tips sheet: Order in under 30 seconds, with a small preview of the order form", caption: "Three short tips the first time someone signs in." },
      { src: img("new-empty"), alt: "New order screen with four questions and a recent-orders row", caption: "Four questions, with recent orders one tap away." },
      { src: img("new-suggest"), alt: "New order screen suggesting timber items while typing", caption: "Suggestions from your own past orders and a materials list." },
      { src: img("home"), alt: "Home screen listing orders with status pills, priority and the next step", caption: "Home leads with what happens next." },
      { src: img("order-pending"), alt: "An order page showing the PO number, amount, status and who it’s waiting for", caption: "Every order says who it’s waiting for." },
      { src: img("deliveries"), alt: "Deliveries screen grouping overdue and today’s orders with Arrived and Collected buttons", caption: "Deliveries: one tap when something arrives." },
      { src: img("approvals-dark"), alt: "Approvals screen in dark mode", caption: "Dark mode, built on Sojourn’s navy." },
      { src: img("reports"), alt: "Reports screen with approved spend, orders raised and a weekly chart", caption: "Reports for the owner, for any period." },
    ],
  },

  designSystem: {
    takeaway: "Nine colours from Sojourn’s own website, and one rule: amber means “do it”.",
    colors: [
      { name: "Amber", value: "#FFB923", usage: "One primary action per screen, with navy text" },
      { name: "Navy", value: "#021828", usage: "Structure: secondary actions, chips, dark mode" },
      { name: "Ink", value: "#212529", usage: "Text" },
      { name: "Grey", value: "#636363", usage: "Secondary text (6:1 on white)" },
      { name: "Green", value: "#166534", usage: "Approved only" },
      { name: "Red", value: "#B91C1C", usage: "Rejected only" },
    ],
    type: {
      family: "Plus Jakarta Sans",
      notes: "One family, chosen over Manrope (too thin outdoors) and Geist (too technical). The font ships with the app rather than loading from Google.",
    },
    components: [
      { name: "Order card", states: ["Pending", "Needs info", "Approved", "Overdue"] },
      { name: "Approval card", states: ["Resting", "Swiping", "Will approve", "Will reject"] },
      { name: "Sheet", states: ["Picker", "Calendar", "Search"] },
      { name: "Button", states: ["Primary", "Secondary", "Pressed", "Disabled"] },
    ],
    motion:
      "Calm, not cute. Motion explains what changed and never decorates. It follows the phone’s reduce-motion setting.",
  },

  accessibility: {
    takeaway: "Usable outdoors and with one hand was the baseline, not a nice extra.",
    done: [
      { title: "Big targets", body: "Every tap target is at least 48px, including the small buttons." },
      { title: "Status never relies on colour", body: "Every status pill has an icon and a word, and green and red are only used for approved and rejected." },
      { title: "Checked on every change", body: "Automated accessibility checks run in light and dark mode on the main flows, with no violations allowed." },
      { title: "Reduced motion", body: "Swipes and sheets follow the phone’s reduce-motion setting." },
      { title: "Plain words", body: "No jargon like “requisition” or “line item”. Buttons name the outcome: “Approve £420”, “Send for approval”." },
    ],
  },

  build: {
    takeaway: "I designed it and built it with Claude Code, with guardrails so the code stayed trustworthy.",
    intro:
      "This is the clearest example of how I work now: design decisions written down first, then built and tested with AI, then checked on real phones.",
    steps: [
      {
        title: "Write the product down first",
        body: "A product brief, a design system and a decision log, so every choice has a reason the AI and I can both refer to.",
      },
      {
        title: "Put the rules in the database",
        body: "Approval limits and who can see what are enforced by Postgres functions and row-level security, never only by the screens.",
      },
      {
        title: "Test like a phone on site",
        body: "Flows are tested at phone size, in light and dark, with accessibility checks, plus tests for the database rules.",
      },
      {
        title: "Make go-live possible without a terminal",
        body: "The owner isn’t technical, so setup is one script pasted into a web page, with keys made in the browser.",
      },
    ],
  },

  outcomes: {
    takeaway: "Live, and built to grow with the business.",
    items: [
      "Live at orders.sojournapps.co.uk, used by all of Sojourn’s staff: 7 staff, 3 authorizers and 1 admin",
      "£3,580 of orders processed so far (as of November 2026)",
      "An installable app, so it sits on the home screen like any other",
      "Orders raised in four questions, with drafts that survive no signal",
      "Approval rules by amount that the owner can change without me",
      "Push, email and a daily digest for what needs action",
      "Weekly and monthly summary emails for the owner",
      "Security reviewed end to end before real people used it",
    ],
  },

  reflection: {
    takeaway: "The best feedback came from the person paying the invoices.",
    learned: [
      "“Is this quicker than a text message?” was a better design test than any checklist.",
      "Feedback from real use changed more than my own reviews did: the four-question form and swipe-to-reject both came from the owner.",
      "Writing decisions down made building with AI safer, because every change had a reason to check against.",
    ],
    next: {
      title: "Reading invoices for you",
      body: "The next idea is to read invoice photos automatically and match them to the approved order, so the owner sees any difference at a glance.",
    },
  },
};
