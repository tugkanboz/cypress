# cypress-demo

[![Cypress](https://img.shields.io/badge/cypress-13.17-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](./LICENSE)

End-to-end test suite for the [ciceksepeti.com](https://www.ciceksepeti.com/) e-commerce site, written with [Cypress](https://www.cypress.io/) 13 and the Page Object Model.

The repository is intended as a reference for structuring a real-world Cypress project: thin specs, reusable page objects, fixtures for test data, and a small set of npm scripts for the common run modes.

## Table of contents

- [Requirements](#requirements)
- [Folder structure](#folder-structure)
- [Setup](#setup)
- [Running tests](#running-tests)
- [Configuration](#configuration)
- [What is covered](#what-is-covered)
- [Writing new tests](#writing-new-tests)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Requirements

- Node.js **18 or newer**
- npm **9 or newer**
- A Chromium-based browser (Chrome, Edge, or Electron bundled with Cypress)

## Folder structure

```
.
├── cypress
│   ├── e2e
│   │   ├── home.cy.js
│   │   └── login.cy.js
│   ├── fixtures
│   │   ├── error.json
│   │   ├── user.json
│   │   └── wrongUser.json
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── pages
│           ├── BasePage.js
│           ├── HomePage.js
│           └── LoginPage.js
├── cypress.config.js
├── jsconfig.json
└── package.json
```

- `e2e/` — specs, one file per feature area.
- `fixtures/` — static JSON test data (users, expected error messages).
- `support/commands.js` — custom Cypress commands.
- `support/pages/` — page objects. `BasePage.js` defines shared interactions; feature pages extend it.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tugkanboz/cypress-demo.git
   cd cypress-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running tests

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run cy:open`       | Open the Cypress interactive runner      |
| `npm run cy:run`        | Run all specs headlessly                 |
| `npm run cy:run:headed` | Run all specs in a visible browser       |

Run a single spec:

```bash
npx cypress run --spec cypress/e2e/login.cy.js
```

Run against a different browser:

```bash
npx cypress run --browser chrome
```

## Configuration

Key settings live in [`cypress.config.js`](./cypress.config.js):

| Setting                 | Value                              |
| ----------------------- | ---------------------------------- |
| `baseUrl`               | `https://www.ciceksepeti.com/`     |
| Viewport                | `1920 × 1080`                      |
| `defaultCommandTimeout` | `10000` ms                         |
| `pageLoadTimeout`       | `30000` ms                         |
| `chromeWebSecurity`     | `false`                            |
| `video`                 | `false`                            |
| `retries` (run mode)    | `2`                                |
| `retries` (open mode)   | `0`                                |

## What is covered

| Spec               | Scenarios                                                                |
| ------------------ | ------------------------------------------------------------------------ |
| `home.cy.js`       | Landing page loads, primary navigation is reachable.                     |
| `login.cy.js`      | Login form happy path and error handling using `user` / `wrongUser` fixtures. |

The suite is small on purpose — extend it through pull requests.

## Writing new tests

1. Add a spec under `cypress/e2e/<feature>.cy.js`. Keep it declarative; the spec describes behavior, not selectors.
2. Add (or extend) the matching page object under `cypress/support/pages/`. Selectors and low-level interactions live here.
3. Add fixtures under `cypress/fixtures/` if the spec needs static data. Never commit real credentials.
4. Verify locally with `npm run cy:run` before opening a PR.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full PR checklist.

## Troubleshooting

- **Cypress fails to launch on Linux**: install the system libraries listed in the [Cypress prerequisites](https://docs.cypress.io/app/get-started/install-cypress#Linux-Prerequisites).
- **Tests time out on slow networks**: increase `defaultCommandTimeout` / `pageLoadTimeout` in `cypress.config.js`.
- **`baseUrl` returns 403**: the target site occasionally rate-limits headless traffic. Re-run with `--headed` or wait a few minutes.
- **Stale selectors after a site change**: update the relevant page object under `support/pages/` rather than patching the spec.

## Contributing

Pull requests are welcome. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for setup, branching, commit conventions, and the PR checklist. By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security

For security-sensitive reports, follow [`SECURITY.md`](./SECURITY.md) — do not open a public issue.

## License

Released under the [ISC License](./LICENSE).
