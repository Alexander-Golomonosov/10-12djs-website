<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-context -->
# Session context (auto-saved 2026-07-10)

## Project
- **Name:** Site1012djs
- **Stack:** Next.js 16.2.10 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **GitHub:** https://github.com/Alexander-Golomonosov/10-12djs-website.git
- **Deploy:** https://10-12djs-website.vercel.app (Vercel)
- **Live domain:** https://1012djs.ru
- **Cloudflare:** DNS only (proxy disabled — LTE blocked proxied traffic)
- **Vercel deploy:** Must use `vercel deploy --prod` (GitHub → Vercel auto-deploy broken, use `--force` for clean cache)

## Pages (`src/app/`)
- `/` — home (page.tsx) — shows top 3 upcoming events dynamically + 3 latest Telegram posts
- `/about`
- `/afisha` — all events rendered from shared data source
- `/contact`
- `/gallery`
- `/portfolio`
- `/news` — Telegram feed
- `/school`

## Components (`src/components/`)
- `ContactForm.tsx`
- `Footer.tsx` — social links: TELEGRAM, VK, YOUTUBE, @fckngd1
- `GalleryGrid.tsx`
- `Header.tsx`
- `NewsCard.tsx`

## Data (`src/lib/`)
- `events.ts` — shared event data (all upcoming + past), used by `/afisha` and `/`
- `telegram.ts` — Telegram channel scraper using `cheerio` (replaced regex)

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (use `powershell -ExecutionPolicy Bypass -Command "npm run build"` due to PS execution policy)
- Lint: `npm run lint`
- Deploy: `powershell -ExecutionPolicy Bypass -Command "vercel deploy --prod --force"`

## User
- GitHub username: Alexander-Golomonosov
- The user wants help editing/updating this site as needed.

## Recent Changes (2026-07-10)
- Telegram parser rewritten from regex to `cheerio` — more robust HTML parsing
- Truncation now respects word boundaries + adds `...` at end
- Homepage shows 3 latest Telegram posts (was 10)
- Removed `@imenyuai` from footer social links
- Updated poster for "Вейк-парк Круги на воде" (11 July) — replaced image, artists: DeadRipple / MrFlesh (was SHAWTY)
- Changed Cloudflare DNS from Proxied to DNS only so LTE works

## Key Context
- Push to master does NOT auto-deploy — must run `vercel deploy --prod` manually
- PowerShell execution policy blocks npm directly — always use `powershell -ExecutionPolicy Bypass -Command "..."`
- To add a new event: edit `src/lib/events.ts` only
- To redeploy: `powershell -ExecutionPolicy Bypass -Command "vercel deploy --prod --force"`

## VK Ads Campaign (DJing lessons)
- **Status:** Pixel installed and active, data flowing. Campaign paused.
- **URL:** `https://1012djs.ru/school`
- **Budget:** 400 ₽/день, **Geo:** СПб, Age 18–30

## Club Lighting Plan
- Owns Bi-Ray ML70S (wash moving head, DMX, 13ch)
- Plans: 2x LED strobe 200W + DMX192 controller

## Reminders
- [x] Telegram parser fixed — rewritten with `cheerio`
- [ ] LTE still not connecting — DNS propagation pending (~30-60 min)
- [ ] GitHub → Vercel auto-deploy may need reconnection
<!-- END:session-context -->
