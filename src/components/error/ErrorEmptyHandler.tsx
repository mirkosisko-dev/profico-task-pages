import { FC } from "react";

import styles from "./ErrorEmptyHandler.module.scss";

interface IErrorProps {
  text: string;
}

const ErrorEmptyHandler: FC<IErrorProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default ErrorEmptyHandler;
