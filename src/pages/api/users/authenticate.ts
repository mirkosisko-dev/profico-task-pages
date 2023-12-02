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
      await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;

    if (!result.rows.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(200).json(result.rows[0]?.email);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}
