import Image from "next/image";
import clsx from "clsx";
import Logo from "../logo";
import SearchBar from "../search";

import { FC, useState } from "react";
import { navLinks } from "./constants";
import { parseAsString, useQueryStates } from "next-usequerystate";
import { useTabsState } from "@/features/tabs/context/TabsContext";
import { TABS } from "../tabs/constants";

import styles from "./MobileNavbar.module.scss";

interface INavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Navbar: FC<INavbarProps> = ({ activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const { setCurrentTab } = useTabsState();

  const [queryStates, updateQueryStates] = useQueryStates({
    q: parseAsString,
    category: parseAsString,
  });

  return (
    <nav className={clsx(styles.container, "hideOnDesktop")}>
      <Logo />

      {!isMenuOpen && (
        <div className={styles.openIcon} onClick={toggleMenu}>
          <Image
            alt="hamburger icon"
            src="/icons/hamburger.svg"
            width={20}
            height={24}
          />
        </div>
      )}

      <div className={clsx(styles.menu, { [styles.open]: isMenuOpen })}>
        <Logo />

        <SearchBar />

        <ul className={styles.navLinks}>
          {isMenuOpen && (
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <Image
                alt="hamburger icon"
                src="/icons/close.svg"
                width={20}
                height={24}
              />
            </div>
          )}

          {navLinks.map((category) => {
            return (
              <li
                key={category.category}
                className={clsx(styles.navLink, {
                  [styles.activeLink]: activeCategory === category.category,
                })}
                onClick={() => {
                  setActiveCategory(category.category);
                  setCurrentTab(TABS.FEATURED);
                  updateQueryStates({ category: category.category, q: null });
                  toggleMenu();
                }}
              >
                {category.icon}
                <span>{category.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
