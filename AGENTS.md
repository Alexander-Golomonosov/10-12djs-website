<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-context -->
# Session context (auto-saved 2026-07-09)

## Project
- **Name:** Site1012djs
- **Stack:** Next.js 16.2.10 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **GitHub:** https://github.com/Alexander-Golomonosov/10-12djs-website.git
- **Deploy:** https://10-12djs-website.vercel.app (Vercel)
- **Live domain:** https://1012djs.ru

## Pages (`src/app/`)
- `/` — home (page.tsx) — shows top 3 upcoming events dynamically + Telegram feed
- `/about`
- `/afisha` — all events rendered from shared data source
- `/contact`
- `/gallery`
- `/portfolio`
- `/news` — Telegram feed
- `/school`

## Components (`src/components/`)
- `ContactForm.tsx`
- `Footer.tsx`
- `GalleryGrid.tsx`
- `Header.tsx`
- `NewsCard.tsx`

## Data (`src/lib/`)
- `events.ts` — shared event data (all upcoming + past), used by `/afisha` and `/`
- `telegram.ts` — Telegram channel scraper (broken regex, needs `cheerio` fix)

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (use `powershell -ExecutionPolicy Bypass -Command "npm run build"` due to PS execution policy)
- Lint: `npm run lint`

## User
- GitHub username: Alexander-Golomonosov
- The user wants help editing/updating this site as needed.

## Recent Changes (2026-07-09)
- Added Top.Mail.Ru / VK pixel counter (id 3778811) to root layout — pixel active, data flowing
- Added "Last Resort" event (10 July, Second Stage, MrFlesh/DeadRipple/Esentrica, Witch House) to afisha with poster and ticket link
- Created shared events data source `src/lib/events.ts` — all events (upcoming + past) in one file
- Refactored `/afisha` to render dynamically from `events.ts`
- Refactored `/` (home) to show 3 nearest upcoming events dynamically (auto-expire after date passes)
- Pushed VK Ads campaign 24638274 ("Диджеинг", /school, 400₽/день) — pixel now installed and working

## Key Context
- Push to master auto-deploys via Vercel
- PowerShell execution policy blocks npm directly — always use `powershell -ExecutionPolicy Bypass -Command "..."`
- The user reviews changes live after pushes
- To add a new event: edit `src/lib/events.ts` only

## VK Ads Campaign (DJing lessons)
- **Status:** Pixel installed and active. Campaign paused for now.
- **URL:** `https://1012djs.ru/school` (без UTM)
- **Budget:** 400 ₽/день
- **Geo:** СПб, Age 18–30

## Club Lighting Plan
- Owns Bi-Ray ML70S (wash moving head, DMX, 13ch)
- Will buy: 2x LED strobe 200W with DMX + Sound Active
- Will buy: DMX192 controller (192ch, 15 fixtures × 16ch) — NOT the 48ch version
- USB-DMX interface less preferred; hardware DMX controller preferred

## Reminders
- [ ] Telegram parser regex is broken — rewrite with `cheerio` or bot API
- [ ] Check site accessibility from mobile LTE (Cloudflare setup if needed)
<!-- END:session-context -->
