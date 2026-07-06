import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "О НАС | 10/12DJ'S",
};

const artists = [
  {
    nick: "FCKNGD1",
    role: "ОСНОВАТЕЛЬ, МУЛЬТИЖАНР",
    bio: "DRUM&BASS, JUNGLE, TECHNO, BREAKS, ELECTROPUNK И НЕ ТОЛЬКО. ЗА ПУЛЬТОМ С 2015. ОСНОВАТЕЛЬ 10/12DJ'S.",
    photo: "/artists/fckngd1.jpg",
  },
  {
    nick: "XONIAD",
    role: "ХАРДКОРЩИК, МУЛЬТИЖАНР",
    bio: "ОТ ТЕХНО ДО ДЖАНГЛА, ХАРДКОР И ГАББА. МАСТЕР ПЕРЕХОДОВ И АТМОСФЕРНЫХ СЕТОВ.",
    photo: "/artists/xoniad.jpg",
  },
  {
    nick: "MENYAI",
    role: "ДИДЖЕЙ, МУЛЬТИЖАНР",
    bio: "ИГРАЕТ ВСЁ — ОТ ТЕХНО ДО ДЖАНГЛА. УНИВЕРСАЛЬНЫЙ БОЕЦ ТАНЦПОЛА.",
    photo: "/artists/menyai.jpg",
  },
  {
    nick: "DJ CAIMAN",
    role: "ДИДЖЕЙ, DRUM&BASS / TECHNO / HOUSE",
    bio: "ДРАМ-Н-БЕЙС, ТЕХНО И ХАУС В ОДНОМ СЕТЕ. МАСТЕР ЖАНРОВЫХ ПЕРЕХОДОВ.",
    photo: "/artists/caiman.jpg",
  },
  {
    nick: "SHAWTY",
    role: "ДИДЖЕЙ, TEK-HOUSE / DRUM&BASS",
    bio: "ИГРАЕТ ТЕК-ХАУС И ДРАМ-Н-БЕЙС. ДРАЙВ И ЭНЕРГИЯ КАЖДЫЙ СЕТ.",
    photo: "/artists/shawty.jpg",
  },
  {
    nick: "DJ ENDE",
    role: "ДИДЖЕЙ, ОТ ЛЁГКОГО ХАУСА ДО ДРАМ-Н-БЕЙСА",
    bio: "ИГРАЕТ ОТ ЛЁГКОГО ХАУСА ДО ДРАМ-Н-БЕЙСА И ЭКСПЕРИМЕНТАЛЬНЫХ ЖАНРОВ. УНИВЕРСАЛЬНОСТЬ И ЧУВСТВО СТИЛЯ.",
    photo: "/artists/djende.jpg",
  },
  {
    nick: "DEAD RIPPLE",
    role: "ХАРД-ТЕХНО ДИДЖЕЙ",
    bio: "ХАРД-ТЕХНО И БЕЗУПРЕЧНЫЙ СТИЛЬ. ТЯЖЁЛЫЙ КИК И ТЁМНАЯ АТМОСФЕРА — ЕГО ВИЗИТНАЯ КАРТОЧКА.",
    photo: "/artists/deadripple.jpg",
  },
  {
    nick: "FEBB TUFOE",
    role: "ДИДЖЕЙ И ПРОДЮСЕР, BASS HOUSE / UK GARAGE",
    bio: "ПИШЕТ МУЗЫКУ В СТИЛЯХ БАСХАУС И ЮКЕЙ ГАРАЖ. МАСТЕР ТЯЖЁЛОГО БАСА И ГРУВА.",
    photo: "/artists/febbtufoe.jpg",
  },
  {
    nick: "DAN1",
    role: "МУЗЫКАЛЬНЫЙ ПРОДЮСЕР, ЭМБИЕНТ",
    bio: "СОЗДАЁТ АТМОСФЕРНЫЕ ЭМБИЕНТ-КОМПОЗИЦИИ. ЕДИНСТВЕННЫЙ НЕ ДИДЖЕЙ В КОМАНДЕ, НО ВАЖНЕЙШАЯ ЧАСТЬ ЗВУЧАНИЯ.",
    photo: "/artists/dan1.jpg",
  },
];

