import type { Metadata } from "next";
import { headers } from "next/headers";

const projects = [
  {
    number: "01",
    title: "Northstar",
    type: "SaaS analytics platform",
    description:
      "A focused workspace that turns complex product data into clear, actionable decisions for growing teams.",
    tags: ["Product design", "React", "Data visualization"],
    tone: "blue",
  },
  {
    number: "02",
    title: "Cedar",
    type: "Climate marketplace",
    description:
      "A transparent marketplace connecting thoughtful buyers with verified, low-impact materials and makers.",
    tags: ["Brand system", "Next.js", "E-commerce"],
    tone: "green",
  },
  {
    number: "03",
    title: "Archive",
    type: "Independent publishing",
    description:
      "An editorial reading experience made for long-form stories, curious minds, and small screens.",
    tags: ["Art direction", "Typography", "Frontend"],
    tone: "coral",
  },
];

const capabilities = [
  "Creative direction",
  "Product design",
  "Design systems",
  "Frontend development",
  "Prototyping",
  "Accessible interfaces",
];

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://example.com";
  const title = "Your Name — Designer & Developer";
  const description =
    "Independent designer and developer creating clear, memorable digital experiences.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${origin}/og.png`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Your Name, back to top">
          YN<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Available for select projects · 2026
        </div>
        <h1>
          I make digital
          <br />
          work <em>feel human.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I&apos;m <strong>Your Name</strong>, a designer and developer turning
            ambitious ideas into clear, memorable digital experiences.
          </p>
          <a className="round-link" href="#work" aria-label="See selected work">
            <span>See work</span>
            <span className="round-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <p className="section-count">03 projects · Demo content</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.tone}`} aria-hidden="true">
                <span className="project-ghost-number">{project.number}</span>
                <div className="project-window">
                  <div className="window-bar"><span /><span /><span /></div>
                  <div className="window-content">
                    <div className="window-line short" />
                    <div className="window-title" />
                    <div className="window-grid"><div /><div /><div /></div>
                  </div>
                </div>
              </div>
              <div className="project-copy">
                <div>
                  <p className="project-meta">{project.number} / {project.type}</p>
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-footer">
                  <ul aria-label={`${project.title} skills`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a href="#contact" aria-label={`Ask about ${project.title}`}>
                    View case study <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="section-kicker light">About me</p>
          <span>Based in Your City</span>
        </div>
        <div className="about-main">
          <p className="about-statement">
            Equal parts <em>curious thinker</em>, meticulous designer, and
            hands-on builder.
          </p>
          <div className="about-details">
            <p>
              I care about the space where strategy, design, and technology
              meet. My work is grounded in a simple idea: useful things can
              also be beautiful, distinctive, and a pleasure to use.
            </p>
            <p>
              When I&apos;m away from the screen, you&apos;ll usually find me exploring
              new places, collecting references, or making something with my hands.
            </p>
          </div>
        </div>
        <ul className="capability-list" aria-label="Capabilities">
          {capabilities.map((capability, index) => (
            <li key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>{capability}
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <p className="section-kicker">Have a project in mind?</p>
          <p>Open for freelance, collaborations, and interesting conversations.</p>
        </div>
        <a className="email-link" href="mailto:hello@example.com">
          hello@example.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <p>© 2026 Your Name</p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:hello@example.com">Email</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
