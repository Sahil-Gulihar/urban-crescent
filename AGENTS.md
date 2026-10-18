# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Marketing site for Urban Crescent, an interior design and execution studio in India.
Single landing page plus legal pages, built with Next.js (App Router), React 19 and Tailwind CSS v4.
Deployed on Vercel at https://urban-crescent.vercel.app.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build (run before pushing)
- `npm run lint` — ESLint
- `npx tsc --noEmit` — type check

## Layout

- `app/page.tsx` — landing page, composed of sections in `app/components/`
- `app/components/` — `Navbar`, `Hero`, `Specialisation` (services), `HowWereDifferent`, `Portfolio`, `Testimonials`, `CTA` (consultation form), `Footer`, `LogoMark`, `LegalPage`
- `app/privacy`, `app/terms`, `app/warranty` — legal pages built on `LegalPage`
- `app/layout.tsx` — site-wide metadata and JSON-LD structured data
- `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `app/apple-icon.tsx`, `app/icon.svg` — generated share images and icons
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — SEO and PWA metadata
- `public/llms.txt`, `public/humans.txt`, `public/.well-known/security.txt` — static text files

## Conventions

- Components style with inline `style` objects and CSS variables from `app/globals.css` (`--cream`, `--charcoal`, `--gold`, etc.). Match that rather than introducing Tailwind classes or new CSS files.
- Display font is Cormorant Garamond (`.font-display`); body font is DM Sans.
- Images come from `images.unsplash.com` via `next/image`; new remote hosts must be added to `next.config.ts`.
- Use `next/link` for internal page links.

## Keep in sync

Business facts appear in several places. When one changes, update all of them:

- **Services:** `Specialisation.tsx`, the footer services list, the CTA form `<select>`, `public/llms.txt`, and the JSON-LD in `layout.tsx`
- **Warranty** (plywood up to 7 years, hardware 1 year): `HowWereDifferent.tsx`, `CTA.tsx`, `app/warranty/page.tsx`, `public/llms.txt`
- **Contact details:** `Footer.tsx`, legal pages, `public/llms.txt`, `public/humans.txt`, `security.txt`, JSON-LD
- **Site URL:** `layout.tsx`, `robots.ts`, `sitemap.ts`, `llms.txt`, `security.txt`

## Content rules

- Do not advertise free 3D design; only the consultation is free.
- Do not use the "Modular Interiors" tagline.
- Product brands are customised to the customer's choice — keep this claim where brands are mentioned.

## Git

Do not add AI attribution (e.g. `Co-Authored-By` lines or "Generated with" footers) to commits or PR descriptions.
