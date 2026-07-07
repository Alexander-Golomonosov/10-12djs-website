export type TelegramPost = {
  title: string;
  text: string;
  excerpt: string;
  date: string;
  dateRaw: number;
  messageId: number;
  slug: string;
};

export async function fetchPosts(token: string, channelUsername: string, limit = 10): Promise<TelegramPost[]> {
  const res = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?timeout=5`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) return [];

  const data = await res.json();
  if (!data.ok || !data.result?.length) return [];

  const posts = data.result
    .filter((u: any) => u.channel_post)
    .map((u: any) => u.channel_post)
    .filter((p: any) => p.chat?.username === channelUsername.replace("@", ""))
    .sort((a: any, b: any) => b.date - a.date)
    .slice(0, limit);

  return posts.map((p: any) => {
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
  });
}
