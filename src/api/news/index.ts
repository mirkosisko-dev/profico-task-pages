import { IArticle } from "@/shared/types";
import axios from "axios";

const getNews = async (
  q: string,
  category: string
): Promise<IArticle[] | string> => {
  const response = await axios.get("/api/news", { params: { q, category } });

  if (response.status === 200) {
    return response.data;
  } else {
    return response.data.error;
  }
};

export { getNews };
