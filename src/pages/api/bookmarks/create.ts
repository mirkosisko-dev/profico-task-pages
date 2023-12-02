import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, newsId, title } = req.body;

  try {
    if (req.method !== "POST") throw new Error("Method not allowed");

    if (!userId || !newsId || !title)
      return res.status(400).json({ message: "Missing credentials" });

    const result =
      await sql`INSERT INTO bookmarks (user_id, news_id, title) VALUES (${userId}, ${newsId}, ${title})`;

    if (result) return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
