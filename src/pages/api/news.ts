import { IData } from "@/shared/types";
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
    let response;
    if (req.query.category) {
      response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          category: req.query.category,
          apiKey: process.env.NEWS_API_KEY,
        },
      });
    } else {
      response = await axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          q: req.query.q,
          apiKey: process.env.NEWS_API_KEY,
        },
      });
    }

    if (response.status === 200) {
      res.status(200).json(response.data.articles);
    } else {
      res.status(500).json({ error: "failed to load data" });
    }
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
