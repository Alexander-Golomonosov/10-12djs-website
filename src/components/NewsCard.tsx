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
      <article className="group border-2 border-border/20 bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover">
        <time className="text-[10px] font-semibold tracking-widest text-muted">{date}</time>
        <h3 className="mt-3 text-sm font-bold tracking-wider transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-muted">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent">
          ЧИТАТЬ →
        </span>
      </article>
    </Link>
  );
}
