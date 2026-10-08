"use client";

import { animate } from "motion/mini";
import { useEffect, useState, type MouseEvent } from "react";
import {
  getNextColorTheme,
  isColorTheme,
  resolveColorTheme,
  THEME_COLORS,
  THEME_STORAGE_KEY,
  type ColorTheme,
} from "@/lib/theme";

const colorSchemeQuery = "(prefers-color-scheme: dark)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function readStoredTheme(): string | null {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme: ColorTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute("content", THEME_COLORS[theme]));
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ColorTheme | null>(null);

  useEffect(() => {
    const systemPreference = window.matchMedia(colorSchemeQuery);

    const syncTheme = (storedTheme = readStoredTheme()) => {
      const nextTheme = resolveColorTheme(storedTheme, systemPreference.matches);
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };

    const handleSystemChange = () => {
      if (!isColorTheme(readStoredTheme())) {
        syncTheme(null);
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        syncTheme(event.newValue);
      }
    };

    syncTheme();
    systemPreference.addEventListener("change", handleSystemChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      systemPreference.removeEventListener("change", handleSystemChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const label = theme
    ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
    : "Toggle color theme";

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const rootTheme = document.documentElement.dataset.theme;
    const currentTheme = isColorTheme(rootTheme)
      ? rootTheme
      : resolveColorTheme(null, window.matchMedia(colorSchemeQuery).matches);
    const nextTheme = getNextColorTheme(currentTheme);

    applyTheme(nextTheme);
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still works for this page when storage is unavailable.
    }

    if (!window.matchMedia(reducedMotionQuery).matches) {
      const icon = event.currentTarget.querySelector<HTMLElement>(
        ".theme-toggle-icon",
      );

      if (icon) {
        animate(
          icon,
          {
            transform: [
              "scale(0.78) rotate(-12deg)",
              "scale(1) rotate(0deg)",
            ],
          },
          { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
        );
      }
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={handleToggle}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
        </svg>
        <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24">
          <path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8a8.4 8.4 0 1 0 11.4 11.4Z" />
        </svg>
      </span>
    </button>
  );
}
