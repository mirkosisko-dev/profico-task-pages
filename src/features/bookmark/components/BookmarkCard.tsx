import Image from "next/image";
import clsx from "clsx";

import { FC } from "react";
import { IBookmark } from "../types";
import { truncate } from "@/helpers/truncate";
import { BookmarkIcon } from ".";

import styles from "@/features/news/components/NewsCard.module.scss";

interface IBookmarkCardProps {
  article: IBookmark;
  className?: string;
}

const BookmarkCard: FC<IBookmarkCardProps> = ({ article, className }) => {
  return (
    <div
      className={clsx(styles.container, {
        [className as string]: !!className,
      })}
    >
      <BookmarkIcon
        isBookmarked={true}
        imageUrl={article.image_url || "/images/no_image.png"}
        title={article.title}
        author={article.author}
        articleId={article.article_id}
      />
      <div className={styles.image}>
        <Image
          src={article.image_url || "/images/no_image.png"}
          alt={`${article.title} image`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.tagAndTitle}>
          <div className={clsx("label", styles.tag)}>TAG</div>

          <div className={styles.title}>{truncate(article.title, 50)}</div>
        </div>

        <div className={clsx("author", "hideOnMobile", styles.author)}>
          {article.author}
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
