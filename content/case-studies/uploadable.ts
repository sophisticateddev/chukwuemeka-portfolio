import type { CaseStudy } from "@/lib/case-study";

// Sources: the owner's own account (Nov 2026), git history (first commit 26 Oct 2026), Cloudflare's
// server-side stats (24 Oct – 23 Nov 2026), the repo's CLAUDE.md and DECISIONS.md, and the live site.
// Screens: the live site, plus the repo's product shots, which use generated test statements ("Example Bank").
const img = (name: string) => `/images/work/uploadable/${name}.jpg`;

export const uploadable: CaseStudy = {
  headline: "Fits the limit. Stays on your device.",
  status: "Live",
  liveUrl: "https://uploadablepdf.com",
  roles: ["My own product", "Designed end to end", "Built with AI (Claude Code)", "Shipped to production"],
  summary: {
    problem:
      "Official application portals cap file sizes. To upload my documents I had to combine files, remove pages and get each one under a limit I chose, and no single tool did all three.",
    did:
      "I designed and built Uploadable with Claude Code: combine, trim, fix and compress statements and documents for a specific portal, all on the person’s own device.",
    result:
      "Live less than a day after the app’s first commit, with 2,200+ visitors in its first month and no documents ever sent to a server.",
  },
  metrics: [
    { value: "2.2k+", label: "visitors in the first 30 days" },
    { value: "< 1 day", label: "from the app’s first commit to the live site" },
    { value: "0", label: "documents sent to a server, by design" },
    { value: "7", label: "destinations with their upload limits built in" },
  ],
  hero: {
    desktop: {
      src: img("documents-light"),
      alt: "Uploadable on desktop: 27 test bank statements in month order, with a coverage grid showing no missing months",
    },
    mobile: {
      src: img("export-light"),
      alt: "Uploadable on a phone: the result fits the 4 MB limit at 3.63 MB, with checks for the IRCC portal",
    },
  },
  meta: [
    { label: "Role", value: "Founder · design and front-end (with AI)" },
    { label: "Team", value: "Just me" },
    { label: "Timeline", value: "A bank statement binder first, then the app: first commit 26 Oct 2026, live the next morning" },
    { label: "Platform", value: "Web, on phone and desktop, with nothing to install" },
  ],

  origin: {
    takeaway: "It started at an upload screen that wouldn’t take my documents.",
    body: [
      "I needed to upload documents for an official application, and the website had a size limit. I had to put files together, take out some pages and make the result small enough for a limit I chose myself. I couldn’t find one tool that did all three.",
      "I was using iLovePDF. It’s a great platform, just not for this. It compressed as far as it could, but I couldn’t set a limit. So I started by building a bank statement binder for myself, then grew it into Uploadable for everyone else stuck at the same upload screen. It does the work on your own device, so your bank statements and documents are never sent to anyone, me included.",
    ],
  },

  context: {
    takeaway: "The job isn’t “compress a PDF”. It’s “get this application accepted”.",
    body: [
      "Immigration, mortgage and rental portals each have their own rules: a size limit per file, accepted file types, no passwords, no form fields, and sometimes rules about file names. People arrive with a year of bank statements, a reference letter and phone photos of their passport, and a deadline.",
      "General PDF tools treat each of those as a separate job, upload your files to their servers, and squeeze everything as small as possible, even when a statement would have fitted as it was.",
    ],
    constraints: [
      "Bank statements and passports are some of the most private files people own",
      "The result has to stay readable to the person reviewing the application",
      "Many people do this on a phone",
      "Never change an amount or a word on a statement",
    ],
  },

  insights: {
    takeaway: "What makes an upload fail is rarely the one thing a PDF tool fixes.",
    items: [
      {
        title: "The limit is set by the destination",
        body: "4 MB for Canada’s IRCC account, 5 MB for Australia’s ImmiAccount, 2 MB for the US National Visa Center. People shouldn’t have to look it up, and shouldn’t be squeezed further than they need.",
      },
      {
        title: "A missing month can sink an application",
        body: "Statements arrive with names like “stmt-202212.pdf” and “eStatement Sep 2022”. Putting them in date order, and showing a gap before a reviewer does, matters as much as the file size.",
      },
      {
        title: "Rejections are often about the file, not the size",
        body: "Bank statements often come with a password, and forms with boxes to fill in. Portals refuse both, and the error message rarely says why.",
      },
      {
        title: "People need to trust it with their statements",
        body: "Saying “we don’t keep your files” isn’t enough. The promise has to be something they can check for themselves.",
      },
    ],
  },

  decisions: {
    takeaway: "The decisions behind the product, each one in service of an accepted upload.",
    items: [
      {
        title: "Everything happens on your device",
        context: "Popular PDF tools, including the one I’d been using, send your files to their servers to process them.",
        options: ["Process on a server", "Process in the browser"],
        choice:
          "The whole engine runs in the browser. No request ever carries a document, nothing third-party loads at runtime, and only preferences like the last destination are remembered.",
        why: "It’s the only promise people can verify: once the app has opened, turn off Wi‑Fi and mobile data, and adding files and saving still work.",
        tradeoff: "No server means no visitor tracking in the app. I even switched off Cloudflare’s own analytics script, and the production tests fail if it comes back.",
      },
      {
        title: "Fit the limit you choose, not the smallest file possible",
        context: "Squeezing a statement as small as possible can make it hard to read, which defeats the point of sending it.",
        choice:
          "Files that already fit are kept exactly as they are. If not, pictures are made smaller first, then pages become sharp black and white with searchable text. Rather than go below 200 dpi, it offers to split the file into parts instead of blurring it.",
        why: "The goal is the most readable file that fits, because a person has to read it.",
        tradeoff: "Black and white removes colour, so the result screen says so in plain words and lets you preview it before saving.",
      },
      {
        title: "Choose where it’s going, and the rules come with it",
        context: "Every portal has different rules, and most people don’t know them.",
        choice:
          "Pick a destination, such as Canada IRCC, UK visa or a mortgage, and the limit is set for you. Every file is checked for size, type, file name, password and form fields before you save. Each rule links to its source.",
        why: "It turns “will this be accepted?” into a list of ticks.",
        tradeoff: "The rules need sources and upkeep. Where no official page states a rule, the source is a practitioner guide, and it says so.",
      },
      {
        title: "One clear verdict as the result",
        context: "After a long build, people need to know one thing: will it upload?",
        choice:
          "The result screen leads with a large verdict, “Fits the 4 MB limit”, next to the first page of the file, then the checks. It’s the one bold moment in an otherwise quiet interface.",
        why: "Everything else is in service of that answer.",
      },
      {
        title: "Never edit what’s on a statement",
        context: "A tool that can change amounts could be used to fake a document.",
        choice: "Uploadable can put files in order, remove whole pages and make files smaller. It can never edit text or amounts.",
        why: "It keeps the tool honest, and it’s a promise people and reviewers can rely on.",
      },
    ],
  },

  evolution: {
    takeaway: "From the first commit to a live product in under a day, then shaped by real phones and reviews.",
    items: [
      {
        date: "26 Oct 2026",
        title: "Plan, engine, app and landing pages",
        body: "Starting from my one-file bank statement binder, I wrote a plan and a decision log and built a design system, moved the PDF engine into a background worker with tests proving it matches the binder, then built the three-step app and fast landing pages for each destination.",
      },
      {
        date: "27 Oct 2026",
        title: "Live at uploadablepdf.com",
        body: "Security headers and automated checks, then the live domain the next morning. The same day: drag to reorder, and a home page that leads with the tools.",
      },
      {
        date: "28 Oct 2026",
        title: "Fixing what real iPhones found",
        body: "Photo packs failed on some iPhones. The cause was Safari loading the engine twice.",
      },
      {
        date: "Late Oct 2026",
        title: "More tools",
        body: "Split a PDF, Highlight lines and Merge PDFs and compress, and asking what each file is instead of assuming every PDF is a bank statement.",
      },
      {
        date: "Nov 2026",
        title: "Review rounds",
        body: "A better phone layout and Undo, official sources cited for each limit, sharper compression, and setup links that advisers can share with their clients.",
      },
    ],
  },

  web: {
    takeaway: "A calm, Apple-like interface, where the only bold moment is the verdict.",
    intro:
      "Screens below use generated test statements from a made-up “Example Bank”, never anyone’s real documents.",
    shots: [
      { src: img("home-desktop"), alt: "Uploadable home page: Make your documents small enough to upload, with nine tools", caption: "The home page leads with the tools, each with its result in plain words." },
      { src: img("documents-dark"), alt: "Uploadable documents screen in dark mode with 27 statements in month order", caption: "Statements sorted by month, with a coverage grid that shows any gap." },
    ],
  },

  mobile: {
    takeaway: "Many people do this on a phone, so every tool works one-handed.",
    shots: [
      { src: img("home-mobile"), alt: "Uploadable home page on a phone, listing the tools", caption: "Tools first, each one screen." },
      { src: img("app-start-mobile"), alt: "Choosing a destination: Canada IRCC, 4 MB per file", caption: "Choose where it’s going, and the limit is set." },
      { src: img("export-light"), alt: "The result screen: fits the 4 MB limit, with checks for IRCC", caption: "One verdict, then the checks." },
      { src: img("ircc-mobile-dark"), alt: "The Canada IRCC landing page in dark mode", caption: "A page for each destination, in light and dark." },
    ],
  },

  accessibility: {
    takeaway: "Clear for anyone, under pressure, on any device.",
    done: [
      { title: "Plain words", body: "The interface says “upload limit” and “bank statements”, never internal terms like “rasterise”." },
      { title: "Numbers that don’t jump", body: "Sizes use fixed-width figures, so a changing number never shifts the layout." },
      { title: "Big targets", body: "Every control is at least 44 × 44 px." },
      { title: "Reordering without a mouse", body: "Documents and pages can be dragged, held and dragged on touch, or moved with Alt and an arrow key." },
      { title: "Fast landing pages", body: "They ship no JavaScript beyond the theme switch, and are checked to score 95 or more on Lighthouse on phone and desktop." },
    ],
  },

  build: {
    takeaway: "Built with Claude Code, with tests that hold the AI to my prototype and the privacy promise.",
    intro: "I worked in phases: plan, build, verify, review. Each phase had to pass its checks before the next began.",
    steps: [
      { title: "Plan each phase first", body: "A written plan with acceptance criteria, approved before any code, and a decision log with a reason for every choice." },
      { title: "Port the behaviour, then prove it", body: "The engine was copied from my own bank statement binder, then checked against it on a set of generated statements for both file size and readability." },
      { title: "Make the privacy promise testable", body: "The build fails if any third-party address appears in the site, and the live tests fail if an analytics script is injected." },
      { title: "Review before shipping", body: "Each phase ended with a code review, with every finding either fixed or recorded with a reason." },
    ],
  },

  outcomes: {
    takeaway: "A tool I needed, now visited by thousands of people facing the same screen.",
    items: [
      "Live at uploadablepdf.com, free, with no account and nothing to install",
      "2,200+ visitors in the first 30 days, from Cloudflare’s server-side stats",
      "Nine tools, from combining statements to fixing a rejected PDF",
      "Built-in limits and checks for Canada, Australia, the UK, the US, Schengen visas, and mortgage or rental applications",
      "No document ever leaves the person’s device",
    ],
  },

  reflection: {
    takeaway: "The best products I’ve built started with a problem I had myself.",
    learned: [
      "Being the first user made every decision faster: I knew exactly what a rejected upload feels like.",
      "A privacy promise is only worth making if people can check it, and if tests stop it being broken.",
      "Building with AI went fastest when my own working prototype and written decisions set the standard to meet.",
    ],
  },
};
