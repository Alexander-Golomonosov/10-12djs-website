import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const newsItems: Record<string, { title: string; date: string; content: string }> = {
  "lupus-fest": {
    title: "ЛЮПУС-ФЕСТ 2026",
    date: "ИЮЛЬ 2026",
    content:
      "СКОРО ВЫСТУПИМ НА ЛЕТНЕМ ФЕСТИВАЛЕ ЛЮПУС-ФЕСТ В ЛЕНИНГРАДСКОЙ ОБЛАСТИ. ЭТО БУДЕТ ЯРКИЙ СЕТ С НАШИМИ ЛУЧШИМИ ТРЕКАМИ. СЛЕДИТЕ ЗА АНОНСАМИ — УТОЧНИМ ДАТУ И ВРЕМЯ.",
  },
  "dj-ende-dizengof": {
    title: "DJ ENDE В DIZENGOF/99",
    date: "10 ИЮЛЯ 2026",
    content:
      "10 ИЮЛЯ DJ ENDE ВЫСТУПАЕТ В РЕСТОРАНЕ ИЗРАИЛЬСКОЙ КУХНИ DIZENGOF/99 В САНКТ-ПЕТЕРБУРГЕ. АДРЕС: БАСКОВ ПЕРЕУЛОК 31. ЖДЁМ ВСЕХ НА АТМОСФЕРНЫЙ ВЕЧЕР С ОТЛИЧНОЙ МУЗЫКОЙ И КУХНЕЙ.",
  },
  "ptichya-lichnost": {
    title: "РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ",
    date: "1 АВГУСТА 2026",
    content:
      "1 АВГУСТА — РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ. ГОТОВИМ МОЩНУЮ ПРОГРАММУ НА ВЕСЬ ВЕЧЕР. НЕ ПРОПУСТИТЕ ОДНО ИЗ САМЫХ ЯРКИХ СОБЫТИЙ ЭТОГО ЛЕТА!",
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
    <div className="relative mx-auto max-w-3xl px-4 py-24">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted transition-colors hover:text-accent"
      >
        ← НАЗАД К НОВОСТЯМ
      </Link>
      <article className="mt-8 border-t-2 border-accent/20 pt-8">
        <time className="text-xs font-semibold tracking-[0.2em] text-muted">{item.date}</time>
        <h1 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">{item.title}</h1>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8 text-xs font-semibold leading-relaxed tracking-wider text-muted sm:text-sm">
          <p>{item.content}</p>
        </div>
      </article>
    </div>
  );
}
