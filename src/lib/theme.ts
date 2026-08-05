export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    // ignore
  }
  return null;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

/** Force light mode for now (dark toggle is disabled). */
export const themeBootScript = `(function(){try{document.documentElement.classList.remove("dark");localStorage.setItem(${JSON.stringify(THEME_STORAGE_KEY)},"light");}catch(e){document.documentElement.classList.remove("dark");}})();`;
