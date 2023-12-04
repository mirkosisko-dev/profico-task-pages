import clsx from "clsx";
import NewsList from "../news/components/NewsList";
import LatestNews from "../news/components/latestNews/LatestNews";
import ErrorEmptyHandler from "@/components/error";

import { FC } from "react";
import { InfiniteData } from "@tanstack/react-query";
import { IArticle } from "../news/types";

import styles from "./Landing.module.scss";

interface IDesktopLandingProps {
  news: InfiniteData<any, unknown> | undefined;
}

const DesktopLanding: FC<IDesktopLandingProps> = ({ news }) => {
  if (!news) return <ErrorEmptyHandler text="Nothing to see here." />;

  const getDataWithoutTheFirstPage = () => {
    if (news) {
      let data: IArticle[] = [];
      news?.pages
        .slice(1)
        .map((page) => page.map((article: IArticle) => data.push(article)));
      return data;
    }

    return [];
  };

  const restOfFirstPage = news.pages[0].slice(3);
  const dataWithoutFirstPage = getDataWithoutTheFirstPage();
  const restOfData = dataWithoutFirstPage
    ? [restOfFirstPage, dataWithoutFirstPage]
    : [restOfFirstPage];

  return (
    <div className={clsx(styles.desktopLanding, "hideOnMobileAndTablet")}>
      <div className={styles.wrapper}>
        <NewsList
          className={styles.newsList}
          news={news.pages[0].slice(0, 3)}
          isFirstPage={true}
        />
        <LatestNews className={styles.latestNews} />
      </div>
      {restOfData.map((page, index) => (
        <NewsList key={index} news={page} />
      ))}
    </div>
  );
};

export default DesktopLanding;
