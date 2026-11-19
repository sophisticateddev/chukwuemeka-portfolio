# Chukwuemeka Iheonye: portfolio and component library

[![CI](https://github.com/sophisticateddev/chukwuemeka-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/sophisticateddev/chukwuemeka-portfolio/actions/workflows/ci.yml)

The source of [chukwuemekaiheonye.com](https://chukwuemekaiheonye.com): a Next.js 14 site in English and French, built from small typed React components with colour tokens, light and dark themes, and reduced-motion support. The components are documented and tested in Storybook.

## Run the site

```bash
npm ci
npm run dev        # http://localhost:3000
```

## Run Storybook

```bash
npm run storybook  # http://localhost:6006
```

Use the toolbar to switch theme, motion (normal or reduced) and language.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run build-storybook
npx playwright install chromium
npx http-server storybook-static --port 6006 --silent &   # serve the built Storybook
npm run test-storybook                                   # interaction + axe accessibility tests
```

CI runs all of these on every pull request. The accessibility check runs axe on every story in both light and dark and fails on any violation.

## Learning notes

Short lessons using real code from this repo are in [docs/learning](docs/learning).
