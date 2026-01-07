# Deep Deployment Audit (GitHub + Vercel)

Stack: Vite + React client (`client/`), Express server bundled with esbuild (`server/`, build script in `script/build.ts`). Build output ships static assets to `dist/public` and the bundled server to `dist/index.cjs`.

## 1) Size & Storage Compatibility
- Repo check: `find . -type f -size +100M` → **no files >100MB**. Keep media outside the repo; ship links only.
- `.gitignore` now excludes `node_modules/`, build outputs, `.next/`, `.turbo/`, `.vercel/`, and `*.tsbuildinfo` to keep the repo lean (<1 GB target).
- Dependencies review: no heavyweight serverless breakers (no puppeteer/canvas). Largest client libs are UI-focused (`framer-motion`, `recharts`, Radix UI). Prefer route-level `React.lazy`/dynamic import for charts/animation pages to keep initial payload small.
- Serverless bundle: build allowlist already bundles only selected deps to cut cold-start size. Avoid adding unbundled heavy libs to stay well under Vercel’s 50 MB limit.
- Payload guardrails: No API upload endpoints present. If adding uploads, keep request bodies under **4.5 MB**; use signed uploads (Vercel Blob/S3 presigned URLs) for larger files.

## 2) “Zero Error” Configuration
- Build command for Vercel: **`npm run build`** (uses Vite + esbuild). Install command: `npm install`. Output directory for static assets: `dist/public`.
- Runtime: if self-hosting, `npm run start` serves `dist/index.cjs`. On Vercel, the static output is served from `dist/public` with SPA fallback; add API routes as separate functions if needed.
- Environment variable checklist (set in Vercel Dashboard):
  - `DATABASE_URL` (required by `drizzle.config.ts` during migrations)
  - `NODE_ENV` (`production` in Vercel)
  - `PORT` (only for self-hosting; Vercel sets its own)
  - Optional dev helpers (Replit-only): `REPL_ID` for dev tooling, `REPLIT_INTERNAL_APP_DOMAIN` / `REPLIT_DEV_DOMAIN` for the meta image plugin. Not needed on Vercel.
- Case sensitivity: asset/import paths must match casing exactly (Linux deploys are case-sensitive). Example: `Header.tsx` must be imported as `./Header` (not `./header`).

## 3) Performance & Asset Optimization
- Images: prefer WebP/AVIF; serve through Vite static assets. Use `<img loading="lazy">` or component-level lazy loading where appropriate.
- Caching: `vercel.json` sets `Cache-Control: public, max-age=31536000, immutable` for static assets (js/css/images/fonts).
- Bundle hygiene: lazy-load heavy views (e.g., chart/animation screens using `recharts` or `framer-motion`). Keep shared UI primitives small and tree-shaken.

## 4) Vercel.json Blueprint
- Added `vercel.json` with:
  - `cleanUrls: true` (drops `.html`)
  - `trailingSlash: false` (standardizes URLs)
  - Domain-agnostic `www` → apex redirect via the `handle: "www"` route
  - SPA fallback route to `index.html` after the filesystem check
  - Long-term cache headers for static assets (JSON intentionally excluded to avoid staleness)
- Custom domains work without edits; if you prefer a different canonicalization, adjust `routes` accordingly.

## Quick Deploy Checklist
1. `npm install && npm run build`
2. Ensure env vars are set in Vercel Dashboard.
3. Verify no new large binaries are tracked.
4. Deploy via Vercel; preview should serve SPA routes with clean URLs and cached assets.
