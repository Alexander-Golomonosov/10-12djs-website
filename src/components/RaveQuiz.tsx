"use client";

import { useState } from "react";
import Link from "next/link";

type Archetype = "A" | "B" | "C" | "D";

type Answer = {
  text: string;
  type: Archetype;
};

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

const quizData: Question[] = [
  {
    id: 1,
    question: "ТВОЯ ИДЕАЛЬНАЯ ПОЗИЦИЯ НА ЛОКАЦИИ:",
    answers: [
      { text: "ПРЯМО ЛИЦОМ В САБВУФЕР, ЧТОБЫ РЕБРА ТРЕЩАЛИ.", type: "A" },
      { text: "В САМОМ ЦЕНТРЕ ЗАБИТОГО ТАНЦПОЛА, В ЭПИЦЕНТРЕ ДВИЖЕНИЯ.", type: "B" },
      { text: "ЧУТЬ ПООДАЛЬ, ВОЗЛЕ ПРОЕКТОРА ИЛИ ПУЛЬТА — ОЦЕНИВАЮ КАРТИНКУ И СВЕТ.", type: "C" },
      { text: "НА БЭКСТЕЙДЖЕ ИЛИ В КУРИЛКЕ, ГДЕ РЕШАЮТСЯ ДЕЛА.", type: "D" },
    ],
  },
  {
    id: 2,
    question: "НА ЧАСАХ 04:00, ТЕМП РАЗОГНАЛИ ДО 160 BPM. ТВОЁ СОСТОЯНИЕ?",
    answers: [
      { text: "НАКОНЕЦ-ТО НОРМАЛЬНАЯ МУЗЫКА НАЧАЛАСЬ, ВРУБАЮ РЕЖИМ БЕРСЕРКА.", type: "A" },
      { text: "МОКРЫЙ НАСКВОЗЬ, ПЬЮ ВОДУ, ПРОДОЛЖАЮ УНИЧТОЖАТЬ КРОССОВКИ.", type: "B" },
      { text: "АНАЛИЗИРУЮ СТРУКТУРУ ЛОМАНОГО БИТА И ТО, КАК ЛЁГ ГЛИТЧ НА ЭКРАН.", type: "C" },
      { text: "СПОКОЙНО НАБЛЮДАЮ ЗА ХАОСОМ, ЭТО КОНТРОЛИРУЕМЫЙ ВЗРЫВ.", type: "D" },
    ],
  },
  {
    id: 3,
    question: "НА ВХОДЕ ЖЕСТКИЙ ДОСМОТР. ТВОИ МЫСЛИ?",
    answers: [
      { text: "БЫСТРЕЕ БЫ ПРОЙТИ, ТАМ УЖЕ НИЗЫ ВАЛЯТ.", type: "A" },
      { text: "ОТЛИЧНО. МЕНЬШЕ НЕАДЕКВАТОВ — ЧИЩЕ АТМОСФЕРА НА ТАНЦПОЛЕ.", type: "B" },
      { text: "ОЦЕНИВАЮ, НАСКОЛЬКО ДИЗАЙН ВХОДНОЙ ЗОНЫ СООТВЕТСТВУЕТ КОНЦЕПТУ.", type: "C" },
      { text: "КИВАЮ ОХРАНЕ, МЕНЯ И ТАК ВСЕ ЗНАЮТ.", type: "D" },
    ],
  },
  {
    id: 4,
    question: "ПОД КАКУЮ МУЗЫКУ ТЫ ГОТОВ ПРОВЕСТИ СЛЕДУЮЩИЕ 4 ЧАСА БЕЗ ОСТАНОВКИ?",
    answers: [
      { text: "ЛОМАНЫЙ, ГРЯЗНЫЙ БРЕЙКБИТ И ТЯЖЕЛЫЙ ДАБСТЕП.", type: "A" },
      { text: "ПЛОТНОЕ, ГИПНОТИЧЕСКОЕ ТЕХНО, ВВОДЯЩЕЕ В ТРАНС.", type: "B" },
      { text: "ИНДУСТРИАЛЬНЫЙ ИНДАСТРИАЛ И ЭКСПЕРИМЕНТАЛЬНЫЙ ГЛИТЧ.", type: "C" },
      { text: "ХОРОШИЙ КАЧЕСТВЕННЫЙ ХАУС ДЛЯ РАЗГОНА ИЛИ ЖЕСТКИЙ ХАРДКОР.", type: "D" },
    ],
  },
  {
    id: 5,
    question: "ЧТО НА ТЕБЕ НАДЕТО?",
    answers: [
      { text: "СТАРАЯ УДОБНАЯ ОДЕЖДА, КОТОРУЮ НЕ ЖАЛКО ЗАЛИТЬ ПОТОМ ИЛИ ПОРВАТЬ.", type: "A" },
      { text: "ТЕХНОЛОГИЧНЫЙ ОВЕРСАЙЗ, МЕРЧ 10/12, НИЧЕГО ЛИШНЕГО.", type: "B" },
      { text: "МОНОХРОМНЫЙ АУТФИТ СО СЛОЖНЫМ КРОЕМ, ТЕМНЫЕ ОЧКИ (ДАЖЕ НОЧЬЮ).", type: "C" },
      { text: "ПОЛНОСТЬЮ ЧЕРНЫЙ ПРАКТИЧНЫЙ ШМОТ, ЧТОБЫ СЛИТЬСЯ СО СТЕНОЙ.", type: "D" },
    ],
  },
  {
    id: 6,
    question: "ЗАЧЕМ ТЫ ВООБЩЕ ПРИШЕЛ НА САЙТ 10/12DJ'S?",
    answers: [
      { text: "УЗНАТЬ, КОГДА СЛЕДУЮЩИЙ РАЗРЫВ САБВУФЕРОВ.", type: "A" },
      { text: "ПРОВЕРИТЬ ДАТЫ РЕЙВОВ И КУПИТЬ БИЛЕТ В ЧИСЛЕ ПЕРВЫХ.", type: "B" },
      { text: "ПОСМОТРЕТЬ ГАЛЕРЕЮ И ОЦЕНИТЬ ВИЗУАЛ КОМАНДЫ.", type: "C" },
      { text: "ГЛЯНУТЬ РАЗДЕЛ «ШКОЛА», ПОРА УЖЕ САМОМУ ВСТАВАТЬ ЗА ПУЛЬТ.", type: "D" },
    ],
  },
  {
    id: 7,
    question: "ДИДЖЕЙ ДЕЛАЕТ РЕЗКИЙ СРЕЗ ЧАСТОТ (KILL BASS) ПЕРЕД ДРОПОМ. ТВОЯ РЕАКЦИЯ?",
    answers: [
      { text: "ЗАМИРАЮ В ЯРОСТИ И ЖДУ, КОГДА УДАРНАЯ ВОЛНА ВЕРНЕТСЯ.", type: "A" },
      { text: "КРИЧУ ВМЕСТЕ С ТОЛПОЙ, АККУМУЛИРУЮ ЭНЕРГИЮ.", type: "B" },
      { text: "ОТМЕЧАЮ ТЕХНИЧЕСКУЮ ЧИСТОТУ СВЕДЕНИЯ.", type: "C" },
      { text: "УЛЫБАЮСЬ — КЛАССИЧЕСКИЙ ТРЮК, НО РАБОТАЕТ БЕЗОТКАЗНО.", type: "D" },
    ],
  },
  {
    id: 8,
    question: "КАКОЕ ОПИСАНИЕ ИДЕАЛЬНО ПОДХОДИТ ДЛЯ ТВОЕЙ ИДЕАЛЬНОЙ ТУСОВКИ?",
    answers: [
      { text: "СТЕНЫ ДРОЖАТ, ШТУКАТУРКА СЫПЛЕТСЯ НА ГОЛОВУ.", type: "A" },
      { text: "СТОПРОЦЕНТНАЯ ОТДАЧА ТАНЦПОЛА БЕЗ КАПЛИ ХИМИИ, ТОЛЬКО ПОТ И ЗВУК.", type: "B" },
      { text: "КОНЦЕПТУАЛЬНЫЙ СВЕТ, СТРОГИЙ МОНОХРОМ, ЭСТЕТИКА ПРОМЗОНЫ.", type: "C" },
      { text: "ЗАКРЫТОЕ МЕРОПРИЯТИЕ «ДЛЯ СВОИХ», ГДЕ ВСЕ ПОНИМАЮТ ДРУГ ДРУГА.", type: "D" },
    ],
  },
  {
    id: 9,
    question: "ЛОКАЦИЯ РЕЙВА — ЗАБРОШЕННЫЙ ЗАВОД ИЛИ СЫРОЙ АНГАР. ТВОИ ДЕЙСТВИЯ ПРИ ВХОДЕ?",
    answers: [
      { text: "ИЩУ, ГДЕ СТОЯТ САМЫЕ МОЩНЫЕ КОЛОНКИ.", type: "A" },
      { text: "СДАЮ КУРТКУ И СРАЗУ ИДУ РАЗМИНАТЬСЯ НА ТАНЦПОЛ.", type: "B" },
      { text: "ФОТОГРАФИРУЮ ТЕКСТУРУ ОБЛУПИВШЕЙСЯ КРАСКИ НА БЕТОНЕ.", type: "C" },
      { text: "ИДУ ЗДОРОВАТЬСЯ С КОМАНДОЙ У ПУЛЬТА.", type: "D" },
    ],
  },
  {
    id: 10,
    question: "ЧТО ТЫ СДЕЛАЕШЬ, ЕСЛИ ТРЕК ДИДЖЕЯ ТЕБЕ НЕ ПОНРАВИЛСЯ?",
    answers: [
      { text: "ПЕРЕТЕРПЛЮ, ЕСЛИ В СЛЕДУЮЩЕМ БУДЕТ НОРМАЛЬНЫЙ БАСС.", type: "A" },
      { text: "НЕВАЖНО, Я ДЕРЖУ РИТМ СВОИМ ТЕЛОМ В ЛЮБОМ СЛУЧАЕ.", type: "B" },
      { text: "СДЕЛАЮ МЫСЛЕННУЮ ПОМЕТКУ О КАЧЕСТВЕ СЕЛЕКЦИИ.", type: "C" },
      { text: "ПОЙДУ ПОКУРЮ ИЛИ ПРОВЕРЮ, КАК ДЕЛА НА БАРЕ/ВХОДНОЙ ЗОНЕ.", type: "D" },
    ],
  },
];

