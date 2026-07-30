import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// For GitHub project pages (username.github.io/repo), set VITE_BASE_PATH=/repo/
// User/org sites (username.github.io) and local dev should leave this unset.
const rawBase = process.env.VITE_BASE_PATH || "/";
const basePath = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
const routerBasepath = basePath === "/" ? undefined : basePath.replace(/\/$/, "");

export default defineConfig({
  base: basePath,
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // SPA mode produces a static shell suitable for GitHub Pages.
      spa: {
        enabled: true,
      },
      ...(routerBasepath ? { router: { basepath: routerBasepath } } : {}),
      // Redirect TanStack Start's bundled server entry to src/server.ts.
      server: { entry: "server" },
    }),
    viteReact(),
    nitro(),
  ],
});
