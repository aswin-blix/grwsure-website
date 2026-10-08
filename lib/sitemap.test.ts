import assert from "node:assert/strict";
import test from "node:test";
import manifest, { dynamic as manifestDynamic } from "@/app/manifest";
import { dynamic as openGraphImageDynamic } from "@/app/opengraph-image";
import robots, { dynamic as robotsDynamic } from "@/app/robots";
import sitemap, { dynamic as sitemapDynamic } from "@/app/sitemap";
import { site } from "@/lib/site-data";

test("generated discovery routes are explicitly static for the Pages export", () => {
  assert.equal(openGraphImageDynamic, "force-static");
  assert.equal(sitemapDynamic, "force-static");
  assert.equal(robotsDynamic, "force-static");
  assert.equal(manifestDynamic, "force-static");
});

test("the XML sitemap includes the user-facing sitemap without duplicate URLs", () => {
  const routes = sitemap();
  const urls = routes.map((route) => route.url);

  assert.ok(urls.includes(`${site.url}/sitemap`));
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(urls.every((url) => url.startsWith(site.url)));
});

test("robots keeps search crawlers pointed at the XML sitemap", () => {
  assert.equal(robots().sitemap, `${site.url}/sitemap.xml`);
});

test("manifest navigation and icons resolve relative to either Pages base URL", () => {
  const webManifest = manifest();

  assert.equal(webManifest.start_url, "./");
  assert.deepEqual(webManifest.icons, [
    { src: "./icon.svg", sizes: "any", type: "image/svg+xml" },
  ]);
});
