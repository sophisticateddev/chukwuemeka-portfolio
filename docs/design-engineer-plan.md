# Plan: get job-ready for "ship fast" product designer roles

## Context
The job market review says you're about 70% of the way there, and the gap is **evidence**, not skill. Roles that want someone who ships fast (Intercom-style senior product designer, product design engineer) look for proof that you build, test and ship real UI yourself. Today the portfolio tells a product design story. The repo already has the raw material: about 25 small typed components, colour tokens as CSS variables with WCAG AA pairings ([tailwind.config.ts](tailwind.config.ts), [app/globals.css](app/globals.css)), and reduced-motion handling in the motion components ([Magnetic.tsx](components/Magnetic.tsx), [CountUp.tsx](components/CountUp.tsx), [MotionProvider.tsx](components/MotionProvider.tsx)). The repo is public (`sophisticateddev/chukwuemeka-portfolio`), but there's no CI, no tests and no PR history.

**The plan has two tracks that run side by side:**
- **Track A, Learn:** a short, teachable course that explains each concept *before* it gets built, so you can explain it in an interview.
- **Track B, Build:** a step-by-step build spec written for Claude Sonnet to execute. Every phase ends with a PR and acceptance checks.

Each build phase is paired with a lesson. Do the lesson, then the build, then the "explain it back" check.

---

# Track A: Learning plan (about 6 short lessons, 45–60 min each)

Every lesson follows the same format: **the idea in one sentence → why employers care → read/watch → try it by hand (no AI) → explain it back.** The "explain it back" questions are the kind interviewers ask. If you can answer them out loud in under a minute, you've got it.

Sonnet also writes a companion file per lesson in `docs/learning/0X-topic.md` (see Phase 0), using real code from *your* repo as the examples, so you're never learning from abstract samples.

### Lesson 1: Components and props (the building block)
- **Idea:** A component is a reusable piece of UI. Props are its settings, the way a Figma component has variants and properties.
- **Why it matters:** A design engineer's main output is components other people reuse safely.
- **Read:** react.dev → "Your First Component", "Passing Props to a Component".
- **Try it:** Open [Tag.tsx](components/Tag.tsx). Without AI, add a `tone="accent"` prop that switches the background to `bg-accent text-onaccent`. Then undo it.
- **Explain back:** What's the difference between a prop and state? Why does Tag take `as="li" | "span"`?

### Lesson 2: Design tokens and theming
- **Idea:** Tokens are named design decisions (`ink`, `canvas`, `accent`) stored once as CSS variables, so light and dark mode are just two sets of values.
- **Why it matters:** This is where design and code meet. A token system is the core of every design system.
- **Read:** [app/globals.css](app/globals.css) and [tailwind.config.ts](tailwind.config.ts) in your repo. Also MDN → "Using CSS custom properties".
- **Try it:** In the browser devtools, change `--accent` on `<html>` and watch the whole site change. Then explain why the config uses `rgb(var(--accent) / <alpha-value>)`.
- **Explain back:** Why store RGB channels and not hex? How does `data-theme` on `<html>` switch themes?

### Lesson 3: Storybook (a workshop for components)
- **Idea:** Storybook shows each component on its own, in every state, outside the app. It's like a Figma component page that actually runs.
- **Why it matters:** A public Storybook is the clearest proof you build production UI. It's the review's top recommendation.
- **Read:** storybook.js.org → "Why Storybook?", "What's a story?", "Args", "Decorators", "Docs / MDX".
- **Key words:** *story* (one state of a component), *args* (the props a story uses, editable live through *controls*), *decorator* (a wrapper around every story, used here for theme, locale and motion), *addon* (a plugin, e.g. a11y).
- **Try it:** After Phase 1 lands, write one story yourself: a `Tag` story with `size: "md"` and a long label.
- **Explain back:** What's a decorator, and why does Terminal need one to render?

