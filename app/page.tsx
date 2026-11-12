import type { Metadata } from "next";
import { ProjectArtwork } from "./ProjectArtwork";
import { projects } from "./projects.mjs";
import { SiteNav } from "./SiteNav";

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
          <p>I went to <strong>3 hackathons in 27 days</strong> and <strong>won at all 3</strong>.</p>
          <ul className="bio-results">
            <li>At <strong>Knight Hacks IX</strong>, GEarth placed <strong>1st in BNY</strong>, <strong>1st in Neon</strong>, and <strong>3rd in AMD</strong>.</li>
            <li>At <strong>GeauxHack</strong>, FirstPrinciples placed <strong>1st overall</strong>.</li>
            <li>At <strong>HackUTD</strong>, KennyCraft placed <strong>1st in the NVIDIA track</strong> and won <strong>two GeForce RTX 5080 GPUs</strong>.</li>
          </ul>
          <p>I work as a <strong>Research Software Engineer</strong> at LSU&apos;s Center for Analytics and Research in Transportation Safety, where I build an agent that lets researchers query statewide crash data in plain English. I cut intent-extraction latency by <strong>44%</strong> by instrumenting the .NET workflow and tuning reasoning effort by stage.</p>
          <p>
            Contact me on <a href="https://www.linkedin.com/in/kennedynguyen216" target="_blank" rel="noreferrer">LinkedIn</a>, check out my{" "}
            <a href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">GitHub</a>, or email{" "}
            <a href="mailto:kennedyn216@gmail.com">kennedyn216@gmail.com</a>.
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
      </main>
    </>
  );
}
