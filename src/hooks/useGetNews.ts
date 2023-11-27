import { getNews } from "@/api/news";
import { NEWS } from "@/shared";
import { useQuery } from "@tanstack/react-query";

const useGetNews = (q?: string, category?: string) => {
  return useQuery({
    queryKey: [NEWS, q, category],
    queryFn: async () => await getNews(q as string, category as string),
  });
};

export default useGetNews;
