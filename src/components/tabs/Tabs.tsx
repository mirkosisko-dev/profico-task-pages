import clsx from "clsx";

import { FC } from "react";
import { TABS, tabs } from "./constants";

import styles from "./Tabs.module.scss";

interface ITabsProps {
  currentTab: string;
  setCurrentTab: (tab: TABS) => void;
}

const Tabs: FC<ITabsProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <div className={clsx(styles.container, "hideOnDesktop")}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={clsx(styles.tab, {
            [styles.active]: currentTab === tab.id,
          })}
          onClick={() => setCurrentTab(tab.id)}
        >
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
