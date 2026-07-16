export type TelegramPost = {
  title: string;
  text: string;
  excerpt: string;
  date: string;
  dateRaw: number;
  messageId: number;
  slug: string;
};

function truncateAtWord(s: string, max: number): string {
  if (s.length <= max) return s;
  const trimmed = s.slice(0, max + 1).replace(/\s+\S*$/, "");
  return (trimmed || s.slice(0, max)) + "...";
}

function parseTelegramPosts(data: any): TelegramPost[] {
  if (!data?.ok || !Array.isArray(data.result)) return [];

  return data.result
    .filter((p: any) => p.text || p.caption)
    .map((p: any): TelegramPost => {
      const text = p.text || p.caption || "";
      const lines = text.split("\n").filter(Boolean);
      const rawTitle = lines[0] || "Новый пост";
      const title = truncateAtWord(rawTitle, 60);
      const body = lines.slice(1).join(" ").trim();

      return {
        messageId: p.message_id,
        title,
        text,
        excerpt: truncateAtWord(body || title, 120),
        date: p.date
          ? new Date(p.date * 1000).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).toUpperCase()
          : "",
        dateRaw: p.date || 0,
        slug: `tg-${p.message_id}`,
      };
    })
    .sort((a: TelegramPost, b: TelegramPost) => b.dateRaw - a.dateRaw);
}

const WORKER_URL = "https://78557856.golomonosov.workers.dev";

export async function fetchLatestPost(): Promise<TelegramPost | null> {
  try {
    const res = await fetch(WORKER_URL, { next: { revalidate: 30 } });
    if (!res.ok) return null;
    const data = await res.json();
    const posts = parseTelegramPosts(data);
    return posts[0] || null;
  } catch {
    return null;
  }
}

export async function fetchRecentPosts(limit = 10): Promise<TelegramPost[]> {
  try {
    const res = await fetch(WORKER_URL, { next: { revalidate: 30 } });
    if (!res.ok) return [];
    const data = await res.json();
    const posts = parseTelegramPosts(data);
    return posts.slice(0, limit);
  } catch {
    return [];
  }
}
