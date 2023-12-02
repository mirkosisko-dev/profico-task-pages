import clsx from "clsx";
import Tabs from "@/components/tabs";
import LatestNews from "../news/components/latestNews/LatestNews";
import NewsList from "../news/components/NewsList";

import useGetNews from "../news/api/useGetNews";

import { FC, useState } from "react";
import { TABS, tabs } from "@/components/tabs/constants";

import styles from "./Landing.module.scss";
import {
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "next-usequerystate";

interface ILandingProps {}

const Landing: FC<ILandingProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const [queryStates, updateQueryStates] = useQueryStates({
    q: parseAsString,
    category: parseAsString,
    pageSize: parseAsInteger,
    page: parseAsInteger,
  });

  const {
    data: news,
    isError,
    isLoading,
    fetchNextPage,
  } = useGetNews({
    params: {
      ...queryStates,
    },
  });

  // TODO: Add error component
  if (isError) return <div>Error!</div>;

  // TODO: Add skeletons
  if (isLoading) return <div>Loading...</div>;

  console.log("News", { news });

  return (
    <>
      <div className={clsx(styles.mobile, "hideOnDesktop")}>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === TABS.FEATURED ? (
          news?.pages.map((page, index) => <NewsList key={index} news={page} />)
        ) : (
          <LatestNews />
        )}
      </div>

      <div className={clsx(styles.desktop, "hideOnMobile")}>
        {news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ))}
      </div>
      <button onClick={() => fetchNextPage()}>Load more</button>
    </>
  );
};

export default Landing;
