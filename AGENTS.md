<!-- BEGIN:nextjs-agent-rules -->
## VPS Management
- **FirstVDS panel:** https://my.firstvds.ru/ — для перезагрузки сервера
- **SSH:** `ssh -i ~/.ssh/vps_key root@a0djs12fckngd1.fvds.ru`
- **VPS IP:** 176.12.64.126
- **SSH key:** `~/.ssh/vps_key`
- **Host RAM issue:** VPS ограничен по памяти (~512MB), `npm run build` может зависать — требуется reboot через панель FirstVDS или `pkill -f "next build"` перед сборкой

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-context -->
# Session context (auto-saved 2026-07-20)

## Project
- **Name:** Site1012djs
- **Stack:** Next.js 16.2.10 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **GitHub:** https://github.com/Alexander-Golomonosov/10-12djs-website.git
- **Live domain:** https://1012djs.ru
- **Hosting:** VPS at FirstVDS (176.12.64.126, a0djs12fckngd1.fvds.ru)
- **Reverse proxy:** nginx → localhost:3000
- **Process manager:** PM2 (site, fork mode)
- **SSL:** Let's Encrypt (certbot), auto-renewal via systemd timer
- **Cloudflare:** только DNS (grey cloud, DNS only) — прокси отключён! Записи A напрямую на VPS 176.12.64.126. Причина: РФ-провайдеры (МТС, Билайн, Ростелеком, Мегафон, МГТС) с июня 2025 душат CF-прокси (загружается только ~16 КБ и виснет). Сайт должен открываться у всех.
- **Cloudflare caching:** Page Rule «Cache Everything» больше НЕ работает (нужен прокси) — оставлена, но неактивна
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
- `/quiz` — хаб «ТЕСТЫ 10/12» (карточки двух тестов)
- `/quiz/rave` — РЕЙВ-ТЕСТ (RaveQuiz)
- `/quiz/genre` — аудио-тест на жанры (GenreQuiz)

## Components (`src/components/`)
- `ContactForm.tsx`
- `Footer.tsx` — social links: TELEGRAM, VK, YOUTUBE, @fckngd1
- `GalleryGrid.tsx`
- `Header.tsx`
- `NewsCard.tsx`
- `GenreQuiz.tsx` — аудио-тест жанров (5 вопросов, 4 варианта, PLAY/СТОП, результат X/5, шаринг, CTA на запись)
- `RaveQuiz.tsx` — старый РЕЙВ-ТЕСТ, shareUrl `https://1012djs.ru/quiz/rave`

## Data (`src/lib/`)
- `events.ts` — shared event data (upcoming + past), used by `/afisha` and `/`
- `telegram.ts` — Telegram via Cloudflare Worker (bypasses РКН блокировка на FirstVDS)

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
- **LUPUS FEST PRE-PARTY** — 25 ИЮЛЯ, DEPECHE MODE BAR, 19:00, free
- **LOCAL RAVE** — 1 АВГУСТА (постер обновлён 20.07)
- **ЛЮПУС-ФЕСТ 2026** — 7–9 АВГУСТА, ЛЕНИНГРАДСКАЯ ОБЛАСТЬ

## Площадки: стоимость аренды
- **Птичья Личность Бар-клуб** — бесплатно (постоянная площадка)
- **Все остальные площадки** — от 35К за ночь (DIZENGOF/99, DEPECHE MODE BAR, РЖЕВСКАЯ 2 и др.)
- **Важно для бюджетов:** Идеи на Птичьей Личности = минус 35К аренды. На другой площадке = +35К к бюджету

## Last Session Changes (21.07.2026)
- **VK Ads token:** обновлён через OAuth client_credentials (был expired_token)
- **client_id + client_secret** добавлены в opencode.json для авто-рефреша
- **Остановлены** пустые группы 146173537 и 146173711 (0 показов)
- **max_price** поднят с 70₽ → 200₽ из-за нулевого расхода (0.02₽ за 2 дня)
- **VK Community token:** сохранён в `.env.local` как `VK_COMMUNITY_TOKEN` (для wall.post, crosspost TG→VK)
- **VK Group ID:** 170216426 (сохранён в `.env.local` как `VK_GROUP_ID`)
- **VK User token:** сохранён в `.env.local` как `VK_USER_TOKEN` (для photos.getWallUploadServer, загрузка картинок)

