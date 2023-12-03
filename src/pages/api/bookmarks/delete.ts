import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { article_id, user_id } = req.body;

  try {
    if (req.method !== "POST") throw new Error("Method not allowed");

    if (!article_id || !user_id)
      return res.status(400).json({ message: "Missing credentials" });

    const result =
      await sql`DELETE FROM bookmarks WHERE article_id = ${article_id} AND user_id = ${user_id}`;

    if (result) return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
