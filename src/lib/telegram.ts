export type TelegramPost = {
  title: string;
  text: string;
  excerpt: string;
  date: string;
  dateRaw: number;
  messageId: number;
  slug: string;
};

export async function fetchLatestPost(token: string, channelUsername: string): Promise<TelegramPost | null> {
  const res = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?timeout=5`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data.ok || !data.result?.length) return null;

  const posts = data.result
    .filter((u: any) => u.channel_post)
    .map((u: any) => u.channel_post)
    .filter((p: any) => p.chat?.username === channelUsername.replace("@", ""))
    .sort((a: any, b: any) => b.date - a.date);

  if (!posts.length) return null;

  const p = posts[0];
  const text = p.text || p.caption || "";
  const lines = text.split("\n");
  const title = lines[0].slice(0, 60) || "Новый пост";

  return {
    title,
    text,
    excerpt: lines.slice(1).join(" ").trim().slice(0, 120) || title.slice(0, 120),
    date: new Date(p.date * 1000).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).toUpperCase(),
    dateRaw: p.date,
    messageId: p.message_id,
    slug: `tg-${p.message_id}`,
  };
}