## Last Session Changes (22.07.2026)
- **VK User token (новый):** обновлён в `.env.local` —旧 token был привязан к другому IP, VK блокировал загрузку фото
- **crosspost.mjs — исправлен парсер картинок:**
  - Старый парсер ловил аватар канала (`<img>` внутри `tgme_widget_message_user_photo`) вместо постовой картинки
  - Новый парсер ищет `background-image:url(...)` в CSS — постовые картинки в TG используют именно его
  - Фильтрация: только `cdn4.telesco.pe` (убирает эмодзи `telegram.org/img/emoji/`)
- **crosspost.mjs — загрузка фото через VK API:**
  - `photos.getWallUploadServer` + `photos.saveWallPhoto` — требуют **user token** (`VK_USER_TOKEN`), group token не работает
  - `wall.post` — продолжает работать с **group token** (`VK_COMMUNITY_TOKEN`)
  - multipart upload: скачивание с `cdn4.telesco.pe` с User-Agent заголовком
- **Успешный crosspost:** пост #1006 (LUPUS fest) опубликован на VK с картинкой → https://vk.com/wall-170216426_265
- **VK App ID:** 3553569 (для OAuth authorizations, Implicit Flow)

## VK Crosspost Automation (VPS, 22.07.2026)
- **Script:** `/root/crosspost/crosspost.mjs` на VPS
- **State:** `/root/crosspost/crosspost_state.json` — хранит `lastMessageId` для дедупликации
- **Env:** `/root/crosspost/.env.local` — VK_COMMUNITY_TOKEN, VK_USER_TOKEN, VK_GROUP_ID
- **Cron:** `*/30 * * * *` — каждые 30 минут проверяет TG → crosspost новые посты в VK
- **Logs:** `/var/log/crosspost.log`
- **Deduplication:** пропускает посты с `messageId <= lastMessageId`
- **Flags:** `--dry-run` (предпросмотр), `--force` (игнорировать дедупликацию)
- **VK token:** user token привязан к IP VPS (176.12.64.126, статический FVDS)

## Last Session Changes (20.07.2026)
- **Hero text:** Changed from «МУЗЫКА — НАШЕ ОРУЖИЕ. ТАНЦПОЛ — НАША ТЕРРИТОРИЯ.» → «МЫ ЗА ИНТЕЛЛИГЕНТНЫЙ АНДЕГРАУНД.»
- **Poster:** LOCAL RAVE (1 Aug) — new file uploaded to VPS (`/poster-local-rave.png`), Cloudflare + Next.js caches purged
- **telegram.ts fixes:**
  - Blocks regex changed from counting 3 `</div>` to lookahead `(?=<div class="tgme_widget_message_wrap..."|$)` — fixes grouped media posts (3+ photos) not being parsed
  - Date regex fixed to handle `+00:00` timezone offset in datetime attribute
  - `&#33;` entity decoding inlined in the processing pipeline (was standalone function)
- **VK Ads:** Old campaign 25521274 deleted. Active: campaign 25565202 «Школа диджеинга — Лиды ВК», ad group 146233695 «СПб 18-30 лиды», banner 228034959 (pending moderation)
- **MAX messenger:** user will crosspost manually, no automation needed

## Cloudflare Worker — Telegram Proxy (16.07.2026)
- **Purpose:** bypass РКН block on FirstVPS (t.me & api.telegram.org blocked at network level)
- **Worker URL:** https://78557856.golomonosov.workers.dev
- **Bot:** @I0_12_djs_news2_bot (token in .env.local, Cloudflare Worker env TOKEN)
- **How it works:** site → CF Worker (cloudflare edge) → api.telegram.org/getUpdates → channel posts
- **Bot admin in channel:** @I0_12_djs (must be admin with read messages)
- **Worker deploy:** via Cloudflare Dashboard or API (PUT /accounts/{id}/workers/scripts/78557856)
- **Limitation:** getUpdates only returns messages received AFTER bot added, not history

