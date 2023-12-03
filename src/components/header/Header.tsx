import { FC } from "react";

import SearchBar from "../search";
import Logo from "../logo";

import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "@/ui/button";

interface IHeaderProps {
  isLanding: boolean;
}

const Header: FC<IHeaderProps> = ({ isLanding }) => {
  return (
    <div className={styles.container}>
      <Logo className="hideOnMobile" />
      <SearchBar />
      <Link
        href={isLanding ? "/bookmarks" : "/landing"}
        className="hideOnMobile"
      >
        <Button
          label={isLanding ? "Bookmarks" : "Featured"}
          variant="secondary"
        />
      </Link>
    </div>
  );
};

export default Header;
