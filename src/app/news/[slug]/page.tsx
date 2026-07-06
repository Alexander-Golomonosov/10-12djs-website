import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const newsItems: Record<string, { title: string; date: string; content: string }> = {
  "summer-festival-2026": {
    title: "ЛЕТНИЙ ФЕСТИВАЛЬ 2026",
    date: "15 ИЮНЯ 2026",
    content:
      "МЫ РАДЫ ОБЪЯВИТЬ, ЧТО 10/12DJ'S ВЫСТУПЯТ НА ГЛАВНОЙ СЦЕНЕ ЛЕТНЕГО ФЕСТИВАЛЯ В ЭТОМ ГОДУ! ЭТО БУДЕТ НАШ САМЫЙ МАСШТАБНЫЙ СЕТ. МЫ ПОДГОТОВИЛИ СПЕЦИАЛЬНУЮ ПРОГРАММУ, КОТОРАЯ ОБЪЕДИНИТ ЛУЧШИЕ ТРЕКИ ПОСЛЕДНИХ ЛЕТ И НОВЫЕ ЭКСПЕРИМЕНТАЛЬНЫЕ СЕТЫ. СЛЕДИТЕ ЗА АНОНСАМИ — ВАС ЖДЁТ МНОГО СЮРПРИЗОВ.",
  },
  "new-mix": {
    title: "НОВЫЙ МИКС В ЭФИРЕ",
    date: "1 ИЮНЯ 2026",
    content:
      "СВЕЖИЙ ЧАСОВОЙ МИКС ОТ НАШЕГО РЕЗИДЕНТА УЖЕ ДОСТУПЕН НА SOUNDCLOUD. ТЕХНО, ХАУС И БРЕЙКБИТ — МЫ СОБРАЛИ ЛУЧШЕЕ ИЗ ЭТИХ ЖАНРОВ В ОДНОМ СЕТЕ. МИКС ПОЛУЧИЛСЯ ЭНЕРГИЧНЫМ И АТМОСФЕРНЫМ.",
  },
  "club-tour": {
    title: "КЛУБНЫЙ ТУР ПО ГОРОДАМ",
    date: "20 МАЯ 2026",
    content:
      "ОТПРАВЛЯЕМСЯ В ТУР ПО 5 ГОРОДАМ! В ПРОГРАММЕ: МОСКВА, САНКТ-ПЕТЕРБУРГ, КАЗАНЬ, ЕКАТЕРИНБУРГ И КРАСНОДАР. В КАЖДОМ ГОРОДЕ МЫ ПОДГОТОВИЛИ УНИКАЛЬНЫЙ СЕТ. БИЛЕТЫ УЖЕ В ПРОДАЖЕ.",
  },
  "label-collab": {
    title: "КОЛЛАБОРАЦИЯ С НОВЫМ ЛЕЙБЛОМ",
    date: "10 МАЯ 2026",
    content:
      "МЫ РАДЫ ОБЪЯВИТЬ О СОТРУДНИЧЕСТВЕ С НЕЗАВИСИМЫМ ЛЕЙБЛОМ BASSPORT RECORDS. В БЛИЖАЙШЕЕ ВРЕМЯ ВЫЙДЕТ НАШ ПЕРВЫЙ СОВМЕСТНЫЙ РЕЛИЗ — EP ИЗ ТРЁХ ТРЕКОВ.",
  },
  "night-drive-remix": {
    title: "РЕМИКС НА ТРЕК NIGHT DRIVE",
    date: "25 АПРЕЛЯ 2026",
    content:
      "НАШ РЕМИКС НА ТРЕК NIGHT DRIVE ВЫШЕЛ НА ВСЕХ ПЛОЩАДКАХ. МЫ ПЕРЕОСМЫСЛИЛИ ОРИГИНАЛ, ДОБАВИВ ТЯЖЁЛЫЕ БАСЫ И ТЕХНО-РИТМ. ТРЕК УЖЕ ПОЛУЧИЛ ПОДДЕРЖКУ ОТ ИЗВЕСТНЫХ ДИДЖЕЕВ.",
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
        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted transition-colors hover:text-accent"
      >
        ← НАЗАД К НОВОСТЯМ
      </Link>
      <article className="mt-8 border-t-2 border-accent/20 pt-8">
        <time className="text-xs font-semibold tracking-widest text-muted">{item.date}</time>
        <h1 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">{item.title}</h1>
        <div className="mt-8 text-xs font-semibold leading-relaxed tracking-wider text-muted">
          <p>{item.content}</p>
        </div>
      </article>
    </div>
  );
}