## Quiz: аудио-тест жанров (07.08.2026)
- **Цель:** угадать 5 жанров андеграунд-электроники по 12-сек фрагментам реальных треков (не синтез!)
- **Жанры и фрагменты** в `public/quiz/genres/*.mp3` (12 сек, MP3 96kbps, ~-16 LUFS, ~140-228KB):
  | Жанр | Файл | Источник (оригинальный трек) |
  |------|------|------------------------------|
  | ТЕХНО | techno.mp3 | Sekret Chadow — Teorema (ровный 4/4 кик; ранее был Locked Club — Panagoi, заменён из-за не-4/4 бочки) |
  | БРЕЙКБИТ | breakbeat.mp3 | Samurai Breaks — Sneakin In Da Night |
  | ДЖАНГЛ | jungle.mp3 | Tim Reaper — All The Time |
  | DNB | dnb.mp3 | Shy FX — Badboy Business VIP Remix |
  | UK GARAGE | ukg.mp3 | Chris Lorenzo — London on Fire |
  | БРЕЙККОР (декой) | breakcore.mp3 | Venetian Snares — Skelechairs |
- **Механика:** `GenreDef.src` в `src/lib/genreSynth.ts` = путь к mp3 → `GenreQuiz.tsx` играет `new Audio(def.src)`; если `src` нет — фолбэк на Web Audio синтез (`renderGenre`)
- **Нарезка:** `C:\Users\aloms\AppData\Local\Temp\opencode\cut-quiz-genres.ps1` — сканирует громкость окон 12с, режет «мясистую» середину, нормализует и кодирует 96kbps. ВАЖНО: пути с кириллицей в PS5.1-скрипте портятся без BOM → использовать `[Environment]::GetFolderPath('Desktop')` или ASCII
- **Вопросы:** 5 шт. (techno, breakbeat, jungle, dnb, ukg), 4 варианта; breakcore — декой в вариантах. Исправление жанровых вопросов — в `QUESTIONS` в `GenreQuiz.tsx`
- **CTA в результатах:** персонализированный блок «СЛЕДУЮЩИЙ ШАГ» по счёту (5/5 — «мы ищем таких диджеев», 3-4, 1-2, 0) → кнопка «ЗАПИСАТЬСЯ НА УРОК →» ведёт на https://t.me/fuckengod (target blank)
- **Исходники треков:** `C:\Users\aloms\Downloads\WAV\` (dnb/jungle), `C:\Users\aloms\Music\PioneerDJ\Imported from Device\Contents\` (файлы в подпапках `UnknownAlbum`), брейккор: `Рабочий стол\TRAKTOR\BREAKcore\`

## Cloudflare Cache
- **Zone ID:** в `.env.local` (CLOUDFLARE_ZONE_ID)
- **API Token:** в `.env.local` (CLOUDFLARE_API_TOKEN) —权限: Zone.Cache Purge (НЕ хватает прав на DNS — для правки записей нужен токен с Zone→DNS→Edit)
- **Очистка:** POST /zones/{zone_id}/purge_cache с {"purge_everything":true}
- **⚠️ С 07.08.2026 сайт НЕ проксируется через CF** (DNS only, напрямую на VPS) — очистка кэша для сайта не нужна. Токен/пурж остаются для Telegram Worker
- **DNS записи:** A для `1012djs.ru` и `www.1012djs.ru` → 176.12.64.126 (серый облачко). Если кто-то вернёт прокси (оранжевое облачко) — сайт снова не откроется у части РФ-пользователей
- **Диагностика блокировки:** если «сайт не открывается у части людей» — проверить, что A-запись даёт 176.12.64.126, а не 104.21.x.x/172.67.x.x (CF)

## VK Ads Campaign (Диджеинг, 400 ₽/день, СПб, 18–30)
- **Цель:** Сообщения ВК (лиды в ЛС сообщества, НЕ переходы на сайт)
- **VK Ads Account ID:** 1605557354 (vkads_44484504@vk, "10/12dj's")
- **VK Ads OAuth:** client_id + client_secret в opencode.json → mcp.vk-ads.env
- **Token endpoint:** POST `https://ads.vk.com/api/v2/oauth2/token.json` с `grant_type=client_credentials`
- **Токен живёт 24ч** — обновлять перед работой через curl
- **API Base URL:** `https://ads.vk.com/api/v2/`
- **Auth:** `Authorization: Bearer {token}` (НЕ query param)

