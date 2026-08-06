"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { GENRES, renderGenre, type GenreId } from "@/lib/genreSynth";

type Question = {
  id: number;
  genre: GenreId;
  options: GenreId[];
};

const QUESTIONS: Question[] = [
  { id: 1, genre: "techno", options: ["techno", "breakbeat", "ukg", "dnb"] },
  { id: 2, genre: "breakbeat", options: ["breakbeat", "jungle", "techno", "breakcore"] },
  { id: 3, genre: "jungle", options: ["jungle", "dnb", "breakbeat", "breakcore"] },
  { id: 4, genre: "dnb", options: ["dnb", "jungle", "breakcore", "ukg"] },
  { id: 5, genre: "ukg", options: ["ukg", "techno", "breakbeat", "jungle"] },
];

type Answer = { genre: GenreId; correct: boolean };

const bufferCache = new Map<GenreId, AudioBuffer>();

export default function GenreQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<GenreId | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const ctxRef = useRef<AudioContext | null>(null);
  const srcRef = useRef<AudioBufferSourceNode | null>(null);
  const elRef = useRef<HTMLAudioElement | null>(null);

  async function play() {
    stop();
    const genreId = QUESTIONS[current].genre;
    const def = GENRES[genreId];

    if (def.src) {
      const el = new Audio(def.src);
      elRef.current = el;
      el.onended = () => {
        elRef.current = null;
        setPlaying(false);
      };
      setPlaying(true);
      el.play().catch(() => setPlaying(false));
      return;
    }

    let ctx = ctxRef.current;
    if (!ctx) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctx = new AC();
      ctxRef.current = ctx;
    }
    await ctx.resume();

    let buf = bufferCache.get(genreId);
    if (!buf) {
      buf = renderGenre(ctx, genreId);
      bufferCache.set(genreId, buf);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.onended = () => {
      srcRef.current = null;
      setPlaying(false);
    };
    src.start();
    srcRef.current = src;
    setPlaying(true);
  }

  function stop() {
    if (srcRef.current) {
      try {
        srcRef.current.stop();
      } catch {
        /* already stopped */
      }
      srcRef.current = null;
    }
    if (elRef.current) {
      elRef.current.pause();
      elRef.current = null;
    }
    setPlaying(false);
  }

  function handleAnswer(genreId: GenreId) {
    if (selected) return;
    stop();
    setSelected(genreId);
    const correct = genreId === QUESTIONS[current].genre;
    setAnswers((prev) => [...prev, { genre: genreId, correct }]);
  }

  function handleNext() {
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function handleReset() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
    setCopied(false);
  }

  if (done) {
    const score = answers.filter((a) => a.correct).length;
    const shareUrl = "https://1012djs.ru/quiz/genre";
    const shareText = `Я ПРОШЁЛ АУДИО-ТЕСТ ОТ 10/12DJ'S И УГАДАЛ ${score} ИЗ ${QUESTIONS.length} ЖАНРОВ! ПРОВЕРЬ СВОИ УШИ: ${shareUrl}`;

    return (
      <div className="mx-auto w-full max-w-2xl border-2 border-accent/20 bg-card p-8 sm:p-12">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
          ● РЕЗУЛЬТАТ
        </span>
        <h2 className="mt-6 text-2xl font-black tracking-tighter sm:text-3xl">
          {score} / {QUESTIONS.length} ЖАНРОВ УГАДАНО
        </h2>
        <p className="mt-3 text-xs font-semibold tracking-wider text-muted/80">
          {score === QUESTIONS.length
            ? "ИДЕАЛЬНЫЙ СЛУХ. ТЫ НАСТОЯЩИЙ ЗНАКОК АНДЕГРАУНДА."
            : score >= 3
              ? "ОТЛИЧНЫЙ РЕЗУЛЬТАТ. УШИ НАСТРОЕНЫ ПРАВИЛЬНО."
              : score >= 1
                ? "НЕПЛОХОЕ НАЧАЛО. КАЧАЙ БОЛЬШЕ УЛИЧНЫХ ПЛОЩАДОК."
                : "ПОРА СХОДИТЬ НА РЕЙВ И НАМОТАТЬ БАС НА УСИ."}
        </p>
        <div className="mt-8 divide-y divide-border/30 border-t border-b border-border/30">
          {QUESTIONS.map((q, i) => {
            const a = answers[i];
            return (
              <div key={q.id} className="flex items-start gap-4 px-1 py-4">
                <span className={`text-sm font-black ${a.correct ? "text-accent" : "text-muted/40"}`}>
                  {a.correct ? "+" : "—"}
                </span>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted/60">
                    ВОПРОС {String(i + 1).padStart(2, "0")} · {GENRES[q.genre].name}
                  </span>
                  <p className="mt-1 text-[10px] font-semibold leading-relaxed tracking-wider text-muted/80">
                    {GENRES[q.genre].hint}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <span className="text-[10px] font-bold tracking-[0.3em] text-muted/60">
            ПОДЕЛИТЬСЯ РЕЗУЛЬТАТОМ
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareText);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="border border-border/40 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
            >
              {copied ? "СКОПИРОВАНО" : "📋 КОПИРОВАТЬ"}
            </button>
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
              href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("АУДИО-ТЕСТ 10/12DJ'S")}&description=${encodeURIComponent(shareText)}`}
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
            href="/quiz"
            className="border-2 border-border/40 px-8 py-4 text-center text-xs font-bold tracking-[0.2em] text-muted transition-all hover:border-accent/60 hover:text-foreground"
          >
            ВСЕ ТЕСТЫ
          </Link>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[current];
  const targetName = GENRES[q.genre].name;

  return (
    <div className="mx-auto w-full max-w-2xl border-2 border-accent/20 bg-card p-8 sm:p-12">
      <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
        ● ВОПРОС {String(current + 1).padStart(2, "0")} /{" "}
        {String(QUESTIONS.length).padStart(2, "0")}
      </span>
      <h2 className="mt-6 text-lg font-black tracking-tighter sm:text-xl">
        {selected ? targetName : "СЛУШАЙ ФРАГМЕНТ И УГАДАЙ ЖАНР"}
      </h2>
      <div className="mt-8">
        <button
          onClick={() => (playing ? stop() : play())}
          className={`group flex w-full items-center justify-center gap-3 border-2 px-6 py-5 text-xs font-bold tracking-[0.2em] transition-all ${
            playing
              ? "border-accent bg-accent text-white"
              : "border-border/40 text-muted hover:border-accent/60 hover:text-foreground"
          }`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            {playing ? (
              <rect x="6" y="5" width="4" height="14" />
            ) : (
              <path d="M6 4l14 8-14 8V4z" />
            )}
          </svg>
          {playing ? "СТОП" : "PLAY · СЛУШАТЬ ФРАГМЕНТ"}
        </button>
        {playing && (
          <span className="mt-3 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.3em] text-accent/70">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            ИГРАЕТ
          </span>
        )}
      </div>
      <div className="mt-8 divide-y divide-border/30 border-t border-b border-border/30">
        {q.options.map((opt, i) => {
          const isCorrect = selected !== null && opt === q.genre;
          const isWrong = selected === opt && opt !== q.genre;
          return (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              disabled={selected !== null}
              className={`w-full px-1 py-5 text-left text-xs font-semibold tracking-wider transition-all sm:text-sm ${
                isCorrect
                  ? "bg-foreground text-background"
                  : isWrong
                    ? "bg-accent/20 text-accent"
                    : selected !== null
                      ? "text-muted/40"
                      : "text-muted hover:bg-foreground hover:text-background"
              }`}
            >
              <span className="mr-3 text-accent/60">
                {String.fromCharCode(65 + i)}
              </span>
              {GENRES[opt].name}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-8">
          <div className="border-2 border-border/40 p-5">
            <span
              className={`text-[10px] font-bold tracking-[0.3em] ${
                selected === q.genre ? "text-accent" : "text-muted/60"
              }`}
            >
              {selected === q.genre ? "● ВЕРНО" : "● НЕ ВЕРНО"}
            </span>
            <p className="mt-3 text-xs font-semibold leading-relaxed tracking-wider text-muted/80">
              ЭТО {targetName}: {GENRES[q.genre].hint}.
            </p>
          </div>
          <button
            onClick={handleNext}
            className="mt-4 w-full border-2 border-accent bg-accent px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
          >
            {current < QUESTIONS.length - 1 ? "ДАЛЬШЕ →" : "УЗНАТЬ РЕЗУЛЬТАТ"}
          </button>
        </div>
      )}
    </div>
  );
}
