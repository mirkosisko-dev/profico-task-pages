import { FC } from "react";

import styles from "./Skeleton.module.scss";
import clsx from "clsx";

interface ISkeletonProps {
  array: number[];
  className?: string;
}

const Skeleton: FC<ISkeletonProps> = ({ array, className }) => {
  return (
    <div
      className={clsx(styles.container, { [className as string]: className })}
    >
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
