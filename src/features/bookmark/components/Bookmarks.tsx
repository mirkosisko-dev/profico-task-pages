import useGetBookmarks from "../hooks/useGetBookmarks";

import { FC, useEffect } from "react";
import { BookmarkList } from ".";
import { useAuthState } from "@/features/auth/context/AuthContext";
import { useRouter } from "next/router";

import styles from "@/features/landing/Landing.module.scss";

interface IBookmarksProps {}

const Bookmarks: FC<IBookmarksProps> = ({}) => {
  const { data: bookmarks, isError, isLoading } = useGetBookmarks();

  const { authenticated } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

  // TODO: Add error component
  if (isError) return <div>Error!</div>;

  // TODO: Add skeletons
  if (isLoading) return <div>Loading...</div>;

  if (!bookmarks) return <div>Nothing to see here</div>;

  return (
    <div className={styles.container}>
      <BookmarkList bookmarks={bookmarks!} />
    </div>
  );
};

export default Bookmarks;
