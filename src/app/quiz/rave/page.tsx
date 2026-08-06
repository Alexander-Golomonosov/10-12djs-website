import type { Metadata } from "next";
import Link from "next/link";
import RaveQuiz from "@/components/RaveQuiz";

export const metadata: Metadata = {
  title: "РЕЙВ-ТЕСТ | 10/12DJ'S",
};

export default function RaveQuizPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <Link
        href="/quiz"
        className="mb-10 inline-block text-[10px] font-bold tracking-[0.2em] text-muted transition-colors hover:text-accent"
      >
        ← ВСЕ ТЕСТЫ
      </Link>
      <div className="mb-16 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
          ● ИНТЕРАКТИВ
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tighter sm:text-5xl">
          РЕЙВ-ТЕСТ
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xs font-semibold tracking-[0.2em] text-muted/60">
          УЗНАЙ СВОЙ АРХЕТИП НА ТАНЦПОЛЕ
        </p>
      </div>
      <RaveQuiz />
    </section>
  );
}
