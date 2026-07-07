export default function Footer() {
  return (
    <footer className="border-t border-accent/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-muted">
          &copy; {new Date().getFullYear()} 10/12DJ&apos;S
        </p>
        <div className="flex items-center gap-6 sm:gap-8">
          {[
            { name: "TELEGRAM", url: "https://t.me/I0_12_djs" },
            { name: "VK", url: "https://vk.com/10djs12" },
            { name: "YOUTUBE", url: "https://www.youtube.com/@1012djs" },
            { name: "@fckngd1", url: "https://t.me/fckngd1" },
            { name: "@imenyuai", url: "https://t.me/imenyuai" },
          ].map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
