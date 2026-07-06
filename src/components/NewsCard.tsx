import Link from "next/link";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function NewsCard({ title, excerpt, date, slug }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover">
        <time className="text-xs text-muted">{date}</time>
        <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Читать дальше
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </article>
    </Link>
  );
}
