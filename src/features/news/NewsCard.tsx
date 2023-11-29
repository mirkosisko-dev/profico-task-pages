import { IArticle } from "@/shared/types";
import { FC } from "react";

import styles from "./NewsCard.module.scss";
import clsx from "clsx";

interface INewsCardProps {
  article: IArticle;
  className?: string;
}

const NewsCard: FC<INewsCardProps> = ({ article, className }) => {
  return (
    <div
      className={clsx(styles.container, { [className as string]: !!className })}
    >
      {article.author}
    </div>
  );
};

export default NewsCard;
