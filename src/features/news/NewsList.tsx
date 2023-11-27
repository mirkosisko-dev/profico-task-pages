import { FC } from "react";

import NewsCard from "./NewsCard";

import { IArticle } from "@/shared/types";

import styles from "./NewsList.module.scss";

interface INewsListProps {
  news: IArticle[];
}

const NewsList: FC<INewsListProps> = ({ news }) => {
  return (
    <div>
      {news.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
