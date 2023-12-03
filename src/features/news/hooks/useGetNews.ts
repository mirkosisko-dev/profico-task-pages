import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { NEWS } from "../api/queryKeys";
import { GetNewsConfig, getNews } from "../api/getNews";

const useGetNews = (config: GetNewsConfig) =>
  useInfiniteQuery({
    queryKey: [NEWS, config.params.category, config.params.q],
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
