import { IArticle } from "@/shared/types";
import axios from "axios";

const getNews = async (q: string, category: string): Promise<IArticle[]> => {
  const response = await axios.get("/api/news", { params: { q, category } });

  return response.data;
};

export { getNews };
