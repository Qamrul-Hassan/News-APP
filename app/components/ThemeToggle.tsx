"use client";

import { useEffect, useMemo, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { applyTheme, persistTheme, resolveTheme } from "./ThemeLayout";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const initialTheme = resolveTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const nextTheme = useMemo<Theme>(() => (theme === "dark" ? "light" : "dark"), [theme]);

  return (
    <button
      type="button"
      className={`btn-nav theme-toggle-btn theme-toggle-btn-icon inline-flex items-center justify-center shadow-lg ${
        animating ? "theme-toggle-animate" : ""
      }`}
      data-theme-state={theme}
      onClick={() => {
        const updated = nextTheme;
        setTheme(updated);
        applyTheme(updated);
        persistTheme(updated);
        setAnimating(true);
        window.setTimeout(() => setAnimating(false), 320);
      }}
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
      title={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
    >
      <span className="theme-toggle-icon-wrap" aria-hidden="true">
        <FiSun className="theme-toggle-icon theme-toggle-icon-sun" />
        <FiMoon className="theme-toggle-icon theme-toggle-icon-moon" />
      </span>
      <span className="sr-only">{mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}</span>
    </button>
  );
}