export default function About() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag" style={{ top: '-8%', right: '-5%', rotate: '8deg' }}>CREW</span>
      <span className="graffiti-tag-light" style={{ bottom: '30%', left: '-10%', rotate: '-15deg', animationDelay: '-4s' }}>FAMILY</span>
      <span className="graffiti-tag-solid" style={{ top: '20%', right: '-15%', rotate: '20deg' }}>DJS</span>

      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">О НАС</span>
      </h1>
      <div className="mt-2 h-1 w-20 bg-accent" />
      <p className="mt-8 max-w-3xl text-xs font-semibold leading-relaxed tracking-wider text-muted/80 sm:text-sm">
        10/12DJ&apos;S — КОМАНДА, РОДИВШАЯСЯ ИЗ ЛЮБВИ К ЭЛЕКТРОННОЙ МУЗЫКЕ.
        МЫ ОБЪЕДИНИЛИСЬ, ЧТОБЫ СОЗДАВАТЬ УНИКАЛЬНЫЕ МУЗЫКАЛЬНЫЕ ВПЕЧАТЛЕНИЯ.
        КАЖДЫЙ НАШ СЕТ — ЭТО ИСТОРИЯ, РАССКАЗАННАЯ ЯЗЫКОМ РИТМА И МЕЛОДИИ.
      </p>

      <div className="mt-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● АРТИСТЫ</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">СОСТАВ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
      </div>

      <div className="mt-10 grid gap-8">
        {artists.map((a) => (
          <div
            key={a.nick}
            className="group grid gap-8 border border-border/20 bg-card p-6 transition-all hover:border-accent/30 sm:grid-cols-[200px_1fr] sm:p-10"
          >
            <div className="relative aspect-square overflow-hidden border-2 border-accent/20">
              <Image
                src={a.photo}
                alt={a.nick}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-black tracking-tighter transition-colors group-hover:text-accent">
                  {a.nick}
                </h3>
              </div>
              <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-accent/80">
                {a.role}
              </p>
              <div className="mt-4 h-px w-12 bg-accent/50" />
              <p className="mt-4 text-xs font-semibold leading-relaxed tracking-wider text-muted/80">
                {a.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 border-t-2 border-accent/20 pt-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent">⏣ МАНИФЕСТ</span>
        <h2 className="mt-4 text-4xl font-black tracking-tighter">
          ПЕРЕОПРЕДЕЛЕНИЕ ГРАНИЦ<br />
          <span className="gradient-text">АНДЕГРАУНД СЦЕНЫ</span>
        </h2>
        <div className="mt-4 h-1 w-16 bg-accent" />
        <div className="mt-8 max-w-4xl space-y-4 text-xs font-semibold leading-relaxed tracking-wider text-muted/80 sm:text-sm">
          <p>
            МЫ ХОТИМ ИГРАТЬ МУЗЫКУ НЕ ДЛЯ НАРКОМАНОВ.
            МЫ ХОТИМ ПРИВЛЕЧЬ НОВУЮ АУДИТОРИЮ, ПОКАЗАТЬ, ЧТО АНДЕГРАУНД —
            ЭТО НЕ СТЕРЕОТИПЫ, А ТВОРЧЕСТВО И КРАСОТА, ИНТЕЛЛЕКТ И УТОНЧЁННОСТЬ.
          </p>
          <p>
            МЫ ПОКАЖЕМ ТУ СТОРОНУ АНДЕГРАУНДА, КОТОРАЯ ЕСТЬ В КАЖДОМ ИЗ НАС.
            НИКАКОГО РАЗЛОЖЕНИЯ ЛИЧНОСТИ — НАОБОРОТ: САМОРАЗВИТИЕ, УВАЖЕНИЕ И СВОБОДА —
            ВОТ КАКИМ МЫ ВИДИМ АНДЕГРАУНД И ЭТИМ ХОТИМ ДЕЛИТЬСЯ.
          </p>
          <p className="pt-2 text-xs tracking-[0.3em] text-accent">
            АМИНЬ. ВСЕМ АНДЕГРАУНД!
          </p>
        </div>
      </div>
    </div>
  );
}
