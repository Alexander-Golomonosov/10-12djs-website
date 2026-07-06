import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";

const latestNews = [
  {
    title: "ЛЕТНИЙ ФЕСТИВАЛЬ 2026",
    excerpt: "10/12DJ'S ВЫСТУПЯТ НА ГЛАВНОЙ СЦЕНЕ ЛЕТНЕГО ФЕСТИВАЛЯ. ГОТОВЬТЕСЬ К НЕЗАБЫВАЕМОМУ СЕТУ!",
    date: "15 ИЮНЯ 2026",
    slug: "summer-festival-2026",
  },
  {
    title: "НОВЫЙ МИКС В ЭФИРЕ",
    excerpt: "СВЕЖИЙ ЧАСОВОЙ МИКС ОТ НАШЕГО РЕЗИДЕНТА УЖЕ ДОСТУПЕН НА SOUNDCLOUD.",
    date: "1 ИЮНЯ 2026",
    slug: "new-mix",
  },
  {
    title: "КЛУБНЫЙ ТУР ПО ГОРОДАМ",
    excerpt: "ОТПРАВЛЯЕМСЯ В ТУР ПО 5 ГОРОДАМ. СЛЕДИТЕ ЗА РАСПИСАНИЕМ.",
    date: "20 МАЯ 2026",
    slug: "club-tour",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ff4242_0%,_transparent_70%)] opacity-20" />
        <div className="absolute top-1/4 left-1/4 h-64 w-64 border-2 border-accent/10 rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 h-48 w-48 border-2 border-accent/10 -rotate-6" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="10/12DJ'S"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl">
            <span className="gradient-text">10/12DJ&apos;S</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold tracking-widest text-muted sm:text-base">
            10/12DJ&apos;S — КОМАНДА ПРОФЕССИОНАЛЬНЫХ ДИДЖЕЕВ.<br />
            МУЗЫКА — НАШЕ ОРУЖИЕ. ТАНЦПОЛ — НАША ТЕРРИТОРИЯ.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="border-2 border-accent bg-accent px-10 py-4 text-xs font-bold tracking-widest text-white transition-all hover:bg-accent-hover"
            >
              СВЯЗАТЬСЯ
            </Link>
            <Link
              href="/news"
              className="border-2 border-border/30 px-10 py-4 text-xs font-bold tracking-widest text-muted transition-all hover:border-accent/50 hover:text-foreground"
            >
              НОВОСТИ
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-black tracking-tighter">КТО МЫ</h2>
            <p className="mt-6 text-xs font-semibold leading-relaxed tracking-wider text-muted">
              МЫ — КОМАНДА ДИДЖЕЕВ, ОБЪЕДИНЁННЫХ ЛЮБОВЬЮ К КАЧЕСТВЕННОЙ МУЗЫКЕ.
              КАЖДЫЙ НАШ СЕТ — ЭТО ПУТЕШЕСТВИЕ. ИГРАЕМ ТЕХНО, ХАУС, БРЕЙКБИТ И
              ВСЁ, ЧТО ЗАСТАВЛЯЕТ ТОЛПУ ДВИГАТЬСЯ.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent transition-colors hover:text-accent-hover"
            >
              УЗНАТЬ БОЛЬШЕ →
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video border-2 border-accent/20 bg-card" />
            <div className="absolute -top-4 -left-4 h-full w-full border-2 border-accent/10 -z-10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="flex items-end justify-between border-b-2 border-accent/20 pb-6">
          <div>
            <h2 className="text-3xl font-black tracking-tighter">ПОСЛЕДНИЕ НОВОСТИ</h2>
            <p className="mt-2 text-xs font-semibold tracking-widest text-muted">БУДЬТЕ В КУРСЕ</p>
          </div>
          <Link
            href="/news"
            className="hidden text-xs font-bold tracking-widest text-accent transition-colors hover:text-accent-hover sm:inline-flex"
          >
            ВСЕ НОВОСТИ →
          </Link>
        </div>
        <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
