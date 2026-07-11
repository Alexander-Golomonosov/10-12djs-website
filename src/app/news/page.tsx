import type { Metadata } from "next";
import { fetchLatestPost, fetchRecentPosts } from "@/lib/telegram";

export const metadata: Metadata = {
  title: "НОВОСТИ | 10/12DJ'S",
};

export const dynamic = "force-dynamic";

export default async function News() {
  let telegramPost: Awaited<ReturnType<typeof fetchLatestPost>> | null = null;
  let recentPosts: Awaited<ReturnType<typeof fetchRecentPosts>> = [];

  [telegramPost, recentPosts] = await Promise.all([
    fetchLatestPost(),
    fetchRecentPosts(),
  ]);

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-10deg]">LATEST</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">НОВОСТИ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ПОСЛЕДНИЕ СОБЫТИЯ</p>

      {telegramPost && (
        <a
          href={`https://t.me/I0_12_djs/${telegramPost.messageId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-between border-2 border-accent/30 bg-accent/5 p-5 transition-all hover:border-accent"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent">📢 ПОСЛЕДНИЙ ПОСТ В TELEGRAM</span>
            <p className="mt-2 text-xs font-semibold tracking-wider text-foreground">{telegramPost.title}</p>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-accent">ОТКРЫТЬ →</span>
        </a>
      )}

      <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.length > 0 ? recentPosts.map((item) => (
          <a
            key={item.slug}
            href={`https://t.me/I0_12_djs/${item.messageId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-border/20 bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover"
          >
            <time className="text-[10px] font-semibold tracking-widest text-muted">{item.date}</time>
            <h3 className="mt-3 text-sm font-bold tracking-wider transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-muted">{item.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent">
              ОТКРЫТЬ В TG →
            </span>
          </a>
        )) : (
          <p className="col-span-full text-xs font-semibold tracking-wider text-muted/60">НОВОСТЕЙ ПОКА НЕТ</p>
        )}
      </div>
    </div>
  );
}
