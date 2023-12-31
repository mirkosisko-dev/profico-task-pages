import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user_id, author, title, image_url, article_id } = req.body;

  try {
    if (req.method !== "POST") throw new Error("Method not allowed");

    if (!user_id || !title || !image_url || !article_id)
      return res.status(400).json({ message: "Missing credentials" });

    const result =
      await sql`INSERT INTO bookmarks (user_id, author, title, image_url, article_id) VALUES (${user_id}, ${author}, ${title}, ${image_url}, ${article_id})`;

    if (result) return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
