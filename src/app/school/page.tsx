import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ШКОЛА | 10/12DJ'S",
};

const directions = [
  {
    title: "DJ-ДИНГ",
    desc: "ОБУЧЕНИЕ ДИДЖЕИНГУ С НУЛЯ ДО ПРОФИ. ТЕХНИКА, СВЕДЕНИЕ, СОЗДАНИЕ СЕТОВ.",
    icon: "♪",
  },
  {
    title: "НАПИСАНИЕ МУЗЫКИ",
    desc: "СОЗДАНИЕ ТРЕКОВ В ABLETON / FL STUDIO. ТЕОРИЯ МУЗЫКИ, СИНТЕЗ, АРРАНЖИРОВКА.",
    icon: "♫",
  },
  {
    title: "СТРИТ-АРТ",
    desc: "ГРАФФИТИ, ТРАФАРЕТЫ, МУРАЛЫ. ИСТОРИЯ УЛИЧНОГО ИСКУССТВА И ПРАКТИКА.",
    icon: "✖",
  },
  {
    title: "ТАТУ",
    desc: "ОСНОВЫ ТАТУИРОВКИ: БЕЗОПАСНОСТЬ, СТИЛИ, ПОСТРОЕНИЕ ЭСКИЗОВ, ПРАКТИКА НА НАКЛАДНЫХ.",
    icon: "†",
  },
  {
    title: "ТЕХНО-ФИТНЕС",
    desc: "ТРЕНИРОВКИ ПОД ЭЛЕКТРОННУЮ МУЗЫКУ. ВЫНОСЛИВОСТЬ, СИЛА, РИТМ.",
    icon: "⚡",
  },
  {
    title: "КИНО-КЛУБ",
    desc: "ПРОСМОТРЫ И ОБСУЖДЕНИЯ ДОКУМЕНТАЛЬНЫХ ФИЛЬМОВ О МУЗЫКЕ И КУЛЬТУРЕ.",
    icon: "⊡",
  },
];

export default function School() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-12deg]">LEARN</span>
      <span className="graffiti-tag-light -bottom-20 -right-10 rotate-[8deg]">UNDERGROUND</span>

      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">АНДЕГРАУНД ШКОЛА</span>
      </h1>
      <div className="mt-2 h-1 w-20 bg-accent" />
      <p className="mt-6 max-w-2xl text-xs font-semibold leading-relaxed tracking-wider text-muted">
        10/12DJ&apos;S ЗАПУСКАЕТ ШКОЛУ АНДЕГРАУНДНЫХ НАПРАВЛЕНИЙ.
        ОБУЧЕНИЕ, ПРАКТИКА, СООБЩЕСТВО. МУЗЫКА, ИСКУССТВО, ТЕЛО.
      </p>

      <div className="mt-16 grid gap-3 sm:grid-cols-2">
        {directions.map((d) => (
          <div
            key={d.title}
            className="group border border-border/20 bg-card p-8 transition-all hover:border-accent/40"
          >
            <span className="text-3xl text-accent/60">{d.icon}</span>
            <h3 className="mt-6 text-sm font-bold tracking-wider transition-colors group-hover:text-accent">
              {d.title}
            </h3>
            <div className="mt-3 h-px w-8 bg-accent/50" />
            <p className="mt-4 text-xs font-semibold leading-relaxed tracking-wider text-muted">
              {d.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-accent/20 pt-12 text-center">
        <h2 className="text-xl font-black tracking-tighter">ХОЧЕШЬ УЧАСТВОВАТЬ?</h2>
        <p className="mt-2 text-xs font-semibold tracking-wider text-muted">
          ПИШИ НАМ, РАССКАЖЕМ ПОДРОБНОСТИ
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block border-2 border-accent bg-accent px-10 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
        >
          СВЯЗАТЬСЯ
        </Link>
      </div>
    </div>
  );
}
