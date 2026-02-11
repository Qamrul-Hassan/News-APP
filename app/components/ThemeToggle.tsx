"use client";

import { useEffect, useMemo, useState } from "react";
import { applyTheme, persistTheme, resolveTheme } from "./ThemeLayout";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

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
      className="btn-nav inline-flex items-center gap-2 shadow-lg"
      onClick={() => {
        const updated = nextTheme;
        setTheme(updated);
        applyTheme(updated);
        persistTheme(updated);
      }}
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
      title={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
    >
      <span aria-hidden="true">{mounted && theme === "dark" ? "Sun" : "Moon"}</span>
      <span>{mounted ? (theme === "dark" ? "Light" : "Dark") : "Theme"}</span>
    </button>
  );
}
