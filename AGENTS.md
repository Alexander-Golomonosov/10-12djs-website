<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-context -->
# Session context (auto-saved 2026-07-07)

## Project
- **Name:** Site1012djs
- **Stack:** Next.js 16.2.10 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **GitHub:** https://github.com/Alexander-Golomonosov/10-12djs-website.git
- **Deploy:** https://10-12djs-website.vercel.app (Vercel)
- **Live domain:** https://1012djs.ru

## Pages (`src/app/`)
- `/` — home (page.tsx)
- `/about`
- `/actions`
- `/contact`
- `/gallery`
- `/portfolio`
- `/news`
- `/school`

## Components (`src/components/`)
- `ContactForm.tsx`
- `Footer.tsx`
- `GalleryGrid.tsx`
- `Header.tsx`
- `NewsCard.tsx`

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (use `powershell -ExecutionPolicy Bypass -Command "npm run build"` due to PS execution policy)
- Lint: `npm run lint`

## User
- GitHub username: Alexander-Golomonosov
- The user wants help editing/updating this site as needed.

## Recent Changes
- Added SoundCloud link (https://soundcloud.com/10-12djs) to portfolio — prominent red CTA button right after intro section
- Removed video/media section from portfolio (Yandex Disk embed was broken)
- VK Video link (https://vkvideo.ru/@10djs12) kept as contact reference
- Fixed "DJ-ДИНГ" → "ДИДЖЕИНГ" on /school page
- School videos resized: square containers (`aspect-square`, `max-w-md`) with `object-contain` to keep original proportions smaller
- Favicon `src/app/icon.svg` uses `#ff4242` red logo — working after cache clear

## Key Context
- Push to master auto-deploys via Vercel
- PowerShell execution policy blocks npm directly — always use `powershell -ExecutionPolicy Bypass -Command "..."`
- The user reviews changes live after pushes
<!-- END:session-context -->
