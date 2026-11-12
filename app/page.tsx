import type { Metadata } from "next";
import { ProjectArtwork } from "./ProjectArtwork";
import { projects } from "./projects.mjs";
import { SiteNav } from "./SiteNav";

const moreProjects = [
  { name: "3 Minutes to Rage", line: "a hackathon game you play by yelling", href: "https://github.com/liangricky7/tspmo3-3MinutesToRage" },
  { name: "Jarvis", line: "a voice-controlled vision assistant on Arduino hardware", href: "https://github.com/kennynguyen216/Jarvis" },
  { name: "Alfred", line: "an offline student assistant backed by a local model", href: "https://github.com/kennynguyen216/Alfred-AI-Student-Assistant" },
];

export const metadata: Metadata = {
  title: "Kennedy Nguyen — Software engineer",
  description: "Vulkan rendering, simulation, and distributed AI systems by Kennedy Nguyen. Explore Mirabilis, GEarth, and more.",
  openGraph: {
    title: "Kennedy Nguyen — Software engineer",
    description: "Graphics, simulation, and distributed AI. Work by Kennedy Nguyen.",
    images: [],
  },
  twitter: {
    title: "Kennedy Nguyen — Software engineer",
    description: "Graphics, simulation, and distributed AI. Work by Kennedy Nguyen.",
    images: [],
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav current="showcase" />

      <main id="main-content" tabIndex={-1}>
        <section className="bio" aria-labelledby="hero-title">
          <img className="headshot" src="/media/kenny-headshot.jpg" alt="Kennedy Nguyen" width="480" height="480" fetchPriority="high" />
          <h1 id="hero-title">Hi, I&apos;m Kenny!</h1>
          <p>I&apos;m a senior in CS at LSU with an interest in computer graphics and AI/ML. I love making cool projects, and I love competing at hackathons.</p>
          <p>Over 27 days in 2026, I competed in three hackathons and won at all three. My teams took three sponsor prizes with GEarth at Knight Hacks IX, won with FirstPrinciples at GeauxHack, and took the NVIDIA track with KennyCraft at HackUTD.</p>
          <p>
            Contact me on <a href="https://www.linkedin.com/in/kennedynguyen216" target="_blank" rel="noreferrer">LinkedIn</a>, check out my{" "}
            <a href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">GitHub</a>, or email{" "}
            <a href="mailto:kennedyn216@gmail.com">kennedyn216@gmail.com</a>. Hope you enjoy my portfolio!
          </p>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title" className="visually-hidden">Work</h2>
          <div className="tiles">{projects.map((project) => (
            <a className="tile" key={project.slug} href={`/projects/${project.slug}/`}>
              <ProjectArtwork project={project} />
              <span className="tile-caption">
                <strong>{project.name}</strong>
                <span>{project.line}</span>
              </span>
            </a>
          ))}</div>
        </section>

        <section className="notes" id="notes" aria-label="Details">
          <article>
            <h3>Also</h3>
            <p>{moreProjects.map((project, i) => (
              <span key={project.name}>
                <a href={project.href} target="_blank" rel="noreferrer">{project.name}</a>, {project.line}{i < moreProjects.length - 1 ? ". " : "."}
              </span>
            ))}</p>
          </article>

          <article aria-labelledby="experience-title">
            <h3 id="experience-title">Research Software Engineer <span>2026 to now</span></h3>
            <p>At the LSU Center for Analytics and Research in Transportation Safety, I build a natural-language agent that lets researchers query statewide crash databases without writing SQL. Cut intent-extraction latency by 44% by instrumenting the .NET workflow and routing reasoning effort by stage.</p>
          </article>

          <article>
            <h3>Awards</h3>
            <ul className="awards">
              <li><span>NVIDIA Track, Winner</span><span>HackUTD 2026</span></li>
              <li><span>BNY Financial Services Challenge, Winner</span><span>Knight Hacks IX 2026</span></li>
              <li><span>Best Use of AMD Technologies</span><span>Knight Hacks IX 2026</span></li>
              <li><span>Best Use of Neon</span><span>Knight Hacks IX 2026</span></li>
              <li><span>2nd Place, Advanced Bracket</span><span>WICS Spring Hackathon 2026</span></li>
              <li><span>Best Presentation</span><span>WICS Spring Hackathon 2026</span></li>
              <li><span>3rd Place</span><span>SASE Fall Hackathon 2025</span></li>
            </ul>
          </article>
        </section>
      </main>

      <footer>
        <span>© 2026 Kennedy Nguyen</span>
        <a href="mailto:kennedyn216@gmail.com">kennedyn216@gmail.com</a>
      </footer>
    </>
  );
}
