import clsx from "clsx";

import { FC } from "react";
import { toast } from "react-toastify";
import { useAuthState } from "@/features/auth/context/AuthContext";

import BookmarkSvg from "../../../../public/icons/bookmark.svg";

import useDeleteBookmark from "../hooks/useDeleteBookmark";
import useCreateBookmark from "../hooks/useCreateBookmark";

import styles from "./BookmarkIcon.module.scss";

interface IBookmarkProps {
  isBookmarked: boolean;
  imageUrl: string;
  title: string;
  author: string | null;
  articleId: string;
}

const BookmarkIcon: FC<IBookmarkProps> = ({
  isBookmarked = false,
  imageUrl,
  title,
  author,
  articleId,
}) => {
  const { user } = useAuthState();
  const { mutateAsync: createBookmark } = useCreateBookmark(() => {
    toast.success("Bookmarked");
  });
  const { mutateAsync: deleteBookmark } = useDeleteBookmark(() => {
    toast.success("Bookmark deleted");
  });
  const onClick = async () => {
    if (isBookmarked) await deleteBookmark({ article_id: articleId });
    else
      await createBookmark({
        user_id: user?.id as number,
        article_id: articleId,
        image_url: imageUrl,
        title,
        author,
      });
  };
  return (
    <div
      className={clsx(styles.container, {
        [styles.bookmarked]: !!isBookmarked,
      })}
      onClick={onClick}
    >
      <BookmarkSvg />
    </div>
  );
};

export default BookmarkIcon;
