export type EventLink = {
  label: string;
  url: string;
};

export type EventTag = string;

export type EventArtist = {
  name: string;
  url?: string;
};

export type EventItem = {
  id: string;
  title: string;
  dateLabel: string;
  dateStart: Date;
  dateEnd?: Date;
  poster: string;
  posterAlt: string;
  posterWidth: number;
  posterHeight: number;
  venue?: string;
  location?: string;
  time?: string;
  description?: string;
  descriptionLong?: string[];
  tags?: EventTag[];
  artists?: EventArtist[];
  isFree?: boolean;
  links?: EventLink[];
};

const events: EventItem[] = [
  {
    id: "last-resort",
    title: "LAST RESORT",
    dateLabel: "10 ИЮЛЯ",
    dateStart: new Date("2026-07-10"),
    poster: "/poster-last-resort.webp",
    posterAlt: "LAST RESORT",
    posterWidth: 1024,
    posterHeight: 1280,
    venue: "SECOND STAGE",
    descriptionLong: [
      'НОВЫЙ УЧАСТНИК 10/12 — OLEG aka MRFLESH С ЛАЙВ-ПЕРФОМАНСОМ.',
      'НА WITCH HOUSE СЦЕНЕ — DEADRIPPLE С ТЁМНОЙ СТОРОНОЙ ЗВУЧАНИЯ.',
      'ГОСТЬ ВЕЧЕРА — ESENTRICA (HIP-HOP / ELECTRO / TECHNO / DUBSTEP).',
    ],
    tags: ["WITCH HOUSE", "ELECTRO-PUNK", "BREAKBEAT"],
    artists: [
      { name: "MRFLESH", url: "https://t.me/mrfleesh" },
      { name: "DEADRIPPLE", url: "https://t.me/urtears" },
      { name: "ESENTRICA", url: "https://t.me/Esentrica" },
    ],
    links: [{ label: "БИЛЕТЫ", url: "https://spb.qtickets.events/240656-last-resort" }],
  },
  {
    id: "dj-ende",
    title: "DJ ENDE",
    dateLabel: "10 ИЮЛЯ",
    dateStart: new Date("2026-07-10"),
    poster: "/dizengof-poster.jpg",
    posterAlt: "DJ ENDE В DIZENGOF/99",
    posterWidth: 1024,
    posterHeight: 1280,
    venue: "DIZENGOF/99",
    location: "БАСКОВ ПЕР. 31, СПБ",
    time: "19:30",
    tags: ["TECH HOUSE", "ACID HOUSE"],
    isFree: true,
  },
  {
    id: "wake-park-krugi-11",
    title: "ВЕЙК-ПАРК «КРУГИ НА ВОДЕ»",
    dateLabel: "11 ИЮЛЯ",
    dateStart: new Date("2026-07-11"),
    poster: "/poster-krugi.png",
    posterAlt: "ВЕЙК-ПАРК КРУГИ НА ВОДЕ",
    posterWidth: 1536,
    posterHeight: 1920,
    location: "РЖЕВСКАЯ УЛ. 2, ЛИТЕРА А, СПБ",
    time: "18:00–23:00",
    tags: ["LIVE DJ SET", "HOUSE"],
    artists: [
      { name: "DEADRIPPLE" },
      { name: "MrFlesh" },
    ],
  },
  {
    id: "wake-park-krugi-18",
    title: "ВЕЙК-ПАРК «КРУГИ НА ВОДЕ»",
    dateLabel: "18 ИЮЛЯ",
    dateStart: new Date("2026-07-18"),
    poster: "/poster-krugi-18.png",
    posterAlt: "ВЕЙК-ПАРК КРУГИ НА ВОДЕ — 18 ИЮЛЯ",
    posterWidth: 1080,
    posterHeight: 1350,
    location: "РЖЕВСКАЯ УЛ. 2, ЛИТЕРА А, СПБ",
    time: "17:00–23:00",
    descriptionLong: [
      "FCKNGD1 И DJ ENDE — LIVE DJ SET НА ВОДЕ.",
      "ХАУС МУЗЫКА С 17:00 ДО ЗАКАТА.",
    ],
    tags: ["LIVE DJ SET", "HOUSE", "TECH HOUSE"],
    artists: [
      { name: "fckngd1" },
      { name: "DJ ENDE" },
    ],
    isFree: true,
  },
  {
    id: "dj-ende-dizengof-24",
    title: "DJ ENDE",
    dateLabel: "24 ИЮЛЯ",
    dateStart: new Date("2026-07-24"),
    poster: "/poster-dj-ende-24.jpg",
    posterAlt: "DJ ENDE В DIZENGOF/99",
    posterWidth: 1024,
    posterHeight: 1280,
    venue: "DIZENGOF/99",
    location: "БАСКОВ ПЕР. 31, СПБ",
    time: "19:30",
    tags: ["TECH HOUSE", "ACID HOUSE"],
    isFree: true,
  },
  {
    id: "lupus-preparty",
    title: "LUPUS FEST PRE-PARTY",
    dateLabel: "25 ИЮЛЯ",
    dateStart: new Date("2026-07-25"),
    poster: "/poster-lupus-preparty.png",
    posterAlt: "LUPUS FEST PRE-PARTY",
    posterWidth: 1536,
    posterHeight: 1920,
    venue: "DEPECHE MODE BAR",
    location: "ПЕР ГРИВЦОВА 2, СПБ",
    time: "19:00",
    description: "ПОГРУЖЕНИЕ В АТМОСФЕРУ ФЕСТИВАЛЯ. ВХОД СВОБОДНЫЙ.",
    tags: ["LIVE", "COMMUNITY"],
    isFree: true,
  },
  {
    id: "local-rave",
    title: "LOCAL RAVE",
    dateLabel: "1 АВГУСТА",
    dateStart: new Date("2026-08-01"),
    poster: "/poster-local-rave.png",
    posterAlt: "LOCAL RAVE",
    posterWidth: 2245,
    posterHeight: 3179,
    venue: "ПТИЧЬЯ ЛИЧНОСТЬ",
    location: "РУБИНШТЕЙНА 28Д, СПБ",
    time: "21:00",
    description: "БИЛЕТ 490₽ · ВЕЛКОМ ДРИНК · 18+",
    tags: ["TECHNO", "DETROIT TECHNO", "DUTCH HOUSE", "ELECTRO", "DUB TECHNO", "DOWNTEMPO", "TRANCE"],
    artists: [
      { name: "FCKNGD1" },
      { name: "SHAWTY" },
      { name: "MRFLESH" },
      { name: "FEBB TUFOE" },
      { name: "JELLYFISH" },
      { name: "TEMP4D" },
    ],
    isFree: false,
    links: [{ label: "БИЛЕТЫ", url: "https://spb.qtickets.events/246821-local-rave-108-ptichya-lichnost" }],
  },
  {
    id: "lupus-fest-2026",
    title: "ЛЮПУС-ФЕСТ 2026",
    dateLabel: "7–9 АВГУСТА",
    dateStart: new Date("2026-08-07"),
    dateEnd: new Date("2026-08-09"),
    poster: "/upcoming-lupus-fest.jpg",
    posterAlt: "ЛЮПУС-ФЕСТ 2026",
    posterWidth: 1080,
    posterHeight: 1350,
    venue: "ЛЕНИНГРАДСКАЯ ОБЛАСТЬ",
    descriptionLong: [
      "ФЕСТИВАЛЬ О ТВОРЧЕСТВЕ, О СВОБОДЕ, О ВОЗМОЖНОСТЯХ И О МУЗЫКЕ.",
      "О ТОМ, ЧТО МОЖЕТ СДЕЛАТЬ КАЖДЫЙ ИЗ ВАС, СТАВ ЧАСТЬЮ ЧЕГО-ТО БОЛЬШЕГО.",
    ],
    tags: ["ФЕСТИВАЛЬ", "ТВОРЧЕСТВО", "МУЗЫКА"],
  },
  {
    id: "iddqd-rave",
    title: "IDDQD RAVE",
    dateLabel: "4 ИЮЛЯ",
    dateStart: new Date("2026-07-04"),
    poster: "/past-iddqd-rave.png",
    posterAlt: "IDDQD RAVE",
    posterWidth: 600,
    posterHeight: 800,
    description: "РЕЙВ В ЧЕСТЬ ДНЯ НЕЗАВИСИМОСТИ",
    tags: ["HARDSTYLE", "RAWSTYLE", "HARDCORE"],
  },
  {
    id: "zion-underground",
    title: "ZION UNDERGROUND",
    dateLabel: "20 ИЮНЯ",
    dateStart: new Date("2026-06-20"),
    poster: "/past-zion-underground.jpg",
    posterAlt: "ZION UNDERGROUND",
    posterWidth: 600,
    posterHeight: 800,
    venue: "FACTORY 3 — HIGH STREET FASHION SHOW",
    description: "МОДНЫЙ ПОКАЗ И СПОНСОРЫ СТИЛЯ",
    tags: ["URBANATOR", "FREAK BUTIK", "СОФИЯ МЕДВЕДЕВА"],
    artists: [
      { name: "AVIAMOTOR", url: "https://t.me/aviamotorrrnaya" },
      { name: "HAKKENATION", url: "https://t.me/HakkeNation" },
    ],
    links: [
      { label: "URBANATOR", url: "https://www.instagram.com/official.urbanator/" },
      { label: "FREAK BUTIK", url: "https://www.instagram.com/freakbutik_spb/" },
      { label: "СОФИЯ МЕДВЕДЕВА", url: "https://www.instagram.com/sofia.mdvedva?igsh=eHZtNGMxaHlpdnpp" },
    ],
  },
  {
    id: "wake-park-krugi-06",
    title: "ВЕЙК-ПАРК «КРУГИ НА ВОДЕ»",
    dateLabel: "13 ИЮНЯ",
    dateStart: new Date("2026-06-13"),
    poster: "/past-wake-krugi.jpg",
    posterAlt: "ВЕЙК-ПАРК КРУГИ НА ВОДЕ",
    posterWidth: 600,
    posterHeight: 800,
    description: "ВЕЙКБОРДИНГ И МУЗЫКА — СПОРТ И БИТЫ НА ВОДЕ",
    tags: ["D&B", "TECHNO", "HOUSE"],
  },
  {
    id: "monohrom-reiv",
    title: "МОНОХРОМ РЕЙВ",
    dateLabel: "6 ИЮНЯ",
    dateStart: new Date("2026-06-06"),
    poster: "/past-monohrom-reiv.jpg",
    posterAlt: "МОНОХРОМ РЕЙВ",
    posterWidth: 600,
    posterHeight: 800,
    description: "ЧЁРНО-БЕЛЫЙ РЕЙВ — МИНИМАЛИЗМ В КАЖДОМ БИТЕ",
    tags: ["MINIMAL", "INDUSTRIAL", "TECHNO"],
  },
  {
    id: "sovetskiy-reiv",
    title: "СОВЕТСКИЙ РЕЙВ",
    dateLabel: "1 МАЯ",
    dateStart: new Date("2026-05-01"),
    poster: "/past-sovetskiy-reiv.jpg",
    posterAlt: "СОВЕТСКИЙ РЕЙВ",
    posterWidth: 600,
    posterHeight: 800,
    description: "НОУСТАЛЬГИЯ ПО СССР В БИТАХ И БАСАХ",
    tags: ["HARD BASS", "INDUSTRIAL", "ELECTRO"],
  },
  {
    id: "vesna-solnce-reiv",
    title: "ВЕСНА. СОЛНЦЕ. РЕЙВ.",
    dateLabel: "3 АПРЕЛЯ",
    dateStart: new Date("2026-04-03"),
    poster: "/past-vesna-solnce-reiv.jpg",
    posterAlt: "ВЕСНА. СОЛНЦЕ. РЕЙВ.",
    posterWidth: 600,
    posterHeight: 800,
    description: "ВСТРЕЧАЕМ ВЕСНУ НА ТАНЦПОЛЕ",
    tags: ["HOUSE", "DISCO", "TECHNO"],
  },
  {
    id: "tvoy-perviy-reiv",
    title: "ТВОЙ ПЕРВЫЙ РЕЙВ",
    dateLabel: "31 ЯНВАРЯ",
    dateStart: new Date("2026-01-31"),
    poster: "/past-tvoy-perviy-reiv.jpg",
    posterAlt: "ТВОЙ ПЕРВЫЙ РЕЙВ",
    posterWidth: 600,
    posterHeight: 800,
    description: "ДЕБЮТНЫЙ РЕЙВ — НАЧНИ СВОЙ ПУТЬ В МУЗЫКЕ",
    tags: ["TECHNO", "HOUSE", "D&B"],
  },
];

export function getUpcomingEvents(): EventItem[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return events
    .filter((e) => (e.dateEnd ?? e.dateStart) >= now)
    .sort((a, b) => a.dateStart.getTime() - b.dateStart.getTime());
}

export function getPastEvents(): EventItem[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return events
    .filter((e) => (e.dateEnd ?? e.dateStart) < now)
    .sort((a, b) => b.dateStart.getTime() - a.dateStart.getTime());
}

export function getUpcomingEventsLimited(limit: number = 3): EventItem[] {
  return getUpcomingEvents().slice(0, limit);
}

export default events;
