# cod.vision — Maquan Technology Corporate Site

Bilingual (EN default, ZH) corporate website for 杭州码全信息科技有限公司 (Hangzhou Maquan Information Technology Co., Ltd.), built with [Astro](https://astro.build) as a fully static site.

## Structure

```
src/
  i18n/en.ts        # English content (single source for the `Content` type)
  i18n/zh.ts        # Chinese content (must satisfy the same shape)
  layouts/Base.astro   # HTML shell: nav, footer, fonts, reveal script
  components/Home.astro  # Page body, shared by both locales
  pages/index.astro      # /      → English (default)
  pages/zh/index.astro   # /zh/   → 中文
  styles/global.css      # Design tokens + all styles
public/
  favicon.svg
  _headers               # Cloudflare Pages cache headers
```

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve dist/ locally
```

## Deploy to Cloudflare Pages

**Option A — Git integration (recommended):**
1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Add your custom domain under the project's *Custom domains* tab.

**Option B — Direct upload with Wrangler:**

```bash
npm run deploy     # = npm run build && wrangler pages deploy dist
```

First run will prompt you to log in (`npx wrangler login`) and pick/create a Pages project.

## Deploy to Cloudflare Workers (static assets)

The same `dist/` also works as Workers static assets:

```bash
npx wrangler deploy --assets=dist --name=cod-vision --compatibility-date=2026-08-17
```

No worker script is needed — static assets only.

## Notes

- English is the default locale at `/`; Chinese lives at `/zh/`. The nav pill toggles between them.
- All copy lives in `src/i18n/*.ts` — edit there, never in the components.
- Contact email is set in `src/i18n/*.ts` under `contact.email` (currently `sales@codvision.com`).
- Inter (variable) is self-hosted via `@fontsource-variable/inter`; Chinese text uses the system font stack (PingFang SC / Microsoft YaHei / Noto Sans SC), so no CJK webfont download.
