# Kenny's portfolio

A simple, personal portfolio for a computer science student, hidden behind an
interactive Rubik's cube challenge. Visitors can solve the cube themselves or
use the automatic solver, then continue into the rounded-border portfolio.

## Personalize the draft

The visible content lives in `app/page.tsx`. Before publishing, replace:

- `[your internship / role]`
- the two placeholder project cards
- the bracketed personal detail in the About section
- `you@example.com`
- the GitHub and LinkedIn profile links
- the resume placeholder

The gate handoff lives in `app/CubeGate.tsx`, while the complete cube interaction
lives in `public/cube-gate.html`. Colors, layout, typography, and responsive
styles for the portfolio live in `app/globals.css`.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Check a production build

```bash
npm run build
npm test
```

The GitHub repository and hosted draft should remain private until the real
content and links have been added.
