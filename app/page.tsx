import type { Metadata } from "next";
import { CubeGate } from "./CubeGate";
import { HobbyCarousel } from "./HobbyCarousel";

const projects = [
  {
    number: "01",
    name: "SigmaNova",
    type: "Jun 2026 — Aug 2026",
    description:
      "A real-time volumetric supernova renderer with procedural stellar structure, collapse and flash effects, asymmetric ejecta, a cooling nebular remnant, and a compact pulsar. I accelerated its raymarching 3.5× and reduced final-remnant GPU time by 43.3%.",
    tools: ["C++", "OpenGL", "GLSL", "CMake"],
    href: "https://github.com/kennynguyen216/SigmaNova",
    media: "/media/sigmanova-remnant-demo.gif",
    mediaAlt: "SigmaNova procedural supernova collapsing into a colorful nebular remnant",
  },
  {
    number: "02",
    name: "Mirabilis",
    type: "Aug 2026 — Present",
    description:
      "A Vulkan renderer built from scratch with textured glTF scenes, programmable shaders, and linked portals. It pairs momentum-preserving portal traversal with fixed-step Source-style movement, bunny hopping, and live speed telemetry.",
    tools: ["C++", "Vulkan", "SDL2", "ImGui", "CMake"],
    href: "https://github.com/kennynguyen216/Mirabilis",
    media: "/media/mirabilis-bhop-demo.gif",
    mediaAlt: "Mirabilis Source-style bunny-hop movement demo with live tuning controls and speed telemetry",
  },
  {
    number: "03",
    name: "3 Minutes to Rage",
    type: "Spring 2026 · Team project",
    description:
      "A fast first-person game whose combat reacts to microphone amplitude and speech recognition. I connected voice input to game state, shaders, scoring, and dynamic visual feedback under hackathon time constraints.",
    tools: ["Unity3D", "C#", "Voice input", "Shaders"],
    href: "https://github.com/liangricky7/tspmo3-3MinutesToRage",
  },
  {
    number: "04",
    name: "Jarvis",
    type: "Personal project",
    description:
      "A voice-controlled vision assistant that routes speech into camera movement, scene analysis, and spoken responses, bridging a Python backend with Arduino-driven hardware.",
    tools: ["Python", "OpenCV", "Gemini", "Arduino"],
    href: "https://github.com/kennynguyen216/Jarvis",
  },
  {
    number: "05",
    name: "Alfred",
    type: "Personal project",
    description:
      "A local-first multi-agent student assistant with document, email, and calendar tools backed by a local model, built for privacy-conscious, offline-capable use.",
    tools: ["C#", "ASP.NET Core", "SQLite", "Ollama"],
    href: "https://github.com/kennynguyen216/Alfred-AI-Student-Assistant",
  },
];

const currentlyBuilding = {
  name: "Mirabilis",
  href: "https://github.com/kennynguyen216/Mirabilis",
  demoHref: "/media/mirabilis-milestone2-demo.mp4",
  mp4Href: "/media/mirabilis-milestone2-demo.mp4",
  media: "/media/mirabilis-milestone2-demo.mp4",
  mediaType: "video" as const,
  mediaAlt: "Mirabilis milestone 2 demo: walking through a linked portal with live movement tuning and stats overlays",
  description:
    "Mirabilis is a real-time recursive renderer I'm building in Vulkan. Milestone 2 links the movement layer to portal traversal: a deterministic layer inspired by Source-engine strafing and bunny hopping, now carried momentum-preserving through linked portals.",
  bullets: [
    "Runs movement on a fixed 120 Hz simulation with ground and air acceleration.",
    "Carries momentum through linked portals without breaking the feel of the movement layer.",
    "Exposes live movement tuning and frame stats alongside a procedural test arena.",
  ],
  tools: ["C++", "Vulkan", "SDL2", "ImGui", "CMake", "Real-Time Simulation"],
};

export const metadata: Metadata = {
  title: "Kennedy Nguyen — Software engineer",
  description: "Graphics, AI systems, and interactive software by Kennedy Nguyen.",
  openGraph: {
    title: "Kennedy Nguyen — Software engineer",
    description: "Graphics, AI systems, and interactive software.",
    images: [],
  },
  twitter: {
    title: "Kennedy Nguyen — Software engineer",
    description: "Graphics, AI systems, and interactive software.",
    images: [],
  },
};

