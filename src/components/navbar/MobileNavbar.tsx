"use client";

import Image from "next/image";
import clsx from "clsx";

import useQueryParams from "@/hooks/useQueryParams";
import useGetNews from "@/hooks/useGetNews";

import { FC, useState } from "react";
import { navLinks } from "./constants";

import styles from "./MobileNavbar.module.scss";
import Logo from "../logo";

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

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Image
          alt="hamburger icon"
          src="/icons/hamburger.svg"
          width={20}
          height={24}
        />
      </div>

      <ul className={clsx(styles.navLinks, { [styles.open]: isMenuOpen })}>
        {navLinks.map((category) => (
          <li
            key={category.category}
            className={clsx(styles.navLink, {
              [styles.activeLink]: activeCategory === category.category,
            })}
            onClick={() => {
              setActiveCategory(category.category);
              setQueryParams({ category: category.category });
            }}
          >
            <Image
              alt={`${category.category} icon`}
              src={category.icon}
              height={category.height}
              width={category.width}
            />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
