import NewsCard from "./NewsCard";
import clsx from "clsx";

import { FC } from "react";
import { IArticle } from "@/features/news/types";

import styles from "./NewsList.module.scss";

interface INewsListProps {
  news: IArticle[];
  className?: string;
}

const NewsList: FC<INewsListProps> = ({ news, className }) => {
  return (
    <div
      className={clsx(styles.container, { [className as string]: className })}
    >
      {news.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
