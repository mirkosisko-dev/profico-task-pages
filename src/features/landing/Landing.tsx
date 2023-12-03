import clsx from "clsx";
import Tabs from "@/components/tabs";
import LatestNews from "../news/components/latestNews/LatestNews";
import NewsList from "../news/components/NewsList";
import Button from "@/ui/button";

import useGetNews from "../news/hooks/useGetNews";
import useGetBookmarks from "../bookmark/hooks/useGetBookmarks";

import {
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "next-usequerystate";
import { FC, useEffect, useState } from "react";
import { TABS, tabs } from "@/components/tabs/constants";
import { useAuthState } from "../auth/context/AuthContext";
import { useRouter } from "next/router";
import { BookmarkList } from "../bookmark/components";

import styles from "./Landing.module.scss";

interface ILandingProps {}

const Landing: FC<ILandingProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const router = useRouter();

  const { authenticated } = useAuthState();

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
  const { data: bookmarks } = useGetBookmarks();

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

  // TODO: Add error component
  if (isError) return <div>Error!</div>;

  // TODO: Add skeletons
  if (isLoading) return <div>Loading...</div>;

  const renderTab = () => {
    switch (currentTab) {
      case TABS.FEATURED:
        return news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ));
      case TABS.LATEST:
        return <LatestNews />;
      case TABS.BOOKMARKS:
        return <BookmarkList bookmarks={bookmarks!} />;
      default:
        return news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ));
    }
  };

  return (
    <div className={styles.container}>
      <div className={clsx(styles.mobile, "hideOnDesktop")}>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderTab()}
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
