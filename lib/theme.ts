export const THEME_STORAGE_KEY = "grwsure-theme";

export const THEME_COLORS = {
  light: "#fbfbfd",
  dark: "#080c19",
} as const;

export type ColorTheme = "light" | "dark";

export function isColorTheme(value: unknown): value is ColorTheme {
  return value === "light" || value === "dark";
}

export function resolveColorTheme(
  storedTheme: unknown,
  prefersDark: boolean,
): ColorTheme {
  return isColorTheme(storedTheme)
    ? storedTheme
    : prefersDark
      ? "dark"
      : "light";
}

export function getNextColorTheme(theme: ColorTheme): ColorTheme {
  return theme === "dark" ? "light" : "dark";
}

export function getThemeBootstrapScript(): string {
  const storageKey = JSON.stringify(THEME_STORAGE_KEY);
  const themeColors = JSON.stringify(THEME_COLORS);

  return `(function(){var root=document.documentElement;var stored=null;try{stored=localStorage.getItem(${storageKey});}catch(error){}var prefersDark=typeof matchMedia==="function"&&matchMedia("(prefers-color-scheme: dark)").matches;var theme=stored==="light"||stored==="dark"?stored:prefersDark?"dark":"light";root.dataset.theme=theme;root.style.colorScheme=theme;var colors=${themeColors};document.querySelectorAll('meta[name="theme-color"]').forEach(function(meta){meta.setAttribute("content",colors[theme]);});}());`;
}
