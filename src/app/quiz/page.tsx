import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ТЕСТЫ | 10/12DJ'S",
};

const tests = [
  {
    href: "/quiz/rave",
    tag: "● ИНТЕРАКТИВ",
    index: "01",
    title: "РЕЙВ-ТЕСТ",
    desc: "10 ВОПРОСОВ ПРО ТВОЁ ПОВЕДЕНИЕ НА РЕЙВЕ. УЗНАЙ СВОЙ АРХЕТИП НА ТАНЦПОЛЕ.",
    meta: "10 ВОПРОСОВ · 4 АРХЕТИПА · ШАРИНГ РЕЗУЛЬТАТА",
  },
  {
    href: "/quiz/genre",
    tag: "● АУДИО",
    index: "02",
    title: "АУДИО-ТЕСТ",
    desc: "ПОСЛУШАЙ ФРАГМЕНТ И ОПРЕДЕЛИ ЖАНР АНДЕГРАУНД СЦЕНЫ. ТЕХНО, БРЕЙКБИТ, ДЖАНГЛ, DNB, UK GARAGE.",
    meta: "5 ФРАГМЕНТОВ · 4 ВАРИАНТА · ПРОВЕРКА СЛУХА",
  },
];

export default function QuizPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <div className="mb-16 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
          ● ИНТЕРАКТИВ
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tighter sm:text-5xl">
          ТЕСТЫ 10/12
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xs font-semibold tracking-[0.2em] text-muted/60">
          ПРОВЕРЬ СВОЮ ПРИЧАСТНОСТЬ К АНДЕГРАУНДУ
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {tests.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex flex-col border-2 border-accent/20 bg-card p-8 transition-all hover:border-accent/60 hover:bg-card-hover sm:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
                {t.tag}
              </span>
              <span className="text-xs font-black text-muted/30">{t.index}</span>
            </div>
            <h2 className="mt-8 text-2xl font-black tracking-tighter transition-colors group-hover:text-accent sm:text-3xl">
              {t.title}
            </h2>
            <div className="mt-3 h-px w-full bg-accent/30" />
            <p className="mt-5 text-xs font-semibold leading-relaxed tracking-wider text-muted/80">
              {t.desc}
            </p>
            <div className="mt-auto flex items-center justify-between gap-4 pt-8">
              <span className="text-[9px] font-bold tracking-[0.15em] text-muted/50">
                {t.meta}
              </span>
              <span className="text-xs font-black tracking-[0.2em] text-accent transition-transform group-hover:translate-x-1">
                НАЧАТЬ →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
