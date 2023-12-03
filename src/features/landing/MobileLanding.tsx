import clsx from "clsx";
import NewsList from "../news/components/NewsList";
import LatestNews from "../news/components/latestNews/LatestNews";
import ErrorEmptyHandler from "@/components/error";

import useIsMobile from "@/hooks/useIsMobile";

import { TABS } from "@/components/tabs/constants";
import { FC } from "react";
import { BookmarkList } from "../bookmark/components";
import { InfiniteData } from "@tanstack/react-query";
import { IBookmark } from "../bookmark/types";
import { useTabsState } from "../tabs/context/TabsContext";

import styles from "./Landing.module.scss";

interface IMobileLandingProps {
  news: InfiniteData<any, unknown> | undefined;
  bookmarks: IBookmark[];
}

const MobileLanding: FC<IMobileLandingProps> = ({ news, bookmarks }) => {
  const { currentTab } = useTabsState();

  const isMobile = useIsMobile();

  if (!isMobile) return;

  if (news?.pages[0].length === 0 && currentTab === TABS.FEATURED)
    return <ErrorEmptyHandler text="Nothing to see here." />;

  if (!bookmarks && currentTab === TABS.BOOKMARKS)
    return <ErrorEmptyHandler text="Nothing to see here." />;

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
    <div className={clsx(styles.mobile, "hideOnDesktop")}>{renderTab()}</div>
  );
};

export default MobileLanding;
