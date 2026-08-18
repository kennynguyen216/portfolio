# Personal portfolio

A responsive one-page portfolio for a designer and developer. It includes a
strong editorial landing section, selected work, an about section,
capabilities, contact links, and a custom social sharing card.

## Make it yours

Most content lives in `app/page.tsx`. Replace these starter details before
sharing the site:

- `Your Name`, `YN.`, and `Your City`
- `hello@example.com`
- the GitHub and LinkedIn profile links
- the three demo projects and their skills
- the short biography and availability line

Update the browser and social-sharing title in `app/layout.tsx` and
`app/page.tsx`. Replace `public/og.png` after changing the name or headline.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify a production build

```bash
npm run build
npm test
```

## Project structure

- `app/page.tsx` — portfolio content and social metadata
- `app/globals.css` — layout, colors, typography, and responsive behavior
- `public/og.png` — social sharing image
- `.openai/hosting.json` — Sites hosting configuration

## Publish updates

Commit and push changes to the `main` branch. The source is designed to stay
in GitHub while the live build is published through Sites.
