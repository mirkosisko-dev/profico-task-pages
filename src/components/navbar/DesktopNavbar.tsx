"use client";

import Image from "next/image";
import clsx from "clsx";

import useQueryParams from "@/hooks/useQueryParams";

import { FC } from "react";
import { navLinks } from "./constants";

import styles from "./DesktopNavbar.module.scss";

interface INavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Navbar: FC<INavbarProps> = ({ activeCategory, setActiveCategory }) => {
  const { setQueryParams } = useQueryParams<{
    category: string;
  }>();

  return (
    <nav className="hideOnMobile">
      <ul className={styles.navLinks}>
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
              className={styles.icon}
            />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
