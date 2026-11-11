# Kennedy Nguyen's portfolio

Graphics, simulation, and hardware projects: KennyCraft, GEarth, FirstPrinciples,
Mirabilis, and SigmaNova.

- Content: `app/page.tsx`
- Responsive light/dark styles: `app/globals.css`
- Personal photos and clips: `app/HobbyGallery.tsx`

The layout takes inspiration from [willphan.com](https://willphan.com/); the palette is
the "Salt and Pepper" set (#FFFFFF, #D4D4D4, #B3B3B3, #2B2B2B). Artwork, fonts, and source
were not copied. Project screenshots come from each team's Devpost gallery or demo video.

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

Tests check server-rendered content, navigation, and media. Browser checks are still needed for visual layout and interaction.

Pushes to `main` deploy [GitHub Pages](https://kennynguyen216.github.io/portfolio/)
through `.github/workflows/pages.yml`. The workflow runs
`GITHUB_PAGES=true npm run build:pages` to export static HTML and prefix asset
paths with `/portfolio/`. The Sites deployment uses the normal worker build.
