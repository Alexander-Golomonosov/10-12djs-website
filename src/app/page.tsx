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
        <div className="drip drip-1" />
        <div className="drip drip-2" />
        <div className="drip drip-3" />
        <div className="drip drip-4" />
        <div className="drip drip-5" />
        <div className="drip drip-6" />
        <div className="drip drip-7" />
        <div className="splatter splatter-1" />
        <div className="splatter splatter-2" />
        <div className="splatter splatter-3" />
        <div className="splatter splatter-4" />
        <span className="graffiti-tag-solid top-10 -left-10 rotate-[-12deg]">10/12</span>
        <span className="graffiti-tag-solid bottom-10 -right-20 rotate-[15deg]">DJS</span>
        <span className="graffiti-tag top-1/4 right-0 rotate-[30deg] opacity-[0.03]">SOUND</span>
        <span className="graffiti-tag-light bottom-1/3 left-0 rotate-[-20deg] opacity-[0.02]">BASS</span>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ff4242_0%,_transparent_60%)] opacity-15" />
        <div className="absolute top-1/4 left-4 h-32 w-0.5 bg-accent/30 rotate-[30deg]" />
        <div className="absolute bottom-1/4 right-8 h-48 w-0.5 bg-accent/20 rotate-[-20deg]" />
        <div className="absolute top-1/3 right-1/4 border-2 border-accent/10 px-6 py-2 rotate-12">
          <span className="text-[8px] font-bold tracking-[0.3em] text-accent/30">UNDERGROUND</span>
        </div>
        <div className="absolute bottom-1/3 left-8 h-px w-32 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rotate-45" />
        <div className="absolute top-1/2 right-12 h-px w-24 bg-gradient-to-r from-accent/0 via-accent/15 to-accent/0 -rotate-30" />
        <div className="absolute top-20 left-1/4 h-6 w-6 border-2 border-accent/10 rotate-45" />
        <div className="absolute bottom-32 right-1/4 h-4 w-4 border border-accent/10 rotate-12" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-28 w-28 overflow-hidden rounded-full logo-pulse">
              <Image
                src="/logo.svg"
                alt="10/12DJ'S"
                width={120}
                height={120}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl">
            <span className="gradient-text">10/12DJ&apos;S</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xs font-semibold tracking-[0.2em] text-muted sm:text-sm">
            10/12DJ&apos;S — КОМАНДА ПРОФЕССИОНАЛЬНЫХ ДИДЖЕЕВ.<br />
            МУЗЫКА — НАШЕ ОРУЖИЕ. ТАНЦПОЛ — НАША ТЕРРИТОРИЯ.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="border-2 border-accent bg-accent px-10 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
            >
              СВЯЗАТЬСЯ
            </Link>
            <Link
              href="/news"
              className="border-2 border-border px-10 py-4 text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/50 hover:text-foreground"
            >
              НОВОСТИ
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-32">
        <span className="graffiti-tag-light -top-20 -right-10 rotate-[10deg]">SOUND</span>
        <span className="graffiti-tag bottom-10 -left-16 rotate-[-10deg] opacity-[0.02]">BEATS</span>
        <div className="drip drip-6" />
        <div className="splatter splatter-3" />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-4xl font-black tracking-tighter">КТО МЫ</h2>
            <div className="mt-2 h-1 w-20 bg-accent" />
            <p className="mt-8 text-xs font-semibold leading-relaxed tracking-wider text-muted sm:text-sm">
              МЫ — КОМАНДА ДИДЖЕЕВ, ОБЪЕДИНЁННЫХ ЛЮБОВЬЮ К КАЧЕСТВЕННОЙ МУЗЫКЕ.
              КАЖДЫЙ НАШ СЕТ — ЭТО ПУТЕШЕСТВИЕ. ИГРАЕМ ТЕХНО, ХАУС, БРЕЙКБИТ И
              ВСЁ, ЧТО ЗАСТАВЛЯЕТ ТОЛПУ ДВИГАТЬСЯ.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-accent transition-colors hover:text-accent-hover"
            >
              УЗНАТЬ БОЛЬШЕ →
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/about-hero.jpg"
              alt="10/12DJ'S"
              width={800}
              height={600}
              className="aspect-video border-2 border-accent/20 object-cover"
            />
            <div className="absolute -top-4 -left-4 h-full w-full border-2 border-accent/5 -z-10" />
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-accent/10 -z-10" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-24">
        <span className="graffiti-tag -bottom-20 -left-20 rotate-[-12deg]">BEATS</span>
        <div className="flex items-end justify-between border-b-2 border-accent/20 pb-6">
          <div>
            <h2 className="text-4xl font-black tracking-tighter">ПОСЛЕДНИЕ НОВОСТИ</h2>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted">БУДЬТЕ В КУРСЕ</p>
          </div>
          <Link
            href="/news"
            className="hidden text-xs font-bold tracking-[0.2em] text-accent transition-colors hover:text-accent-hover sm:inline-flex"
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
