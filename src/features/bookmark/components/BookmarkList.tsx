import ErrorEmptyHandler from "@/components/error";

import { FC } from "react";
import { IBookmark } from "../types";
import { BookmarkCard } from ".";

import styles from "@/features/news/components/NewsList.module.scss";

interface IBookmarkListProps {
  bookmarks: IBookmark[];
}

const BookmarkList: FC<IBookmarkListProps> = ({ bookmarks }) => {
  if (!bookmarks || bookmarks?.length === 0)
    return <ErrorEmptyHandler text="Nothing to see here." />;

  return (
    <div className={styles.container}>
      {bookmarks.map((article) => (
        <BookmarkCard key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default BookmarkList;
