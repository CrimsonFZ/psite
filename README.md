# PSite — Fangzhou Lin's Academic Personal Website

Academic personal website and interactive research portfolio for Fangzhou Lin (Wuhan University, Electrical Engineering).

## Stack

- Next.js 15 (App Router) · TypeScript · Tailwind CSS
- Framer Motion · shadcn-style primitives · lucide-react
- next-themes (light/dark) · runtime-toggled bilingual content (zh / en)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Layout

- `app/` — routes, composition only
- `components/` — layout / home / project / ui / motion
- `data/` — all resume-derived content (bilingual `{ en, zh }` strings)
- `types/` — shared interfaces
- `lib/` — utils, siteConfig, metadata helper, i18n provider
- `public/` — static assets (avatar, resume.pdf, project images, og-image)
- `docs/` — mirror of `PSite_architecture/` specs

## Architecture references

The authoritative spec lives in `PSite_architecture/` (copied into `docs/`). When specs disagree, priority is:

1. Academic style first
2. Project expression first
3. Deployability & extensibility

## Deploy

Vercel + custom domain (see `docs/09_domain_and_deployment.md`).
