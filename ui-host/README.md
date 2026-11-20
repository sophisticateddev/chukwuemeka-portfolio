# ui-host

Root directory for the second Vercel project that serves Storybook (ui.chukwuemekaiheonye.com).

Vercel runs a `middleware.ts` it finds in a project's root directory. The site needs the one at the repo root, but it breaks a static Storybook deploy. Pointing the Storybook project at this folder keeps that file out of its root.

Vercel project settings (Root Directory `ui-host`, "include files outside the root directory" on):

- Framework preset: Other
- Install command: `cd .. && npm ci`
- Build command: `cd .. && npm run build-storybook -- -o ui-host/storybook-static`
- Output directory: `storybook-static`
