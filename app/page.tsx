import type { Metadata } from "next";
import { HobbyGallery } from "./HobbyGallery";

const otherProjects = [
  {
    name: "SigmaNova",
    type: "Graphics / simulation",
    description: "A volumetric supernova renderer, from stellar collapse to a cooling nebula. Optimized the raymarcher from 24.0 ms to 6.84 ms in its first shader pass.",
    tools: "C++ · OpenGL · GLSL · GPU profiling",
    href: "https://github.com/kennynguyen216/SigmaNova",
  },
  {
    name: "3 Minutes to Rage",
    type: "Hackathon / team project",
    description: "A first-person game driven by microphone amplitude and speech recognition. I connected voice input to gameplay, shaders, scoring, and player feedback.",
    tools: "Unity · C# · Voice input",
    href: "https://github.com/liangricky7/tspmo3-3MinutesToRage",
  },
  {
    name: "Jarvis",
    type: "Computer vision / hardware",
    description: "A voice-controlled vision assistant that connects camera movement, scene analysis, and spoken responses to Arduino-driven hardware.",
    tools: "Python · OpenCV · Gemini · Arduino",
    href: "https://github.com/kennynguyen216/Jarvis",
  },
  {
    name: "Alfred",
    type: "AI / local-first software",
    description: "A student assistant with document, email, and calendar tools backed by a local model, designed for privacy-conscious, offline-capable use.",
    tools: "C# · ASP.NET Core · SQLite · Ollama",
    href: "https://github.com/kennynguyen216/Alfred-AI-Student-Assistant",
  },
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
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kennedy Nguyen, back to the top">
          <span className="brand-mark" aria-hidden="true">kn.</span>
          <span>Kennedy Nguyen</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="eyebrow">Graphics, simulation &amp; distributed AI</p>
            <h1 id="hero-title">Hi, I&apos;m <span>Kenny.</span></h1>
            <p className="hero-copy">I build worlds you can step into.<br />And the systems that make them work.</p>
            <p className="hero-intro">A software engineer studying computer science at LSU. Currently building Vulkan engines, connecting AI across GPUs, and turning ideas into things you can try.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href="mailto:kennedyn216@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <p className="availability"><span aria-hidden="true" />Baton Rouge, LA · Open to 2027 roles</p>
          </div>
          <figure className="hero-portrait">
            <img src="/media/kenny-headshot.jpg" alt="Kennedy Nguyen" width="480" height="480" fetchPriority="high" />
            <figcaption>A little curious.<br />Always building.</figcaption>
            <span className="portrait-sticker" aria-hidden="true">hello<br />world!</span>
          </figure>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">A few things I&apos;ve made</p><h2 id="work-title">Selected work.</h2></div>
            <p>Real projects. The systems behind them.<br />And what I worked on.</p>
          </div>

          <article className="feature feature-gearth" aria-labelledby="gearth-title">
            <div className="feature-topline"><span>01 / Distributed AI &amp; graphics</span><span className="project-status">3 sponsor prizes · Knight Hacks IX</span></div>
            <div className="feature-grid">
              <div className="feature-visual">
                <a className="project-preview" href="https://www.youtube.com/watch?v=7h_nXEkdgIM" target="_blank" rel="noreferrer" aria-label="Watch the team demo on YouTube">
                  <img src="/media/gearth-demo.jpg" alt="GEarth team demo title card with a connected globe and the four team members" width="1280" height="720" loading="lazy" />
                  <span className="preview-caption">Watch the team demo <span aria-hidden="true">↗</span></span>
                </a>
                <div className="award-list">
                  <p><span>BNY</span>Financial Services Challenge</p>
                  <p><span>AMD</span>Best Use of AMD Technologies</p>
                  <p><span>Neon</span>Best Use of Neon</p>
                </div>
              </div>
              <div className="feature-copy">
                <p className="project-kind">Team project · Knight Hacks IX, 2026</p>
                <h3 id="gearth-title">GEarth</h3>
                <p className="project-lede">What happens when AI agents have a world to live in?</p>
                <p>A society simulation connecting citizens, businesses, governments, trade, and diplomacy. A C# engine maintains the world; shared Qwen3 models make agent decisions.</p>
                <h4>My contributions</h4>
                <ul className="contribution-list">
                  <li>Set up distributed inference across two NVIDIA DGX Spark systems and an AMD GPU.</li>
                  <li>Ported and extended the C++20/Vulkan viewer, including meadow and market-square environments.</li>
                  <li>Built recording and launcher tooling to inspect saved simulation states and replay events without rerunning inference.</li>
                </ul>
                <details className="project-details">
                  <summary>Inside the Vulkan renderer</summary>
                  <p>GLSL physically based materials, normal maps, sun shadows, point/spot lighting, and compressed BC7 textures for glTF environments. HDR rendering adds exposure, bloom, ACES-style tone mapping, and FXAA. Procedural ocean and meadow scenes bring waves, wind-bent grass, and cloud shadows into the viewer.</p>
                  <p>Packaged recordings support pause, seek, and looping; API-connected viewing follows incoming simulation checkpoints. Routes and vehicle motion are illustrative visualizations of recorded state.</p>
                </details>
                <div className="project-links">
                  <a className="text-link" href="https://github.com/liangricky7/GEarth" target="_blank" rel="noreferrer">Code &amp; architecture <span aria-hidden="true">↗</span></a>
                  <a className="text-link" href="https://devpost.com/software/diarockets" target="_blank" rel="noreferrer">Devpost &amp; awards <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
            <p className="tech-list"><span>C++20 / Vulkan</span><span>C# / .NET</span><span>Python / Qwen3</span><span>Distributed inference</span><span>Neon PostgreSQL</span></p>
          </article>

          <article className="feature feature-mirabilis" id="building" aria-labelledby="mirabilis-title">
            <div className="feature-topline"><span>02 / Real-time engine</span><span className="project-status">Currently building</span></div>
            <div className="feature-grid">
              <div className="feature-visual">
                <figure className="project-preview">
                  <img src="/media/mirabilis-after-shadows.png" alt="Mirabilis rendering the Sponza scene with textured materials and real-time shadows" width="1600" height="900" loading="lazy" />
                  <figcaption className="preview-caption">My engine, rendering Sponza</figcaption>
                </figure>
                <figure className="project-film">
                  <video src="/media/mirabilis-movement-time-trial.mp4" poster="/media/mirabilis-movement-time-trial.jpg" aria-label="Mirabilis timed movement course demonstration" width="1600" height="900" controls muted playsInline preload="none" />
                  <figcaption>Movement footage: a timed course with Source-style strafing and bunny hopping.</figcaption>
                </figure>
              </div>
              <div className="feature-copy">
                <p className="project-kind">Personal project · Aug 2026 — present</p>
                <h3 id="mirabilis-title">Mirabilis</h3>
                <p className="project-lede">An engine to build in. A world to move through.</p>
                <p>My C++20/Vulkan engine combines an ImGui scene editor, Source/Quake-style movement, linked player portals, and a growing gameplay runtime.</p>
                <h4>The latest work</h4>
                <ul className="contribution-list">
                  <li>EnTT scene entities, hierarchical transforms, and versioned JSON persistence.</li>
                  <li>Jolt rigid bodies with fixed-step physics, interpolation, and authored-scene restoration after Play.</li>
                  <li>.NET 10 C# scripts with live reload: save code during Play and keep the scene, physics state, and supported script fields.</li>
                </ul>
                <details className="project-details">
                  <summary>Rendering, movement &amp; runtime details</summary>
                  <p>The renderer supports glTF/GLB materials, real-time shadows, ambient occlusion, and screen-space GI, alongside experimental lighting paths. Fixed 120 Hz movement carries player momentum and view orientation through linked portal frames.</p>
                  <p>Scripts expose lifecycle callbacks, input, transforms, entity references, forces, and impulses. Failed builds retain the previous working scripts. The player uses its own movement controller; rigid bodies do not yet travel through portals.</p>
                  <div className="comparison-pair">
                    <figure><img src="/media/mirabilis-before-shadows.png" alt="Sponza before the Mirabilis shadow pass" width="1600" height="900" loading="lazy" /><figcaption>Before shadows</figcaption></figure>
                    <figure><img src="/media/mirabilis-after-shadows.png" alt="Sponza after the Mirabilis shadow pass" width="1600" height="900" loading="lazy" /><figcaption>After shadows</figcaption></figure>
                  </div>
                  <a className="text-link" href="/media/mirabilis-after-shadows.mp4" target="_blank" rel="noreferrer">Watch the shadow walkthrough <span aria-hidden="true">↗</span></a>
                </details>
                <div className="project-links">
                  <a className="text-link" href="https://github.com/kennynguyen216/Mirabilis" target="_blank" rel="noreferrer">Explore the engine <span aria-hidden="true">↗</span></a>
                  <a className="text-link" href="https://github.com/kennynguyen216/Mirabilis/blob/main/docs/scripting.md" target="_blank" rel="noreferrer">Scripting &amp; hot reload <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
            <p className="tech-list"><span>C++20 / Vulkan</span><span>EnTT</span><span>Jolt Physics</span><span>C# / .NET 10</span><span>ImGui</span></p>
          </article>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><div><p className="eyebrow">Beyond my own projects</p><h2 id="experience-title">Where I work.</h2></div></div>
          <article className="experience-card">
            <div className="experience-heading"><p className="project-kind">Jun 2026 — present</p><h3>Research Software Engineer</h3><p>LSU Center for Analytics and Research in Transportation Safety</p></div>
            <div className="experience-copy"><p>I develop a natural-language crash analytics agent that lets transportation researchers query statewide databases without writing SQL. The system combines self-hosted language models, Qdrant retrieval, read-only SQL enforcement, and consistency monitoring for auditable results.</p><p className="result-line"><strong>44%</strong><span>lower intent-extraction latency after instrumenting the .NET workflow and routing reasoning effort by stage.</span></p></div>
          </article>
        </section>

        <section className="section" aria-labelledby="other-work-title">
          <div className="section-heading"><div><p className="eyebrow">More experiments, more learning</p><h2 id="other-work-title">Also on my workbench.</h2></div><a className="text-link" href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">All repositories <span aria-hidden="true">↗</span></a></div>
          <div className="other-projects">{otherProjects.map((project) => (
            <article className="small-project" key={project.name}>
              <p className="project-kind">{project.type}</p>
              <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name} <span aria-hidden="true">↗</span></a></h3>
              <p>{project.description}</p><p className="small-project-tools">{project.tools}</p>
            </article>
          ))}</div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-intro"><p className="eyebrow">A little about me</p><h2 id="about-title">Curiosity is<br />the common thread.</h2><p>I&apos;m pursuing a B.S. in Computer Science at LSU, concentrating in software engineering and graduating in May 2027. I like work where software becomes something you can see, measure, or interact with.</p><p>Outside the editor: lifting, chess, and jiu jitsu. And the occasional snack run between classes.</p><p className="education-note">LSU Honor Roll · Spring 2026<br />Coursework GPA: 3.4 / 4.0</p></div>
          <div className="about-details">
            <div className="skill-groups"><h3>Tools I reach for</h3><dl><div><dt>Graphics &amp; simulation</dt><dd>C++, Vulkan, OpenGL, GLSL, Jolt, EnTT, SDL2, ImGui</dd></div><div><dt>AI &amp; systems</dt><dd>C#, Python, ASP.NET Core, Qwen3, distributed inference, Qdrant, Ollama</dd></div><div><dt>Interactive software</dt><dd>Unity, OpenCV, Arduino, JavaScript, SQL</dd></div></dl></div>
            <div className="honors"><h3>A few team wins</h3><ul><li><a href="https://devpost.com/software/diarockets" target="_blank" rel="noreferrer">Knight Hacks IX 2026 — BNY, AMD &amp; Neon sponsor prizes <span aria-hidden="true">↗</span></a></li><li>WICS Spring Hackathon 2026 — 2nd Place, Advanced Bracket</li><li>WICS Spring Hackathon 2026 — Best Presentation</li><li>SASE Fall Hackathon 2025 — 3rd Place</li></ul></div>
          </div>
        </section>

        <section className="section" id="outside" aria-labelledby="outside-title"><div className="section-heading"><div><p className="eyebrow">Life away from the keyboard</p><h2 id="outside-title">Not always coding.</h2></div><p>A few snapshots of the other things<br />I keep showing up for.</p></div><HobbyGallery /></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Have something in mind?</p><h2 id="contact-title">Let&apos;s make<br />something <em>good.</em></h2><p>Open to 2027 software engineering roles and internships.<br />Or a conversation about graphics, systems, and interesting problems.</p><div className="contact-links"><a className="button button-primary" href="mailto:kennedyn216@gmail.com">Email me <span aria-hidden="true">↗</span></a><a className="text-link" href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="text-link" href="https://www.linkedin.com/in/kennedynguyen216" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></section>
      </main>

      <footer><p>© 2026 Kennedy Nguyen · Made with curiosity.</p><div><a href="/cube-gate.html">A little side quest: the cube <span aria-hidden="true">↗</span></a><a href="#home">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}
