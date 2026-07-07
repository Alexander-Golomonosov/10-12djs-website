import { fetchLatestPost } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return Response.json({ error: "TELEGRAM_BOT_TOKEN not set" }, { status: 500 });
  }

  const post = await fetchLatestPost(token, "@I0_12_djs");

  if (!post) {
    return Response.json({ error: "No post found. Pin a message in the channel." }, { status: 404 });
  }

  return Response.json(post);
}
