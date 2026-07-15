import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "10/12DJ'S",
};

const directions = [
  {
    slug: "djing",
    title: "ДИДЖЕИНГ",
    desc: "ЭТО ТУСОВКА, А НЕ ШКОЛА. МЫ НЕ СИДИМ В КЛАССАХ — УЧИМСЯ В ЛОФТАХ, БАРАХ И КЛУБАХ. С ПЕРВОГО ЗАНЯТИЯ ТЫ ЗА ПУЛЬТОМ, А НЕ В ТЕТРАДКЕ.",
    tags: ["ТУСОВКА", "ПРАКТИКА", "КЛУБЫ"],
    image: "/school-djing.jpg",
    price: "2 500 ₽/ЗАНЯТИЕ",
    priceNote: "НИКАКИХ КУРСОВ НА ПОЛГОДА. ПЛАТИШЬ ТОЛЬКО ЗА ТО, ЧТО ПРИШЁЛ",
    duration: "~10 ЗАНЯТИЙ — И ТЫ ИГРАЕШЬ В КЛУБЕ",
    details: [
      "НЕ ШКОЛА, А ТУСОВКА: 10/12 — ЭТО КОМАНДА ДЕЙСТВУЮЩИХ ДИДЖЕЕВ, КОТОРЫЕ ТУСУЮТСЯ, ИГРАЮТ И УЧАТ ТЕБЯ ТОМУ ЖЕ. НИКАКИХ ПРЕПОДАВАТЕЛЕЙ В ПИДЖАКАХ.",
      "СРАЗУ ЗА ПУЛЬТОМ: ЗАБУДЬ ПРО ТЕОРИЮ И ЛЕКЦИИ. ПЕРВОЕ ЗАНЯТИЕ — ТЫ УЖЕ КРУТИШЬ ТРЕКИ НАСТОЯЩЕЙ АППАРАТУРЕ.",
      "ПОЛЕВЫЕ УСЛОВИЯ: УЧИМСЯ ТАМ, ГДЕ БУДЕШЬ ИГРАТЬ — В ЛОФТАХ, БАРАХ, КЛУБАХ. РАЗНАЯ АППАРАТУРА, ЖИВОЙ ЗВУК, НАСТОЯЩАЯ АТМОСФЕРА.",
      "БЕЗ СТРАХА: 2 500₽ ЗА ЗАНЯТИЕ. НЕ НУЖНО ПЛАТИТЬ 50 000 ЗА КУРС, КОТОРЫЙ МОЖЕТ НЕ ЗАЙТИ. ПРИШЁЛ, ПОПРОБОВАЛ, ПОНЯЛ — ТВОЁ ИЛИ НЕТ.",
      "ГАРАНТИРОВАННЫЙ ВЫХОД В КЛУБ: ПОСЛЕ ОБУЧЕНИЯ ТЫ ИГРАЕШЬ СВОЙ ПЕРВЫЙ СЕТ. НЕ «ВОЗМОЖНО», А ГАРАНТИРОВАННО. ЭТО ЧАСТЬ ПРОГРАММЫ.",
    ],
    cta: "ХОЧЕШЬ ЗА ПУЛЬТ УЖЕ ЗАВТРА? ПИШИ",
  },
  {
    slug: "music-production",
    title: "НАПИСАНИЕ МУЗЫКИ",
    desc: "СОЗДАНИЕ ТРЕКОВ В ABLETON / FL STUDIO. ТЕОРИЯ МУЗЫКИ, СИНТЕЗ, АРРАНЖИРОВКА.",
    tags: ["ABLETON", "FL STUDIO", "АРРАНЖИРОВКА"],
    image: "/school-music.jpg",
    price: "",
    priceNote: "",
    duration: "",
    details: ["ПОДРОБНОСТИ И ЦЕНЫ УТОЧНЯЙ В ЛИЧКЕ"],
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
  {
    slug: "street-art",
    title: "СТРИТ-АРТ",
    desc: "ГРАФФИТИ, ТРАФАРЕТЫ, МУРАЛЫ. ИСТОРИЯ УЛИЧНОГО ИСКУССТВА И ПРАКТИКА.",
    tags: ["ГРАФФИТИ", "ТРАФАРЕТЫ", "МУРАЛЫ"],
    image: "/school-streetart.jpg",
    price: "",
    priceNote: "",
    duration: "",
    details: ["ПОДРОБНОСТИ И ЦЕНЫ УТОЧНЯЙ В ЛИЧКЕ"],
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
  {
    slug: "tattoo",
    title: "ТАТУ",
    desc: "ОСНОВЫ ТАТУИРОВКИ: БЕЗОПАСНОСТЬ, СТИЛИ, ПОСТРОЕНИЕ ЭСКИЗОВ, ПРАКТИКА НА НАКЛАДНЫХ.",
    tags: ["БЕЗОПАСНОСТЬ", "ЭСКИЗЫ", "ПРАКТИКА"],
    image: "/school-tattoo.jpg",
    price: "",
    priceNote: "",
    duration: "",
    details: ["ПОДРОБНОСТИ И ЦЕНЫ УТОЧНЯЙ В ЛИЧКЕ"],
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
  {
    slug: "techno-fitness",
    title: "ТЕХНО-ФИТНЕС",
    desc: "ТРЕНИРОВКИ ПОД ЭЛЕКТРОННУЮ МУЗЫКУ. ВЫНОСЛИВОСТЬ, СИЛА, РИТМ.",
    tags: ["ВЫНОСЛИВОСТЬ", "СИЛА", "РИТМ"],
    image: "/school-techfit.jpg",
    price: "",
    priceNote: "",
    duration: "",
    details: ["ПОДРОБНОСТИ И ЦЕНЫ УТОЧНЯЙ В ЛИЧКЕ"],
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
  {
    slug: "film-club",
    title: "КИНО-КЛУБ",
    desc: "ПРОСМОТРЫ И ОБСУЖДЕНИЯ ДОКУМЕНТАЛЬНЫХ ФИЛЬМОВ О МУЗЫКЕ И КУЛЬТУРЕ.",
    tags: ["ДОКУМЕНТАЛЬНОЕ", "МУЗЫКА", "КУЛЬТУРА"],
    image: "/school-filmclub.jpg",
    price: "",
    priceNote: "",
    duration: "",
    details: ["ПОДРОБНОСТИ И ЦЕНЫ УТОЧНЯЙ В ЛИЧКЕ"],
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
];

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export default function SchoolDirection({ params }: { params: { slug: string } }) {
  const dir = directions.find((d) => d.slug === params.slug);
  if (!dir) notFound();

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-24">
      <Link
        href="/school"
        className="mb-8 inline-block border border-border/40 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
      >
        ← НАЗАД К ШКОЛЕ
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          {dir.image ? (
            <div className="aspect-[3/4] border border-accent/10 bg-card/80">
              <Image src={dir.image} alt={dir.title} width={400} height={533} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex aspect-[3/4] items-center justify-center border border-accent/10 bg-card/80">
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted/40">ФОТО СКОРО</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent/60">НАПРАВЛЕНИЕ</span>
          <h1 className="mt-2 text-4xl font-black tracking-tighter sm:text-5xl">{dir.title}</h1>
          <div className="mt-3 h-1 w-16 bg-accent" />
          <p className="mt-6 text-xs font-semibold leading-relaxed tracking-wider text-muted">{dir.desc}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {dir.tags.map((tag) => (
              <span key={tag} className="border border-accent/20 px-2 py-1 text-[8px] font-bold tracking-[0.15em] text-accent/70">
                {tag}
              </span>
            ))}
          </div>

          {dir.price && (
            <div className="mt-8 border border-accent/20 bg-card/50 p-6">
              <div className="text-3xl font-black tracking-tighter text-accent">{dir.price}</div>
              {dir.priceNote && (
                <p className="mt-1 text-[9px] font-semibold tracking-wider text-muted">{dir.priceNote}</p>
              )}
              {dir.duration && (
                <p className="mt-3 text-[10px] font-bold tracking-wider text-accent/80">{dir.duration}</p>
              )}
            </div>
          )}

          <ul className="mt-6 space-y-3">
            {dir.details.map((detail, i) => (
              <li key={i} className="flex gap-3 text-[10px] font-semibold leading-relaxed tracking-wider text-muted">
                <span className="mt-0.5 text-accent/60">▶</span>
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-accent/20 pt-8">
            <p className="text-xs font-bold tracking-wider">{dir.cta}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="https://t.me/fuckengod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-accent bg-accent px-8 py-3 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
              >
                ЗАПИСАТЬСЯ В TG →
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-border/40 px-8 py-3 text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
              >
                ИЛИ ЧЕРЕЗ ФОРМУ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
