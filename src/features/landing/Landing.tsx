import Skeleton from "@/components/skeleton";
import ErrorEmptyHandler from "@/components/error";
import MobileLanding from "./MobileLanding";
import DesktopLanding from "./DesktopLanding";
import Button from "@/ui/button";

import useGetNews from "../news/hooks/useGetNews";
import useGetBookmarks from "../bookmark/hooks/useGetBookmarks";
import useIsMobile from "@/hooks/useIsMobile";

import {
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "next-usequerystate";
import { FC, useEffect, useState } from "react";
import { TABS, tabs } from "@/components/tabs/constants";
import { useAuthState } from "../auth/context/AuthContext";
import { useRouter } from "next/router";

import styles from "./Landing.module.scss";

interface ILandingProps {}

const Landing: FC<ILandingProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const router = useRouter();

  const { authenticated } = useAuthState();
  const isMobile = useIsMobile();

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

  const renderLoadMoreButton = () => {
    return isMobile ? (
      currentTab === TABS.FEATURED && (
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
      )
    ) : (
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
    );
  };

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

  if (isError) return <ErrorEmptyHandler text="Oops! Something went wrong." />;

  if (isLoading) return <Skeleton array={[1, 2, 3, 4, 5, 6]} />;

  if (news?.pages[0].length === 0)
    return <ErrorEmptyHandler text="Nothing to see here." />;

  return (
    <div className={styles.container}>
      <MobileLanding
        news={news}
        bookmarks={bookmarks!}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <DesktopLanding news={news} />

      {renderLoadMoreButton()}
    </div>
  );
};

export default Landing;
