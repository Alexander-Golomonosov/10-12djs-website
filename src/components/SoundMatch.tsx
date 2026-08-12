"use client";

import { useEffect, useRef, useState } from "react";

type Card = { genre: string; label: string; src: string };

const GENRES: { id: string; label: string }[] = [
  { id: "techno", label: "ТЕХНО" },
  { id: "breakbeat", label: "БРЕЙКБИТ" },
  { id: "dnb", label: "DNB" },
  { id: "house", label: "ХАУС" },
  { id: "hardtek", label: "ХАРДТЕК" },
  { id: "jungle", label: "ДЖАНГЛ" },
];

const BASE: Card[] = GENRES.flatMap((g) => [0, 1].map((i) => ({
  genre: g.id,
  label: g.label,
  src: `/quiz/soundmatch/${g.id}_${i}.mp3`,
})));

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function fmt(s: number): string {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${m}:${ss}`;
}

export default function SoundMatch() {
  const [deck, setDeck] = useState<Card[]>(() => shuffle(BASE));
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [lock, setLock] = useState(false);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [muted, setMuted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [running]);

  function stopAudio() {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
  }

  function play(card: Card, idx: number) {
    if (muted) return;
    const a = new Audio(card.src);
    a.volume = 0.9;
    a.addEventListener("ended", () => {
      setOpenIdx((cur) => (cur === idx && !matched.has(idx) ? null : cur));
    });
    a.play().catch(() => {});
    audioRef.current = a;
  }

  function showToast(text: string) {
    setToast(text);
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(null), 1200);
  }

  function handleClick(idx: number) {
    const card = deck[idx];
    if (lock || matched.has(idx) || openIdx === idx) return;
    setRunning(true);

    const prevIdx = openIdx;
    const isMatch = prevIdx !== null && deck[prevIdx].genre === card.genre;

    if (prevIdx !== null) { stopAudio(); setOpenIdx(null); }

    setOpenIdx(idx);
    play(card, idx);

    if (prevIdx !== null) setMoves((v) => v + 1);

    if (isMatch && prevIdx !== null) {
      setLock(true);
      const a = prevIdx;
      const b = idx;
      const complete = matched.size + 2 === deck.length;
      setTimeout(() => {
        setMatched((m) => { const n = new Set(m); n.add(a); n.add(b); return n; });
        showToast(card.label);
        setLock(false);
        setOpenIdx(null);
        if (complete) setRunning(false);
      }, 350);
    }
  }

  function newGame() {
    stopAudio();
    setDeck(shuffle(BASE));
    setMatched(new Set());
    setOpenIdx(null);
    setLock(false);
    setMoves(0);
    setSeconds(0);
    setRunning(false);
    setToast(null);
  }

  function toggleMute() {
    setMuted((m) => {
      const nm = !m;
      if (nm) stopAudio();
      return nm;
    });
  }

  const won = matched.size === deck.length;
  const pairsTotal = deck.length / 2;

  return (
    <div className="relative">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted">
          ХОДЫ <b className="ml-2 text-foreground">{moves}</b>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted">
          ВРЕМЯ <b className="ml-2 text-foreground">{fmt(seconds)}</b>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted">
          ПАРЫ <b className="ml-2 text-foreground">{matched.size}/{pairsTotal}</b>
        </span>
        <button
          onClick={newGame}
          className="border-2 border-accent bg-accent px-5 py-2 text-[10px] font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
        >
          НОВАЯ ИГРА
        </button>
        <button
          onClick={toggleMute}
          className="border-2 border-accent/40 px-5 py-2 text-[10px] font-bold tracking-[0.2em] text-accent transition-all hover:border-accent"
        >
          {muted ? "ЗВУК: ВЫКЛ" : "ЗВУК: ВКЛ"}
        </button>
      </div>

      <div className="sm-board">
        {deck.map((card, idx) => {
          const flipped = openIdx === idx || matched.has(idx);
          const isMatched = matched.has(idx);
          return (
            <div
              key={idx}
              className={`sm-card ${flipped ? "sm-flipped" : ""} ${isMatched ? "sm-matched" : ""}`}
              onClick={() => handleClick(idx)}
            >
              <div className="sm-inner">
                <div className="sm-face sm-back">
                  <span className="text-accent" style={{ fontSize: 26, fontWeight: 800 }}>
                    10/12
                  </span>
                  <span className="mt-2 text-muted" style={{ fontSize: 10, letterSpacing: "0.3em" }}>
                    DJ&apos;S
                  </span>
                </div>
                <div className="sm-face sm-front">
                  <span className="sm-sym">&#9658;</span>
                  <div className="sm-eq">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`sm-toast ${toast ? "show" : ""}`}>{toast}</div>

      {won && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="border-2 border-accent bg-card p-10 text-center shadow-[0_0_40px_rgba(255,66,66,.3)]">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● SET COMPLETE</span>
            <h2 className="mt-4 text-3xl font-black tracking-tighter">ВСЕ ПАРЫ НАЙДЕНЫ</h2>
            <p className="mt-3 text-xs font-semibold tracking-wider text-muted/80">
              ХОДЫ: {moves} · ВРЕМЯ: {fmt(seconds)}
            </p>
            <button
              onClick={newGame}
              className="mt-8 inline-block border-2 border-accent bg-accent px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-accent-hover"
            >
              ЕЩЁ РАЗ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
