type Page = "showcase" | "project";

const awards = [
  { event: "HackUTD 2026", results: ["NVIDIA Track, 1st Place"] },
  { event: "GeauxHack 2026", results: ["1st Place Overall"] },
  {
    event: "Knight Hacks IX 2026",
    results: ["BNY Financial Services Challenge, 1st Place", "Best Use of Neon, 1st Place", "Best Use of AMD Technologies, 3rd Place"],
  },
  { event: "WICS Spring Hackathon 2026", results: ["2nd Place, Advanced Bracket", "Best Presentation"] },
  { event: "SASE Fall Hackathon 2025", results: ["3rd Place"] },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kennynguyen216",
    path: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kennedynguyen216",
    path: "M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.06 18.9H5.08V9.33h2.98v9.57ZM6.57 8.02a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM18.92 18.9h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.64V9.33h2.85v1.31h.04a3.13 3.13 0 0 1 2.82-1.55c3.01 0 3.57 1.98 3.57 4.56v5.25Z",
  },
];

// Plain links on purpose: the GitHub Pages export is static HTML under /portfolio/,
// so full page loads are more reliable than client-side routing.
/* eslint-disable @next/next/no-html-link-for-pages */
export function SiteNav({ current }: { current: Page }) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {current === "showcase" ? (
        <a href="/" aria-current="page">Showcase</a>
      ) : (
        <a href="/#work">← Go back</a>
      )}
      <button type="button" className="awards-toggle" popoverTarget="awards-panel">Awards</button>
      <section id="awards-panel" className="awards-panel" popover="auto" aria-labelledby="awards-title">
        <div className="awards-heading">
          <h2 id="awards-title">Awards</h2>
          <button type="button" popoverTarget="awards-panel" popoverTargetAction="hide">Close</button>
        </div>
        {awards.map(({ event, results }) => (
          <div className="award-group" key={event}>
            <h3>{event}</h3>
            <ul>{results.map((result) => <li key={result}>{result}</li>)}</ul>
          </div>
        ))}
      </section>
      <span className="site-nav-divider" aria-hidden="true" />
      {socials.map((social) => (
        <a key={social.label} className="site-nav-icon" href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d={social.path} fill="currentColor" /></svg>
        </a>
      ))}
    </nav>
  );
}
