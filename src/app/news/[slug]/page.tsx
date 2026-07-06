import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const newsItems: Record<string, { title: string; date: string; content: string }> = {
  "summer-festival-2026": {
    title: "Летний фестиваль 2026",
    date: "15 июня 2026",
    content:
      "Мы рады объявить, что 10/12DJ'S выступят на главной сцене летнего фестиваля в этом году! Это будет наш самый масштабный сет. Мы подготовили специальную программу, которая объединит лучшие треки последних лет и новые экспериментальные сеты. Следите за анонсами — вас ждёт много сюрпризов.",
  },
  "new-mix": {
    title: "Новый микс в эфире",
    date: "1 июня 2026",
    content:
      "Свежий часовой микс от нашего резидента уже доступен на SoundCloud. Техно, хаус и брейкбит — мы собрали лучшее из этих жанров в одном сете. Микс получился энергичным и атмосферным. Идеально подходит для дороги, тренировки или подготовки к вечеринке.",
  },
  "club-tour": {
    title: "Клубный тур по городам",
    date: "20 мая 2026",
    content:
      "Отправляемся в тур по 5 городам! В программе: Москва, Санкт-Петербург, Казань, Екатеринбург и Краснодар. В каждом городе мы подготовили уникальный сет с учётом локальной атмосферы. Билеты уже в продаже. Торопитесь — количество мест ограничено.",
  },
  "label-collab": {
    title: "Коллаборация с новым лейблом",
    date: "10 мая 2026",
    content:
      "Мы рады объявить о сотрудничестве с независимым лейблом Bassport Records. В ближайшее время выйдет наш первый совместный релиз — EP из трёх треков. Работа над материалом шла несколько месяцев, и мы уверены, что результат вас впечатлит.",
  },
  "night-drive-remix": {
    title: "Ремикс на трек Night Drive",
    date: "25 апреля 2026",
    content:
      "Наш ремикс на трек Night Drive вышел на всех площадках. Мы переосмыслили оригинал, добавив тяжёлые басы и техно-ритм. Трек уже получил поддержку от известных диджеев. Слушайте на Spotify, Apple Music и других стриминг-сервисах.",
  },
};

export async function generateStaticParams() {
  return Object.keys(newsItems).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems[slug];
  if (!item) return {};
  return { title: `${item.title} | 10/12DJ'S` };
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = newsItems[slug];

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <Link
        href="/news"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Назад к новостям
      </Link>
      <article className="mt-8">
        <time className="text-sm text-muted">{item.date}</time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h1>
        <div className="mt-8 leading-relaxed text-muted">
          <p>{item.content}</p>
        </div>
      </article>
    </div>
  );
}
