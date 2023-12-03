import Tabs from "@/components/tabs";
import clsx from "clsx";
import NewsList from "../news/components/NewsList";
import LatestNews from "../news/components/latestNews/LatestNews";

import { TABS } from "@/components/tabs/constants";
import { FC } from "react";
import { BookmarkList } from "../bookmark/components";
import { InfiniteData } from "@tanstack/react-query";
import { IBookmark } from "../bookmark/types";

import styles from "./Landing.module.scss";

interface IMobileLandingProps {
  currentTab: TABS;
  news: InfiniteData<any, unknown> | undefined;
  bookmarks: IBookmark[];
  setCurrentTab: (tab: TABS) => void;
}

const MobileLanding: FC<IMobileLandingProps> = ({
  currentTab,
  news,
  bookmarks,
  setCurrentTab,
}) => {
  const renderTab = () => {
    switch (currentTab) {
      case TABS.FEATURED:
        return news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ));
      case TABS.LATEST:
        return <LatestNews />;
      case TABS.BOOKMARKS:
        return <BookmarkList bookmarks={bookmarks} />;
      default:
        return news?.pages.map((page, index) => (
          <NewsList key={index} news={page} />
        ));
    }
  };

  return (
    <div className={clsx(styles.mobile, "hideOnDesktop")}>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {renderTab()}
    </div>
  );
};

export default MobileLanding;
