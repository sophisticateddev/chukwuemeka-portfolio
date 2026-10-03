import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/character-guess/${name}.jpg`;

export const characterGuess: CaseStudy = {
  headline:
    "Family game night, turned into a live multiplayer game for 100+ players.",
  status: "Live beta",
  liveUrl: "https://characterguess.com",
  roles: ["Designed end to end", "Built with AI (Claude Code)", "Shipped to production", "Team of 3"],
  summary: {
    problem:
      "Our family’s favourite game night, guessing characters from quotes, only worked when we were in the same room with someone willing to write the clues.",
    did:
      "I designed the product end to end, then built the front end with Claude Code alongside a backend engineer and a PM, from prototype to a live web app.",
    result:
      "A live, installable game with 6 categories, 3 languages and 100+ beta players, grown entirely by word of mouth.",
  },
  metrics: [
    { value: "100+", label: "beta players, all word of mouth" },
    { value: "3,000+", label: "questions across 6 live categories" },
    { value: "3", label: "languages: English, Spanish, French" },
    { value: "320px–4K", label: "one responsive design system" },
  ],
  hero: {
    mobile: {
      src: img("game-correct-mobile-dark"),
      alt: "Character Guess on a phone: a correct answer highlighted in green with a Speed Demon achievement toast",
    },
    desktop: {
      src: img("landing-desktop-dark"),
      alt: "Character Guess landing page on desktop with a playable Who am I? demo card",
    },
  },
  meta: [
    { label: "Role", value: "Co-founder · product design & front-end (with AI)" },
    { label: "Team", value: "3 people: design, engineering, product" },
    { label: "Timeline", value: "Aug 2025 – present" },
    { label: "Platform", value: "Installable web app (PWA): mobile, tablet, desktop" },
  ],

  origin: {
    takeaway: "It started at our dining table, and that’s still the test every feature has to pass.",
    body: [
      "On family game nights, my wife would write out quotes and clues about characters and we’d take turns guessing who said them. It never failed. Kids, adults, competitive cousins: everyone leaned in, because a good clue makes you feel clever the moment it clicks.",
      "The problem was that it only worked in that room, and only when someone did the work of writing clues. I wanted to bottle that feeling into something anyone could open on a phone, play in two minutes, and share with the people they love.",
    ],
  },

  context: {
    takeaway: "The challenge: make a learning game feel like a party game, for ages 10 to 70, on any device.",
    body: [
      "Most knowledge games fall into one of two traps. They’re either educational and dull, or fun but shallow. We wanted the curiosity loop of a good clue, the competition of a leaderboard, and content people actually care about, starting with the Bible and football.",
      "Our audience is unusually wide: families, church youth groups, football fans, classrooms. Most play on phones over mobile data, so it had to be fast, light and work without an app store.",
    ],
    constraints: [
      "Small team of 3 with no dedicated QA or marketing budget",
      "Young players, so parental consent and safety from day one",
      "Must work offline-tolerant on low-end phones and look great on desktop",
      "Content must scale to new categories without a redesign",
    ],
  },

  team: {
    takeaway: "Three people, clear ownership. I owned the experience end to end and built the front end with AI.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Co-founder · Product Designer & AI-assisted developer",
        owned:
          "Product and UX direction, design system, every screen and flow, front-end build with Claude Code, accessibility.",
        me: true,
      },
      {
        name: "Patrick Aziken",
        role: "Backend, DevOps & QA",
        owned: "APIs and database, deployment pipeline (dev → beta → production), monitoring, end-to-end testing.",
      },
      {
        name: "Gideon Idam",
        role: "Product Manager & Marketing",
        owned: "Roadmap and priorities, beta programme, community growth and player feedback.",
      },
    ],
  },

  insights: {
    takeaway: "What game night and the early beta taught us became the rules we design by.",
    items: [
      {
        title: "The first round has to happen before any sign-up",
        body: "People wanted to play the moment someone shared a link. Asking for an account first broke the spell, so guests can play straight away.",
      },
      {
        title: "Clues beat questions",
        body: "Revealing clues one at a time created the ‘oh, I know this!’ moment from game night. Faster guesses earn more points, which rewards knowledge without punishing slower readers.",
      },
      {
        title: "Not everyone can be number one",
        body: "A single global leaderboard only motivates the top few. Smaller weekly leagues give everyone a race they can actually win.",
      },
      {
        title: "Mastery is per topic",
        body: "A Bible expert is often a football beginner. Treating progress as one score made new categories feel pointless for experts.",
      },
    ],
  },

  decisions: {
    takeaway: "The decisions behind the screens. Each one traded something, on purpose.",
    items: [
      {
        title: "Let guests play first, with a 3-game limit",
        context: "First-time players often arrive from a link shared in a family or church group chat. A sign-up wall at that moment kills the fun.",
        options: ["Require an account up front", "Unlimited guest play", "Limited guest play, then a reason to sign up"],
        choice: "Guests get 3 full games. Progress is saved locally, with a gentle prompt to create an account and keep it.",
        why: "It lowers the barrier to zero while giving a clear, honest reason to sign up: don’t lose what you’ve earned.",
        tradeoff: "More complexity: guest progress has to migrate cleanly into a new account, and guest abuse needs server-side limits.",
      },
      {
        title: "Stay a quiz, not a drawing game",
        context: "As the backlog grew, we were tempted by drawing and party features (canvas sketching, chain drawing, projection mode).",
        options: ["Pivot to Pictionary-style drawing", "Keep clue-based multiple choice"],
        choice: "Keep the clue-and-answer core and remove all drawing proposals from the roadmap.",
        why: "Clues work for every age, on every phone, in seconds, and the content scales to any category. Drawing would have doubled the product.",
        tradeoff: "We gave up some party chaos in exchange for a sharper, more accessible core loop.",
      },
      {
        title: "Freeze V1 features to fix the foundations",
        context: "After 11 sprints, tester feedback was clear: new features were arriving faster than old ones felt solid.",
        choice: "Stop new features in V1. Only bug fixes, tester feedback and polish. Everything else moved to the V2 backlog.",
        why: "Trust is the product. A game that loses your streak once won’t get a second chance.",
        tradeoff: "Some exciting features waited months, which was a hard conversation with our most engaged players.",
      },
      {
        title: "Design tokens instead of hard-coded colours",
        context: "The first redesign used hard-coded white overlays, which made a proper light mode impossible.",
        choice: "A semantic token system (glass surface, border, divider, high, mid and low emphasis text) that resolves per theme.",
        why: "Components stopped caring which theme they were in. Light mode went from a rewrite to a token change.",
        tradeoff: "A one-off migration across every screen, but every component since has been faster to build.",
      },
      {
        title: "Separate progress for each category",
        context: "With one shared XP score, a Bible Legend would start football as a Legend too, which makes a new category meaningless.",
        choice: "Separate XP per category, with rank names that match the theme (Seeker → Legend for Bible, Rookie → Legend for football).",
        why: "Every new category becomes a fresh journey, which is exactly what drives people to explore.",
      },
      {
        title: "Generate sound in code, not audio files",
        context: "The audio library added 180 KB and a dozen file downloads, painful on the low-end phones many of our players use.",
        choice: "All 12 sound effects are synthesised in the browser with the Web Audio API.",
        why: "Zero network requests, instant playback, and a lighter app. Audio never auto-plays, and players control sound in settings.",
        tradeoff: "Synth sounds are simpler than produced audio, so we tuned them to feel playful rather than realistic.",
      },
    ],
  },

  evolution: {
    takeaway: "V1 didn’t arrive finished. Here’s what changed along the way, and why.",
    items: [
      { date: "Aug 2025", title: "Prototype in days", body: "Generated a first playable version with an AI app builder to test the core loop at game night before investing in design." },
      { date: "Mar 2026", title: "Open the door", body: "Guest play with a 3-game limit, plus parental consent for young players." },
      { date: "Apr 2026", title: "Make it fair", body: "Scores, coins and multiplayer moved to server-verified logic so nobody can cheat, while guests can still join rooms. Daily coin limits stopped farming." },
      { date: "Apr 2026", title: "Freeze and stabilise", body: "V1 feature freeze at Sprint 11; kept the quiz format; backlog moved to V2." },
      { date: "May 2026", title: "Reliable releases", body: "Separate dev, beta and production environments, error monitoring, and a clearer password reset flow." },
      { date: "Jun 2026", title: "The redesign", body: "Glass-card design language, light and dark themes, football category, weekly leagues, notifications, and an app that updates itself." },
      { date: "Jul 2026", title: "Own the platform", body: "Moved off a hosted backend to our own API and database, so the platform could grow into V2 without vendor limits." },
    ],
  },

  mobile: {
    takeaway: "Designed thumb-first: everything that matters sits in the bottom half of the screen.",
    intro: "Most players are on phones, often one-handed on a sofa or in a group. Navigation lives in a bottom bar, answers are full-width targets, and feedback is instant and readable at arm’s length.",
    shots: [
      { src: img("levels-mobile-dark"), alt: "Level map showing the player's journey from Seeker I to Learner levels", caption: "Your journey: progress is a path, not a list." },
      { src: img("game-question-mobile-dark"), alt: "A question with a countdown bar, speed multiplier and four answer options", caption: "Clue, timer and four big answer targets." },
      { src: img("game-correct-mobile-light"), alt: "Correct answer in light mode with a scripture reference and achievement toast", caption: "Instant feedback, with the source." },
      { src: img("results-mobile-dark"), alt: "Level unlocked card for Seeker II", caption: "Small wins, celebrated." },
      { src: img("leaderboard-mobile-dark"), alt: "Leaderboard blurred for guests with a prompt to sign in", caption: "Guests see what they’d unlock." },
      { src: img("lobby-mobile-dark"), alt: "Multiplayer lobby to start a new game or join with a code", caption: "Multiplayer in two taps." },
      { src: img("achievements-mobile-dark"), alt: "Achievements grid with locked and in-progress badges", caption: "Goals for every play style." },
    ],
  },

  web: {
    takeaway: "On larger screens, navigation moves to a sidebar and the game stays focused in the centre.",
    intro: "Below 1024px, a bottom bar keeps navigation in reach of thumbs. Above it, a fixed sidebar takes over. The question card never stretches across a wide screen; it stays in a readable column so your eyes don’t travel.",
    shots: [
      { src: img("landing-desktop-dark"), alt: "Desktop landing page with category chips and a playable demo", caption: "Landing: play a real question before signing up." },
      { src: img("levels-desktop-dark"), alt: "Desktop level map with sidebar navigation in dark mode", caption: "Sidebar navigation from 1024px up." },
      { src: img("levels-desktop-light"), alt: "Desktop level map in light mode", caption: "The same screen in light mode, driven by tokens." },
      { src: img("game-question-desktop-dark"), alt: "Desktop game screen with the question in a centred column", caption: "Focus mode: one readable column." },
    ],
  },

  designSystem: {
    takeaway: "One token system powers both themes, 8 breakpoints and every screen.",
    colors: [
      { name: "Violet", value: "#7C3AED", usage: "Primary actions, progress" },
      { name: "Magenta", value: "#D946EF", usage: "Gradient partner for highlights" },
      { name: "Gold", value: "#F59E0B", usage: "Rewards, coins, achievements" },
      { name: "Night", value: "#0C0821", usage: "Dark theme background" },
      { name: "Lavender", value: "#F5F2FF", usage: "Light theme background" },
      { name: "Success", value: "#10B981", usage: "Correct answers" },
      { name: "Error", value: "#EF4444", usage: "Wrong answers, destructive actions" },
    ],
    type: {
      family: "Plus Jakarta Sans",
      notes: "One variable family (200–800) for everything. Friendly at large sizes, legible at small ones, and only one font to load.",
    },
    tokens: [
      { name: "--glass-bg", light: "rgba(0,0,0,.04)", dark: "rgba(255,255,255,.06)" },
      { name: "--glass-border", light: "rgba(0,0,0,.09)", dark: "rgba(255,255,255,.10)" },
      { name: "--text-hi", light: "ink 92%", dark: "white 92%" },
      { name: "--text-mid", light: "ink 55%", dark: "white 55%" },
    ],
    components: [
      { name: "Answer option", states: ["Default", "Pressed", "Correct", "Wrong", "Disabled"] },
      { name: "Level tile", states: ["Current", "Unlocked", "Completed (1–3 stars)", "Locked"] },
      { name: "Clue card", states: ["Hidden", "Revealing", "Revealed", "Hint used"] },
      { name: "Timer bar", states: ["Calm", "Urgent", "Expired"] },
      { name: "Navigation", states: ["Bottom bar (mobile)", "Sidebar (desktop)", "More drawer"] },
      { name: "Rewards", states: ["Coin ring", "Achievement toast", "Level unlocked", "League badge"] },
    ],
    motion:
      "15+ named animations share one elastic easing curve: question enter, answer pop, wrong-answer shake, character reveal, timer urgency. All of them are switched off for people who ask their device for less motion.",
  },

  accessibility: {
    takeaway: "Built to WCAG 2.2 AA, then audited honestly for this case study.",
    done: [
      { title: "Targets you can actually hit", body: "Every control is at least 44×44px; primary actions are 48px, with 8px between targets." },
      { title: "Keyboard and focus", body: "Visible focus rings, a skip link, logical tab order, and dialogs that trap focus and close with Escape." },
      { title: "Screen readers", body: "Landmarks, a strict heading order, labelled buttons, and live announcements for scores, coins and toasts." },
      { title: "Motion and sound", body: "Animations respect reduced-motion settings (confetti becomes a static badge), and audio never auto-plays." },
      { title: "Forms that explain themselves", body: "Errors are announced to screen readers and linked to the field they belong to." },
    ],
    gaps: [
      { title: "Low-emphasis text is too faint", body: "Our lowest text token measures 3.5:1 in dark mode and 2.4:1 in light mode, below the 4.5:1 minimum. The fix is to raise it and reserve it for non-essential text." },
      { title: "Light-mode secondary text", body: "Mid-emphasis text in light mode is 4.0:1. Darkening it slightly brings it to AA with no visual cost." },
      { title: "Game screen landmark", body: "The in-game screen is missing a main landmark, so the skip link has nowhere to land. A one-line fix, now on the list." },
    ],
  },

  build: {
    takeaway: "AI writes the code fast. My job is deciding what’s right, and proving it.",
    intro:
      "Character Guess started as an AI-generated prototype in Lovable, then moved to Claude Code once we knew the game was worth building properly. I design in the browser, brief Claude in plain language, and treat everything it writes as a pull request from a fast, confident junior: useful, and wrong often enough that nothing ships unverified.",
    stats: [
      { value: "1,006", label: "commits in the repo" },
      { value: "735", label: "of them mine" },
      { value: "512", label: "co-authored with Claude" },
      { value: "40", label: "unit test files, plus Playwright E2E" },
    ],
    steps: [
      { title: "Prototype to learn", body: "An AI-generated prototype let us test the core loop at real game nights within days, before designing anything polished." },
      { title: "Brief like a designer", body: "Each prompt carries the user problem, the screen and state it lives in, the constraint that matters (mobile nav, dark mode, server-owned numbers) and how we’ll know it works. Bug briefs start from the player’s report, not my guess at the cause." },
      { title: "Components from the system", body: "New UI is built from the design tokens and existing components, never one-off colours. A project skill tells Claude the traps before it writes a line: the bottom-nav z-index, sheet heights on short phones, and never computing coins or lives on the client." },
      { title: "Reproduce, then fix", body: "Claude has to reproduce a bug before fixing it, find where it came from in git history, and explain the root cause in the commit. Most fix commits read like a short incident report." },
      { title: "Verify in the browser", body: "Passing type checks isn’t done. Changes are checked live in the browser, on the real flows, before they’re called finished." },
      { title: "Review and release", body: "Patrick reviews backend and infrastructure changes. CI blocks merges on type checks, lint, translation lint, unit tests and Playwright E2E, then releases move from dev to beta to production." },
    ],
    setup: [
      {
        title: "Shared memory",
        items: [
          "A memory bank of context, decisions, patterns and session logs that every AI session reads first",
          "A rule that the memory bank is updated before any task counts as done",
          "A decision log recording why, not just what, so AI doesn’t undo deliberate choices",
        ],
      },
      {
        title: "Guardrails in code",
        items: [
          "Strict TypeScript on frontend and backend, checked in CI",
          "Unit tests for game logic and content claims, Playwright for real user journeys",
          "Translation linting so English, Spanish and French never drift apart",
        ],
      },
      {
        title: "Safe releases",
        items: [
          "Separate dev, beta and production environments with their own databases",
          "Idempotent, checksummed migrations that fail fast before a deploy",
          "Sentry error tracking and a GitHub release only after production is verified",
        ],
      },
    ],
    mistakes: [
      {
        title: "It advertised categories that don’t exist",
        wrong: "AI-written landing copy and search metadata promised History, Geography and Science. None were playable, and Science didn’t exist at all.",
        caught: "I audited every number and category claim on the page against live API data, line by line.",
        guardrail: "A test now fails CI if the copy names a category that isn’t live. It’s the snippet below.",
      },
      {
        title: "A ‘type safety’ fix broke host handover",
        wrong: "Claude added a uuid cast to a database call whose parameter is text. Every attempt to take over hosting a multiplayer room failed.",
        caught: "Testing a new sign-in gate locally returned an unexpected 422. Git history showed the earlier version had been right, so the fix restored it.",
      },
      {
        title: "Lives showed a full refill that never happened",
        wrong: "The new hearts system never updated its regeneration timestamp, so after one wrong answer players could see 5 lives when they had 1.",
        caught: "Reproduced it against a local Postgres database: dropping from 5 lives to 1 still displayed 5.",
        guardrail: "Lives are now server-authoritative, and the project skill tells AI never to compute them on the client.",
      },
      {
        title: "Code that type-checked but crashed",
        wrong: "A prop missing from a destructure crashed the landing page demo, and a share link scoped inside a callback crashed multiplayer rooms. Both passed the compiler.",
        caught: "Clicking through the real flows in the browser, which is why browser verification is a step, not a nice-to-have.",
      },
      {
        title: "Prototype leftovers in production",
        wrong: "The original Lovable heart favicon was still shipping, and its dev plugin bundled an old Tailwind that broke the build after an upgrade.",
        caught: "A WhatsApp link preview showed someone else’s logo, and the dev server failed with PostCSS errors.",
        guardrail: "Replaced the icons with real brand assets and removed the plugin.",
      },
      {
        title: "The AI’s memory went stale",
        wrong: "The memory bank fell 33 days and 60+ commits behind the code, so new sessions were working from an outdated picture of the product.",
        caught: "Checking the docs against git history turned up 60+ commits the memory bank knew nothing about.",
        guardrail: "Updating the memory bank is now part of the definition of done.",
      },
    ],
    snippet: {
      file: "src/lib/landingClaims.test.ts",
      language: "ts",
      code: "// Names that must never be advertised as available: the roadmap categories,\n// plus \"Science\", which the app doesn't have at all.\nconst NOT_PLAYABLE = [...categories.comingSoon.map((c) => c.label), 'Science'];\n\ndescribe('search-result metadata', () => {\n  const description = indexHtml.match(/name=\"description\"\\s+content=\"([^\"]*)\"/)?.[1] ?? '';\n  const structured = [...indexHtml.matchAll(/\"description\":\\s*\"([^\"]*)\"/g)].map((m) => m[1]);\n\n  it.each(NOT_PLAYABLE)('does not advertise %s, which is not playable', (name) => {\n    const re = new RegExp(`\\\\b${name}\\\\b`, 'i');\n    expect(description).not.toMatch(re);\n    for (const text of structured) expect(text).not.toMatch(re);\n  });\n});",
      caption:
        "Written after catching AI-generated marketing copy promising categories we hadn’t built. If anyone, human or AI, puts an unreleased category in the search description again, CI fails before it ships.",
    },
  },

  outcomes: {
    takeaway: "A real product, used by real people, built by a team of three.",
    items: [
      "Live at characterguess.com with 100+ beta players, grown entirely by word of mouth",
      "6 live categories, 450 characters, 3,000+ questions and 3 languages",
      "Installable on any phone with offline support and self-updating releases",
      "Reliable release pipeline with separate dev, beta and production environments",
      "Consistently positive feedback from families, church groups and football fans",
    ],
  },

  testimonials: [],

  reflection: {
    takeaway: "What I’d tell myself on day one, and what comes next.",
    learned: [
      "Ship less, sooner. The feature freeze improved the product more than any feature we added.",
      "Start with tokens. The light-mode retrofit would have been free if semantic tokens existed from the first screen.",
      "AI makes building fast; decisions make it good. The written decision log mattered as much as the code.",
      "Audit your own work. Writing this case study surfaced contrast gaps we’d missed, now first on the fix list.",
    ],
    next: {
      title: "V2 is coming",
      body: "We’re rebuilding Character Guess as a platform: a new player app, an admin dashboard for content, a marketing site and a dedicated API, ready for real-time multiplayer at scale, classroom mode and many more categories.",
    },
  },
};
