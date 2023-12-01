import React, { FC } from "react";
import clsx from "clsx";
import Pulse from "@/components/pulse";

import useGetLatestNews from "../api/useGetLatestNews";

import ChevronIcon from "../../../../public/icons/chevron.svg";

import { IArticle } from "@/shared/types";

import styles from "./LatestNews.module.scss";

interface ILatestNewsProps {}

const LatestNews: FC<ILatestNewsProps> = () => {
  const {
    data: latestNews,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useGetLatestNews();

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Pulse />
        <p>Latest news</p>
      </div>

      <div className={styles.content}>
        {latestNews.pages.map((group, i) => (
          <div key={i} className={styles.articleContainer}>
            {group.news.map((article: IArticle) => (
              <div key={article.source.id} className={styles.article}>
                <p className={clsx("label", styles.time)}>12:00</p>
                <p>{article.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.wrapper}>
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
      </div>

      {isFetching && !isFetchingNextPage && <div>Fetching...</div>}
    </div>
  );
};

export default LatestNews;
