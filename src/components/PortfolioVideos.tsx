const defs = [
  { n: "01", ratio: "aspect-video" },
  { n: "02", ratio: "aspect-video" },
  { n: "03", ratio: "aspect-video" },
  { n: "04", ratio: "aspect-video" },
  { n: "10", ratio: "aspect-video" },
  { n: "05", ratio: "aspect-[9/16]" },
  { n: "06", ratio: "aspect-[9/16]" },
  { n: "07", ratio: "aspect-[9/16]" },
  { n: "08", ratio: "aspect-[9/16]" },
  { n: "09", ratio: "aspect-[3/4]" },
  { n: "12", ratio: "aspect-[9/16]" },
  { n: "13", ratio: "aspect-[9/16]" },
  { n: "14", ratio: "aspect-[9/16]" },
];

const videos = defs.map((v) => ({
  src: `/portfolio/video-${v.n}.mp4`,
  poster: `/portfolio/poster-${v.n}.jpg`,
  ratio: v.ratio,
  alt: `10/12 DJ'S — ВИДЕО ${v.n}`,
}));

const wideColumn = videos.filter((v) => v.src.endsWith("-01.mp4") || v.src.endsWith("-02.mp4") || v.src.endsWith("-03.mp4") || v.src.endsWith("-04.mp4") || v.src.endsWith("-10.mp4") || v.src.endsWith("-08.mp4") || v.src.endsWith("-13.mp4"));

const reelsColumnA = videos.filter((v) => v.src.endsWith("-05.mp4") || v.src.endsWith("-06.mp4") || v.src.endsWith("-07.mp4"));

const reelsColumnB = videos.filter((v) => v.src.endsWith("-09.mp4") || v.src.endsWith("-12.mp4") || v.src.endsWith("-14.mp4"));

const mobileOrder = [
  "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "12", "13", "14",
].map((n) => videos.find((v) => v.src.endsWith(`-${n}.mp4`))).filter(
  (v): v is (typeof videos)[number] => v !== undefined
);

function VideoItem({ v }: { v: (typeof videos)[number] }) {
  return (
    <div
      className={`${v.ratio} overflow-hidden border border-border/20 bg-card transition-colors hover:border-accent/40`}
    >
      <video
        src={v.src}
        poster={v.poster}
        className="h-full w-full object-contain"
        controls
        preload="metadata"
        playsInline
      />
    </div>
  );
}

export default function PortfolioVideos() {
  return (
    <div className="mt-20">
      <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
        ● LIVE-ЗАПИСИ
      </span>
      <h2 className="mt-2 text-3xl font-black tracking-tighter">ВИДЕО</h2>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-6 max-w-3xl text-xs font-semibold leading-relaxed tracking-wider text-muted">
        ЖИВЫЕ ЗАПИСИ СЕТОВ НА НАШИХ ПЛОЩАДКАХ — БАРЫ, КЛУБЫ И РЕЙВЫ СПБ.
      </p>

      {/* mobile: single column, videos in sequence */}
      <div className="mt-10 grid grid-cols-1 gap-4 lg:hidden">
        {mobileOrder.map((v) => (
          <VideoItem key={v.src} v={v} />
        ))}
      </div>

      {/* desktop: three independent columns */}
      <div className="mt-10 hidden items-start gap-4 lg:flex">
        <div className="flex w-full flex-col gap-4">
          {wideColumn.map((v) => (
            <VideoItem key={v.src} v={v} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-4">
          {reelsColumnA.map((v) => (
            <VideoItem key={v.src} v={v} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-4">
          {reelsColumnB.map((v) => (
            <VideoItem key={v.src} v={v} />
          ))}
        </div>
      </div>
    </div>
  );
}