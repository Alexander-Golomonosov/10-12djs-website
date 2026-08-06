export type GenreId =
  | "techno"
  | "breakbeat"
  | "jungle"
  | "dnb"
  | "breakcore"
  | "ukg";

export interface GenreDef {
  id: GenreId;
  name: string;
  hint: string;
  bpm: number;
  src?: string;
}

export const GENRES: Record<GenreId, GenreDef> = {
  techno: {
    id: "techno",
    name: "ТЕХНО",
    hint: "РОВНЫЙ 4/4 КИК, ОФФБИТ-ХЭТЫ, ГИПНОТИЧЕСКИЙ БАС — 128–140 BPM",
    bpm: 135,
  },
  breakbeat: {
    id: "breakbeat",
    name: "БРЕЙКБИТ",
    hint: "ФАНКОВЫЙ ЛОМАНЫЙ БИТ, СИНКОПА, ПРИВОЗНОЙ БРЕЙК — 130–160 BPM",
    bpm: 150,
  },
  jungle: {
    id: "jungle",
    name: "ДЖАНГЛ",
    hint: "ПЛОТНЫЙ АМЕН-БРЕЙК, РАГГА-СТАБЫ, ГЛУБОКИЙ СУБ — ~170 BPM",
    bpm: 170,
  },
  dnb: {
    id: "dnb",
    name: "ДРАМ-Н-БЕЙС",
    hint: "ХАЛФТАЙМ-БИТ, ЧИСТЫЕ СНАРЫ, РОЛЛИНГ-СУБ — 170–180 BPM",
    bpm: 174,
  },
  breakcore: {
    id: "breakcore",
    name: "БРЕЙККОР",
    hint: "ИСТЕРИЧНЫЙ УСКОРЕННЫЙ БРЕЙК, СНАР-БУРСТЫ — 200–250 BPM",
    bpm: 220,
  },
  ukg: {
    id: "ukg",
    name: "UK GARAGE",
    hint: "СВИНГ, 2-STEP, КАЧАЮЩИЙСЯ БАС — 130–140 BPM",
    bpm: 134,
  },
};

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function renderGenre(ctx: AudioContext, id: GenreId): AudioBuffer {
  const sr = ctx.sampleRate;
  const g = GENRES[id];
  const sixteenth = 60 / g.bpm / 4;
  const barDur = sixteenth * 16;
  const bars = Math.max(4, Math.ceil(10 / barDur));
  const length = Math.ceil(barDur * bars * sr);
  const data = new Float32Array(length);
  const rng = mulberry32(1337 + id.length * 97);

  const atT = (t: number, fn: (s: number) => void) => {
    const s = Math.round(t * sr);
    if (s >= 0 && s < length) fn(s);
  };
  const at = (bar: number, step: number, fn: (s: number) => void) =>
    atT((bar * 16 + step) * sixteenth, fn);

  const writeKick = (s: number, amp = 1) => {
    const n = Math.floor(0.4 * sr);
    let ph = 0;
    for (let i = 0; i < n && s + i < length; i++) {
      const t = i / sr;
      const f = 150 * Math.exp(-t * 22) + 36;
      ph += (2 * Math.PI * f) / sr;
      const env = Math.exp(-t * 18);
      data[s + i] += Math.sin(ph) * env * amp;
    }
  };

  const writeSnare = (s: number, amp = 1) => {
    const n = Math.floor(0.22 * sr);
    let ph = 0;
    for (let i = 0; i < n && s + i < length; i++) {
      const t = i / sr;
      const env = Math.exp(-t * 25);
      const noise = rng() * 2 - 1;
      ph += (2 * Math.PI * 190) / sr;
      data[s + i] += (noise * 0.8 + Math.sin(ph) * 0.45) * env * amp;
    }
  };

  const writeHat = (s: number, amp = 1, open = false) => {
    const n = Math.floor((open ? 0.3 : 0.06) * sr);
    let lp = 0;
    for (let i = 0; i < n && s + i < length; i++) {
      const t = i / sr;
      const env = Math.exp(-t * (open ? 16 : 60));
      const w = rng() * 2 - 1;
      lp += 0.22 * (w - lp);
      const hp = w - lp;
      data[s + i] += hp * env * amp * 0.6;
    }
  };

  const writeBass = (
    s: number,
    freq: number,
    dur: number,
    amp = 0.7,
    saw = false
  ) => {
    const n = Math.floor(dur * sr);
    let ph = 0;
    for (let i = 0; i < n && s + i < length; i++) {
      const t = i / sr;
      ph += (2 * Math.PI * freq) / sr;
      let o = Math.sin(ph);
      if (saw) o = 2 * ((ph / (2 * Math.PI)) % 1) - 1;
      const env = Math.min(1, t * 30) * Math.exp(-t * 2.5);
      data[s + i] += o * env * amp * 0.7;
    }
  };

  const writeStab = (s: number, base: number, dur: number, amp = 0.4) => {
    const n = Math.floor(dur * sr);
    const freqs = [base, base * 1.5, base * 2];
    const ph = [0, 0, 0];
    for (let i = 0; i < n && s + i < length; i++) {
      const t = i / sr;
      const env = Math.exp(-t * 9);
      let v = 0;
      for (let k = 0; k < 3; k++) {
        ph[k] += (2 * Math.PI * freqs[k]) / sr;
        v += Math.sin(ph[k]);
      }
      data[s + i] += (v / 3) * env * amp;
    }
  };

  switch (id) {
    case "techno":
      for (let b = 0; b < bars; b++) {
        for (let k = 0; k < 4; k++) at(b, k * 4, (s) => writeKick(s, 1));
        for (let h = 0; h < 8; h++) {
          const step = h * 2 + 1;
          if (step === 7 || step === 15) at(b, step, (s) => writeHat(s, 0.35, true));
          else at(b, step, (s) => writeHat(s, 0.45, false));
        }
        const root = b % 2 === 0 ? 41.2 : 43.65;
        for (let i = 0; i < 16; i++) at(b, i, (s) => writeBass(s, root, sixteenth * 0.8, 0.5));
      }
      break;

    case "breakbeat":
      for (let b = 0; b < bars; b++) {
        at(b, 0, (s) => writeKick(s, 1));
        at(b, 6, (s) => writeKick(s, 0.7));
        at(b, 10, (s) => writeKick(s, 0.85));
        at(b, 4, (s) => writeSnare(s, 1));
        at(b, 12, (s) => writeSnare(s, 1));
        at(b, 13, (s) => writeSnare(s, 0.4));
        for (let h = 0; h < 16; h += 2) at(b, h, (s) => writeHat(s, 0.4, false));
        at(b, 14, (s) => writeHat(s, 0.55, true));
        const root = b % 2 === 0 ? 41.2 : 49;
        at(b, 0, (s) => writeBass(s, root, sixteenth * 2.2, 0.5));
        at(b, 8, (s) => writeBass(s, root, sixteenth * 1.2, 0.45));
        at(b, 11, (s) => writeBass(s, root * 1.5, sixteenth * 1.0, 0.4));
      }
      break;

    case "jungle":
      for (let b = 0; b < bars; b++) {
        at(b, 0, (s) => writeKick(s, 1));
        at(b, 10, (s) => writeKick(s, 0.8));
        at(b, 4, (s) => writeSnare(s, 1));
        at(b, 6, (s) => writeSnare(s, 0.6));
        at(b, 7, (s) => writeSnare(s, 0.9));
        at(b, 12, (s) => writeSnare(s, 1));
        at(b, 14, (s) => writeSnare(s, 0.6));
        at(b, 15, (s) => writeSnare(s, 0.9));
        for (let h = 0; h < 16; h += 2) at(b, h, (s) => writeHat(s, 0.35, false));
        at(b, 8, (s) => writeStab(s, b % 2 === 0 ? 110 : 123.47, sixteenth * 5, 0.35));
        at(b, 0, (s) => writeBass(s, 36.71, sixteenth * 14, 0.5));
      }
      break;

    case "dnb":
      for (let b = 0; b < bars; b++) {
        at(b, 0, (s) => writeKick(s, 1));
        at(b, 8, (s) => writeKick(s, 1));
        at(b, 4, (s) => writeSnare(s, 1));
        at(b, 12, (s) => writeSnare(s, 1));
        for (let h = 0; h < 16; h += 2) at(b, h, (s) => writeHat(s, 0.3, false));
        at(b, 7, (s) => writeHat(s, 0.35, true));
        at(b, 15, (s) => writeHat(s, 0.35, true));
        const root = b % 2 === 0 ? 41.2 : 49;
        at(b, 0, (s) => writeBass(s, root, sixteenth * 15, 0.55));
      }
      break;

    case "breakcore":
      for (let b = 0; b < bars; b++) {
        at(b, 0, (s) => writeKick(s, 1));
        at(b, 8, (s) => writeKick(s, 1));
        for (let i = 2; i < 8; i++) at(b, i, (s) => writeSnare(s, i % 2 ? 0.75 : 0.9));
        for (let i = 10; i < 16; i++) at(b, i, (s) => writeSnare(s, i % 2 ? 0.75 : 0.9));
        for (let h = 0; h < 16; h++) at(b, h, (s) => writeHat(s, 0.4, false));
        at(b, 0, (s) => writeBass(s, 55, sixteenth * 1.6, 0.4));
        at(b, 4, (s) => writeBass(s, 55, sixteenth * 1.2, 0.4));
        at(b, 8, (s) => writeBass(s, 61.74, sixteenth * 1.6, 0.4));
        at(b, 12, (s) => writeBass(s, 61.74, sixteenth * 1.2, 0.4));
      }
      break;

    case "ukg":
      for (let b = 0; b < bars; b++) {
        at(b, 0, (s) => writeKick(s, 1));
        at(b, 10, (s) => writeKick(s, 0.85));
        at(b, 4, (s) => writeSnare(s, 0.9));
        at(b, 12, (s) => writeSnare(s, 0.9));
        for (let h = 0; h < 8; h++) {
          const step = h * 2 + 1;
          const delay = h % 2 === 1 ? 0.055 : 0;
          atT((b * 16 + step) * sixteenth + delay, (s) => writeHat(s, 0.45, false));
        }
        const root = b % 2 === 0 ? 41.2 : 43.65;
        at(b, 2, (s) => writeBass(s, root, sixteenth * 1.4, 0.55));
        at(b, 6, (s) => writeBass(s, root * 1.5, sixteenth * 1.2, 0.5));
        at(b, 10, (s) => writeBass(s, root, sixteenth * 1.6, 0.55));
        at(b, 14, (s) => writeBass(s, root * 2, sixteenth * 1.2, 0.45));
      }
      break;
  }

  let peak = 0;
  for (let i = 0; i < length; i++) {
    const a = Math.abs(data[i]);
    if (a > peak) peak = a;
  }
  if (peak > 0.9) {
    const g = 0.9 / peak;
    for (let i = 0; i < length; i++) data[i] *= g;
  }

  const buf = ctx.createBuffer(1, length, sr);
  buf.copyToChannel(data, 0);
  return buf;
}
