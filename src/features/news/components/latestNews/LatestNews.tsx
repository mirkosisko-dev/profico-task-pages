import React, { FC } from "react";
import clsx from "clsx";
import Pulse from "@/components/pulse";
import Skeleton from "@/components/skeleton";
import ErrorEmptyHandler from "@/components/error";

import useGetLatestNews from "../../hooks/useGetLatestNews";

import ChevronIcon from "@/assets/icons/chevron.svg";

import { IArticle } from "@/features/news/types";
import { parseAsInteger, useQueryStates } from "next-usequerystate";
import { generateId } from "@/helpers/generateId";

import styles from "./LatestNews.module.scss";

interface ILatestNewsProps {
  className?: string;
}

const LatestNews: FC<ILatestNewsProps> = ({ className }) => {
  const [queryStates, updateQueryStates] = useQueryStates({
    pageSize: parseAsInteger,
    page: parseAsInteger,
  });

  const {
    data: latestNews,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useGetLatestNews({
    params: {
      q: null,
      category: null,
      ...queryStates,
    },
  });

  if (status === "pending")
    return <Skeleton array={[1]} className={styles.skeleton} />;
  if (status === "error")
    return <ErrorEmptyHandler text="Nothing to see here." />;

  return (
    <div
      className={clsx(styles.container, { [className as string]: className })}
    >
      <div className={styles.title}>
        <Pulse />
        <p>Latest news</p>
      </div>

      <div className={styles.content}>
        {latestNews?.pages.map((page, i) => (
          <div key={i} className={styles.articleContainer}>
            {page.news.map((article: IArticle) => (
              <div
                key={generateId(article.publishedAt, article.url)}
                className={styles.article}
              >
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
