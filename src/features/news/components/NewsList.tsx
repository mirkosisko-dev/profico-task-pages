import NewsCard from "./NewsCard";
import clsx from "clsx";
import PlaceholderCard from "@/components/placeholderCard";

import { FC } from "react";
import { IArticle } from "@/features/news/types";
import { generateId } from "@/helpers/generateId";

import styles from "./NewsList.module.scss";

interface INewsListProps {
  news: IArticle[];
  isFirstPage?: boolean;
  className?: string;
}

const NewsList: FC<INewsListProps> = ({
  news,
  className,
  isFirstPage = false,
}) => {
  return (
    <div
      className={clsx(styles.container, { [className as string]: className })}
    >
      {news.map((article) => (
        <NewsCard
          key={generateId(article.publishedAt, article.url)}
          article={article}
        />
      ))}
      {isFirstPage && <PlaceholderCard />}
    </div>
  );
};

export default NewsList;
