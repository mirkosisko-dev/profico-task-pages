import NewsCard from "./NewsCard";

import { FC } from "react";
import { IArticle } from "@/features/news/types";

import styles from "./NewsList.module.scss";

interface INewsListProps {
  news: IArticle[];
}

const NewsList: FC<INewsListProps> = ({ news }) => {
  return (
    <div className={styles.container}>
      {news.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
