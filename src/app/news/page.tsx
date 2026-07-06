import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "НОВОСТИ | 10/12DJ'S",
};

const allNews = [
  {
    title: "ЛЮПУС-ФЕСТ 2026",
    excerpt: "СКОРО ВЫСТУПИМ НА ЛЕТНЕМ ФЕСТИВАЛЕ ЛЮПУС-ФЕСТ В ЛЕН. ОБЛАСТИ.",
    date: "ИЮЛЬ 2026",
    slug: "lupus-fest",
  },
  {
    title: "DJ ENDE В DIZENGOF/99",
    excerpt: "10 ИЮЛЯ DJ ENDE ВЫСТУПАЕТ В РЕСТОРАНЕ ИЗРАИЛЬСКОЙ КУХНИ DIZENGOF/99, СПБ, БАСКОВ ПЕРЕУЛОК 31.",
    date: "10 ИЮЛЯ 2026",
    slug: "dj-ende-dizengof",
  },
  {
    title: "РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ",
    excerpt: "1 АВГУСТА — РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ.",
    date: "1 АВГУСТА 2026",
    slug: "ptichya-lichnost",
  },
];

export default function News() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-10deg]">LATEST</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">НОВОСТИ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ПОСЛЕДНИЕ СОБЫТИЯ</p>
      <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {allNews.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
