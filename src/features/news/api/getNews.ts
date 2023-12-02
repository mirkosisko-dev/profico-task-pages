import { IArticle } from "@/shared/types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type GetNewsParams = {
  q: string | null; //zato jer koristimo lib za queryStates
  category: string | null;
  pageSize: number | null;
  page: number | null;
};
export interface GetNewsConfig extends AxiosRequestConfig {
  params: GetNewsParams;
}

const getNews = async (config: GetNewsConfig): Promise<IArticle[]> => {
  try {
    const response = await axios.get("/api/news", config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const latestNews = async (config: GetNewsConfig): Promise<IArticle[]> => {
  try {
    const response = await axios.get("/api/latest", config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getNews, latestNews };
