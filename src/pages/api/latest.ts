import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface IResponse {
  news?: any;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us`,
      {
        params: {
          apiKey: process.env.NEWS_API_KEY,
          pageSize: 15,
          page: req.query.page || 1,
        },
      }
    );
    res.status(200).json({ news: response.data.articles });
  } catch (error) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
