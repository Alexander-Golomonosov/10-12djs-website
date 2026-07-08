import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "АФИША | 10/12DJ'S",
};

export default function Afisha() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-10deg]">POSTER</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">АФИША</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ПРЕДСТОЯЩИЕ И ПРОШЕДШИЕ СОБЫТИЯ</p>

      {/* UPCOMING */}
      <div className="mt-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● СКОРО</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">ПРЕДСТОЯЩИЕ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8 space-y-8">
          {/* DJ ENDE / 10 ИЮЛЯ */}
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

          {/* РЕЙВ В ПТИЧЬЕЙ ЛИЧНОСТИ / 1 АВГУСТА */}
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

          {/* ЛЮПУС-ФЕСТ 2026 / 7–9 АВГУСТА */}
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
      </div>

      {/* PAST */}
      <div className="mt-24 border-t-2 border-accent/20 pt-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● АРХИВ</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">ПРОШЕДШИЕ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8 space-y-8">
          {/* IDDQD RAVE / 4 ИЮЛЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-iddqd-rave.png" alt="IDDQD RAVE" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 4 ИЮЛЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">IDDQD RAVE</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">РЕЙВ В ЧЕСТЬ ДНЯ НЕЗАВИСИМОСТИ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">⚡ HARDSTYLE</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">⚡ RAWSTYLE</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">⚡ HARDCORE</span>
              </div>
            </div>
          </div>

          {/* МОНОХРОМ РЕЙВ / 6 ИЮНЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-monohrom-reiv.jpg" alt="МОНОХРОМ РЕЙВ" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 6 ИЮНЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">МОНОХРОМ РЕЙВ</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">ЧЁРНО-БЕЛЫЙ РЕЙВ — МИНИМАЛИЗМ В КАЖДОМ БИТЕ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">MINIMAL</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">INDUSTRIAL</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TECHNO</span>
              </div>
            </div>
          </div>

          {/* ZION UNDERGROUND / 20 ИЮНЯ — FACTORY 3 */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-zion-underground.jpg" alt="ZION UNDERGROUND" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 20 ИЮНЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">ZION UNDERGROUND</h2>
              <p className="text-sm font-bold tracking-[0.15em] text-accent/80">FACTORY 3 — HIGH STREET FASHION SHOW</p>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">МОДНЫЙ ПОКАЗ И СПОНСОРЫ СТИЛЯ</p>
              <div className="mt-4 space-y-2">
                <p className="text-[9px] font-semibold tracking-[0.15em] text-muted/70">ПРИ ПОДДЕРЖКЕ:</p>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <a href="https://www.instagram.com/official.urbanator/" target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">💚 URBANATOR</a>
                  <a href="https://www.instagram.com/freakbutik_spb/" target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">💚 FREAK BUTIK</a>
                  <a href="https://www.instagram.com/sofia.mdvedva?igsh=eHZtNGMxaHlpdnpp" target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">💚 СОФИЯ МЕДВЕДЕВА</a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="text-[9px] font-semibold tracking-[0.15em] text-muted/70">SPECIAL GUEST:</span>
                  <a href="https://t.me/aviamotorrrnaya" target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">AVIAMOTOR</a>
                  <a href="https://t.me/HakkeNation" target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">HAKKENATION</a>
                </div>
              </div>
            </div>
          </div>

          {/* ВЕЙК-ПАРК «КРУГИ НА ВОДЕ» / 13 ИЮНЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-wake-krugi.jpg" alt="ВЕЙК-ПАРК КРУГИ НА ВОДЕ" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 13 ИЮНЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">ВЕЙК-ПАРК «КРУГИ НА ВОДЕ»</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">ВЕЙКБОРДИНГ И МУЗЫКА — СПОРТ И БИТЫ НА ВОДЕ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">D&B</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TECHNO</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">HOUSE</span>
              </div>
            </div>
          </div>

          {/* СОВЕТСКИЙ РЕЙВ / 1 МАЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-sovetskiy-reiv.jpg" alt="СОВЕТСКИЙ РЕЙВ" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 1 МАЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">СОВЕТСКИЙ РЕЙВ</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">НОУСТАЛЬГИЯ ПО СССР В БИТАХ И БАСАХ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">HARD BASS</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">INDUSTRIAL</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ELECTRO</span>
              </div>
            </div>
          </div>

          {/* ТВОЙ ПЕРВЫЙ РЕЙВ / 31 ЯНВАРЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-tvoy-perviy-reiv.jpg" alt="ТВОЙ ПЕРВЫЙ РЕЙВ" width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 31 ЯНВАРЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">ТВОЙ ПЕРВЫЙ РЕЙВ</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">ДЕБЮТНЫЙ РЕЙВ — НАЧНИ СВОЙ ПУТЬ В МУЗЫКЕ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TECHNO</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">HOUSE</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">D&B</span>
              </div>
            </div>
          </div>

          {/* ВЕСНА. СОЛНЦЕ. РЕЙВ. / 3 АПРЕЛЯ */}
          <div className="flex flex-col items-center border border-accent/10 bg-card/50 p-6 lg:flex-row lg:gap-10">
            <div className="w-48 shrink-0">
              <Image src="/past-vesna-solnce-reiv.jpg" alt="ВЕСНА. СОЛНЦЕ. РЕЙВ." width={600} height={800} className="border border-accent/20 object-cover" />
            </div>
            <div className="mt-6 text-center lg:mt-0 lg:text-left">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● 3 АПРЕЛЯ</span>
              <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">ВЕСНА. СОЛНЦЕ. РЕЙВ.</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">ВСТРЕЧАЕМ ВЕСНУ НА ТАНЦПОЛЕ</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">HOUSE</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">DISCO</span>
                <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">TECHNO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
