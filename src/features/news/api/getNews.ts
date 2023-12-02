import { IArticle } from "@/shared/types";
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

type GetNewsParams = {
  q: string | null; // zato jer koristimo lib za queryStates
  category: string | null;
  pageSize: number | null;
  page: number | null;
};
export interface GetNewsConfig extends AxiosRequestConfig {
  params: GetNewsParams;
}

const getNews = async (config: GetNewsConfig) => {
  try {
    const response = await axios.get("/api/news", config);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const latestNews = async (config: GetNewsConfig) => {
  try {
    const response = await axios.get("/api/latest", config);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export { getNews, latestNews };
