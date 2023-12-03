import clsx from "clsx";
import NewsList from "../news/components/NewsList";

import { FC } from "react";
import { InfiniteData } from "@tanstack/react-query";

import styles from "./Landing.module.scss";

interface IDesktopLandingProps {
  news: InfiniteData<any, unknown> | undefined;
}

const DesktopLanding: FC<IDesktopLandingProps> = ({ news }) => {
  return (
    <div className={clsx(styles.center, "hideOnMobile")}>
      {news?.pages.map((page, index) => (
        <NewsList key={index} news={page} />
      ))}
    </div>
  );
};

export default DesktopLanding;
