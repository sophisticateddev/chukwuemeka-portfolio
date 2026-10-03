import type { CaseStudy } from "@/lib/case-study";

// Under NDA: real productions, companies and figures are blurred or swapped for sample data.
const img = (name: string) => `/images/work/albert/${name}.webp`;

export const albert: CaseStudy = {
  headline: "Rebuilt BAFTA albert’s carbon toolkit so productions record sustainability as they work, not after.",
  roles: ["Senior Product Designer (contract)", "Research to handoff", "Web, mobile and admin tools"],
  summary: {
    problem:
      "Film and TV productions use albert to measure their carbon footprint and earn certification, but the toolkit was hard to navigate and hard to read, so teams left it until post-production and missed most of what they’d done.",
    did:
      "I ran research with albert, production teams and broadcasters, then designed the next generation of the toolkit in two releases: first the journeys around the calculator, then the calculator, action plan and certification themselves, for every role that touches the data.",
    result:
      "A toolkit built around the people who hold the data: clear progress everywhere, bulk import, actions assigned to the crew who do them, and a lighter route to certification. Productions starting their footprint in pre-production rose from 30% to 55%, WCAG 2.2 AA criteria passed went from 60% to 85%, and satisfaction rose from 3.3 to 4.3 out of 5.",
  },
  metrics: [
    { value: "55%", label: "of productions now start their footprint in pre-production, up from 30%" },
    { value: "85%", label: "of WCAG 2.2 AA criteria passed, up from 60%" },
    { value: "4.3/5", label: "satisfaction from production companies, up from 3.3 (+30%)" },
    { value: "~10", label: "research sessions, one with ~30 people" },
  ],
  hero: {
    mobile: { src: img("m-request-account"), alt: "albert on a phone: request account form with visible labels and an add company option" },
    desktop: { src: img("v1-production-list"), alt: "albert production list showing footprint and carbon action plan status for each production" },
  },
  meta: [
    { label: "Company", value: "BAFTA albert (contract)" },
    { label: "Role", value: "Senior Product Designer" },
    { label: "Team", value: "Product manager, product owner, engineering lead, 2 developers" },
    { label: "Timeline", value: "Jul 2024 – Aug 2025" },
    { label: "Platform", value: "Web app, mobile web, admin tools" },
  ],

  context: {
    takeaway: "The industry’s carbon toolkit was asking busy productions to remember everything at the end.",
    body: [
      "albert is the screen industry’s sustainability organisation, backed by BAFTA. Productions use its toolkit to calculate their carbon footprint, complete a Carbon Action Plan and earn certification, and some broadcasters require it.",
      "albert was building the next generation of its toolkit, and the experience had to change with it. It needed to work for production assistants entering data, managers signing it off, assessors reviewing evidence, territory partners managing companies and broadcasters following their productions.",
    ],
    constraints: [
      "A live tool used across UK film and TV, so changes had to land in stages",
      "The footprint calculator was too large to rebuild in the first release",
      "Under NDA: real productions, companies and figures are blurred or replaced with sample data",
    ],
  },

  team: {
    takeaway: "I owned design across research, flows and UI in a team of six.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Senior Product Designer",
        owned: "Research, accessibility audit, journeys for every role, interaction and UI design, edge cases and handoff.",
        me: true,
      },
      { name: "Richard Faderin", role: "Product Manager", owned: "Priorities, roadmap and research sessions with albert and its users." },
      { name: "Product & engineering", role: "Product owner, engineering lead, 2 developers", owned: "Requirements, architecture and build." },
    ],
  },

  insights: {
    takeaway: "The people with access to albert weren’t the people with the details.",
    intro:
      "Richard and I ran around 10 remote sessions with the albert team, production users and broadcasters including the BBC, Netflix, Channel 5 and ITV. One session brought together around 30 people to map the bottlenecks. We asked how productions capture sustainability work, who does what, and when: in pre-production, on location, in the studio and in post. The themes below are summarised from my notes.",
    items: [
      {
        title: "Access and knowledge live with different people",
        body: "The people with logins weren’t the people who knew what was actually done. That detail sat with crews, departments and finance.",
      },
      {
        title: "Hard to use means left until the end",
        body: "Because the toolkit was difficult to navigate, teams put it off until post-production, by which point most actions and evidence were lost.",
      },
      {
        title: "The evidence already exists, in receipts",
        body: "Invoices and receipts are the natural record of a production, but there was no way to add or bulk-upload them.",
      },
      {
        title: "It has to work on the go",
        body: "The questionnaire needed to be simple enough to answer as things happen, not reconstructed months later.",
      },
    ],
  },

  process: {
    takeaway: "Audit, listen, map every role, then ship in two steps.",
    steps: [
      { title: "Audit", body: "A WCAG accessibility audit of the live toolkit, screen by screen." },
      { title: "Listen", body: "Remote sessions with albert, production teams and broadcasters, including walkthroughs of the assessor tools." },
      { title: "Map every role", body: "Journeys for production users, managers, finance, assessors, territory partners and broadcasters." },
      { title: "Ship V1", body: "Fix the journeys around the calculator first: accounts, company admin, productions and the action plan." },
      { title: "Design V2", body: "Rebuild the calculator, action plan and certification, add Carbon Actions, reports and mobile onboarding." },
    ],
    artifacts: [
      {
        src: img("research-call"),
        alt: "Remote research session reviewing the assessor workflow in the old toolkit, with two participants on video",
        caption: "A research session with Richard, walking through the assessor tools in the old toolkit.",
      },
      {
        src: img("v1-add-production-states"),
        alt: "Six states of the add production flow with a legend for editing, complete, incomplete and server error",
        caption: "Every state designed, including errors that point to the exact step to fix.",
      },
      {
        src: img("v2-footprint-method"),
        alt: "Electricity data collection choices: meter reading or office, studio, post-production and volume LED benchmarks",
        caption: "No meter readings? Pick a benchmark and log something honest now.",
      },
      {
        src: img("v2-footprint-import"),
        alt: "Import data dialog accepting CSV or Excel files up to 1,000 rows, with a success message for 597 emissions",
        caption: "Bulk import from the spreadsheets finance teams already keep.",
      },
    ],
  },

  decisions: {
    takeaway: "Seven decisions, each traced to something we heard.",
    items: [
      {
        title: "Fix the journey before the engine",
        context: "The footprint calculator was the biggest and riskiest part of the toolkit.",
        options: ["Rebuild everything at once", "Ship the journeys around it first"],
        choice: "V1 left the calculator alone and fixed what surrounds it: sign-up, company admin, productions and the action plan. V2 then rebuilt the calculator.",
        why: "Productions got improvements sooner, and we learned from V1 before tackling the hardest part.",
        tradeoff: "The calculator kept its old experience until V2.",
      },
      {
        title: "Show status everywhere",
        context: "Nobody could tell what was done, late or blocked until it was too late.",
        choice: "Footprint and action plan status side by side for every production, and answered counts on every theme.",
        why: "If people can see what’s outstanding during production, they deal with it during production.",
      },
      {
        title: "Assign actions to the people who do them",
        context: "The person with the login wasn’t the person doing the work.",
        choice: "Any suggested action can be added to the plan, assigned to a named person and given a frequency, then tracked in Carbon Actions.",
        why: "Recording moves to the crew member who knows the detail, while it’s fresh.",
      },
      {
        title: "Meet people in their spreadsheets",
        context: "Receipts and invoices already held the evidence, but couldn’t be added.",
        choice: "A spreadsheet-style table with inline editing, plus import of CSV or Excel files with up to 1,000 rows and a template.",
        why: "Finance and coordinators can bring data in the format they already use.",
      },
      {
        title: "Break the calculator into small flows",
        context: "One long calculator was the main reason people put it off.",
        choice: "Pick a category, choose how you’ll measure it, fill a short form. Benchmarks cover anything without meter readings.",
        why: "Each entry takes minutes, so it can be done as the production happens.",
      },
      {
        title: "Two routes to certification",
        context: "The full process put smaller productions off before they started.",
        choice: "A Participation Logo (6 questions, 1–2 weeks) alongside Full Certification (21 questions, 4–6 weeks), with a clear comparison and the option to upgrade.",
        why: "It lowers the barrier to starting, while the full route stays rigorous.",
      },
      {
        title: "Catch errors where they happen",
        context: "The old toolkit accepted dates out of order, which skewed everything after.",
        choice: "Inline validation on every field, a dates timeline that makes order obvious, and errors that name the step to fix.",
        why: "Bad data is cheaper to prevent than to audit.",
      },
    ],
  },

  evolution: {
    takeaway: "From a form at the end to a tool used throughout.",
    items: [
      { date: "Before", title: "Remember it all later", body: "Long pages of text, faint status and no progress. Most productions filled it in after wrapping." },
      { date: "Research", title: "Find the real bottleneck", body: "Sessions with albert, productions and broadcasters showed access and knowledge sat with different people." },
      { date: "V1", title: "Fix the journey", body: "Accounts with two-factor sign-in, company admin, a production list with status, validated set-up and a progress-led action plan." },
      { date: "V2", title: "Rebuild the core", body: "A calculator in small flows with bulk import, assignable carbon actions, two certification routes, reports and mobile onboarding." },
    ],
  },

  before: {
    takeaway: "Where we started: dense, faint and easy to put off.",
    frame: "browser",
    shots: [
      { src: img("before-footprint"), alt: "Old carbon footprint page with six paragraphs of text and faint labels", caption: "Six paragraphs before any data, and labels at about 2:1 contrast." },
      { src: img("before-action-plan"), alt: "Old carbon action plan with five identical View/Edit buttons", caption: "Five identical buttons and no sense of progress." },
      { src: img("before-production-details"), alt: "Old production details page", caption: "Dates accepted in the wrong order, and faint phase labels." },
      { src: img("before-request-account"), alt: "Old request account page with placeholder-only fields", caption: "Fields with no visible labels, and text over shifting backgrounds." },
    ],
  },

  mobile: {
    takeaway: "Getting in, on any device.",
    intro: "V2 made onboarding work on a phone, with a clear path when your company isn’t listed and a message at every step about what happens next.",
    shots: [
      { src: img("m-sign-in"), alt: "Sign in screen", caption: "Sign in." },
      { src: img("m-request-account"), alt: "Request account form with labelled fields", caption: "Labelled fields, and ‘Add company’ if yours is missing." },
      { src: img("m-company-not-listed"), alt: "Company not listed form with country, company type and SPV option", caption: "Register a new company without emailing anyone." },
      { src: img("m-thanks"), alt: "Thanks for submitting screen explaining the approval step", caption: "What happens next, in plain words." },
      { src: img("m-create-password"), alt: "Create password screen after approval", caption: "Approved, then straight into a password." },
      { src: img("m-network-error"), alt: "Change password screen with a network failure banner", caption: "Errors say what went wrong and what to do." },
      { src: img("m-workspaces"), alt: "Workspace switcher listing roles across companies", caption: "One login, many roles: switch workspace in one tap." },
    ],
  },

  web: {
    takeaway: "One toolkit, a view for every role.",
    shots: [
      { src: img("v1-production-list"), alt: "Production list with footprint and action plan status per production", caption: "V1: every production’s footprint and action plan status at a glance." },
      { src: img("v1-action-plan"), alt: "Carbon action plan with progress and themes", caption: "V1: progress, scores and themes instead of five blank buttons." },
      { src: img("v1-production-details"), alt: "Production details in grouped cards", caption: "V1: details grouped into cards, each with its own edit." },
      { src: img("v2-action-plan-guidance"), alt: "Decarbonisation guidance by category with actions to add", caption: "V2: guidance by category, one tap to add an action." },
      { src: img("v2-add-to-action-plan"), alt: "Add to action plan dialog with assign user and frequency", caption: "V2: assign each action to a person, on a schedule." },
      { src: img("v2-action-plan-added"), alt: "Flights guidance with added actions ticked", caption: "V2: added actions are ticked off in place." },
      { src: img("v2-carbon-actions"), alt: "Carbon actions list with status and assignee for each action", caption: "V2: Carbon Actions shows who owns what." },
      { src: img("v2-footprint-table"), alt: "Electricity entries in an editable table with filters", caption: "V2: footprint entries in an editable, filterable table." },
      { src: img("v2-certification-pathway"), alt: "Choose between participation logo and full certification with a comparison table", caption: "V2: two certification routes, compared side by side." },
      { src: img("v2-certification-review"), alt: "Certification result with evidence and assessor feedback for each answer", caption: "V2: assessor feedback next to each piece of evidence." },
      { src: img("v2-reports"), alt: "Reports list with emissions per production (real data blurred)", caption: "V2: standard and custom reports. Real productions blurred." },
    ],
  },

  accessibility: {
    takeaway: "Accessibility drove the redesign, not a final check.",
    done: [
      { title: "Visible labels on every field", body: "Placeholder-only inputs were replaced with persistent labels and helper text." },
      { title: "Status never relies on colour", body: "Every status pairs text with colour, and warnings add an icon." },
      { title: "Errors you can act on", body: "Messages appear next to the field, say what’s wrong and point to the step to fix." },
      { title: "Plain language and progress", body: "Dense paragraphs became short guidance, with progress shown on every task to reduce cognitive load." },
      { title: "Predictable structure", body: "The same production tabs, headings and actions across every module." },
    ],
    gaps: [
      {
        title: "The brand purple is too light for small white text",
        body: "#806FFF with white text measures 3.7:1, below AA. A darker shade such as #5F4BE8 (5.7:1) would pass for buttons and links, keeping the lighter tint for decoration.",
      },
      {
        title: "Some status badges still need contrast work",
        body: "Lighter badges such as ‘Not started’ need darker text or backgrounds to pass AA.",
      },
    ],
  },

  outcomes: {
    takeaway: "Productions now start earlier, and were eager to use it.",
    items: [
      "Productions starting their footprint in pre-production rose from 30% to 55%, the problem our research set out to solve",
      "WCAG 2.2 AA criteria passed rose from 60% to 85% on our accessibility audit",
      "Average satisfaction among production companies rose from 3.3 to 4.3 out of 5 (+30%), and they were keen to move to the redesign",
      "V1: accounts with two-factor sign-in, company admin, production list and set-up, and a progress-led action plan",
      "V2: calculator flows with bulk import, assignable carbon actions, two certification routes, reports and mobile onboarding",
      "Role-specific views for production teams, assessors, territory partners and broadcasters",
    ],
  },

  reflection: {
    takeaway: "What I’d tell myself on day one.",
    learned: [
      "Design for the person holding the receipt, not the person holding the login.",
      "Shipping the journey before the engine bought trust and taught us what the calculator really needed.",
      "An accessibility audit at the start is a design brief, not a list of bugs.",
      "Check brand colours against WCAG before the first component. Fixing contrast later touches everything.",
    ],
    next: {
      title: "What comes next",
      body: "Keep measuring how early productions start, plus data completeness and certification rates as V2 rolls out, and darken the primary colour so every button and badge passes AA.",
    },
  },
};