export default function Home() {
  return (
    <>
      <CubeGate />

      <main id="home">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Back to the top">
            Kennedy Nguyen
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#outside">Fun Facts</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="label">Research software engineer · LSU CS &apos;27</p>
            <h1 id="hero-title">Hi, I&apos;m Kenny.</h1>
            <p className="hero-copy">
              I build graphics systems, AI tools, and interactive software.
            </p>
            <p className="quiet-note">Based in Baton Rouge · Open to 2027 roles</p>
          </div>
          <img className="hero-headshot" src="/media/kenny-headshot.jpg" alt="Kennedy Nguyen" />
        </section>

        <section className="section" id="building" aria-labelledby="building-title">
          <div className="section-heading">
            <p className="label">00 / Currently building</p>
            <h2 id="building-title">What I&apos;m working on</h2>
          </div>

          <article className="building-item">
            <a
              className="building-media"
              href={currentlyBuilding.demoHref}
              target="_blank"
              rel="noreferrer"
            >
              {currentlyBuilding.mediaType === "video" ? (
                <video
                  src={currentlyBuilding.media}
                  aria-label={currentlyBuilding.mediaAlt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={currentlyBuilding.media} alt={currentlyBuilding.mediaAlt} loading="lazy" />
              )}
            </a>
            <div className="building-main">
              <h3>
                <a href={currentlyBuilding.href} target="_blank" rel="noreferrer">
                  {currentlyBuilding.name} <span aria-hidden="true">↗</span>
                </a>
              </h3>
              <p>{currentlyBuilding.description}</p>
              <ul>
                {currentlyBuilding.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="work-tools building-tools">
                {currentlyBuilding.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </p>
              <p className="building-links">
                <a href={currentlyBuilding.href} target="_blank" rel="noreferrer">
                  Explore the repository <span aria-hidden="true">↗</span>
                </a>
                <a href={currentlyBuilding.demoHref} target="_blank" rel="noreferrer">
                  Watch the milestone demo <span aria-hidden="true">↗</span>
                </a>
                <a href={currentlyBuilding.mp4Href} download="mirabilis-milestone2-demo.mp4">
                  Download the MP4 <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          </article>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="label">01 / Work</p>
            <h2 id="work-title">Selected work</h2>
          </div>

          <div className="work-list">
            {projects.map((project) => (
              <article className="work-item" key={project.name}>
                <div className="work-number">{project.number}</div>
                <div className="work-main">
                  <p className="work-meta">{project.type}</p>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  {project.media ? (
                    <a
                      className="work-media"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={project.media} alt={project.mediaAlt} loading="lazy" />
                    </a>
                  ) : null}
                  <p>{project.description}</p>
                </div>
                <p className="work-tools">
                  {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="label">02 / Experience</p>
            <h2 id="experience-title">Where I work</h2>
          </div>

          <article className="experience-item">
            <p className="experience-date">Jun 2026 — Present</p>
            <div className="experience-main">
              <p className="experience-org">LSU Center for Analytics and Research in Transportation Safety</p>
              <h3>Research Software Engineer</h3>
              <p>
                I develop a natural-language crash analytics agent that lets
                transportation researchers query statewide databases without
                writing SQL. The system uses self-hosted language models,
                Qdrant retrieval, read-only SQL enforcement, and consistency
                monitoring for auditable results.
              </p>
              <p className="result-line">
                <span>44%</span> lower intent-extraction latency after instrumenting
                the .NET workflow and routing reasoning effort by stage.
              </p>
            </div>
          </article>
        </section>

        <section className="section split-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="label">03 / About</p>
            <h2 id="about-title">A little about me</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m pursuing a B.S. in Computer Science at LSU with a software
              engineering concentration, graduating in May 2027. I&apos;m most
              interested in work where software becomes something you can see,
              measure, or interact with.
            </p>
            <dl>
              <div>
                <dt>Coursework GPA</dt>
                <dd>3.4 / 4.0</dd>
              </div>
              <div>
                <dt>Recognition</dt>
                <dd>LSU Honor Roll · Spring 2026</dd>
              </div>
            </dl>

            <div className="skill-groups" aria-label="Technical skills">
              <p><span>Languages</span>C++, C#, Python, Java, JavaScript, SQL, GLSL</p>
              <p><span>Graphics</span>Vulkan, OpenGL, SDL2, ImGui, Unity3D, GPU profiling</p>
              <p><span>AI &amp; data</span>RAG, Qdrant, Ollama, Gemini Vision, SQL generation</p>
              <p><span>Frameworks</span>ASP.NET Core, EF Core, Microsoft Agent Framework, OpenCV</p>
            </div>

            <div className="honors">
              <h3>Honors</h3>
              <ul>
                <li>WICS Spring Hackathon 2026 — 2nd Place, Advanced Bracket</li>
                <li>WICS Spring Hackathon 2026 — Best Presentation</li>
                <li>SASE Fall Hackathon 2025 — 3rd Place</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="outside" aria-labelledby="outside-title">
          <div className="section-heading">
            <p className="label">04 / Outside of work</p>
            <h2 id="outside-title">When I&apos;m not coding</h2>
          </div>
          <p className="outside-copy">
            Lifting, chess, and jiu jitsu. Swipe through for proof.
          </p>
          <HobbyCarousel />
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <p className="label">05 / Contact</p>
          <h2 id="contact-title">Say hello.</h2>
          <p>Email is the easiest way to reach me. You can also find my work on GitHub.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:kennedyn216@gmail.com">
              Email <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/kennynguyen216"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/kennedynguyen216"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer>
          <span>© 2026 Kennedy Nguyen</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