### VK Ads API — что работает (24.07.2026)
| Метод | Формат | Работает? |
|-------|--------|-----------|
| Список кампаний | `GET /campaigns.json?account_id=X` | ✅ (только id, name, package_id) |
| Список ad_plans | `GET /ad_plans.json?account_id=X` | ✅ (только id, name) |
| Список ad_groups | `GET /ad_groups.json?account_id=X&fields=id,name,max_price,status,...` | ✅ |
| Список баннеров | `GET /banners.json?account_id=X` | ✅ (id, campaign_id, moderation_status) |
| Статистика | `GET /statistics/campaigns/day.json?account_id=X&id=IDs&date_from=Y&date_to=Z&metrics=all` | ✅ |
| Обновление ad_group | `POST /ad_groups/{id}.json?account_id=X` + JSON body | ✅ (max_price, etc.) |
| Удаление ad_group | `POST /ad_groups/delete.json?account_id=X` + `{"ids":[...]}` | ✅ (без BOM в JSON!) |
| Чтение одного ad_group | `GET /ad_groups/{id}.json?account_id=X` | ⚠️ только id,name,package_id |
| Account/balance | любые | ❌ не работает (нужен веб-кабинет) |

### Интересы (package_id: 3215, leadads)
- **25171** = Электронная музыка
- **25174** = Клубная
- **25175** = Меломаны

### Гео
- **5560** = Санкт-Петербург

### Активные группы (24.07.2026, после чистки)
Все 14 неактивных групп удалены. Осталось 2:

| ID | Название | Кампания (ad_plan) | Ставка | Гео | Возраст | Интересы | Статистика (июль) |
|----|----------|-------------------|--------|-----|---------|----------|-------------------|
| 146233695 | СПб 18-30 лиды | 25565202 «Школа диджеинга — Лиды ВК» **BLOCKED** | 200₽ | 5560 ✅ | 18-30 ✅ | ❌ нет | 257 показов, 0.17₽ |
| **146700580** | **СПб 18-30 лиды (лид-форма)** | **25843957 «Тест лид-форма v2» ACTIVE** | **200₽** | **5560 ✅** | **18-30 ✅** | **✅ электронная/клубная/меломаны** | **4,665 показов, 544.64₽, CTR 0.11%** |

**Основная рабочая группа — 146700580** (лид-форма). Вторая (146233695) в забаненной кампании — не работает.

### Баннеры
- **228034959** (146233695) — allowed ✅ (но кампания blocked)
- **228583147** (146700580) — allowed ✅

### Статистика за июль (полная)
| Кампания | Показы | Клики | CTR | Расход | Конверсии |
|----------|--------|-------|-----|--------|-----------|
| Группа 2026-07-08 (deleted) | 72,632 | 739 | 1.02% | 2,942₽ | 0 |
| Смарт-кампания 2026-07-15 (deleted) | 12,798 | 27 | 0.21% | 2,009₽ | 0 |
| СПб 18-30 лиды (лид-форма) | 4,665 | 5 | 0.11% | 545₽ | 0 |
| СПб 18-30 лиды | 257 | 2 | 0.78% | 0.17₽ | 0 |
| **ИТОГО** | **90,352** | **773** | **0.86%** | **5,496₽** | **0** |

### Проблемы и TODO
- **0 конверсий** за весь июль — ни одного лида
- Кампания 146700580 тратит без результата (CPM 442₽, 0 кликов)
- Кампания 146233695 почти не показывается (257 показов за неделю)
- Нужно проверить/обновить креативы
- Нужно добавить интересы в кампанию 146233695
- Баланс положительный (хватит на неделю) — проверять в ads.vk.com вручную

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

