"use client";

import { ReactNode, useEffect } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "flash-news-theme";

function getSystemTheme(): Theme {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function getSavedTheme(): Theme | null {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "light" || saved === "dark" ? saved : null;
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

export function resolveTheme(): Theme {
  return getSavedTheme() ?? getSystemTheme();
}

export function persistTheme(theme: Theme): void {
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export default function ThemeLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  return <>{children}</>;
}
