import Link from "next/link";
import NewsCard from "@/components/NewsCard";

const latestNews = [
  {
    title: "Летний фестиваль 2026",
    excerpt: "10/12DJ'S выступят на главной сцене летнего фестиваля в этом году. Готовьтесь к незабываемому сету!",
    date: "15 июня 2026",
    slug: "summer-festival-2026",
  },
  {
    title: "Новый микс в эфире",
    excerpt: "Свежий часовой микс от нашего резидента уже доступен на SoundCloud. Техно, хаус и брейкбит.",
    date: "1 июня 2026",
    slug: "new-mix",
  },
  {
    title: "Клубный тур по городам",
    excerpt: "Отправляемся в тур по 5 городам. Следите за расписанием и бронируйте билеты заранее.",
    date: "20 мая 2026",
    slug: "club-tour",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="gradient-text">10/12DJ&apos;S</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Команда профессиональных диджеев. Создаём атмосферу, заставляем танцевать,
            объединяем музыкой.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover"
            >
              Связаться с нами
            </Link>
            <Link
              href="/news"
              className="rounded-full border border-border px-8 py-3 text-sm font-medium text-muted transition-all hover:border-accent/50 hover:text-foreground"
            >
              Новости
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Кто мы</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Мы — команда диджеев, объединённых любовью к качественной музыке.
              Каждый наш сет — это путешествие. Играем техно, хаус, брейкбит и
              всё, что заставляет толпу двигаться.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Узнать больше
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl border border-border bg-card" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Последние новости</h2>
            <p className="mt-2 text-muted">Будьте в курсе наших событий</p>
          </div>
          <Link
            href="/news"
            className="hidden text-sm font-medium text-accent transition-colors hover:text-accent-hover sm:inline-flex"
          >
            Все новости →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
