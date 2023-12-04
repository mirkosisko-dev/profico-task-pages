import NewsCard from "./NewsCard";
import clsx from "clsx";

import { FC } from "react";
import { IArticle } from "@/features/news/types";

import styles from "./NewsList.module.scss";
import PlaceholderCard from "@/components/placeholderCard";

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
        <NewsCard key={article.url} article={article} />
      ))}
      {isFirstPage && <PlaceholderCard />}
    </div>
  );
};

export default NewsList;
