# Verity — Landing Page

Landing page for [Verity](https://www.instagram.com/verity.ia/), built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the repo to GitHub/GitLab/Bitbucket and [import the project in Vercel](https://vercel.com/new).
2. (Recomendado) Add an environment variable:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** sua URL em produção (ex.: `https://verity-page.vercel.app` ou o domínio customizado, ex. `https://verity.com`)
   - Usada em: Open Graph, Twitter Cards, `robots.txt` e sitemap.
3. Deploy. O build usa `next build` automaticamente.

## Environment (optional)

- **`NEXT_PUBLIC_SITE_URL`** — Full site URL (e.g. `https://verity.com`) for Open Graph, Twitter Cards, `robots.txt`, and sitemap. If not set, `https://verity.com` is used.

## Project structure

- `app/` — Next.js App Router (layout, page, globals)
- `components/` — Header, Footer, shadcn UI components
- `lib/` — Utilities (e.g. `cn`)
- `public/` — Logos and static assets
