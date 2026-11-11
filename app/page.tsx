import type { Metadata } from "next";
import { SiteNav } from "./SiteNav";

type Tile = {
  name: string;
  line: string;
  href: string;
  image?: { src: string; alt: string; position?: string };
  video?: { src: string; poster: string; label: string };
};

const tiles: Tile[] = [
  {
    name: "KennyCraft",
    line: "A voxel game in 32 KB on a custom FPGA chip. NVIDIA track winner at HackUTD",
    href: "https://devpost.com/software/kennycraft",
    image: { src: "/media/kc-landscape.jpg", alt: "KennyCraft voxel landscape with trees, ray traced on an FPGA" },
  },
  {
    name: "GEarth",
    line: "1,000 AI agents running a society. 3 prizes at Knight Hacks IX",
    href: "https://devpost.com/software/diarockets",
    image: { src: "/media/gearth-globe.jpg", alt: "The GEarth Vulkan viewer replaying a simulation: a lit globe with trade routes between ten countries and live country stats" },
  },
  {
    name: "FirstPrinciples",
    line: "A C++20 game engine for Metal and Vulkan, from GeauxHack",
    href: "https://devpost.com/software/first-principles",
    image: { src: "/media/fp-blackhole.jpg", alt: "A black hole with a glowing accretion disk rendered in the FirstPrinciples engine" },
  },
  {
    name: "SigmaNova",
    line: "Volumetric supernova renderer",
    href: "https://github.com/kennynguyen216/SigmaNova",
    image: { src: "/media/sigmanova-remnant-demo.gif", alt: "SigmaNova rendering an expanding supernova remnant" },
  },
  {
    name: "Mirabilis",
    line: "The C++20/Vulkan engine I'm building",
    href: "https://github.com/kennynguyen216/Mirabilis",
    image: { src: "/media/mirabilis-after-shadows.png", alt: "Mirabilis rendering the Sponza scene with textured materials and real-time shadows" },
  },
  {
    name: "Mirabilis movement",
    line: "Source-style strafing and bunny hopping",
    href: "https://github.com/kennynguyen216/Mirabilis",
    video: { src: "/media/mirabilis-movement-time-trial.mp4", poster: "/media/mirabilis-movement-time-trial.jpg", label: "Mirabilis timed movement course demonstration" },
  },
];

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
          <p>In 2026 I competed in 4 hackathons and came home with 6 awards: the NVIDIA track at HackUTD, three sponsor prizes (BNY, AMD, and Neon) at Knight Hacks IX, and 2nd place plus Best Presentation at the WICS Spring Hackathon.</p>
          <p>
            Contact me on <a href="https://www.linkedin.com/in/kennedynguyen216" target="_blank" rel="noreferrer">LinkedIn</a>, check out my{" "}
            <a href="https://github.com/kennynguyen216" target="_blank" rel="noreferrer">GitHub</a>, or email{" "}
            <a href="mailto:kennedyn216@gmail.com">kennedyn216@gmail.com</a>. Hope you enjoy my portfolio!
          </p>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title" className="visually-hidden">Work</h2>
          <div className="tiles">{tiles.map((tile) => (
            <figure className="tile" key={tile.name}>
              {tile.video ? (
                <video src={tile.video.src} poster={tile.video.poster} aria-label={tile.video.label} width="1280" height="720" controls muted playsInline preload="none" />
              ) : tile.image ? (
                <a href={tile.href} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                  <img src={tile.image.src} alt="" width="1280" height="720" loading="lazy" />
                </a>
              ) : null}
              <figcaption>
                <a href={tile.href} target="_blank" rel="noreferrer">{tile.name}</a>
                <span>{tile.line}</span>
              </figcaption>
            </figure>
          ))}</div>
        </section>

        <section className="notes" id="notes" aria-label="Details">
          <article aria-labelledby="kennycraft-title">
            <h3 id="kennycraft-title">KennyCraft <span>HackUTD 2026</span></h3>
            <p>A Minecraft-style voxel game running on one Arty A7-100T FPGA, on a RISC-V SIMD processor with a hardware ray tracer that our team designed during the hackathon. I worked on the game software, written in C to fit the chip&apos;s 32 KB of on-chip instruction memory (32,180 bytes of code) and 32 KB of data memory, with 40 bytes to spare. It ray traces the world with one ray per pixel: 405 fps at 160×120 and 106 fps at 320×240 on the 100 MHz core in simulation, and a steady 59.4 fps on the board, where the 60 Hz display is the limit.</p>
            <p>Villagers and a builder contractor are run by NVIDIA Nemotron agents talking to the chip over UART. A bank lets you buy KennyCoin with dollars through Capital One&apos;s Nessie API, settled as a token on Solana devnet. Light an obsidian portal to reach the Nether, with lava lakes, glowstone, and a red sky. Won the NVIDIA track. <a href="https://github.com/Sweet-Rice/kennycraft-alpha" target="_blank" rel="noreferrer">Code</a>, <a href="https://devpost.com/software/kennycraft" target="_blank" rel="noreferrer">Devpost</a>, <a href="https://www.youtube.com/watch?v=Qakh5g6futU" target="_blank" rel="noreferrer">demo</a>.</p>
            <img className="note-image" src="/media/kc-mobs.jpg" alt="KennyCraft mobs and chickens in a voxel field" width="806" height="453" loading="lazy" />
          </article>

          <article aria-labelledby="gearth-title">
            <h3 id="gearth-title">GEarth <span>Knight Hacks IX</span></h3>
            <p>A simulated Earth with over 1,000 AI agents across ten fictional countries, where citizens, governments, banks, and businesses make decisions about trade, policy, and diplomacy. Won the BNY Financial Services Challenge, Best Use of AMD Technologies, and Best Use of Neon at Knight Hacks IX. I set up distributed inference across two NVIDIA DGX Spark systems and an AMD GPU, and built tooling to replay saved simulation states without rerunning inference.</p>
            <p>On the graphics side, I worked on the C++20/Vulkan viewer that replays each run: a procedural globe with atmosphere, clouds, city lights, and stars; HDR lighting with exposure, bloom, ACES-style tone mapping, and FXAA; sun shadows and physically based glTF materials with BC7 textures; a procedural ocean you can sail or fly over; and a meadow with about a million wind-bent grass blades generated on the GPU every frame. <a href="https://github.com/liangricky7/GEarth" target="_blank" rel="noreferrer">Code</a>, <a href="https://devpost.com/software/diarockets" target="_blank" rel="noreferrer">Devpost</a>, <a href="https://www.youtube.com/watch?v=7h_nXEkdgIM" target="_blank" rel="noreferrer">demo</a>.</p>
            <img className="note-image" src="/media/gearth-ocean.jpg" alt="The procedural ocean at sunset in the GEarth Vulkan viewer" width="1600" height="900" loading="lazy" />
          </article>

          <article aria-labelledby="fp-title">
            <h3 id="fp-title">FirstPrinciples <span>GeauxHack 2026</span></h3>
            <p>A C++20 game engine for macOS (Metal) and Windows (Vulkan) with a Qt scene editor, an entity component system, hot-reloadable C++ scripts, physics, spatial audio, and peer-to-peer multiplayer with proximity chat. We used it to build Mission Kritikal Ultra, a space trucking racer.</p>
            <p>Its centerpiece is a physically accurate black hole. Light is traced backward through Schwarzschild spacetime, which produces the black shadow at 2.6 times the horizon radius, the photon ring, and the far side of the accretion disk lensed over the top. Each ring of the disk glows as a blackbody at its own temperature, shifted by Doppler and gravitational redshift, and ships orbit by the exact Schwarzschild equations, so orbits precess and anything inside 1.5 radii spirals in. <a href="https://github.com/kennynguyen216/FirstPrinciples" target="_blank" rel="noreferrer">Code</a>, <a href="https://devpost.com/software/first-principles" target="_blank" rel="noreferrer">Devpost</a>, <a href="https://www.youtube.com/watch?v=QMFozthDMLI" target="_blank" rel="noreferrer">demo</a>.</p>
            <img className="note-image" src="/media/fp-cockpit.jpg" alt="Cockpit view from Mission Kritikal Ultra, built in FirstPrinciples" width="800" height="422" loading="lazy" />
          </article>

          <article aria-labelledby="mirabilis-title">
            <h3 id="mirabilis-title">Mirabilis <span>In progress</span></h3>
            <p>A game engine with an ImGui scene editor, linked player portals, EnTT scenes, and Jolt rigid bodies with fixed-step physics. .NET 10 C# scripts with live reload let you edit code during Play without losing the scene. <a href="https://github.com/kennynguyen216/Mirabilis/blob/main/docs/scripting.md" target="_blank" rel="noreferrer">Scripting docs</a>, <a href="/media/mirabilis-after-shadows.mp4" target="_blank" rel="noreferrer">shadow walkthrough</a>.</p>
            <div className="pair">
              <img src="/media/mirabilis-before-shadows.png" alt="Sponza before the Mirabilis shadow pass" width="1600" height="900" loading="lazy" />
              <img src="/media/mirabilis-after-shadows.png" alt="Sponza after the Mirabilis shadow pass" width="1600" height="900" loading="lazy" />
            </div>
          </article>

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
