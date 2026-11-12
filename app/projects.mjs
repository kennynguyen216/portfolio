/** @typedef {{ src: string, alt: string, still?: string }} ProjectImage */

/**
 * @typedef {object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} line
 * @property {string} context
 * @property {ProjectImage} image
 * @property {string[]} description
 * @property {string} code
 * @property {string} [devpost]
 * @property {{ label: string, href: string }[]} [links]
 * @property {ProjectImage[]} images
 * @property {{ src: string, poster?: string, label: string }[]} [videos]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "kennycraft",
    name: "KennyCraft",
    line: "A voxel game in 32 KB on a custom FPGA chip. NVIDIA track winner at HackUTD",
    devpost: "https://devpost.com/software/kennycraft",
    image: { src: "/media/kc-landscape.jpg", alt: "KennyCraft voxel landscape with trees, ray traced on an FPGA" },
    context: "HackUTD 2026",
    code: "https://github.com/Sweet-Rice/kennycraft-alpha",
    description: [
      "A Minecraft-style voxel game running on one Arty A7-100T FPGA, on a RISC-V SIMD processor with a hardware ray tracer that our team designed during the hackathon. I worked on the game software, written in C to fit the chip's 32 KB of on-chip instruction memory (32,180 bytes of code) and 32 KB of data memory, with 40 bytes to spare. It ray traces the world with one ray per pixel: 405 fps at 160×120 and 106 fps at 320×240 on the 100 MHz core in simulation, and a steady 59.4 fps on the board, where the 60 Hz display is the limit.",
      "Villagers and a builder contractor are run by NVIDIA Nemotron agents talking to the chip over UART. A bank lets you buy KennyCoin with dollars through Capital One's Nessie API, settled as a token on Solana devnet. Light an obsidian portal to reach the Nether, with lava lakes, glowstone, and a red sky. Won the NVIDIA track.",
    ],
    links: [{ label: "Watch the demo", href: "https://www.youtube.com/watch?v=Qakh5g6futU" }],
    images: [{ src: "/media/kc-mobs.jpg", alt: "KennyCraft mobs and chickens in a voxel field" }],
  },
  {
    slug: "gearth",
    name: "GEarth",
    line: "1,000 AI agents running a society. 3 prizes at Knight Hacks IX",
    devpost: "https://devpost.com/software/diarockets",
    image: { src: "/media/gearth-globe.jpg", alt: "The GEarth Vulkan viewer replaying a simulation: a lit globe with trade routes between ten countries and live country stats" },
    context: "Knight Hacks IX",
    code: "https://github.com/liangricky7/GEarth",
    description: [
      "A simulated Earth with over 1,000 AI agents across ten fictional countries, where citizens, governments, banks, and businesses make decisions about trade, policy, and diplomacy. Won the BNY Financial Services Challenge, Best Use of AMD Technologies, and Best Use of Neon at Knight Hacks IX. I set up distributed inference across two NVIDIA DGX Spark systems and an AMD GPU, and built tooling to replay saved simulation states without rerunning inference.",
      "On the graphics side, I worked on the C++20/Vulkan viewer that replays each run: a procedural globe with atmosphere, clouds, city lights, and stars; HDR lighting with exposure, bloom, ACES-style tone mapping, and FXAA; sun shadows and physically based glTF materials with BC7 textures; a procedural ocean you can sail or fly over; and a meadow with about a million wind-bent grass blades generated on the GPU every frame.",
    ],
    links: [{ label: "Watch the demo", href: "https://www.youtube.com/watch?v=7h_nXEkdgIM" }],
    images: [
      { src: "/media/gearth-ocean.jpg", alt: "The procedural ocean at sunset in the GEarth Vulkan viewer" },
      { src: "/media/gearth-demo.jpg", alt: "GEarth simulation demo" },
    ],
  },
  {
    slug: "first-principles",
    name: "FirstPrinciples",
    line: "A C++20 game engine for Metal and Vulkan, from GeauxHack",
    devpost: "https://devpost.com/software/first-principles",
    image: { src: "/media/fp-blackhole.jpg", alt: "A black hole with a glowing accretion disk rendered in the FirstPrinciples engine" },
    context: "GeauxHack 2026",
    code: "https://github.com/kennynguyen216/FirstPrinciples",
    description: [
      "A C++20 game engine for macOS (Metal) and Windows (Vulkan) with a Qt scene editor, an entity component system, hot-reloadable C++ scripts, physics, spatial audio, and peer-to-peer multiplayer with proximity chat. We used it to build Mission Kritikal Ultra, a space trucking racer.",
      "Its centerpiece is a physically accurate black hole. Light is traced backward through Schwarzschild spacetime, which produces the black shadow at 2.6 times the horizon radius, the photon ring, and the far side of the accretion disk lensed over the top. Each ring of the disk glows as a blackbody at its own temperature, shifted by Doppler and gravitational redshift, and ships orbit by the exact Schwarzschild equations, so orbits precess and anything inside 1.5 radii spirals in.",
    ],
    links: [{ label: "Watch the demo", href: "https://www.youtube.com/watch?v=QMFozthDMLI" }],
    images: [{ src: "/media/fp-cockpit.jpg", alt: "Cockpit view from Mission Kritikal Ultra, built in FirstPrinciples" }],
  },
  {
    slug: "sigmanova",
    name: "SigmaNova",
    line: "Volumetric supernova renderer",
    context: "C++ / OpenGL",
    code: "https://github.com/kennynguyen216/SigmaNova",
    image: {
      src: "/media/sigmanova-remnant-demo.gif",
      still: "/media/sigmanova-remnant-still.png",
      alt: "SigmaNova rendering an expanding supernova remnant",
    },
    description: [
      "SigmaNova renders a red supergiant as it collapses, flashes, and expands into a cooling remnant. A GLSL ray marcher samples a procedural density field and models emission and absorption. HDR bloom and tone mapping bring out the translucent ejecta and pulsing core.",
      "The renderer uses GPU timestamp queries to profile passes and dynamically scales the volume render target while compositing at full resolution.",
    ],
    images: [{ src: "/media/sigmanova-remnant-still.png", alt: "The final SigmaNova remnant with its compact pulsar" }],
  },
  {
    slug: "mirabilis",
    name: "Mirabilis",
    line: "The C++20/Vulkan engine I'm building",
    image: {
      src: "/media/mirabilis-bhop-demo.gif",
      still: "/media/mirabilis-movement-time-trial.jpg",
      alt: "Source-style strafing and bunny hopping in Mirabilis",
    },
    context: "In progress",
    code: "https://github.com/kennynguyen216/Mirabilis",
    description: [
      "Mirabilis combines Source-style air strafing and bunny hopping with linked portals that preserve the player’s momentum.",
      "A game engine with an ImGui scene editor, linked player portals, EnTT scenes, and Jolt rigid bodies with fixed-step physics. .NET 10 C# scripts with live reload let you edit code during Play without losing the scene.",
    ],
    links: [{ label: "Scripting docs", href: "https://github.com/kennynguyen216/Mirabilis/blob/main/docs/scripting.md" }],
    images: [
      { src: "/media/mirabilis-before-shadows.png", alt: "Sponza before the Mirabilis shadow pass" },
      { src: "/media/mirabilis-after-shadows.png", alt: "Sponza after the Mirabilis shadow pass" },
    ],
    videos: [
      { src: "/media/mirabilis-movement-time-trial.mp4", poster: "/media/mirabilis-movement-time-trial.jpg", label: "Timed movement course" },
      { src: "/media/mirabilis-after-shadows.mp4", poster: "/media/mirabilis-after-shadows.png", label: "Real-time shadow walkthrough" },
      { src: "/media/mirabilis-milestone2-demo.mp4", label: "Engine milestone demo" },
    ],
  },
];
