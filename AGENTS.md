# Agent notes

Personal homepage for Abhijit Das. Static TanStack Start (SPA) site intended for GitHub Pages.

- Prefer editing content in `src/data/` over hardcoding copy in routes.
- Keep the Vite config free of third-party editor/platform plugins.
- For project-page deploys, respect `VITE_BASE_PATH` (see `vite.config.ts` and `.github/workflows/deploy.yml`).
- Use `nitro()` without the `static` preset — that preset currently breaks the SPA shell build; GitHub Pages serves `.output/public` (`_shell.html` → `index.html` / `404.html`).
