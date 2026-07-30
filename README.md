# Abhijit Das — Personal Homepage

Personal academic / research homepage for [Abhijit Das](https://github.com/aj-das-research).

## Stack

- TanStack Start (SPA mode)
- React + TypeScript
- Tailwind CSS
- Vite

## Development

Requires Node.js 20+ and npm.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages

This project is set up for static hosting via GitHub Pages (TanStack Start SPA mode).

1. Push this repo to GitHub.
2. In the repo **Settings → Pages**, set the source to **GitHub Actions**.
3. The deploy workflow sets `VITE_BASE_PATH` from the repository name, builds, and publishes `.output/public` (copying `_shell.html` to `index.html` / `404.html`).
4. For a user site (`https://<user>.github.io/`), the base path stays `/`.

After the first successful deploy, the site will be available at your Pages URL.

## Content

Site content lives under `src/data/` (profile, publications, projects, etc.). Update those files to change the published information.
