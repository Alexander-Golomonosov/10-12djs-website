import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О НАС | 10/12DJ'S",
};

const team = [
  { name: "ALEX", role: "TECH HOUSE / TECHNO", bio: "ОСНОВАТЕЛЬ. ЗА ПУЛЬТОМ С 2015." },
  { name: "MIKE", role: "BREAKS / BASS", bio: "МАСТЕР ТЁМНЫХ БАСОВ И ДРАЙВА." },
  { name: "KATE", role: "DEEP HOUSE", bio: "МЕЛОДИЧНЫЙ ХАУС И АТМОСФЕРА." },
];

export default function About() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-20 -right-10 rotate-[8deg]">CREW</span>
      <span className="graffiti-tag-light bottom-40 -left-24 rotate-[-15deg]">FAMILY</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">О НАС</span>
      </h1>
      <div className="mt-2 h-1 w-20 bg-accent" />
      <p className="mt-8 max-w-3xl text-xs font-semibold leading-relaxed tracking-wider text-muted sm:text-sm">
        10/12DJ&apos;S — КОМАНДА, РОДИВШАЯСЯ ИЗ ЛЮБВИ К ЭЛЕКТРОННОЙ МУЗЫКЕ.
        МЫ ОБЪЕДИНИЛИСЬ, ЧТОБЫ СОЗДАВАТЬ УНИКАЛЬНЫЕ МУЗЫКАЛЬНЫЕ ВПЕЧАТЛЕНИЯ.
        КАЖДЫЙ НАШ СЕТ — ЭТО ИСТОРИЯ, РАССКАЗАННАЯ ЯЗЫКОМ РИТМА И МЕЛОДИИ.
      </p>

      <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="border border-border/20 bg-card p-8 transition-all hover:border-accent/40"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center border border-accent/50 bg-accent/5 text-xl font-black text-accent">
              {member.name[0]}
            </div>
            <h3 className="text-sm font-bold tracking-wider">{member.name}</h3>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-accent">{member.role}</p>
            <p className="mt-4 text-xs font-semibold tracking-wider text-muted">{member.bio}</p>
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
        <div className="mt-8 max-w-4xl space-y-4 text-xs font-semibold leading-relaxed tracking-wider text-muted sm:text-sm">
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
