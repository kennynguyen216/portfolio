import { copyFile, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://kennynguyen216.github.io/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Unable to render the portfolio: ${response.status}`);
}

const clientDir = new URL("../dist/client/", import.meta.url);
const html = await response.text();
await writeFile(new URL("index.html", clientDir), html);
await copyFile(
  new URL("index.html", clientDir),
  new URL("404.html", clientDir),
);

const textExtensions = new Set([".css", ".html", ".js", ".json"]);
const files = await readdir(clientDir, { recursive: true, withFileTypes: true });

for (const file of files) {
  if (!file.isFile()) continue;
  const extension = file.name.slice(file.name.lastIndexOf("."));
  if (!textExtensions.has(extension)) continue;

  const filePath = join(file.parentPath, file.name);
  const source = await readFile(filePath, "utf8");
  const prefixed = source
    .replaceAll(/(?<!\/portfolio)\/_next\//g, "/portfolio/_next/")
    .replaceAll(/(?<!\/portfolio)\/media\//g, "/portfolio/media/")
    .replaceAll(/(?<!\/portfolio)\/cube-gate\.html/g, "/portfolio/cube-gate.html");

  if (prefixed !== source) await writeFile(filePath, prefixed);
}