### Lesson 4: Accessibility in practice
- **Idea:** Accessible UI works for keyboard, screen-reader and reduced-motion users. WCAG 2.1 AA is the usual standard to aim for.
- **Why it matters:** It's a core design engineer skill, and most portfolios can't prove it.
- **Read:** web.dev → "Learn Accessibility" (the Focus, ARIA and Motion modules). Also WCAG quick ref for 1.4.3 (contrast), 2.1.1 (keyboard), 2.4.7 (focus visible), 2.3.3 (animation from interactions).
- **Try it:** Unplug the mouse and use the site with Tab, Shift+Tab, Enter and Space. Then turn on macOS "Reduce motion" and reload. Write down 3 things you notice.
- **Explain back:** What does `aria-pressed` tell a screen reader? Why does Magnetic do nothing under reduced motion?

### Lesson 5: Testing (proof it keeps working)
- **Idea:** Tests are small scripts that check a component behaves as intended, so later changes can't quietly break it.
- **Why it matters:** "Ship fast" only works safely with tests. Employers ask about it.
- **Read:** storybook.js.org → "Interaction tests" (`play` functions) and "Accessibility tests". Also testing-library.com → "Guiding Principles" ("query by role, the way users do").
- **Try it:** Read the ThemeToggle `play` test once it exists. Change the expected label so it fails, run it, watch it fail, then fix it.
- **Explain back:** Why query `getByRole("button")` and not a CSS class? What does the axe test catch, and what can't it catch?

### Lesson 6: Git, PRs and CI (working like a team)
- **Idea:** A branch is a safe copy for one change. A PR asks for that change to be reviewed and merged. CI is a robot that runs every check on every PR.
- **Why it matters:** The review flagged "mostly solo" as a gap. A visible history of PRs with green CI fixes that.
- **Read:** GitHub Docs → "About pull requests", "Understanding GitHub Actions".
- **Try it:** Make a branch, change one word of copy, open a PR, watch CI run, merge it.
- **Explain back:** What happens between `git push` and the green tick? Why not push straight to main?

### Weekly habit (after the 6 lessons)
Once a week, build one component **from scratch with no AI**, in a scratch file, about 60 minutes: tabs → modal with focus trap → combobox → toast. Review CSS cascade, Grid and stacking contexts, plus React `useState` and `useEffect`. This is the "prove you own the code" gap from the review.

---

# Track B: Build spec (for Claude Sonnet)

## Ground rules for the builder
- **One phase = one branch = one PR** into `main` (`feat/storybook-setup`, `feat/stories-primitives`, …). Never commit straight to main. End commit messages with the attribution line from the session instructions.
- **Don't change how the live site looks or behaves**, except in Phase 5. After every phase, `npm run build` must pass and the home page, `/work`, `/fr` and `/ca` must render the same as before.
- **Match the house style.** Components have a one-line JSDoc that explains the *why* (see [Tag.tsx](components/Tag.tsx), [Magnetic.tsx](components/Magnetic.tsx)). Use Tailwind token classes only (`bg-raised`, `text-muted`): no hex values and no new colours.
- **Privacy (from memory):** No NIBSS work anywhere. Carbon and BAFTA details must be blurred or left out of any story data. Sojourn may be named, but with no owner name or costs. Stories use made-up sample data, not real case-study data.
- **French (from memory):** Any user-facing site copy that changes in English also changes in [lib/data.fr.ts](lib/data.fr.ts) and the `(fr)` routes. Storybook docs are English only.
- **Production domain** is `chukwuemekaiheonye.com`, not the vercel.app address.
- Before using any Storybook API, check the installed version's docs. Storybook's APIs change between majors, so don't rely on memory.

## Phase 0: Learning companion files (`docs/learning/`)
- One markdown file per lesson (`01-components-and-props.md` … `06-git-prs-ci.md`), following the Track A structure.
- Each file quotes **real snippets from this repo** with file links, adds a "Glossary" of 5–8 words in plain English, and ends with the "explain back" questions plus model answers hidden under a `<details>` tag.
- Plain language for a designer: explain jargon the first time it's used and keep sentences short. No assumed engineering background.
- **Accept when:** all 6 files exist, and every code snippet matches the current source.

