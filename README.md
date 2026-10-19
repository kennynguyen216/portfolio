# Kennedy Nguyen's portfolio

Graphics, simulation, and distributed AI work, led by GEarth and Mirabilis.
The portfolio opens directly; the Rubik's cube is an optional footer link.

- Content: `app/page.tsx`
- Responsive light/dark styles: `app/globals.css`
- Personal photos and clips: `app/HobbyGallery.tsx`
- Optional cube: `public/cube-gate.html`

The rounded panels and pale-blue/mint palette take inspiration from
[althruist.fyi](https://althruist.fyi/). Artwork, fonts, and source were not copied.
The GEarth thumbnail comes from the team's [demo video](https://www.youtube.com/watch?v=7h_nXEkdgIM).

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validate and publish

```sh
npm run build
npm test
npm run lint
```

Tests check server-rendered content, navigation, media, and the optional cube's
return path. Browser checks are still needed for visual layout and interaction.

Pushes to `main` deploy [GitHub Pages](https://kennynguyen216.github.io/portfolio/)
through `.github/workflows/pages.yml`. The workflow runs
`GITHUB_PAGES=true npm run build:pages` to export static HTML and prefix asset
paths with `/portfolio/`. The Sites deployment uses the normal worker build.
