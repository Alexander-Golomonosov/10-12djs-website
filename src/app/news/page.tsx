import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "НОВОСТИ | 10/12DJ'S",
};

const allNews = [
  {
    title: "ЛЕТНИЙ ФЕСТИВАЛЬ 2026",
    excerpt: "10/12DJ'S ВЫСТУПЯТ НА ГЛАВНОЙ СЦЕНЕ ЛЕТНЕГО ФЕСТИВАЛЯ.",
    date: "15 ИЮНЯ 2026",
    slug: "summer-festival-2026",
  },
  {
    title: "НОВЫЙ МИКС В ЭФИРЕ",
    excerpt: "СВЕЖИЙ ЧАСОВОЙ МИКС ОТ НАШЕГО РЕЗИДЕНТА НА SOUNDCLOUD.",
    date: "1 ИЮНЯ 2026",
    slug: "new-mix",
  },
  {
    title: "КЛУБНЫЙ ТУР ПО ГОРОДАМ",
    excerpt: "ОТПРАВЛЯЕМСЯ В ТУР ПО 5 ГОРОДАМ. СЛЕДИТЕ ЗА РАСПИСАНИЕМ.",
    date: "20 МАЯ 2026",
    slug: "club-tour",
  },
  {
    title: "КОЛЛАБОРАЦИЯ С НОВЫМ ЛЕЙБЛОМ",
    excerpt: "СОТРУДНИЧЕСТВО С НЕЗАВИСИМЫМ ЛЕЙБЛОМ BASSPORT RECORDS.",
    date: "10 МАЯ 2026",
    slug: "label-collab",
  },
  {
    title: "РЕМИКС НА NIGHT DRIVE",
    excerpt: "РЕМИКС ВЫШЕЛ НА ВСЕХ ПЛОЩАДКАХ.",
    date: "25 АПРЕЛЯ 2026",
    slug: "night-drive-remix",
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
