import { getNews } from "@/api/news";
import { useQuery } from "@tanstack/react-query";
import { NEWS } from "./queryKeys";

const useGetNews = (q?: string, category?: string) => {
  return useQuery({
    queryKey: [NEWS, q, category],
    queryFn: async () => await getNews(q as string, category as string),
  });
};

export default useGetNews;
