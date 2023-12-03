import SearchBar from "../search";
import Logo from "../logo";
import Link from "next/link";
import Button from "@/ui/button";

import { FC } from "react";
import { useAuthActions } from "@/features/auth/context/AuthContext";

import styles from "./Header.module.scss";

interface IHeaderProps {
  isLanding: boolean;
}

const Header: FC<IHeaderProps> = ({ isLanding }) => {
  const { logout } = useAuthActions();
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

      <Button className={styles.logout} label="Logout" onClick={logout} />
    </div>
  );
};

export default Header;