const resultsData: Record<
  Archetype,
  { title: string; description: string }
> = {
  A: {
    title: "ЖЕЛЕЗОБЕТОННЫЙ БАССХЕД",
    description:
      "ТВОИ БАРАБАННЫЕ ПЕРЕПОНКИ ЯВНО СДЕЛАНЫ ИЗ СТАЛИ. ТЕБЕ НЕ НУЖНЫ КРАСИВЫЕ КОНЦЕПЦИИ И СЛОЖНЫЕ СВЕТОВЫЕ ИНСТАЛЛЯЦИИ — ДАЙ ТОЛЬКО ПЛОТНЫЙ НИЗ, ОТ КОТОРОГО ВИБРИРУЮТ ВНУТРЕННОСТИ. ТВОЕ МЕСТО — В ПЕРВОМ РЯДУ У ЗВУКА НА РЕЙВЕ.",
  },
  B: {
    title: "ИДЕЙНЫЙ ТРЕЗВЕННИК / ЧИСТЫЙ ПРОВОДНИК",
    description:
      "ТЫ — ТОПЛИВО НАШЕГО ТАНЦПОЛА. ПРИХОДИШЬ ЗА ЧИСТЫМ, ПЕРВОБЫТНЫМ РЕЙВОМ. НИКАКОГО ДОПИНГА, ТОЛЬКО ВЫНОСЛИВОСТЬ И МУЗЫКА. ПОКА ТАКИЕ КАК ТЫ ТОПЧУТ ПОЛ, ЭТА КУЛЬТУРА ЖИВА.",
  },
  C: {
    title: "ГЛИТЧ-ЭСТЕТ",
    description:
      "ТЫ ВИДИШЬ РЕЙВ КАК АУДИОВИЗУАЛЬНОЕ ИСКУССТВО. БРУТАЛИЗМ, ГЕОМЕТРИЯ, ИГРА ТЕНЕЙ И ЛОМАНЫЕ РИТМЫ — ЭТО ТВОЯ ПОДЗАРЯДКА. СКОРЕЕ ВСЕГО, ТЫ ОЦЕНИВАЕШЬ ЭТОТ САЙТ С ТОЧКИ ЗРЕНИЯ СЕТКИ И ВЕРСТКИ. ТВОЙ ВЫБОР — СТИЛЬНЫЙ МОНОХРОМ И ЧИСТЫЙ КОНЦЕПТ.",
  },
  D: {
    title: "ТЕХНО-ПАРТИЗАН",
    description:
      "ТЫ СЛИШКОМ ГЛУБОКО В ЭТОЙ СИСТЕМЕ. ТЕБЯ СЛОЖНО УДИВИТЬ НОВЫМ ПРИВОЗОМ ИЛИ МОЩНЫМ ЗВУКОМ — ТЫ ВИДЕЛ ВСЁ. ТЫ ДЕРЖИШЬСЯ В ТЕНИ, НО ИМЕННО ТЫ СОЗДАЕШЬ ПРАВИЛЬНЫЙ ВАЙБ «ДЛЯ СВОИХ».",
  },
};

