import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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

test("server-renders Kenny's complete portfolio draft", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kennedy Nguyen — Software engineer<\/title>/i);
  assert.match(html, /Hi, I(?:&apos;|')m Kenny/);
  assert.match(html, /src="\/cube-gate\.html"/);
  assert.match(html, /Selected work/);
  assert.match(html, /SigmaNova/);
  assert.match(html, /Mirabilis/);
  assert.match(html, /3 Minutes to Rage/);
  assert.match(html, /Research Software Engineer/);
  assert.match(html, /44%/);
  assert.match(html, /WICS Spring Hackathon 2026/);
  assert.match(html, /kennedyn216@gmail\.com/);
  assert.match(html, /github\.com\/kennynguyen216/);
  assert.match(html, /linkedin\.com\/in\/kennedynguyen216/);
  assert.match(html, /Say hello/);
  assert.doesNotMatch(html, /More projects will live here|you@example\.com/);
  assert.doesNotMatch(html, /og:image/);
  assert.doesNotMatch(html, /I make digital work feel human|codex-preview|SkeletonPreview/);
});

test("the cube gate provides a solvable path and an escape hatch", async () => {
  const gate = await readFile(new URL("../public/cube-gate.html", import.meta.url), "utf8");

  assert.match(gate, /id="bg-canvas"/);
  assert.match(gate, /id="giveup-btn"/);
  assert.match(gate, /solve it for me/i);
  assert.match(gate, /id="continue-btn"/);
  assert.match(gate, /kenny-cube-unlocked/);
  assert.match(gate, /function checkSolved/);
  assert.match(gate, /id="orientation-gizmo"/);
  assert.match(gate, /data-view="front"/);
  assert.match(gate, /id="snap-view-btn"/);
  assert.match(gate, /function snapToNearest/);
  assert.match(gate, /function snapToView/);
  assert.match(gate, /Alt \/ Option \+ drag/);
  assert.doesNotMatch(gate, /id="orient-btn"/);
  assert.doesNotMatch(gate, /window\.__spin/);
  assert.doesNotMatch(gate, /Math\.abs\(vx\) < 0\.0003 \? 0\.0012/);
  assert.doesNotMatch(gate, /Math\.max\(-1\.2, Math\.min\(1\.2/);
});
