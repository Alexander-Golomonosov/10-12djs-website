<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-context -->
# Session context (auto-saved 2026-07-12)

## Project
- **Name:** Site1012djs
- **Stack:** Next.js 16.2.10 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **GitHub:** https://github.com/Alexander-Golomonosov/10-12djs-website.git
- **Live domain:** https://1012djs.ru
- **Hosting:** VPS at FirstVDS (176.12.64.126, a0djs12fckngd1.fvds.ru)
- **Reverse proxy:** nginx → localhost:3000
- **Process manager:** PM2 (site, fork mode)
- **SSL:** Let's Encrypt (certbot), auto-renewal via systemd timer
- **Cloudflare:** Proxied (orange cloud), SSL/TLS: Full (strict)
- **Cloudflare caching:** Page Rule — Cache Everything, Edge TTL 2h
- **Node.js:** 22.23.1

## Pages (`src/app/`)
- `/` — home — hero: "МЫ ЗА ИНТЕЛЛИГЕНТНЫЙ АНДЕГРАУНД.", top 3 upcoming events + 3 latest Telegram posts
- `/about`
- `/afisha` — all events from shared data source
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
- `events.ts` — shared event data (upcoming + past), used by `/afisha` and `/`
- `telegram.ts` — Telegram scraper using `cheerio`

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: `cd /var/site && git pull && npm run build && pm2 restart site`
- SSH: `ssh -i ~/.ssh/vps_key root@a0djs12fckngd1.fvds.ru`
- WAV→MP3: `ffmpeg -i input.wav -codec:a libmp3lame -b:a 320k output.mp3`

## User
- GitHub username: Alexander-Golomonosov
- Personal TG: @fuckengod (t.me/fuckengod)

## Event Format
- Artist names ALL-CAPS, no spaces: `DEADRIPPLE`
- Tags: uppercase: `HOUSE`, `TECHNO`, `LIVE DJ SET`

## Current Events
- **XONIAD** — 17 ИЮЛЯ, DIZENGOF/99, 19:30, free
- **LUPUS FEST PRE-PARTY** — 25 ИЮЛЯ, DEPECHE MODE BAR, 19:00, free
- **ЛЮПУС-ФЕСТ 2026** — 7–9 АВГУСТА, ЛЕНИНГРАДСКАЯ ОБЛАСТЬ

## VK Ads Campaign (Диджеинг, 400 ₽/день, СПб, 18–30)
- **Pixel ID:** 3778811 (Top.Mail.Ru + VK pixel JS)
- **reachGoal:** `VK.Pixel.Event("reachGoal", "visit")` + `ViewContent` on every page
- **URL:** `https://1012djs.ru/school`
- **Campaign ID:** 24638274
- **Stats (08–12.07):** 45 807 показов, 483 клика, CTR 1.05%, CPC 4.03 ₽, **0 конверсий**
- **Root cause:** pixel code was never deployed to VPS — existed only locally. Site was built without it.
- **Fixed 12.07:** deployed pixel + reachGoal, cleared Cloudflare cache
- **Next:** check stats in 2-3 days (13-14.07)

## VPS Security (13.07.2026)
- **Root password:** changed from weak `adminadmin1991!!!` → strong, saved in `.root-pw.txt` (gitignored)
- **fail2ban:** installed and active — 3 IPs banned already
- **SSH:** key-only access (no password login), default port 22
- **Secrets:** moved from `.env.local` → PM2 `ecosystem.config.cjs` (env vars, gitignored). `.env.local` deleted from VPS
- **Contact form:** fixed — was broken due to missing `.env.local` on VPS. SMTP creds now loaded via PM2 config

