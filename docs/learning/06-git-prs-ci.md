# Lesson 6: Git, PRs and CI (working like a team)

**The idea in one sentence:** A branch is a safe copy for one change, a pull request (PR) asks for that change to be reviewed and merged, and CI is a robot that runs every check on every PR.

**Why employers care:** A visible history of PRs with green checks is the proof that you work the way a team does.

**Read:** GitHub Docs → "About pull requests" and "Understanding GitHub Actions".

## The loop

```bash
git checkout -b feat/my-change     # 1. a safe copy to work in
# ...edit files...
git add components/Tag.tsx         # 2. choose what goes in the snapshot
git commit -m "Tag: add accent tone"  # 3. save the snapshot with a message
git push -u origin feat/my-change  # 4. upload the branch to GitHub
gh pr create                       # 5. open the PR; CI starts by itself
```

Then you read the checks, fix anything red, and merge when it's green.

## What CI does in this repo

The workflow file [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) (added in Phase 4) tells GitHub's servers to do, on every PR:

1. Install the exact packages from `package-lock.json` (`npm ci`).
2. Lint, type-check and build the site.
3. Build Storybook.
4. Open every story in a real browser and run the interaction and accessibility tests.

If any step fails, the PR shows a red cross and merging is a bad idea.

## Between `git push` and the green tick

1. GitHub receives your commits on the branch.
2. The PR event triggers the workflow.
3. GitHub starts a fresh virtual machine, checks out your branch and runs each step in order.
4. Each step reports pass or fail; the PR page shows the result.

Because the machine is clean, "works on my laptop" isn't enough. It has to work from scratch.

## Why not push straight to main?

`main` is what Vercel deploys to the live site. A PR gives the change a review, a test run and an undo button (revert) before visitors see it.

## Glossary

- **Repository (repo):** the project folder plus its full history.
- **Commit:** a saved snapshot with a message.
- **Branch:** a named line of commits that doesn't affect `main` until merged.
- **Pull request (PR):** a request to merge a branch, with discussion and checks attached.
- **Merge:** combine a branch into another one.
- **CI (continuous integration):** automatic checks on every change.
- **Workflow:** a GitHub Actions file describing the CI steps.
- **Badge:** a small image showing whether the latest CI run passed.

## Try it by hand (no AI)

Make a branch, change one word of copy, open a PR, watch CI run, merge it.

## Explain it back

1. What happens between `git push` and the green tick?
2. Why not push straight to main?
3. Why does CI use `npm ci` rather than `npm install`?

<details>
<summary>Model answers</summary>

1. GitHub sees the push, the PR triggers the workflow, a clean machine checks out the branch and runs each step, and each result is reported on the PR.
2. Main is what ships. A PR adds review, tests and an easy way to undo.
3. `npm ci` installs exactly what `package-lock.json` says and fails if it's out of date, so CI matches what you tested.

</details>
