import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ШКОЛА | 10/12DJ'S",
};

const directions = [
  {
    title: "ДИДЖЕИНГ",
    desc: "ОБУЧЕНИЕ В ПОЛЕВЫХ УСЛОВИЯХ: ЛОФТЫ, БАРЫ, КЛУБЫ. МИНИМУМ ТЕОРИИ — МАКСИМУМ ПРАКТИКИ. КОМАНДА 10/12 — ТВОЁ НОВОЕ КОМЬЮНИТИ.",
    tags: ["ПРАКТИКА", "КОМАНДА", "КЛУБЫ"],
    image: "/school-djing.jpg",
  },
  {
    title: "НАПИСАНИЕ МУЗЫКИ",
    desc: "СОЗДАНИЕ ТРЕКОВ В ABLETON / FL STUDIO. ТЕОРИЯ МУЗЫКИ, СИНТЕЗ, АРРАНЖИРОВКА.",
    tags: ["ABLETON", "FL STUDIO", "АРРАНЖИРОВКА"],
    image: "/school-music.jpg",
  },
  {
    title: "СТРИТ-АРТ",
    desc: "ГРАФФИТИ, ТРАФАРЕТЫ, МУРАЛЫ. ИСТОРИЯ УЛИЧНОГО ИСКУССТВА И ПРАКТИКА.",
    tags: ["ГРАФФИТИ", "ТРАФАРЕТЫ", "МУРАЛЫ"],
    image: "/school-streetart.jpg",
  },
  {
    title: "ТАТУ",
    desc: "ОСНОВЫ ТАТУИРОВКИ: БЕЗОПАСНОСТЬ, СТИЛИ, ПОСТРОЕНИЕ ЭСКИЗОВ, ПРАКТИКА НА НАКЛАДНЫХ.",
    tags: ["БЕЗОПАСНОСТЬ", "ЭСКИЗЫ", "ПРАКТИКА"],
    image: "/school-tattoo.jpg",
  },
  {
    title: "ТЕХНО-ФИТНЕС",
    desc: "ТРЕНИРОВКИ ПОД ЭЛЕКТРОННУЮ МУЗЫКУ. ВЫНОСЛИВОСТЬ, СИЛА, РИТМ.",
    tags: ["ВЫНОСЛИВОСТЬ", "СИЛА", "РИТМ"],
    image: "/school-techfit.jpg",
  },
  {
    title: "КИНО-КЛУБ",
    desc: "ПРОСМОТРЫ И ОБСУЖДЕНИЯ ДОКУМЕНТАЛЬНЫХ ФИЛЬМОВ О МУЗЫКЕ И КУЛЬТУРЕ.",
    tags: ["ДОКУМЕНТАЛЬНОЕ", "МУЗЫКА", "КУЛЬТУРА"],
    image: "/school-filmclub.jpg",
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

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {directions.map((d) => (
          <div key={d.title} className="flex flex-col border border-accent/10 bg-card/50">
            <div className="aspect-[3/4] flex items-center justify-center border-b border-accent/10 bg-card/80">
              {d.image ? (
                <Image src={d.image} alt={d.title} width={400} height={533} className="h-full w-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-3 p-8 text-center">
                  <span className="text-4xl opacity-20">◈</span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-muted/40">ФОТО СКОРО</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-accent/60">НАПРАВЛЕНИЕ</span>
                <h2 className="mt-1 text-lg font-black tracking-tighter">{d.title}</h2>
              </div>
              <div className="mt-3 h-px w-full bg-accent/20" />
              <p className="mt-3 text-[10px] font-semibold leading-relaxed tracking-wider text-muted">
                {d.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {d.tags.map((tag) => (
                  <span key={tag} className="border border-accent/20 px-2 py-1 text-[8px] font-bold tracking-[0.15em] text-accent/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-accent/20 pt-12 text-center">
        <h2 className="text-xl font-black tracking-tighter">ХОЧЕШЬ УЧАСТВОВАТЬ?</h2>
        <p className="mt-2 text-xs font-semibold tracking-wider text-muted">
          ПИШИ НАМ, РАССКАЖЕМ ПОДРОБНОСТИ
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://t.me/fckngd1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-accent bg-accent px-10 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
          >
            ЗАПИСАТЬСЯ В TG →
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-border/40 px-10 py-4 text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
          >
            ИЛИ ЧЕРЕЗ ФОРМУ
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● ПРЕЗЕНТАЦИЯ</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">ВИДЕО ШКОЛЫ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="aspect-square w-full max-w-md border-2 border-border/20 bg-card">
            <video
              src="/school-video.mp4"
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="aspect-square w-full max-w-md border-2 border-border/20 bg-card">
            <video
              src="/streetart-video.mp4"
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-accent/20 pt-12 text-center">
        <h2 className="text-xl font-black tracking-tighter">ХОЧЕШЬ УЧАСТВОВАТЬ?</h2>
        <p className="mt-2 text-xs font-semibold tracking-wider text-muted">
          ПИШИ НАМ, РАССКАЖЕМ ПОДРОБНОСТИ
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://t.me/fckngd1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-accent bg-accent px-10 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
          >
            ЗАПИСАТЬСЯ В TG →
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-border/40 px-10 py-4 text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
          >
            ИЛИ ЧЕРЕЗ ФОРМУ
          </Link>
        </div>
      </div>
    </div>
  );
}
