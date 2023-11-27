import Head from "next/head";
import { Inter } from "next/font/google";
import useGetNews from "@/hooks/useGetNews";
import useQueryParams from "@/hooks/useQueryParams";

const inter = Inter({ subsets: ["latin"] });

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

  if (isError || !news) return <div>Error!</div>;

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>ProfiNews</title>
        <meta
          name="description"
          content="The place with the most reliable and professional news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>{news[0].title}</main>
    </>
  );
}
