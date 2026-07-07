import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { fetchLatestPost } from "@/lib/telegram";

export const metadata: Metadata = {
  title: "НОВОСТИ | 10/12DJ'S",
};

export const dynamic = "force-dynamic";

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

export default async function News() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  let telegramPost = null;

  if (token) {
    telegramPost = await fetchLatestPost(token, "@I0_12_djs");
  }

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-10deg]">LATEST</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">НОВОСТИ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ПОСЛЕДНИЕ СОБЫТИЯ</p>
      <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {telegramPost && (
          <div className="col-span-full mb-6 border-2 border-accent/40 bg-accent/5 p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent">TELEGRAM</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-muted">{telegramPost.date}</span>
            </div>
            <p className="mt-3 text-sm font-semibold leading-relaxed tracking-wider text-foreground">
              {telegramPost.text.split("\n").slice(1).join("\n").trim() || telegramPost.text}
            </p>
            <a
              href={`https://t.me/I0_12_djs/${telegramPost.messageId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[10px] font-bold tracking-[0.2em] text-accent transition-colors hover:text-accent-hover"
            >
              ОТКРЫТЬ В TELEGRAM →
            </a>
          </div>
        )}
        {allNews.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
