# cypress-demo

End-to-end test suite for the [ciceksepeti.com](https://www.ciceksepeti.com/) e-commerce site, written with [Cypress](https://www.cypress.io/) 13 and the Page Object Model.

## Requirements

- Node.js 18+
- npm 9+

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

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run cy:open`      | Open the Cypress interactive runner      |
| `npm run cy:run`       | Run all specs headlessly                 |
| `npm run cy:run:headed`| Run all specs in a visible browser       |

## Configuration

Key settings live in [`cypress.config.js`](./cypress.config.js):

- `baseUrl`: `https://www.ciceksepeti.com/`
- Viewport: `1920x1080`
- `defaultCommandTimeout`: `10000` ms
- `pageLoadTimeout`: `30000` ms
- `retries`: `2` in run mode, `0` in open mode

## License

[ISC](./LICENSE)
