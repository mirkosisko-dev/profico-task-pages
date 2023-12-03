import Skeleton from "@/components/skeleton";
import ErrorEmptyHandler from "@/components/error";

import useGetBookmarks from "../hooks/useGetBookmarks";

import { FC } from "react";
import { BookmarkList } from ".";
import { useAuthState } from "@/features/auth/context/AuthContext";

import styles from "@/features/landing/Landing.module.scss";

interface IBookmarksProps {}

const Bookmarks: FC<IBookmarksProps> = ({}) => {
  const { data: bookmarks, isError, isLoading } = useGetBookmarks();
  const { authenticated } = useAuthState();

  if (!authenticated)
    return (
      <ErrorEmptyHandler text="You need to be logged in to access the Bookmark feature." />
    );

  if (isError) return <ErrorEmptyHandler text="Oops! Something went wrong." />;

  if (isLoading) return <Skeleton array={[1, 2, 3, 4, 5, 6]} />;

  if (bookmarks?.length === 0)
    return <ErrorEmptyHandler text="Nothing to see here." />;

  return (
    <div className={styles.container}>
      <BookmarkList bookmarks={bookmarks!} />
    </div>
  );
};

export default Bookmarks;
