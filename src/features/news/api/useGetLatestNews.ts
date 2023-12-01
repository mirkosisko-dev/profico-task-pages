import { latestNews } from "@/api/news";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LATEST_NEWS } from "./queryKeys";

const useGetLatestNews = () =>
  useInfiniteQuery({
    queryKey: [LATEST_NEWS],
    queryFn: latestNews,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

export default useGetLatestNews;
