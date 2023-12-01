import Head from "next/head";

import useGetNews from "@/features/news/api/useGetNews";
import useQueryParams from "@/hooks/useQueryParams";
import NewsList from "@/features/news/NewsList";
import { IArticle } from "@/shared/types";
import LatestNews from "@/features/news/latestNews/LatestNews";

export default function Home() {
  const { queryParams } = useQueryParams();
  const {
    data: news,
    isError,
    isFetching,
  } = useGetNews(
    queryParams.get("q") as string,
    queryParams.get("category") as string
  );

  // TODO: Add error component
  if (isError) return <div>Error!</div>;

  // TODO: Add skeletons
  if (isFetching) return <div>Loading...</div>;

  if (typeof news === "string") return <div>No news bitch</div>;

  return (
    <>
      {/* <Head>
        <title>ProfiNews</title>
        <meta
          name="description"
          content="The place with the most reliable and professional news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <NewsList news={news as IArticle[]} /> */}
      <LatestNews />
    </>
  );
}
