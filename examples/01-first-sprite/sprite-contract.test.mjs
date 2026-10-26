import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const svg = readFileSync(new URL("./lantern.svg", import.meta.url), "utf8");
const palette = JSON.parse(readFileSync(new URL("./palette.json", import.meta.url), "utf8"));

test("sprite source declares a transparent 128 by 128 canvas", () => {
  assert.match(svg, /<svg\b[^>]*width="128"[^>]*height="128"[^>]*viewBox="0 0 128 128"/);
  assert.match(svg, /<title>Lantern game sprite source<\/title>/);
  assert.match(svg, /<desc>[^<]*transparent vector source[^<]*<\/desc>/);
  assert.doesNotMatch(svg, /<rect\b[^>]*fill="#(?:[0-9a-f]{3}|[0-9a-f]{6})"/i);
});

test("every SVG color is declared in the shared palette", () => {
  const allowed = new Set(Object.values(palette.colors).map((color) => color.toLowerCase()));
  const used = [...svg.matchAll(/#(?:[0-9a-f]{3}|[0-9a-f]{6})\b/gi)]
    .map(([color]) => color.toLowerCase());
  assert.ok(used.length > 0, "sprite should use explicit palette colors");
  assert.ok(used.every((color) => allowed.has(color)), "SVG uses a color outside palette.json");
  const paletteColors = Object.values(palette.colors).map((color) => color.toLowerCase());
  assert.equal(new Set(paletteColors).size, paletteColors.length, "palette color values should be unique");
});

test("palette export contract includes transparent PNG and WebP variants", () => {
  assert.equal(palette.version, 1);
  assert.deepEqual(palette.canvas, { width: 128, height: 128, background: "transparent" });
  assert.ok(palette.exports.some((entry) => entry.format === "png" && entry.alpha === true));
  assert.ok(palette.exports.some((entry) => entry.format === "webp" && entry.alpha === true));
  for (const entry of palette.exports) {
    assert.ok(entry.sizes.every((size) => Number.isInteger(size) && size > 0));
  }
});
