import useGetBookmarks from "../hooks/useGetBookmarks";

import { FC, useEffect } from "react";
import { BookmarkList } from ".";
import { useAuthState } from "@/features/auth/context/AuthContext";
import { useRouter } from "next/router";

import styles from "@/features/landing/Landing.module.scss";
import Skeleton from "@/components/skeleton";
import ErrorEmptyHandler from "@/components/error";

interface IBookmarksProps {}

const Bookmarks: FC<IBookmarksProps> = ({}) => {
  const { data: bookmarks, isError, isLoading } = useGetBookmarks();

  const { authenticated } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

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
