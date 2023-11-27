import { FC } from "react";

import styles from "./Logo.module.scss";
import clsx from "clsx";

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div className={clsx(styles.logo, { [className as string]: !!className })}>
      <h1>
        <span>Profi</span>News
      </h1>
    </div>
  );
};

export default Logo;
