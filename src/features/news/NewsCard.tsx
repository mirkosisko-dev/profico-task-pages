import { IArticle } from "@/shared/types";
import { FC } from "react";

import styles from "./NewsCard.module.scss";

interface INewsCardProps {
  article: IArticle;
}

const NewsCard: FC<INewsCardProps> = ({ article }) => {
  return <div className={styles.container}></div>;
};

export default NewsCard;
