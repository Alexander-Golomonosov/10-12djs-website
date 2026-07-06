import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Новости | 10/12DJ'S",
};

const allNews = [
  {
    title: "Летний фестиваль 2026",
    excerpt: "10/12DJ'S выступят на главной сцене летнего фестиваля. Готовьтесь к незабываемому сету!",
    date: "15 июня 2026",
    slug: "summer-festival-2026",
  },
  {
    title: "Новый микс в эфире",
    excerpt: "Свежий часовой микс от нашего резидента уже доступен на SoundCloud.",
    date: "1 июня 2026",
    slug: "new-mix",
  },
  {
    title: "Клубный тур по городам",
    excerpt: "Отправляемся в тур по 5 городам. Следите за расписанием.",
    date: "20 мая 2026",
    slug: "club-tour",
  },
  {
    title: "Коллаборация с новым лейблом",
    excerpt: "Мы рады объявить о сотрудничестве с независимым лейблом.",
    date: "10 мая 2026",
    slug: "label-collab",
  },
  {
    title: "Ремикс на трек Night Drive",
    excerpt: "Наш ремикс на трек Night Drive вышел на всех площадках.",
    date: "25 апреля 2026",
    slug: "night-drive-remix",
  },
];

export default function News() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">Новости</span>
      </h1>
      <p className="mt-4 text-muted">Последние события и анонсы</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allNews.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
