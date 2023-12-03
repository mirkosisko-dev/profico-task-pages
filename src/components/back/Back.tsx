import Link from "next/link";

import ChevronIcon from "../../../public/icons/chevron.svg";

import { FC } from "react";

import styles from "./Back.module.scss";

interface IBackProps {}

const Back: FC<IBackProps> = ({}) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <ChevronIcon />
      </Link>
    </div>
  );
};

export default Back;
