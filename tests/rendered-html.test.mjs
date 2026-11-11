import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete portfolio without an entry gate", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kennedy Nguyen — Software engineer<\/title>/i);
  assert.match(html, /<h1[^>]*>Hi, I(?:&#x27;|&apos;|')m Kenny!<\/h1>/);
  assert.doesNotMatch(html, /cube-gate|<iframe|gate-overlay|gate-active|kenny-cube-unlocked/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /class="tiles"/);
  assert.match(html, /SigmaNova/);
  assert.match(html, /Mirabilis/);
  assert.match(html, /3 Minutes to Rage/);
  assert.match(html, /In progress/);
  assert.match(html, /Off the clock/);
  assert.match(html, /kenny-headshot\.jpg/);
  assert.match(html, /GEarth/);
  assert.match(html, /KennyCraft/);
  assert.match(html, /kc-landscape\.jpg/);
  assert.match(html, /FirstPrinciples/);
  assert.match(html, /fp-blackhole\.jpg/);
  assert.match(html, /NVIDIA track/);
  assert.match(html, /32 KB/);
  assert.match(html, /Schwarzschild/);
  assert.match(html, /gearth-ocean\.jpg/);
  assert.match(html, /gearth-globe\.jpg/);
  assert.match(html, /Knight Hacks IX/);
  assert.match(html, /two NVIDIA DGX Spark systems and an AMD GPU/);
  assert.match(html, /Jolt rigid bodies/);
  assert.match(html, /\.NET 10 C# scripts with live reload/);
  assert.match(html, /Best Use of AMD Technologies/);
  assert.match(html, /Best Use of Neon/);
  assert.match(html, /Financial Services Challenge/);
  assert.match(html, /mirabilis-after-shadows\.mp4/);
  assert.match(html, /mirabilis-before-shadows\.png/);
  assert.match(html, /mirabilis-movement-time-trial\.mp4/);
  assert.match(html, /Research Software Engineer/);
  assert.match(html, /44%/);
  assert.match(html, /WICS Spring Hackathon 2026/);
  assert.match(html, /kennedyn216@gmail\.com/);
  assert.match(html, /github\.com\/kennynguyen216/);
  assert.match(html, /linkedin\.com\/in\/kennedynguyen216/);
  assert.match(html, /Skip to content/);
  assert.match(html, /class="site-nav"/);
  assert.match(html, /aria-current="page"[^>]*>Showcase</);
  assert.doesNotMatch(html, /href="\/blog/);
  assert.doesNotMatch(html, /More projects will live here|you@example\.com/);
  assert.doesNotMatch(html, /og:image/);
  assert.doesNotMatch(html, /I make digital work feel human|codex-preview|SkeletonPreview/);
});

test("project navigation and media are accessible without autoplay", async () => {
  const html = (await (await render()).text()).replace(/<script\b[\s\S]*?<\/script>/gi, "");
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(id), `Missing anchor ${id}`);
  for (const [, path] of html.matchAll(/(?:src|poster)="(\/media\/[^"?]+)"/g)) await access(new URL(`../public${path}`, import.meta.url));
  for (const tag of html.match(/<video\b[^>]*>/g) ?? []) {
    assert.match(tag, /\bcontrols\b/);
    assert.doesNotMatch(tag, /\bautoplay\b/i);
  }
  assert.ok(html.indexOf('id="gearth-title"') < html.indexOf('id="experience-title"'));
  assert.ok(html.indexOf('id="mirabilis-title"') < html.indexOf('id="experience-title"'));
});
