import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import {
  getNextColorTheme,
  getThemeBootstrapScript,
  resolveColorTheme,
  THEME_COLORS,
} from "./theme";

test("stored color themes take precedence over the system preference", () => {
  assert.equal(resolveColorTheme("light", true), "light");
  assert.equal(resolveColorTheme("dark", false), "dark");
});

test("missing and invalid preferences fall back to the system preference", () => {
  assert.equal(resolveColorTheme(null, true), "dark");
  assert.equal(resolveColorTheme("sepia", false), "light");
});

test("the color theme toggle always returns the opposite theme", () => {
  assert.equal(getNextColorTheme("light"), "dark");
  assert.equal(getNextColorTheme("dark"), "light");
});

function runBootstrap({
  storedTheme,
  prefersDark,
  storageThrows = false,
}: {
  storedTheme: string | null;
  prefersDark: boolean;
  storageThrows?: boolean;
}) {
  const documentElement = {
    dataset: {} as Record<string, string>,
    style: {} as Record<string, string>,
  };
  const themeColorMeta = {
    content: "",
    setAttribute(name: string, value: string) {
      if (name === "content") {
        this.content = value;
      }
    },
  };

  vm.runInNewContext(getThemeBootstrapScript(), {
    document: {
      documentElement,
      querySelectorAll: () => [themeColorMeta],
    },
    localStorage: {
      getItem() {
        if (storageThrows) {
          throw new Error("Storage unavailable");
        }

        return storedTheme;
      },
    },
    matchMedia: () => ({ matches: prefersDark }),
  });

  return { documentElement, themeColorMeta };
}

test("the bootstrap applies the stored theme before hydration", () => {
  const { documentElement: root, themeColorMeta } = runBootstrap({
    storedTheme: "light",
    prefersDark: true,
  });

  assert.equal(root.dataset.theme, "light");
  assert.equal(root.style.colorScheme, "light");
  assert.equal(themeColorMeta.content, THEME_COLORS.light);
});

test("the bootstrap follows the system when there is no stored preference", () => {
  const { documentElement: root, themeColorMeta } = runBootstrap({
    storedTheme: null,
    prefersDark: true,
  });

  assert.equal(root.dataset.theme, "dark");
  assert.equal(root.style.colorScheme, "dark");
  assert.equal(themeColorMeta.content, THEME_COLORS.dark);
});

test("the bootstrap still resolves a theme when storage access fails", () => {
  const { documentElement: root } = runBootstrap({
    storedTheme: null,
    prefersDark: false,
    storageThrows: true,
  });

  assert.equal(root.dataset.theme, "light");
  assert.equal(root.style.colorScheme, "light");
});
