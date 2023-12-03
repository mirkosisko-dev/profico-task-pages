import clsx from "clsx";

import { FC } from "react";
import { navLinks } from "./constants";
import { parseAsString, useQueryStates } from "next-usequerystate";
import { useRouter } from "next/router";

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

  const { push, pathname } = useRouter();

  const pushToLanding = () => {
    if (!pathname.includes("/landing")) push("/landing");
  };

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
              pushToLanding();
              updateQueryStates({ category: category.category, q: null });
            }}
          >
            {category.icon}
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
