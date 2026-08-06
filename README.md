# Abhijit Das — Personal Homepage

Personal academic / research homepage for [Abhijit Das](https://github.com/aj-das-research).

**Live site:** [https://www.abhijitdas.net](https://www.abhijitdas.net)

> This repository is an **archive** of the site source. GitHub Pages has been retired; the production site is hosted at the custom domain above.

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

## Content

Site content lives under `src/data/` (profile, publications, projects, etc.). Update those files to change the published information.

### Projects

Projects are defined in `src/data/projects.ts` with `status: "active" | "closed"`, a listing `summary`, an `image`, and an optional `abstract` array for the detail page body.

- Listing: `/projects` (Active Projects and Closed Projects)
- Detail pages: `/projects/<slug>` (file: `projects_.$slug.tsx` so the page is a sibling route, not nested under the list) — arXiv-style title + image; fill `abstract` later when ready

Edit `abstract` on each project object to add the long-form write-up.

### Publications images

Listing teaser figures live as `src/assets/media/pub-*-teaser.png` (16:9 conceptual teasers). Older paper figures may still exist as `pub-*.jpg`.

### Blog

Posts live in `src/data/posts.ts`.

- Featured page: `/blog` — always shows the latest 4 posts in a 2×2 grid
- Full archive: `/blog/all` (`blog_.all.tsx`) — list layout of every post
- Detail pages: `/blog/<slug>` (`blog_.$slug.tsx`) — title + image; fill optional `body` later
