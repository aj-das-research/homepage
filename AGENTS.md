# Agent notes

Personal homepage for Abhijit Das. Static TanStack Start (SPA) site. Production is hosted at [https://www.abhijitdas.net](https://www.abhijitdas.net). This GitHub repository is kept as an archive; GitHub Pages is retired.

- Prefer editing content in `src/data/` over hardcoding copy in routes.
- Keep the Vite config free of third-party editor/platform plugins.
- For custom-domain / root hosting, leave `VITE_BASE_PATH` unset (defaults to `/`).
- Use `nitro()` without the `static` preset — that preset currently breaks the SPA shell build; publish `.output/public` (`_shell.html` → `index.html` / `404.html` as needed).