## DJ Outreach Bot
- **Bot:** @I0_12_djs_news_bot (Telegram)
- **Purpose:** ищет кафе, бары, рестораны в СПб с Instagram, кидает ссылки в ТГ для ДМ-рассылки с предложением DJ-услуг
- **Stack:** Python + requests + Telegram Bot API + Overpass API (OpenStreetMap)
- **Hosting:** Railway (free tier, 24/7)
- **Deploy:** `cd dj-outreach-bot && railway up --service dj-outreach-bot`
- **Logs:** `railway logs --service dj-outreach-bot`
- **Bot token / Chat ID:** Railway env vars (BOT_TOKEN, CHAT_ID)
- **Base:** 161+ venues, 12 районов СПб, авто-пополнение через Overpass при ≤10 оставшихся
- **Seen tracking:** seen.json (ephemeral — сбрасывается при рестарте контейнера)
- **Commands:** /search (5 новых), /reset (очистить историю), /status, /total
- **Local source:** `C:\Users\aloms\dj-outreach-bot\`
- **VPS (deprecated):** был на a0djs12fckngd1.fvds.ru, удалён — FirstVDS блокирует api.telegram.org

## VJ Tools
- **OBS Studio** — установлен, ярлык на рабочем столе
- **Sonic Pi** — live coding музыки, ярлык на рабочем столе
- **FL Studio 20** — установлен, ярлык на рабочем столе
- **visualizer.html** — HTML-визуализатор на рабочем столе для OBS Browser Source

## Контент-план: правила и миссия

### Миссия 10/12
⚡Переопределение границ андеграунд сцены.⚡
Мы хотим привлечь НОВУЮ аудиторию. Андеграунд — это не обоссанные углы, а творчество и красота, интеллект и утонченность. Саморазвитие, уважение и свобода — вот каким мы видим андеграунд и этим хотим делиться.
Мы открыли школу андеграунда (диджеинг, стрит-арт, продакшн) — об этом тоже можно и нужно рассказывать.

### Команда: роли в контенте
| Диджей | Роль | Спецализация |
|--------|------|-------------|
| **fckngd1** | Организатор | Афиши ивентов, комьюнити, миссия проекта |
| **XONIAD** | Диджей | Музыка, AMA, интерактив |
| **Febb Tufoe** | Диджей | Музыка (написание, продакшн), рекапы, карусели |
| **MrFlesh** | Диджей | Лайв-выступления, эмоции, атмосфера |
| **DeadRipple** | Диджей | Музыка + стиль/одежда, андеграунд-эстетика |
| **Dj ENDE** | Диджей | Стиль/одежда, интерактив, сторис |
| **shawty** | Диджей | Стиль/одежда (женский взгляд), плейлисты, рекапы |
| **menyai** | Диджей | Закулисье, репетиции, органика |
| **EQUICUE** (ex-TEMP4D) | Диджей | Рилс, процесс создания, видео |

### Исключения
- **DJ CAIMAN** — недоступен до конца августа, НЕ включать в контент-план
- **Dan1** — не участвует в создании контента, НЕ включать в контент-план

### Правила генерации контент-плана
1. 1 пост в день. Максимум 2 — только если один из них анонс ивента (тизер, утро ивента, рекап)
2. Не дублировать посты из Telegram (@I0_12_djs)
3. Учитывать предстоящие события для промо (читать `src/lib/events.ts`)
4. Распределять между 9 доступными диджеями (не 11!)
5. Стиль: молодёжный, неформальный, но интеллектуальный — соответствует миссии
6. Музыкальный контент → Febb Tufoe / DeadRipple
7. Стиль/одежда → DeadRipple / Dj ENDE / shawty
8. Афиши/ивенты → fckngd1
9. Не менее 1 поста в неделю про школу андеграунда

### Порядок работы с контент-планом
1. **ПРОЧИТАТЬ** существующий план из Google Sheets перед генерацией
2. **НЕ перезаписывать** и **НЕ удалять** уже существующие посты
3. Добавлять новые посты **ТОЛЬКО на пустые дни** (где ещё нет записи)
4. Для **ПОЛНОЙ перезаписи** плана на следующую неделю — только по отдельной команде пользователя
5. Всегда ориентироваться на уже существующий порядок диджеев в плане (пользователь может менять роли)

### Правила работы с Google Sheets
- **НЕ перезаписывать первые 2 строки** в BRAINSTORM (заголовок + подзаголовок заполняет пользователь)
- Данные начинать с третьей строки

### Ротация диджеев
1. **Минимальный интервал** между постами одного диджея — **7 дней** (чтобы не уставали и была текучка)
2. **Исключение: fckngd1** — может делать **до 2 постов в неделю**, но с интервалом минимум 2-3 дня
3. **После поста-афиши от fckngd1** — отдых минимум 2 дня (если нет новой афиши)
4. **Цель** — каждый диджей «светится» примерно раз в неделю, разные голоса

### Цели контент-плана
- Привлечь новую аудиторию + учеников в школу диджеинга
- Воронка: **Контент → Аудитория → Школа → Команда** (когда дозреют)
- Команда не набирает новых диджеев просто так — долго репетируют, доказывают, потом решение команды

### Agent 3: Innovator (Инноватор/Скаут)
- **Роль:** Генерация креативных идей для PR, рейвов и школы андеграунда
- **Анализ:** Telegram каналы (@chirik_chiric, @dancewithus и др.), тренды рынка мероприятий
- **Направления:** Все направления школы (тату, танцы, фитнес, диджеинг, написание музыки)
- **Бюджет:** до 50к на ивент, 20-30к на рекламу
- **Инструменты:** webfetch (парсинг каналов), read/write/edit (запись идей)
- **Стиль:** Молодёжный, андеграунд, соответствует миссии 10/12

### Agent 4: Critic (Критик/Аналитик)
- **Роль:** Критика идей innovator с аргументами, цифрами, данными
- **Данные:** Те же тренды + бюджетные ограничения + конкуренция
- **Бюджет:** до 50к на ивент, 20-30к на рекламу
- **Инструменты:** webfetch, read (только чтение, без записи)
- **Стиль:** Аргументированный, с конкретными цифрами, варьирует жёсткость

### Оркестрация дебатов
Build agent выступает оркестратором между innovator и critic:
1. Innovator генерирует идеи
2. Critic критикует с данными
3. Innovator дорабатывает с учётом критики
4. Critic даёт финальный вердикт
5. Build показывает пользователю консенсус
## Rave Poster Processing Script
- **Script:** `scripts/process-poster-rave.js`
- **Usage:** `node scripts/process-poster-rave.js` (edit INPUT/OUTPUT paths inside)
- **Style:** Рейв-андеграунд с защитой текста
- **Эффекты:**
  - Chromatic aberration (glitch) — offset 0.3% ширины, opacity 0.2
  - Модуляция — saturation 1.15, brightness 1.01
  - Зерно (grain) — blur 2, linear 1.05/-0.02, overlay 15%
  - Виньетка — radialGradient, opacity 0.25 multiply
  - Sharpen — sigma 0.3
- **Маска (защита текста):** SVG `dest-in` с multi-stop gradient:
  - 0-30%: эффекты (прозрачный)
  - 38-48%: логотип (original 45%)
  - 65-85%: переход
  - 85-100%: сайт внизу (original 55%)
- **Зависимости:** sharp (`npm install sharp`)

## SOUNDMATCH — музыкальная память (игра, 12.08.2026)
- **Что:** интерактивная игра в разделе «тесты и игры» (/quiz). Суть: открываешь карты и ищешь ПАРЫ ПО ЖАНРУ на слух (разные треки, один жанр). Без подписей жанров на картах — угадываешь на слух.
- **Жанры (6, по 2 разных трека = 12 карт):** techno, breakbeat, dnb, house, hardtek, jungle.
- **Правила (как просил пользователь):**
  - Одновременно открыта только ОДНА карта. Открыл новую → старая сразу закрывается и её звук гаснет (звуки не накладываются).
  - Карта авто-закрывается и замолкает, когда сниппет доиграл (~5с).
  - Совпал жанр → всплывает красная надпись жанра, ОБЕ карты остаются открытыми (matched) и не закрываются; звук с первой уходит, вторая доигрывает.
  - Несовпал → вторая карта остаётся открытой как новая «базовая» (не закрывается автоматически).
- **Файлы:**
  - `src/components/SoundMatch.tsx` — клиентский компонент (весь стейт/логика на React, `new Audio()` на каждый клик, `ended` → авто-закрытие).
  - `src/app/quiz/soundmatch/page.tsx` — страница-обёртка (шапка `← ВСЕ ТЕСТЫ`, заголовок SOUNDMATCH).
  - `src/app/quiz/page.tsx` — карточка `03 · SOUNDMATCH` в хабе /quiz.
  - `public/quiz/soundmatch/*.m4a` — 12 аудио-сниппетов (имена `<genre>_0.m4a` / `<genre>_1.m4a`, genre = techno/breakbeat/dnb/house/hardtek/jungle).
  - `src/app/globals.css` — стили `.sm-*`: сетка, 3D-переворот `.sm-flipped .sm-inner`, рубашка/фронт, эквалайзер `.sm-eq`, тост `.sm-toast`. Используют токены сайта (`--color-accent` #ff4242, `--color-card` #0a0a0a, шрифт Tektur).
- **Аудио (важно):** AAC `.m4a`, mono, 22050 Гц, 64 kbps, ровно 5с, ~42–48 КБ каждый. Лёгкие специально, чтобы грузились мгновенно.
- **Прототип (не用于 сайта):** `C:\Users\aloms\Videos\video-work\soundmatch\` — отдельная standalone-версия (index.html/style.css/game.js/data.js + audio/) и `build_audio.py`, которым нарезались сниппеты из библиотеки `C:\Users\aloms\OneDrive\Рабочий стол\TRAKTOR\`.

### GOTCHAS (сохранено, чтобы не наступать снова)
- **ffmpeg на этой машине ИГНОРИРУЕТ `-b:a` для mp3 И opus** на части треков (отдаёт ~200 kbps вместо 64, несмотря на `-ac 1 -ar 22050 -b:a 64k` и даже `-q:a 9`). Поэтому аудио игры — **.m4a (AAC)**, а не mp3: `ffmpeg -i in.mp3 -t 5 -ac 1 -ar 22050 -c:a aac -b:a 64k out.m4a` → работает корректно (~45 КБ). Браузеры играют m4a/AAC везде.
- **`pkill -f 'next build'` УБИВАЕТ СОБСТВЕННУЮ SSH-ОБОЛОЧКУ** (её командная строка содержит «next build») → сборка никогда не стартует, а `rm -rf .next` может оставить сайт без билда. НЕ использовать этот паттерн в деплой-команде. Запускать сборку через `nohup npm run build > /tmp/build.log 2>&1 &` и полировать лог отдельным SSH.
- **`next.config.ts`: ключ `eslint` НЕВАЛИДЕН в Next.js 16** (тип `NextConfig` его не содержит → build падает с Type error). Не добавлять `eslint.ignoreDuringBuilds` — в Next 16 ESLint при сборке и так не гоняется, старые lint-ошибки в репозитории сборку не ломают.
- **Next.js 16 / React 19 / Tailwind 4.** Файлы из `public/` отдаются в рантайме — для ПРАВКИ ТОЛЬКО ассетов достаточно `git pull` на VPS (ребилд не нужен); для изменений в `src/` нужен `npm run build` + `pm2 restart site`.
- **Деплой:** `cd /var/site && git pull && (nohup npm run build > /tmp/build.log 2>&1 &)` → дождаться «✓ Compiled» и маршрута `/quiz/soundmatch` в логе → `pm2 restart site`. VPS сборка может висеть по RAM (есть zram-своп ~478M); при OOM на финализации — перезагрузка через FirstVDS панель.
<!-- END:session-context -->
