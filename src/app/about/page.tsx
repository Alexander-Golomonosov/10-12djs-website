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

      <div className="mt-24 border-t border-accent/20 pt-16">
        <h2 className="text-3xl font-black tracking-tighter">НАША МИССИЯ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <p className="mt-8 max-w-3xl text-xs font-semibold leading-relaxed tracking-wider text-muted sm:text-sm">
          МЫ ВЕРИМ, ЧТО МУЗЫКА СПОСОБНА ОБЪЕДИНЯТЬ. НАША ЦЕЛЬ — СОЗДАВАТЬ
          НЕЗАБЫВАЕМЫЕ ВЕЧЕРА, ГДЕ КАЖДЫЙ НАЙДЁТ СВОЙ РИТМ. ОТ КАМЕРНЫХ
          КЛУБОВ ДО КРУПНЫХ ФЕСТИВАЛЕЙ — МЫ ПРИНОСИМ ЭНЕРГИЮ ВЕЗДЕ.
        </p>
      </div>
    </div>
  );
}
