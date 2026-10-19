import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /<h1[^>]*>Hi, I(?:&#x27;|&apos;|')m <span>Kenny\.<\/span><\/h1>/);
  assert.match(html, /href="\/cube-gate\.html"/);
  assert.doesNotMatch(html, /<iframe|gate-overlay|gate-active|kenny-cube-unlocked/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /Selected work/);
  assert.match(html, /SigmaNova/);
  assert.match(html, /Mirabilis/);
  assert.match(html, /3 Minutes to Rage/);
  assert.match(html, /Currently building/);
  assert.match(html, /Not always coding/);
  assert.match(html, /kenny-headshot\.jpg/);
  assert.match(html, /GEarth/);
  assert.match(html, /gearth-demo\.jpg/);
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
  assert.match(html, /Get in touch/);
  assert.match(html, /Skip to content/);
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

test("the optional cube provides a solvable path and a direct return link", async () => {
  const gate = await readFile(new URL("../public/cube-gate.html", import.meta.url), "utf8");

  assert.match(gate, /id="bg-canvas"/);
  assert.match(gate, /id="giveup-btn"/);
  assert.match(gate, /solve it for me/i);
  assert.match(gate, /id="continue-btn"/);
  assert.match(gate, /href="\.\/">&larr; Back to the portfolio/);
  assert.match(gate, /window\.location\.assign\('\.\/'\)/);
  assert.match(gate, /window\.location\.replace\('\.\/'\)/);
  assert.match(gate, /function checkSolved/);
  assert.match(gate, /id="orientation-gizmo"/);
  assert.match(gate, /data-view="front"/);
  assert.match(gate, /id="snap-view-btn"/);
  assert.match(gate, /function snapToNearest/);
  assert.match(gate, /function snapToView/);
  assert.match(gate, /Alt \/ Option \+ drag/);
  assert.doesNotMatch(gate, /id="orient-btn"/);
  assert.doesNotMatch(gate, /window\.__spin/);
  assert.match(gate, /finishing queued moves/);
  assert.doesNotMatch(gate, /queue\.length >= MAX_ANIMATED_QUEUE\)[\s\S]{0,80}applyInstant/);
  assert.doesNotMatch(gate, /Math\.abs\(vx\) < 0\.0003 \? 0\.0012/);
  assert.doesNotMatch(gate, /Math\.max\(-1\.2, Math\.min\(1\.2/);
});
