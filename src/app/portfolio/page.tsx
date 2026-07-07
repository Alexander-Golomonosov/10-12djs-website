import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ПОРТФОЛИО | 10/12DJ'S",
};

const venues = {
  clubs: [
    "FACTORY 3",
    "SANDBOX",
    "ПТИЧЬЯ ЛИЧНОСТЬ",
    "АТС",
    "СЕРДЦЕ",
  ],
  bars: [
    "ЮНИОН БАР",
    "DIZENGOF/99",
    "DO IMMIGRATION",
    "TSUNAMI",
    "PEREPLET (КОВОРКИНГ & ЛАУНДЖ)",
    "БАР РАЗБИТЫХ СЕРДЕЦ",
    "ОБОРМОТЫ",
    "СТИРКА",
    "УСЫ НА ПЕНЕ",
    "TECHNODÖNER",
  ],
  other: [
    "ВЕЙК-КЛУБ «КРУГИ НА ВОДЕ»",
    "SURF COFFEE",
    "ETLON",
    "SWAN",
  ],
};

const residents = [
  "FCKNGD1",
  "MENYAI",
  "XONIAD",
  "ENDE",
  "FEBB TUFOE",
  "DEADRIPPLE",
  "SHAWTY",
  "CAIMAN",
  "MRFLESH",
  "TEMP4D",
];

export default function Portfolio() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-20 -left-10 rotate-[-12deg]">PORTFOLIO</span>
      <span className="graffiti-tag-light" style={{ bottom: '20%', right: '-10%', rotate: '15deg', animationDelay: '-4s' }}>BOOKING</span>

      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">ПОРТФОЛИО</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ДЛЯ АРТ-ДИРЕКТОРОВ</p>

      {/* intro */}
      <div className="mt-16 max-w-4xl border-l-2 border-accent/30 pl-6">
        <p className="text-sm font-bold leading-relaxed tracking-wider">
          ТВОРЧЕСКОЕ ОБЪЕДИНЕНИЕ ДИДЖЕЕВ И ОРГАНИЗАТОРОВ<br />
          ИЗ САНКТ-ПЕТЕРБУРГА.
        </p>
        <p className="mt-6 text-xs font-semibold leading-relaxed tracking-wider text-muted">
          НАШ ФОРМАТ: ОТ КОММЕРЧЕСКОГО ХАУСА И ДИСКО ДЛЯ БАРОВ<br />
          ДО ПЛОТНОГО АНДЕГРАУНДА НА НОЧНЫХ ШОУКЕЙСАХ.
        </p>
        <p className="mt-3 text-xs font-semibold leading-relaxed tracking-wider text-muted">
          РАБОТАЕМ СО СВОИМ ОБОРУДОВАНИЕМ ПОД КЛЮЧ.
        </p>
      </div>

      {/* residents */}
      <div className="mt-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● СОСТАВ</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">РЕЗИДЕНТЫ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8 flex flex-wrap gap-3">
          {residents.map((name) => (
            <span
              key={name}
              className="border border-accent/20 bg-card px-4 py-2 text-xs font-bold tracking-wider transition-colors hover:border-accent/50 hover:bg-card-hover"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs font-semibold leading-relaxed tracking-wider text-muted">
          СПЛОЧЁННАЯ КОМАНДА С ОПЫТОМ РАБОТЫ НА КЛЮЧЕВЫХ ПЛОЩАДКАХ СПБ.
          ГАРАНТИЯ КАЧЕСТВЕННОГО ЗВУКА И СОБЛЮДЕНИЯ ТАЙМИНГОВ.
        </p>
      </div>

      {/* video placeholder */}
      <div className="mt-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● МЕДИА</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">ВИДЕО</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />
        <div className="mt-8">
          <div className="aspect-video w-full border-2 border-border/20 bg-card">
            <iframe
              src="https://disk.yandex.ru/d/vtqID1GtqNK0gw?embed=1"
              className="h-full w-full"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://disk.yandex.ru/d/vtqID1GtqNK0gw"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/30 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
          >
            ЯНДЕКС ДИСК →
          </a>
          <a
            href="https://vkvideo.ru/@10djs12"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/30 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
          >
            VK ВИДЕО →
          </a>
          <a
            href="https://soundcloud.com/10-12djs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/30 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
          >
            SOUNDCLOUD →
          </a>
        </div>
      </div>

      {/* venues */}
      <div className="mt-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● ГДЕ МЫ ИГРАЛИ</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter">ПЛОЩАДКИ</h2>
        <div className="mt-2 h-1 w-16 bg-accent" />

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-accent">КЛУБЫ & РЕЙВЫ</h3>
            <div className="mt-3 h-px w-10 bg-accent/50" />
            <ul className="mt-4 space-y-3">
              {venues.clubs.map((v) => (
                <li key={v} className="text-xs font-semibold tracking-wider text-muted">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-accent">БАРЫ, РЕСТОРАНЫ & ЛАУНДЖ</h3>
            <div className="mt-3 h-px w-10 bg-accent/50" />
            <ul className="mt-4 space-y-3">
              {venues.bars.map((v) => (
                <li key={v} className="text-xs font-semibold tracking-wider text-muted">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-accent">СПОРТ & КОФЕЙНИ</h3>
            <div className="mt-3 h-px w-10 bg-accent/50" />
            <ul className="mt-4 space-y-3">
              {venues.other.map((v) => (
                <li key={v} className="text-xs font-semibold tracking-wider text-muted">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="mt-24 border-t-2 border-accent/20 pt-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent">⏣ КОНТАКТ ДЛЯ БУКИНГА</span>
        <h2 className="mt-4 text-4xl font-black tracking-tighter">
          СВЯЗАТЬСЯ С НАМИ
        </h2>
        <div className="mt-4 h-1 w-16 bg-accent" />

        <div className="mt-8 space-y-6">
          <a
            href="tel:89500408404"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-wider text-accent transition-colors hover:text-accent-hover"
          >
            <span className="text-[10px] tracking-[0.2em] text-muted">ТЕЛЕФОН:</span>
            8 (950) 040-84-04
          </a>
          <br />
          <a
            href="https://t.me/fuckengod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-wider text-accent transition-colors hover:text-accent-hover"
          >
            <span className="text-[10px] tracking-[0.2em] text-muted">TELEGRAM:</span>
            @FUCKENCOD
          </a>
        </div>
      </div>
    </div>
  );
}
