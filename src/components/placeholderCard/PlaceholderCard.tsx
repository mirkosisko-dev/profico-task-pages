import { FC } from "react";

import styles from "./PlaceholderCard.module.scss";

const PlaceholderCard: FC = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>Breaking</div>
      <div className={styles.title}>
        <h1>Peace On Earth A Wonderful Wish But No Way</h1>
      </div>
      <div className={styles.author}>Bertie Campbell</div>
    </div>
  );
};

export default PlaceholderCard;
