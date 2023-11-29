import Image from "next/image";
import clsx from "clsx";

import useQueryParams from "@/hooks/useQueryParams";

import { FC, useState } from "react";

import Logo from "../logo";
import SearchBar from "../search";
import { navLinks } from "./constants";

import styles from "./MobileNavbar.module.scss";

interface INavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Navbar: FC<INavbarProps> = ({ activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const { setQueryParams } = useQueryParams<{
    category: string;
  }>();

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
                  setQueryParams({ category: category.category });
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
