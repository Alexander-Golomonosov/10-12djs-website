const videos = [
  { n: "01", ratio: "aspect-video" },
  { n: "02", ratio: "aspect-video" },
  { n: "03", ratio: "aspect-video" },
  { n: "04", ratio: "aspect-video" },
  { n: "05", ratio: "aspect-[9/16]" },
  { n: "06", ratio: "aspect-[9/16]" },
  { n: "07", ratio: "aspect-[9/16]" },
  { n: "08", ratio: "aspect-[9/16]" },
  { n: "09", ratio: "aspect-[3/4]" },
  { n: "10", ratio: "aspect-video" },
  { n: "11", ratio: "aspect-[9/16]" },
  { n: "12", ratio: "aspect-[9/16]" },
].map((v) => ({
  src: `/portfolio/video-${v.n}.mp4`,
  poster: `/portfolio/poster-${v.n}.jpg`,
  ratio: v.ratio,
  alt: `10/12 DJ'S — ВИДЕО ${v.n}`,
}));

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
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <div
            key={v.src}
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
        ))}
      </div>
    </div>
  );
}