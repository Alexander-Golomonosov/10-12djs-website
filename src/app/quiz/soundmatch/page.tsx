import type { Metadata } from "next";
import Link from "next/link";
import SoundMatch from "@/components/SoundMatch";

export const metadata: Metadata = {
  title: "SOUNDMATCH | 10/12DJ'S",
};

export default function SoundMatchPage() {
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
          ● ИГРА
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tighter sm:text-5xl">
          SOUND<span className="text-accent">MATCH</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xs font-semibold tracking-[0.2em] text-muted/60">
          ОТКРОЙ ДВЕ КАРТЫ — УГАДАЙ ПАРУ ПО ЖАНРУ. РАЗНЫЕ ТРЕКИ, ОДИН ЖАНР.
        </p>
      </div>
      <SoundMatch />
    </section>
  );
}
