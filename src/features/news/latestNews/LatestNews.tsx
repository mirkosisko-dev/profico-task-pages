import React, { FC } from "react";
import useGetLatestNews from "../api/useGetLatestNews";
import { IArticle } from "@/shared/types";
import Pulse from "@/components/pulse";
import ChevronIcon from "../../../../public/icons/chevron.svg";

import styles from "./LatestNews.module.scss";

interface ILatestNewsProps {}

const LatestNews: FC<ILatestNewsProps> = ({}) => {
  const {
    data: latestNews,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useGetLatestNews();

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className={styles.container}>
      <div className={styles.title}>
        <Pulse />
        <p>Latest news</p>
      </div>

      {latestNews.pages.map((group, i) => (
        <div key={i} className={styles.articleContainer}>
          {group.news.map((article: IArticle) => (
            <div key={article.source.id} className={styles.article}>
              <p>{article.title}</p>
            </div>
          ))}
        </div>
      ))}

      <div className={styles.buttonContainer}>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className={styles.button}
        >
          <p>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "See all news"
              : "Nothing more to load"}
          </p>
        </button>

        <ChevronIcon />
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default LatestNews;
