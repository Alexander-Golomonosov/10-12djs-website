import Link from "next/link";
import Image from "next/image";
import { fetchLatestPost, fetchRecentPosts } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export default async function Home() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  let telegramPost: Awaited<ReturnType<typeof fetchLatestPost>> | null = null;
  let recentPosts: Awaited<ReturnType<typeof fetchRecentPosts>> = [];

  if (token) {
    [telegramPost, recentPosts] = await Promise.all([
      fetchLatestPost(token, "@I0_12_djs"),
      fetchRecentPosts(token, "@I0_12_djs"),
    ]);
  }

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden hero-glow">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_#ff4242_0%,_transparent_60%)] opacity-[0.12] hero-pulse-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,_#ff4242_0%,_transparent_50%)] opacity-[0.08] hero-flicker-bg" />

        <div className="drip max-sm:hidden" style={{ left: '5%', top: 0, height: '200px', animationDelay: '-2s' }} />
        <div className="drip max-sm:hidden" style={{ left: '15%', top: 0, height: '120px', animationDelay: '-5s' }} />
        <div className="drip max-sm:hidden" style={{ left: '30%', top: 0, height: '250px', animationDelay: '-1s' }} />
        <div className="drip max-sm:hidden" style={{ left: '50%', top: 0, height: '80px', animationDelay: '-7s' }} />
        <div className="drip max-sm:hidden" style={{ left: '65%', top: 0, height: '180px', animationDelay: '-3s' }} />
        <div className="drip max-sm:hidden" style={{ left: '78%', top: 0, height: '140px', animationDelay: '-6s' }} />
        <div className="drip max-sm:hidden" style={{ left: '90%', top: 0, height: '220px', animationDelay: '-4s' }} />

        <div className="splatter max-sm:hidden" style={{ width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,66,66,0.1) 0%, transparent 70%)', top: '5%', left: '-5%' }} />
        <div className="splatter max-sm:hidden" style={{ width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(255,66,66,0.06) 0%, transparent 70%)', bottom: '10%', right: '5%' }} />
        <div className="splatter max-sm:hidden" style={{ width: '80px', height: '80px', background: 'radial-gradient(circle, rgba(255,66,66,0.08) 0%, transparent 70%)', top: '60%', left: '20%' }} />
        <div className="splatter max-sm:hidden" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,66,66,0.04) 0%, transparent 60%)', top: '20%', right: '-10%' }} />

        <span className="graffiti-tag-solid max-sm:hidden" style={{ top: '5%', left: '-5%', rotate: '-12deg' }}>10/12</span>
        <span className="graffiti-tag-solid max-sm:hidden" style={{ bottom: '5%', right: '-10%', rotate: '18deg' }}>DJS</span>
        <span className="graffiti-tag max-sm:hidden" style={{ top: '20%', right: '-5%', rotate: '25deg', animationDelay: '-3s' }}>SOUND</span>
        <span className="graffiti-tag-light max-sm:hidden" style={{ bottom: '25%', left: '-8%', rotate: '-22deg', animationDelay: '-5s' }}>BASS</span>
        <span className="graffiti-tag max-sm:hidden" style={{ bottom: '40%', right: '15%', rotate: '8deg', animationDelay: '-7s', fontSize: 'clamp(6rem, 18vw, 18rem)', color: 'rgba(255,66,66,0.02)' }}>BEAT</span>

        <div className="absolute top-1/3 right-8 border-2 border-accent/15 px-5 py-2 rotate-12 max-sm:hidden">
          <span className="text-[8px] font-bold tracking-[0.3em] text-accent/40">EST. 2025</span>
        </div>
        <div className="absolute bottom-1/4 left-6 h-40 w-0.5 bg-gradient-to-b from-accent/40 to-transparent rotate-[20deg] max-sm:hidden" />
        <div className="absolute top-1/4 right-4 h-56 w-0.5 bg-gradient-to-b from-accent/20 to-transparent rotate-[-15deg] max-sm:hidden" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="mb-10 flex justify-center">
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

          <h1 className="text-7xl font-black tracking-tighter sm:text-9xl leading-none">
            <span className="gradient-text">10/12DJ&apos;S</span>
          </h1>

          <div className="mx-auto mt-4 h-px max-w-xs bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-xs font-bold tracking-[0.25em] text-muted/80 sm:text-sm">
            МУЗЫКА — НАШЕ ОРУЖИЕ.<br />
            ТАНЦПОЛ — НАША ТЕРРИТОРИЯ.
          </p>

          <div className="mt-16 flex items-center justify-center gap-6 sm:gap-10">
            <Link
              href="/contact"
              className="group relative border-2 border-accent bg-accent px-12 py-5 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover hover:shadow-[0_0_60px_rgba(255,66,66,0.3)]"
            >
              <span className="relative z-10">СВЯЗАТЬСЯ</span>
            </Link>
            <Link
              href="/afisha"
              className="group border-2 border-border/40 px-12 py-5 text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
            >
              АФИША
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-40">
        <span className="graffiti-tag-solid max-sm:hidden" style={{ top: '-5%', right: '-8%', rotate: '12deg' }}>SOUND</span>
        <span className="graffiti-tag-light max-sm:hidden" style={{ bottom: '-10%', left: '-10%', rotate: '-15deg', animationDelay: '-4s' }}>BEATS</span>
        <div className="drip max-sm:hidden" style={{ left: '20%', top: 0, height: '100px', animationDelay: '-2s' }} />
        <div className="splatter max-sm:hidden" style={{ width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(255,66,66,0.05) 0%, transparent 70%)', top: '-10%', right: '20%' }} />
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● ПОЗНАКОМИМСЯ</span>
            <h2 className="mt-4 text-5xl font-black tracking-tighter leading-none">КТО МЫ</h2>
            <div className="mt-4 h-1 w-24 bg-accent" />
            <p className="mt-10 text-xs font-semibold leading-relaxed tracking-wider text-muted/80 sm:text-sm">
              МЫ ЗА ИНТЕЛЛИГЕНТНЫЙ АНДЕГРАУНД. СОЗДАЁМ КУЛЬТУРУ ВМЕСТЕ С ВАМИ,
              ДЕЛИМСЯ ОПЫТОМ И РАСШИРЯЕМ ГРАНИЦЫ. КАЖДЫЙ НАШ СЕТ — ЭТО
              ПУТЕШЕСТВИЕ ЗА ПРЕДЕЛЫ ПРИВЫЧНОГО.
            </p>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-accent transition-all hover:text-accent-hover group"
            >
              <span className="relative">УЗНАТЬ БОЛЬШЕ</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
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
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-accent/10 -z-10" />
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-accent/10 -z-10" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="border-b-2 border-accent/20 pb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● СКОРО</span>
          <h2 className="mt-2 text-4xl font-black tracking-tighter sm:text-5xl">АФИША</h2>
          <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted/60">ПРЕДСТОЯЩИЕ СОБЫТИЯ</p>
        </div>
        <div className="mt-10 space-y-10">
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-8 lg:flex-row lg:gap-12">
            <div className="w-48 shrink-0">
              <Image
                src="/dizengof-poster.jpg"
                alt="DJ ENDE В DIZENGOF/99"
                width={1024}
                height={1280}
                className="border border-accent/20 object-cover"
              />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 10 ИЮЛЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">DJ ENDE</h2>
              <p className="text-sm font-bold tracking-[0.15em] text-accent/80">DIZENGOF/99</p>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">БАСКОВ ПЕР. 31, СПБ</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ВХОД СВОБОДНЫЙ</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">19:30</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TECH HOUSE</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ACID HOUSE</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-8 lg:flex-row lg:gap-12">
            <div className="w-48 shrink-0">
              <Image
                src="/placeholder-poster.svg"
                alt="РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ"
                width={600}
                height={800}
                className="border border-accent/20 object-cover"
              />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 1 АВГУСТА</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">АФИША И ОПИСАНИЕ СКОРО</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TBA</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-8 lg:flex-row lg:gap-12">
            <div className="w-48 shrink-0">
              <Image
                src="/upcoming-lupus-fest.jpg"
                alt="ЛЮПУС-ФЕСТ 2026"
                width={1080}
                height={1350}
                className="border border-accent/20 object-cover"
              />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 7–9 АВГУСТА</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">ЛЮПУС-ФЕСТ 2026</h2>
              <p className="text-sm font-bold tracking-[0.15em] text-accent/80">ЛЕНИНГРАДСКАЯ ОБЛАСТЬ</p>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 max-w-xl text-[10px] font-semibold leading-relaxed tracking-[0.2em] text-muted">
                ФЕСТИВАЛЬ О ТВОРЧЕСТВЕ, О СВОБОДЕ, О ВОЗМОЖНОСТЯХ И О МУЗЫКЕ.<br />
                О ТОМ, ЧТО МОЖЕТ СДЕЛАТЬ КАЖДЫЙ ИЗ ВАС, СТАВ ЧАСТЬЮ ЧЕГО-ТО БОЛЬШЕГО.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ФЕСТИВАЛЬ</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ТВОРЧЕСТВО</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">МУЗЫКА</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/afisha"
            className="inline-flex items-center gap-2 border border-accent/30 px-8 py-4 text-xs font-bold tracking-[0.2em] text-accent transition-all hover:border-accent/60"
          >
            ВСЕ СОБЫТИЯ (ВКЛ. ПРОШЕДШИЕ) →
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-32">
        <span className="graffiti-tag-solid max-sm:hidden" style={{ bottom: '5%', left: '-15%', rotate: '-10deg' }}>BEATS</span>
        <div className="flex items-end justify-between border-b-2 border-accent/20 pb-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● МЕДИА</span>
            <h2 className="mt-2 text-4xl font-black tracking-tighter sm:text-5xl">ПОСЛЕДНИЕ НОВОСТИ</h2>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted/60">БУДЬТЕ В КУРСЕ</p>
          </div>
          <Link
            href="/afisha"
            className="hidden text-xs font-bold tracking-[0.2em] text-accent transition-colors hover:text-accent-hover sm:inline-flex"
          >
            ВСЕ СОБЫТИЯ →
          </Link>
        </div>
        {telegramPost && (
          <a
            href={`https://t.me/I0_12_djs/${telegramPost.messageId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-between border-2 border-accent/30 bg-accent/5 p-5 transition-all hover:border-accent"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent">📢 ПОСЛЕДНИЙ ПОСТ В TELEGRAM</span>
              <p className="mt-2 text-xs font-semibold tracking-wider text-foreground">{telegramPost.title}</p>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent">ОТКРЫТЬ →</span>
          </a>
        )}
        <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.length > 0 ? recentPosts.map((item) => (
            <a
              key={item.slug}
              href={`https://t.me/I0_12_djs/${item.messageId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-border/20 bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover"
            >
              <time className="text-[10px] font-semibold tracking-widest text-muted">{item.date}</time>
              <h3 className="mt-3 text-sm font-bold tracking-wider transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">{item.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent">
                ОТКРЫТЬ В TG →
              </span>
            </a>
          )) : (
            <p className="col-span-full text-xs font-semibold tracking-wider text-muted/60">НОВОСТЕЙ ПОКА НЕТ</p>
          )}
        </div>
      </section>

    </>
  );
}
