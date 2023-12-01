import Tabs from "@/components/tabs";
import LatestNews from "../news/latestNews/LatestNews";
import NewsList from "../news/NewsList";

import useQueryParams from "@/hooks/useQueryParams";
import useGetNews from "../news/api/useGetNews";

import { FC, useState } from "react";
import { TABS, tabs } from "@/components/tabs/constants";
import { IArticle } from "@/shared/types";

import styles from "./Landing.module.scss";

interface ILandingProps {}

const Landing: FC<ILandingProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
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
    <div className={styles.mobile}>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === TABS.FEATURED ? (
        <NewsList news={news as IArticle[]} />
      ) : (
        <LatestNews />
      )}
    </div>
  );
};

export default Landing;
