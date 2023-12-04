import clsx from "clsx";
import Link from "next/link";

import { FC } from "react";
import { navLinks } from "./constants";
import { parseAsString, useQueryStates } from "next-usequerystate";

import styles from "./DesktopNavbar.module.scss";

interface INavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Navbar: FC<INavbarProps> = ({ activeCategory, setActiveCategory }) => {
  const [queryStates, updateQueryStates] = useQueryStates({
    q: parseAsString,
    category: parseAsString,
  });

  return (
    <nav className="hideOnMobileAndTablet">
      <ul className={styles.navLinks}>
        {navLinks.map((category) => (
          <Link
            key={category.category}
            href={{
              pathname: "/",
              query: { ...queryStates },
            }}
            onClick={() => {
              setActiveCategory(category.category);
              updateQueryStates({ category: category.category, q: null });
            }}
          >
            <li
              className={clsx(styles.navLink, {
                [styles.activeLink]: activeCategory === category.category,
              })}
            >
              {category.icon}
              <span>{category.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
