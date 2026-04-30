# Contributing

Thanks for your interest in improving `cypress-demo`. This document describes how to set up the project locally and the standards expected for pull requests.

## Getting started

1. Fork the repository and clone your fork.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the interactive runner to verify your environment:
   ```bash
   npm run cy:open
   ```

## Branching

- Base your work on the latest `main`.
- Use a topic branch named after the change, e.g. `feat/cart-flow`, `fix/login-selector`, `docs/readme-tweaks`.
- Never push directly to `main`. Open a pull request.

## Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <summary>
```

Common types: `feat`, `fix`, `docs`, `test`, `chore`, `refactor`, `ci`, `perf`, `build`.

Each commit should be **atomic** — one logical change, working tree green (specs runnable). No commented-out code, debug logs, or `TODO: fix me` markers in shipped commits.

## Code style

- JavaScript, ES2022+ syntax.
- Page Object Model: selectors and page interactions live under `cypress/support/pages/`. Specs assert behavior; they do not query the DOM directly.
- Fixtures (`cypress/fixtures/*.json`) hold static test data. Never commit real credentials, personal data, or production tokens.
- Prefer `data-*` attributes and stable selectors over brittle CSS chains.

## Pull request checklist

Before opening a PR, confirm:

- [ ] Specs run green locally (`npm run cy:run`)
- [ ] No new ESLint / formatting violations in the changed files
- [ ] New behavior is covered by at least one spec
- [ ] Page objects updated for any new selector or flow
- [ ] README / docs updated when public behavior or scripts change
- [ ] No secrets, `.env`, or personal data introduced
- [ ] Commit messages follow Conventional Commits and are atomic

## Reporting issues

Open a GitHub issue with:

- Cypress version, Node version, and OS
- Reproduction steps or a failing spec
- Expected vs. actual behavior
- Logs or screenshots from `cypress/screenshots/` and `cypress/videos/` when relevant

For security-sensitive reports, follow [`SECURITY.md`](./SECURITY.md) instead of opening a public issue.
