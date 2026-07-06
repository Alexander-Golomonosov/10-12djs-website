export default function Footer() {
  return (
    <footer className="border-t-2 border-accent/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-xs font-semibold tracking-widest text-muted">
          &copy; {new Date().getFullYear()} 10/12DJ&apos;S
        </p>
        <div className="flex items-center gap-8">
          {["Instagram", "SoundCloud", "Mixcloud", "YouTube"].map((s) => (
            <a
              key={s}
              href={`https://${s.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest text-muted transition-colors hover:text-accent"
            >
              {s.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
