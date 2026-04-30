# Security Policy

## Supported versions

Only the latest commit on `main` receives security fixes. There are no LTS branches.

## Reporting a vulnerability

Please report security issues **privately**. Do not open a public GitHub issue or pull request for them.

Email: **tgkn.boz@gmail.com**

Include in your report:

- A clear description of the issue and its impact.
- Steps to reproduce, or a proof-of-concept spec / payload.
- The commit SHA or release tag where the issue was observed.
- Your assessment of severity, if you have one.

## What to expect

- Acknowledgement within **3 business days**.
- An initial assessment within **7 business days**.
- Coordinated disclosure: the maintainer will agree on a timeline with the reporter before any public write-up. Credit is given to reporters who request it.

## Scope

In scope:

- The test code, page objects, fixtures, and CI configuration in this repository.
- Accidental disclosure of credentials, tokens, or personal data committed to the repository.

Out of scope:

- Vulnerabilities in [ciceksepeti.com](https://www.ciceksepeti.com/) itself — report those to the site owner.
- Vulnerabilities in upstream dependencies (Cypress, Node.js, npm packages). Report those to the respective project; this repository will track and bump as fixes land.
