import { fetchPosts } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return Response.json({ error: "TELEGRAM_BOT_TOKEN not set" }, { status: 500 });
  }

  const posts = await fetchPosts(token, "@I0_12_djs", 10);

  return Response.json(posts);
}
