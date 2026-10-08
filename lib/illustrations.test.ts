import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { insights } from "./site-data";

const assetDirectory = join(process.cwd(), "assets", "illustrations");
const unsafeSvgPattern =
  /<(?:script|style|foreignObject|image)\b|<!DOCTYPE\b|<!ENTITY\b|@import|\son[a-z]+\s*=|(?:href|xlink:href)\s*=\s*["'](?!#)|url\(\s*["']?(?!#)/i;

test("every insight has a unique SVG illustration", () => {
  const names = insights.map((insight) => insight.illustration);

  assert.equal(new Set(names).size, insights.length);

  names.forEach((name) => {
    assert.ok(statSync(join(assetDirectory, `${name}.svg`)).isFile());
  });
});

test("every illustration asset is lightweight and safe to render", () => {
  const names = readdirSync(assetDirectory)
    .filter((name) => name.endsWith(".svg"))
    .sort();

  assert.ok(names.length > 0);

  names.forEach((name) => {
    const filePath = join(assetDirectory, name);
    const file = readFileSync(filePath, "utf8");

    assert.ok(statSync(filePath).size < 25 * 1024, `${name} should stay below 25 KB`);
    assert.match(file, /^(?:<\?xml[^>]*>\s*)?<svg\b/);
    assert.match(file, /\bviewBox=/);
    assert.doesNotMatch(file, unsafeSvgPattern);
  });
});
