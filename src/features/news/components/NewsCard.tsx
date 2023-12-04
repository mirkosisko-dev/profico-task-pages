import clsx from "clsx";
import Image from "next/image";

import useGetBookmarks from "@/features/bookmark/hooks/useGetBookmarks";

import { truncate } from "@/helpers/truncate";
import { IArticle } from "@/features/news/types";
import { FC } from "react";
import { BookmarkIcon } from "@/features/bookmark/components";
import { generateId } from "@/helpers/generateId";

import styles from "./NewsCard.module.scss";

interface INewsCardProps {
  article: IArticle;
  className?: string;
}

const NewsCard: FC<INewsCardProps> = ({ article, className }) => {
  const { data: bookmarks } = useGetBookmarks();
  const imageUrl =
    article.urlToImage &&
    (article?.urlToImage?.startsWith("https:")
      ? article.urlToImage
      : `https:${article.urlToImage}`);

  return (
    <div
      className={clsx(styles.container, {
        [className as string]: !!className,
      })}
    >
      <BookmarkIcon
        isBookmarked={
          !!bookmarks?.find(
            (bookmark) =>
              bookmark.article_id ===
              generateId(article.url, article.publishedAt)
          )
        }
        imageUrl={article.urlToImage || "/images/no_image.png"}
        title={article.title}
        author={article.author}
        articleId={generateId(article.url, article.publishedAt)}
      />
      <div className={styles.image}>
        <Image
          src={imageUrl || "/images/no_image.png"}
          alt={`${article.description} image`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.tagAndTitle}>
          <div className={clsx("label", styles.tag)}>TAG</div>

          <div className={styles.title}>
            {article.title && truncate(article.title, 50)}
          </div>
        </div>

        <div className={clsx("author", "hideOnMobileTablet", styles.author)}>
          {article.author && truncate(article.author, 20)}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
