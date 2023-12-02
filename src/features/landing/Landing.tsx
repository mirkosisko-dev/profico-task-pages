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
import Button from "@/ui/button";

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
    isFetchingNextPage,
    hasNextPage,
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

  return (
    <div className={styles.container}>
      <div className={clsx(styles.mobile, "hideOnDesktop")}>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === TABS.FEATURED ? (
          <div className={styles.center}>
            {news?.pages.map((page, index) => (
              <NewsList key={index} news={page} />
            ))}
            <Button
              label={
                isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load more"
                  : "Nothing more to load"
              }
              variant="transparent"
              className={styles.button}
              onClick={() => fetchNextPage()}
            />
          </div>
        ) : (
          <LatestNews />
        )}
      </div>

      <div className={clsx(styles.center, "hideOnMobile")}>
        {news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ))}

        <Button
          label={
            isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load more"
              : "Nothing more to load"
          }
          variant="transparent"
          className={styles.button}
          onClick={() => fetchNextPage()}
        />
      </div>
    </div>
  );
};

export default Landing;