## Phase 1: Storybook setup (`feat/storybook-setup`)
- Install the current Storybook with the `@storybook/nextjs` framework (confirm it supports Next 14.2.3 + React 18). Add the addons for **a11y**, **themes** (or a custom toolbar global) and **interactions/test**.
- `.storybook/main.ts`: stories glob `components/**/*.stories.tsx` and `stories/**/*.mdx`, plus static dir `public`.
- `.storybook/preview.tsx`:
  - `import "../app/globals.css"`, and load the same fonts as the app layout (check `app/(en)/layout.tsx` for how `--font-display/sans/mono` are set and reproduce them).
  - **Theme toolbar** (light/dark): a decorator sets `document.documentElement.dataset.theme`, the same mechanism [ThemeToggle.tsx](components/ThemeToggle.tsx) uses. The story background must use `bg-canvas`.
  - **Motion toolbar** (normal/reduced): wrap stories in Framer `MotionConfig reducedMotion={reduced ? "always" : "user"}`.
  - **Locale toolbar** (en/fr): a decorator that provides whatever [lib/useLocale.ts](lib/useLocale.ts) reads (read it first, it may depend on `next/navigation` pathname, which the Next framework lets you mock per story via `parameters.nextjs.navigation`).
  - Set the a11y addon to report violations as test failures (`parameters.a11y.test = "error"` or the equivalent in the installed version).
- `package.json` scripts: `storybook`, `build-storybook`, `typecheck` (`tsc --noEmit`) and `test-storybook`.
- Keep stories out of the Next build: make sure `next build` and `next lint` ignore `*.stories.tsx` and `.storybook` if they cause problems. Add `storybook-static` to `.gitignore`.
- One smoke story: `Tag.stories.tsx`.
- **Accept when:** `npm run storybook` shows Tag correctly in both themes, `npm run build` passes, and the diff touches nothing in `app/` or the existing components.

## Phase 2: Stories (`feat/stories`)
One `X.stories.tsx` next to each component, using CSF3 with `satisfies Meta<typeof X>`, `tags: ["autodocs"]` and a `parameters.docs.description.component` that holds a **"Why it's built this way"** paragraph (2–4 sentences on the design reasoning, in the voice of the existing JSDoc comments).

| Group | Components | Stories to include |
|---|---|---|
| Primitives | Tag, Arrow, SectionHeading | every size/variant, long text, inside a list |
| Interactive | ThemeToggle, BackToTop, Magnetic, LanguageSwitch | default, focus-visible, reduced motion |
| Motion | FadeUp, RevealWords, CountUp, DrawLine, HeroGlow, Terminal | default plus a reduced-motion story (`globals: { motion: "reduced" }`) showing the fallback |
| Composites | WorkCard, Testimonials | made-up sample data: short, long and no-image cases |

- Skip page sections that are only layout (Hero, About, Work, Contact, Nav, PageReader, SiteShell) for now. Note why in a `stories/README.mdx`.
- If a component can't render alone (e.g. it needs a router or IntersectionObserver), fix it with a decorator or parameters, **not** by editing the component. If editing is truly needed, keep it minimal and explain it in the PR.
- **Accept when:** every story renders in light, dark and reduced motion with zero console errors, and the a11y panel shows no violations (or each one is fixed in Phase 4).

## Phase 3: Foundations docs (`feat/foundations-docs`)
In `stories/foundations/`:
- `Introduction.mdx`: what this library is, how it powers chukwuemekaiheonye.com, and links to the site and the GitHub repo.
- `Colour.mdx`: a swatch for every token in tailwind.config (name, role comment, light value, dark value). Show the **contrast ratio for each text pairing in both themes**, computed live in a small React helper inside the MDX from `getComputedStyle`, so it's never out of date.
- `Typography.mdx`: the display, sans and mono families and the type sizes the site actually uses.
- `Motion.mdx`: principles (what moves, why, durations, easing) and how reduced motion is respected, with links to the motion stories.
- **Accept when:** the pages render in both themes and the contrast numbers match a manual check of 2 pairings.

