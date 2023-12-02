import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { NEWS } from "./queryKeys";
import { GetNewsConfig, getNews } from "./getNews";

const useGetNews = (config: GetNewsConfig) =>
  useInfiniteQuery({
    queryKey: [NEWS],
    queryFn: (props) =>
      getNews({
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

export default useGetNews;
