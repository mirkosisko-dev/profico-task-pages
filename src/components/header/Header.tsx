import SearchBar from "../search";
import Logo from "../logo";
import Link from "next/link";
import Button from "@/ui/button";

import { FC } from "react";
import {
  useAuthActions,
  useAuthState,
} from "@/features/auth/context/AuthContext";

import styles from "./Header.module.scss";

interface IHeaderProps {
  isLanding: boolean;
}

const Header: FC<IHeaderProps> = ({ isLanding }) => {
  const { authenticated } = useAuthState();
  const { logout } = useAuthActions();
  return (
    <div className={styles.container}>
      <Logo className="hideOnMobileAndTablet" />
      <SearchBar testId="search-desktop" />
      <Link
        href={isLanding ? "/bookmarks" : "/"}
        className="hideOnMobileAndTablet"
      >
        <Button
          label={isLanding ? "Bookmarks" : "Featured"}
          variant="secondary"
        />
      </Link>

      {authenticated ? (
        <Button className={styles.authBtn} label={"Logout"} onClick={logout} />
      ) : (
        <Link href="/auth">
          <Button className={styles.authBtn} label={"Login"} />
        </Link>
      )}
    </div>
  );
};

export default Header;
