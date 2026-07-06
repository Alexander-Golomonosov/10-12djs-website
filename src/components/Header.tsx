import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/news", label: "Новости" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent/20 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="10/12DJ'S"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="hidden text-[10px] font-bold tracking-[0.2em] sm:inline">10/12DJ&apos;S</span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-muted">
          МЕНЮ
          <svg
            className="h-3 w-3 transition group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="absolute right-4 top-full mt-2 flex flex-col gap-2 border border-accent/40 bg-background p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