const PRIORITY: Archetype[] = ["B", "A", "C", "D"];

function getResult(count: Record<Archetype, number>): Archetype {
  let max = 0;
  let result: Archetype = "A";
  for (const key of PRIORITY) {
    if (count[key] > max) {
      max = count[key];
      result = key;
    }
  }
  return result;
}

export default function RaveQuiz() {
  const [step, setStep] = useState<"quiz" | "result">("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Archetype[]>([]);

  function handleAnswer(type: Archetype) {
    const next = [...answers, type];
    if (current < quizData.length - 1) {
      setAnswers(next);
      setCurrent(current + 1);
    } else {
      setAnswers(next);
      setStep("result");
    }
  }

  function handleReset() {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
  }

  if (step === "result") {
    const count: Record<Archetype, number> = { A: 0, B: 0, C: 0, D: 0 };
    for (const a of answers) count[a]++;
    const result = getResult(count);
    const data = resultsData[result];
    const shareUrl = "https://10-12djs-website.vercel.app/quiz";
    const shareText = `Я ПРОШЁЛ РЕЙВ-ТЕСТ ОТ 10/12DJ'S И ПОЛУЧИЛ: ${data.title}! ПРОЙДИ ЕГО ТЫ: ${shareUrl}`;

    return (
      <div className="mx-auto w-full max-w-2xl border-2 border-accent/20 bg-card p-8 sm:p-12">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
          ● РЕЗУЛЬТАТ
        </span>
        <h2 className="mt-6 text-2xl font-black tracking-tighter sm:text-3xl">
          {data.title}
        </h2>
        <div className="mt-4 h-px w-full bg-accent/30" />
        <p className="mt-6 text-xs font-semibold leading-relaxed tracking-wider text-muted/80 sm:text-sm">
          {data.description}
        </p>
        <div className="mt-8 h-px w-full bg-border/30" />
        <div className="mt-8">
          <span className="text-[10px] font-bold tracking-[0.3em] text-muted/60">
            ПОДЕЛИТЬСЯ РЕЗУЛЬТАТОМ
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border/40 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
            >
              TELEGRAM
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border/40 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
            >
              WHATSAPP
            </a>
            <a
              href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("РЕЙВ-ТЕСТ 10/12DJ'S")}&description=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border/40 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
            >
              VK
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handleReset}
            className="border-2 border-accent bg-accent px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
          >
            ПРОЙТИ ЗАНОВО
          </button>
          <Link
            href="/news"
            className="border-2 border-border/40 px-8 py-4 text-center text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
          >
            ИДТИ НА РЕЙВ
          </Link>
        </div>
      </div>
    );
  }

  const q = quizData[current];

  return (
    <div className="mx-auto w-full max-w-2xl border-2 border-accent/20 bg-card p-8 sm:p-12">
      <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
        ● ВОПРОС {String(current + 1).padStart(2, "0")} /{" "}
        {String(quizData.length).padStart(2, "0")}
      </span>
      <h2 className="mt-6 text-lg font-black tracking-tighter sm:text-xl">
        {q.question}
      </h2>
      <div className="mt-8 divide-y divide-border/30 border-t border-b border-border/30">
        {q.answers.map((a, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(a.type)}
            className="group w-full px-1 py-5 text-left text-xs font-semibold tracking-wider text-muted transition-all hover:bg-foreground hover:text-background sm:text-sm"
          >
            {a.text}
          </button>
        ))}
      </div>
    </div>
  );
}
