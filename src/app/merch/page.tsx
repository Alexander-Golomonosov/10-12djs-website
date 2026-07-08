import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "МЕРЧ | 10/12DJ'S",
};

const items = [
  {
    title: "СТИКЕРПАК",
    subtitle: "ФИРМЕННЫЕ СТИКЕРЫ 10/12",
    price: "499 ₽",
    description: "НАБОР СТИКЕРОВ С ЛОГОТИПАМИ И ГРАФФИТИ-ЭЛЕМЕНТАМИ 10/12DJ'S. КЛЕЙ НА НОУТ, ЧЕМОДАН, ХОЛОДИЛЬНИК — КУДА УГОДНО.",
    image: "/merch-tshirt.jpg",
    tags: ["СТИКЕРЫ", "ВИНИЛ", "5 ШТ"],
  },
  {
    title: "РЕЙВ-ЧЕМОДАНЧИК",
    subtitle: "НАБОР ДЛЯ ВЫЕЗДНОЙ ТУСОВКИ",
    price: "2 990 ₽",
    description: "ВСЁ ДЛЯ ДЛИТЕЛЬНОЙ ВЫЕЗДНОЙ ВЕЧЕРИНКИ В ОДНОМ ЧЕМОДАНЕ: ДИДЖЕЙСКИЙ НАБОР, ДЕКОР, СЮРПРИЗЫ И ЗАРЯД ЭНЕРГИИ.",
    image: null,
    tags: ["НАБОР", "ТУСОВКА", "ВСЁ ВКЛЮЧЕНО"],
  },
  {
    title: "ФУТБОЛКА С ПРИНТОМ",
    subtitle: "OVERSIZE С ЛОГОТИПОМ",
    price: "2 499 ₽",
    description: "ХЛОПКОВАЯ ФУТБОЛКА OVERSIZE С ОРИГИНАЛЬНЫМ ПРИНТОМ 10/12DJ'S. ДОСТУПНА В ЧЁРНОМ И БЕЛОМ ЦВЕТАХ.",
    image: "/merch-tshirt.jpg",
    tags: ["ОДЕЖДА", "ХЛОПОК", "OVERSIZE"],
  },
];

export default function Merch() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-20 -left-10 rotate-[-12deg]">MERCH</span>
      <span className="graffiti-tag-light" style={{ bottom: '20%', right: '-10%', rotate: '15deg', animationDelay: '-4s' }}>SWAG</span>

      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">МЕРЧ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ФИРМЕННАЯ ПРОДУКЦИЯ 10/12</p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col border border-accent/10 bg-card/50">
            <div className="aspect-[3/4] flex items-center justify-center border-b border-accent/10 bg-card/80">
              {item.image ? (
                <Image src={item.image} alt={item.title} width={400} height={533} className="h-full w-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-3 p-8 text-center">
                  <span className="text-4xl opacity-20">◈</span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-muted/40">ФОТО СКОРО</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">{item.subtitle}</span>
                  <h2 className="mt-1 text-lg font-black tracking-tighter">{item.title}</h2>
                </div>
                <span className="shrink-0 text-sm font-bold tracking-wider text-accent">{item.price}</span>
              </div>
              <div className="mt-3 h-px w-full bg-accent/20" />
              <p className="mt-3 text-[10px] font-semibold leading-relaxed tracking-wider text-muted">
                {item.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="border border-accent/20 px-2 py-1 text-[8px] font-bold tracking-[0.15em] text-accent/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t-2 border-accent/20 pt-12 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">⏣ КАК КУПИТЬ</span>
        <h2 className="mt-4 text-3xl font-black tracking-tighter">СВЯЖИТЕСЬ С НАМИ</h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
        <p className="mx-auto mt-6 max-w-lg text-[10px] font-semibold leading-relaxed tracking-wider text-muted">
          ДЛЯ ЗАКАЗА МЕРЧА ПИШИТЕ В TELEGRAM ИЛИ ЗВОНИТЕ — ДОГОВОРИМСЯ О ДОСТАВКЕ ИЛИ ВСТРЕЧЕ
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://t.me/fuckengod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-10 py-4 text-[10px] font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
          >
            НАПИСАТЬ В TG →
          </a>
          <a
            href="tel:89500408404"
            className="inline-flex items-center gap-2 border-2 border-border/40 px-10 py-4 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
          >
            ПОЗВОНИТЬ
          </a>
        </div>
      </div>
    </div>
  );
}
