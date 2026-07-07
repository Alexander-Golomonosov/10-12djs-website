export type TelegramPost = {
  title: string;
  text: string;
  date: string;
  dateRaw: number;
  messageId: number;
};

export async function fetchLatestPost(token: string, channelUsername: string): Promise<TelegramPost | null> {
  const res = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?timeout=5`,
    { next: { revalidate: 300 } }
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

  const latest = posts[0];
  const text = latest.text || latest.caption || "";

  return {
    title: text.split("\n")[0].slice(0, 60) || "Новый пост",
    text,
    date: new Date(latest.date * 1000).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).toUpperCase(),
    dateRaw: latest.date,
    messageId: latest.message_id,
  };
}
