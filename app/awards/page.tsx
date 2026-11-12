import type { Metadata } from "next";
import { SiteNav } from "../SiteNav";

export const metadata: Metadata = {
  title: "Awards — Kennedy Nguyen",
  description: "Hackathon awards and placements earned by Kennedy Nguyen and his teams.",
};

const awards = [
  { event: "HackUTD 2026", results: ["NVIDIA Track, 1st Place (1/197 teams)"], prize: "two GeForce RTX 5080 GPUs" },
  { event: "GeauxHack 2026", results: ["1st Place Overall"], prize: "a monitor" },
  {
    event: "Knight Hacks IX 2026",
    prize: "$6,000+ in prizes",
    results: ["BNY Financial Services Challenge, 1st Place", "Best Use of Neon, 1st Place", "Best Use of AMD Technologies, 3rd Place"],
  },
  { event: "WICS Spring Hackathon 2026", results: ["2nd Place, Advanced Bracket", "Best Presentation"] },
  { event: "SASE Fall Hackathon 2025", results: ["3rd Place"] },
];

export default function AwardsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav current="awards" />
      <main className="awards-page" id="main-content" tabIndex={-1}>
        <h1>Awards</h1>
        {awards.map(({ event, results, prize }) => (
          <section className="award-group" key={event}>
            <h2>{event}</h2>
            <ul>{results.map((result) => <li key={result}>{result}</li>)}</ul>
            {prize && <p className="award-prize">Won <strong>{prize}</strong>.</p>}
          </section>
        ))}
      </main>
    </>
  );
}