## Phase 4: Tests and CI (`feat/ci`)
- **Interaction tests** (`play` functions using `storybook/test` `expect`, `userEvent` and `within`, querying by role):
  - ThemeToggle: Tab to it, press Enter, assert `data-theme` flipped and the accessible name/state updated.
  - BackToTop: it appears after scroll (or in a forced visible state), activating it moves focus or scroll as the component intends.
  - LanguageSwitch: it's reachable by keyboard and has a correct accessible name.
  - Magnetic: under reduced motion, the transform stays at 0 after a pointer move.
- **Accessibility tests:** the test runner runs axe on every story, and violations fail the run.
- `.github/workflows/ci.yml`, on `pull_request` to main plus `push` to main: Node LTS, `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run build-storybook`, then serve `storybook-static` and run `npm run test-storybook` (install Playwright browsers). Cache npm.
- Add a CI status badge to a short `README.md` (create one if it's missing: what the repo is, how to run the site and Storybook).
- **Accept when:** CI is green on the PR, and breaking a test locally on purpose makes it fail.

## Phase 5: Accessibility audit and portfolio framing (`feat/a11y-audit-and-built`)
- Run the `design:accessibility-review` skill across the components in Storybook: keyboard, focus visibility, contrast in both themes, reduced motion, target size (24px minimum). Fix every real failure in the components, with each fix explained in the PR.
- Write `stories/foundations/Accessibility.mdx`: what was checked, the method, findings (a table of issue, WCAG criterion, fix, component) and what automated testing can't catch.
- Portfolio changes (English, French, and /ca where the copy appears):
  - Add a "Component library" link in [Footer.tsx](components/Footer.tsx) (or Nav, whichever fits the design better) to `https://ui.chukwuemekaiheonye.com`.
  - Add a short block on the `/work` page: one sentence plus a link, styled with existing tokens and components.
  - Change the hero/about positioning line to "Product designer who ships production code". **Ask Chukwuemeka to confirm the wording first.**
  - Add a ship-speed line (idea → live dates, designed vs built) to the Character Guess and Sojourn case studies. **Ask Chukwuemeka for the dates. Don't invent them.**
- **Accept when:** site build passes, the changes look right in light and dark at mobile and desktop width in the browser pane, and the French pages have matching copy.

## Phase 6: Hosting (needs Chukwuemeka)
- Chukwuemeka creates a second Vercel project from the same repo: build command `npm run build-storybook`, output dir `storybook-static`, domain `ui.chukwuemekaiheonye.com` (plus a DNS CNAME at the registrar). The builder writes these exact settings in the final PR description.
- **Accept when:** the subdomain loads the latest Storybook after a merge to main.

## Files
- New: `.storybook/main.ts`, `.storybook/preview.tsx`, `components/*.stories.tsx`, `stories/foundations/*.mdx`, `stories/README.mdx`, `.github/workflows/ci.yml`, `README.md`, `docs/learning/*.md`
- Edited: `package.json`, `.gitignore`, possibly `tsconfig.json` and the ESLint config, then in Phase 5 `lib/data.ts`, `lib/data.fr.ts`, `components/Footer.tsx` and the work page

## Verification (end to end)
1. `npm run storybook`: in the browser pane, click through every story in light, dark and reduced motion. Check the console is clean and the a11y panel shows no violations.
2. `npm run build`: preview `/`, `/work`, `/fr` and `/ca` and confirm nothing changed visually before Phase 5.
3. `npm run build-storybook && npm run test-storybook` pass locally.
4. Each PR shows green CI on GitHub.
5. After Phase 6, `ui.chukwuemekaiheonye.com` is live and the footer link reaches it.

## Outside the build (for you)
- **Weekly from-scratch component** (Track A habit).
- **One merged open-source PR** to a design system (Radix, shadcn/ui, or a Storybook docs fix), as evidence of working in a codebase you don't own.
- **Job search:** apply to both tracks. Search "product design engineer", "UI engineer", "design engineer React" and "creative technologist", and check UK, Ireland or Canada eligibility on each posting.
