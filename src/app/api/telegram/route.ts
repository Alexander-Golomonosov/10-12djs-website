import { fetchLatestPost } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET() {
  const post = await fetchLatestPost();

  if (!post) {
    return Response.json({ error: "No post found." }, { status: 404 });
  }

  return Response.json(post);
}
