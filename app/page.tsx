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
      <SiteNav current="home" />

      <main id="main-content" tabIndex={-1}>
        <section id="about" className="bio" aria-labelledby="hero-title">
          <img className="headshot" src="/media/kenny-headshot.jpg" alt="Kennedy Nguyen" width="680" height="680" fetchPriority="high" />
          <div className="bio-copy">
            <h1 id="hero-title">Hi, I&apos;m Kenny!</h1>
            <p>I&apos;m a senior in CS at LSU with an interest in computer graphics and AI/ML. I love making cool projects, and I love competing at hackathons.</p>
            <div className="bio-group">
              <h2>Hackathons</h2>
              <p>I went to <strong>3 hackathons in 27 days</strong> and <strong>won at all 3</strong>.</p>
              <ul className="bio-results">
                <li>At <strong>Knight Hacks IX</strong>, GEarth placed <strong>1st in BNY</strong>, <strong>1st in Neon</strong>, and <strong>3rd in AMD</strong>, earning <strong>$6,000+ worth of prizes</strong>.</li>
                <li>At <strong>GeauxHack</strong>, FirstPrinciples placed <strong>1st overall</strong> and won <strong>a monitor</strong>.</li>
                <li>At <strong>HackUTD</strong>, KennyCraft placed <strong>1st in the NVIDIA track (1/197 teams)</strong> and won <strong>two GeForce RTX 5080 GPUs</strong>.</li>
              </ul>
            </div>
            <div className="bio-group">
              <h2>Research &amp; engineering</h2>
              <p>I&apos;m a <strong>Software Developer</strong> at LSU&apos;s Center for Analytics &amp; Research in Transportation Safety (CARTS), where I build AI agents that help transportation engineers study crash data.</p>
              <p>I&apos;m also an <strong>Undergraduate AI/ML Researcher</strong> at LSU&apos;s ATHENA Lab, where I work with computer vision models.</p>
            </div>
            <p className="bio-contact">
              Contact me on <a href="https://www.linkedin.com/in/kennedynguyen216" target="_blank" rel="noreferrer">LinkedIn</a>, check out my{" "}
              <a href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">GitHub</a>, or email{" "}
              <a href="mailto:kennedyn216@gmail.com">kennedyn216@gmail.com</a>.
            </p>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title">Projects</h2>
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
