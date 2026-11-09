# Vicus Brits

Static executive homepage built with Astro, TypeScript, Tailwind CSS and Lucide icons. No backend is required.

## Local development

Install Node.js 22.22 or later and Docker Desktop. In PowerShell from the project directory:

```powershell
npm ci
npm run dev
```

Open the address printed by Astro, normally http://localhost:4321. Changes reload automatically.

For a production build and local preview:

```powershell
npm run build
npm run preview
```

`npm run build` runs Astro's type and template checks before generating the static site in `dist`.

## Run with Docker

```powershell
docker compose up -d --build
```

Open http://localhost:8080. Rebuild after changing files; the container serves a fixed production build. Stop it with `docker compose down`.

If port 8080 is already in use, stop the other container or change the host port in `docker-compose.yml`. For example, `"8081:80"` serves the site at http://localhost:8081. If you previously started the standalone `vicus-brits` container, stop it with `docker stop vicus-brits` before using the same port.

## Configuration and content

- Edit `src/config/site.ts` to update navigation, LinkedIn, the publication and its section URLs, or the portrait. Both experiment links use `labSection`; the Perspectives card uses `perspectivesSection`.
- To use a portrait, put the image in `public` and set `portrait` to its root-relative path, for example `/portrait.jpg`. Keep the image appropriately sized for the web.
- Homepage sections are separate components in `src/components`; the page composition is in `src/pages/index.astro`. Global design styles are in `src/styles/global.css`.
- Set the canonical production URL in `astro.config.mjs` if the domain changes. SEO metadata is in `src/layouts/Layout.astro`; the LinkedIn sharing image is `public/social-card.png`, with its editable SVG source in `src/assets/social-card.svg`.
- The writing cards represent publication streams. Add or update article previews in `src/components/Writing.astro` when articles are published.

## Deploy to Coolify

1. Push this project to a Git repository accessible to Coolify, and create a new application from that repository.
2. Select **Dockerfile** as the build pack, leave the Dockerfile path at `/Dockerfile`, and set the exposed port to **80**. Coolify builds the multi-stage image and routes requests to Nginx.
3. Configure `vicusbrits.com` as the application domain in Coolify and point its DNS to the VPS. Enable HTTPS using Coolify's proxy and certificate settings.
4. Deploy and check the domain over HTTPS. On subsequent changes, redeploy from Coolify.

No separate Node process, database, or environment variables are needed at runtime. Do not expose port 8080 on the VPS when Coolify's proxy is routing traffic to the container.
