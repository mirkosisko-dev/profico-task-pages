import Head from "next/head";

import useGetNews from "@/hooks/useGetNews";
import useQueryParams from "@/hooks/useQueryParams";
import DividerLine from "@/components/dividerLine";
import Header from "@/components/header";
import { MobileNavbar, DesktopNavbar } from "@/components/navbar";
import Layout from "@/components/layout";
import { useState } from "react";
import { navLinks } from "@/components/navbar/constants";
import NewsList from "@/features/news/NewsList";
import { IArticle } from "@/shared/types";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(navLinks[0].category);

  const { queryParams } = useQueryParams();
  const {
    data: news,
    isError,
    isFetching,
  } = useGetNews(
    queryParams.get("q") as string,
    queryParams.get("category") as string
  );

  if (isError) return <div>Error!</div>;

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

      <Layout>
        <MobileNavbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <DividerLine />
        <main className="main">
          <DesktopNavbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <NewsList news={news as IArticle[]} />
        </main>
      </Layout>
    </>
  );
}
