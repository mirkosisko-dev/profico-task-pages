import { FC } from "react";

import styles from "./DividerLine.module.scss";
import clsx from "clsx";

const DividerLine: FC = ({}) => {
  return <div className={clsx(styles.dividerLine, "hideOnMobile")} />;
};

export default DividerLine;
