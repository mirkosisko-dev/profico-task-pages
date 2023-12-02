import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.body;

  try {
    if (req.method !== "POST") throw new Error("Method not allowed");

    if (!userId) return res.status(400).json({ message: "Missing user id" });

    const result = await sql`SELECT * FROM bookmarks WHERE user_id = ${userId}`;

    if (result) return res.status(200).json(result.rows);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
