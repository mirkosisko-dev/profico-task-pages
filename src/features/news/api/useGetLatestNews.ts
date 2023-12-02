import { useInfiniteQuery } from "@tanstack/react-query";
import { LATEST_NEWS } from "./queryKeys";
import { GetNewsConfig, latestNews } from "./getNews";

const useGetLatestNews = (config: GetNewsConfig) =>
  useInfiniteQuery({
    queryKey: [LATEST_NEWS],
    queryFn: (props) =>
      latestNews({
        ...config,
        params: {
          ...config.params,
          page: props.pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

export default useGetLatestNews;
