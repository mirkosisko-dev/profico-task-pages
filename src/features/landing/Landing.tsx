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
import { FC, useEffect } from "react";
import { TABS } from "@/components/tabs/constants";
import { useAuthState } from "../auth/context/AuthContext";
import { useRouter } from "next/router";
import { useTabsState } from "../tabs/context/TabsContext";

import styles from "./Landing.module.scss";

interface ILandingProps {}

const Landing: FC<ILandingProps> = ({}) => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const { authenticated } = useAuthState();
  const { currentTab } = useTabsState();

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
    if (news?.pages[0].length !== 0)
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

  return (
    <div className={styles.container}>
      <MobileLanding news={news} bookmarks={bookmarks!} />

      <DesktopLanding news={news} />

      {renderLoadMoreButton()}
    </div>
  );
};

export default Landing;
