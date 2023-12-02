import { IArticle } from "@/shared/types";
import { FC } from "react";

import styles from "./NewsCard.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { truncate } from "@/helpers/truncate";

interface INewsCardProps {
  article: IArticle;
  className?: string;
}

const NewsCard: FC<INewsCardProps> = ({ article, className }) => {
  return (
    <div
      className={clsx(styles.container, {
        [className as string]: !!className,
      })}
    >
      <div className={styles.image}>
        <Image
          src={article.urlToImage || "/images/no_image.png"}
          alt={`${article.description} image`}
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

export default NewsCard;
