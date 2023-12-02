import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  try {
    if (req.method !== "POST") throw new Error("Method not allowed");

    if (!email || !password)
      return res.status(400).json({ message: "Missing email or password" });

    const result =
      await sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;

    if (result) return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
