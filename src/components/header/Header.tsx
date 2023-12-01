import { FC } from "react";

import SearchBar from "../search";
import Logo from "../logo";

import styles from "./Header.module.scss";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  return (
    <div className={styles.container}>
      <Logo className="hideOnMobile" />
      <SearchBar />
    </div>
  );
};

export default Header;
