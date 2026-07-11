import * as cheerio from "cheerio";

export type TelegramPost = {
  title: string;
  text: string;
  excerpt: string;
  date: string;
  dateRaw: number;
  messageId: number;
  slug: string;
};

function parseTelegramHtml(html: string): TelegramPost[] {
  const $ = cheerio.load(html);
  const posts: TelegramPost[] = [];

  $(".tgme_widget_message_wrap").each((_, wrap) => {
    const msg = $(wrap).find(".tgme_widget_message").first();
    if (!msg.length) return;

    const postAttr = msg.attr("data-post") || "";
    const messageId = parseInt(postAttr.split("/").pop() || "0", 10);
    if (!messageId) return;

    const textEl = msg.find(".tgme_widget_message_text").first();
    const text = textEl.length ? textEl.text().trim() : "";

    const timeEl = msg.find("time").first();
    const dateRaw = timeEl.length
      ? new Date(timeEl.attr("datetime") || "").getTime() / 1000
      : 0;

    function truncateAtWord(s: string, max: number): string {
      if (s.length <= max) return s;
      const trimmed = s.slice(0, max + 1).replace(/\s+\S*$/, "");
      return (trimmed || s.slice(0, max)) + "...";
    }

    const lines = text.split("\n").filter(Boolean);
    const rawTitle = lines[0] || "Новый пост";
    const title = truncateAtWord(rawTitle, 60);
    const body = lines.slice(1).join(" ").trim();

    posts.push({
      messageId,
      title,
      text,
      excerpt: truncateAtWord(body || title, 120),
      date: dateRaw
        ? new Date(dateRaw * 1000).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).toUpperCase()
        : "",
      dateRaw,
      slug: `tg-${messageId}`,
    });
  });

  return posts.sort((a, b) => b.dateRaw - a.dateRaw);
}

export async function fetchLatestPost(): Promise<TelegramPost | null> {
  try {
    const res = await fetch("https://t.me/s/I0_12_djs", { next: { revalidate: 30 } });
    if (!res.ok) return null;
    const posts = parseTelegramHtml(await res.text());
    return posts[0] || null;
  } catch {
    return null;
  }
}

export async function fetchRecentPosts(limit = 10): Promise<TelegramPost[]> {
  try {
    const res = await fetch("https://t.me/s/I0_12_djs", { next: { revalidate: 30 } });
    if (!res.ok) return [];
    const posts = parseTelegramHtml(await res.text());
    return posts.slice(0, limit);
  } catch {
    return [];
  }
}
