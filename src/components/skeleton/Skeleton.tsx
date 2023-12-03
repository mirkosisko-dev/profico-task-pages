import { FC } from "react";

import styles from "./Skeleton.module.scss";

interface ISkeletonProps {
  array: number[];
}

const Skeleton: FC<ISkeletonProps> = ({ array }) => {
  return (
    <div className={styles.container}>
      {array.map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <div className={styles.skeletonImage}></div>

          <div className={styles.skeletonInfo}>
            <div className={styles.skeletonTagAndTitle}>
              <div className={styles.skeletonTag}></div>
              <div className={styles.skeletonTitle}></div>
            </div>

            <div className={styles.skeletonAuthor}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
