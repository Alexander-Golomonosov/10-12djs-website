export type TelegramPost = {
  title: string;
  text: string;
  excerpt: string;
  date: string;
  dateRaw: number;
  messageId: number;
  slug: string;
};

function parsePost(p: any): TelegramPost {
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

export async function fetchLatestPost(token: string, channelUsername: string): Promise<TelegramPost | null> {
  // Try pinned message first
  const chatRes = await fetch(
    `https://api.telegram.org/bot${token}/getChat?chat_id=${channelUsername}`
  );

  if (chatRes.ok) {
    const chat = await chatRes.json();
    if (chat.ok && chat.result?.pinned_message) {
      return parsePost(chat.result.pinned_message);
    }
  }

  // Fallback: get latest from recent updates (new posts only)
  const updatesRes = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?timeout=5`
  );

  if (!updatesRes.ok) return null;

  const updates = await updatesRes.json();
  if (!updates.ok || !updates.result?.length) return null;

  const posts = updates.result
    .filter((u: any) => u.channel_post)
    .map((u: any) => u.channel_post)
    .filter((p: any) => p.chat?.username === channelUsername.replace("@", ""))
    .sort((a: any, b: any) => b.date - a.date);

  return posts.length ? parsePost(posts[0]) : null;
}
