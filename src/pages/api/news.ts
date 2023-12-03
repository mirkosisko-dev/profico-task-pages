import axios from "axios";

import { IArticle } from "@/features/news/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface IResponse {
  news?: IArticle[];
  error?: string;
}

const BASE_API_URL = "https://newsapi.org/v2";

async function fetchData(url: string, params: Record<string, any>) {
  try {
    const response = await axios.get(url, { params });

    if (response.status === 200) {
      return response.data.articles;
    } else {
      throw new Error("Failed to load data");
    }
  } catch (error) {
    throw new Error("Failed to load data");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  try {
    let apiUrl = `${BASE_API_URL}/everything?sortBy=publishedAt`;
    let queryParams: Record<string, any> = {
      apiKey: process.env.NEWS_API_KEY,
      pageSize: 15,
      page: req.query.page || 1,
    };

    if (req.query.category) {
      apiUrl = `${BASE_API_URL}/top-headlines?sortBy=publishedAt`;

      queryParams.category = req.query.category;
    } else if (req.query.q) {
      queryParams.q = req.query.q || "Elon"; //must have something
    } else {
      apiUrl = `${BASE_API_URL}/top-headlines?sortBy=publishedAt&country=us`;
    }

    const data = await fetchData(apiUrl, queryParams);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