## Kwork Responses (12.07.2026)
All responses sent via Kwork.ru, awaiting replies:
1. **Турагентство (мультиязычный, Travelpayouts)** — Next.js, 15 000 ₽, 7-10 дней
2. **Медицинский одностраничник** — Next.js, 7 000 ₽, 2-3 дня
3. **Психологическая помощь (личный кабинет, видео)** — Fullstack, 20 000 ₽, 2-3 нед
4. **Лендинг на Tilda** — отказался, предложил Next.js
5. **Многостраничный сервис (банки, карты, отзывы)** — Fullstack, от 100 000 / 50-60k MVP
6. **Сайт на HTML/CMS/Tilda + айдентика** — запросил подробности
7. **Smart Bazar (e-commerce доработка)** — запросил стек и ТЗ
8. **Серия B2B-лендингов (AI + SEO)** — Next.js, от 25 000 за первый
9. **Waterlux одностраничник** — Next.js, 5 000–7 000 ₽, 2-3 дня
10. **WordPress бухгалтерия** — отказался, предложил Next.js
11. **Учебный центр (платформа, тесты, видео)** — Fullstack, 40 000–60 000 ₽
12. **Креативное агентство (Figma, парсинг новостей)** — Next.js, 15 000–20 000 + доп
13. **AI-поиск оборудования** — Fullstack, 50 000–70 000 ₽
14. **Контент-менеджер (AI тексты+фото)** — отклик
15. **Ведение соцсетей под ключ** — отклик (15 000–20 000/мес)
16. **Упаковка+воронка VK** — отклик (15 000–20 000 за свой блок)
17. **Контент-план 12 нед** — отклик (2 000 ₽)
18. **Отложенный постинг VK (40 видео/день)** — отклик (500 ₽/день)
19. **ВК-витрина (этап проекта)** — отклик (3 000–5 000 ₽)
20. **VK Ads + сайт (4 кампании)** — отклик (2 000 ₽)
21. **Посты ENG с кросс-постингом** — отклик (500 ₽/пост)

## TG Monitoring
- **Script:** `C:\Users\aloms\tg-orders\monitor.mjs` (Node.js, pure fetch)
- **Channels:** freelancetaverna, digitaltender, zakaz_design, vacancysmm, FreeVacanciesIT, rabota_emik
- **Keywords highlighted:** дизайн, афиш, poster, design, next.js, веб, сайт, landing, вк, vk, таргет
- **Usage:** `node C:\Users\aloms\tg-orders\monitor.mjs` or ask me "проверь заказы"

## Freelance Platforms
- **Kwork:** 8 kworks total — Next.js (4k/7k/10k), Poster design (500/1k/2k), VK Ads (2k/4k/7k), SMM management (3k/5k/10k), VK community pack (2k/4k/7k), Content plan (1k/2k/4k), VK scheduled posting (500/1k/2k), AI content (500/1k/2k)
- **freelancehunt.com:** registered, profile incomplete (avatar issues, paused)
- **weblancer.net:** not registered

## TG Contacts
- @tannyy_k — VK Ads inquiry (30k ₽), sent response, awaiting reply
- @Assist_Anastasia_man — traffic manager (60k ₽), sent response, awaiting reply
- @vldbrb — poster design, sent portfolio, rejected ("плохо читаемо, не подходит")
- @n1telite — club flyer design, sent offer, awaiting reply

## Club Lighting
- Bi-Ray ML70S (wash moving head, DMX, 13ch)
- Plans: 2x LED strobe 200W + DMX192 controller

## Standoff 365 Bug Bounty
- **URL:** https://bugbounty.standoff365.com
- **Password:** k3RVxj*.+N-%>jD
- **Status:** registered (13.07.2026)
- **Самозанятость:** needs оформление через «Мой налог»
- **Программа:** Flowwow (scope: flowwow.com + api subdomains + mobile apps, reward до 70к)
- **Инструменты:** OWASP ZAP (установлен), Sonic Pi (установлен), FL Studio 20

## Audio Visualizer (HTML)
- **Файл:** `C:\Users\aloms\OneDrive\Рабочий стол\audio-viz.html`
- **Лого:** `C:\Users\aloms\OneDrive\Рабочий стол\logo.png` (из `C:\Users\aloms\Downloads\10_12_logos\`)
- **Логика частот:**
  - Bass (data[0-3]) → размер лого, свечение, радиус колец, метки по углам, цветовая палитра
  - Mid (data[15-18]) → прозрачность колец, толщина линий, текст внизу
  - High (data[45-47]) → почти не задействованы
- **Элементы:** лого по центру с неоновым свечением, 3 вращающихся кольца, 8 угловых меток, полосы сверху/снизу, частицы по кругу, текст "10/12 DJ'S" внизу
- **Использование:** открыть в Chrome/Firefox → разрешить микрофон → выбрать устройство → OBS Window Capture

## VJ Tools
- **OBS Studio** — установлен, ярлык на рабочем столе
- **Sonic Pi** — live coding музыки, ярлык на рабочем столе
- **FL Studio 20** — установлен, ярлык на рабочем столе
- **visualizer.html** — HTML-визуализатор на рабочем столе для OBS Browser Source
<!-- END:session-context -->
