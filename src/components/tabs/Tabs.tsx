import clsx from "clsx";

import { FC } from "react";
import { useTabsState } from "@/features/tabs/context/TabsContext";
import { tabs } from "./constants";

import styles from "./Tabs.module.scss";

interface ITabsProps {}

const Tabs: FC<ITabsProps> = () => {
  const { currentTab, setCurrentTab } = useTabsState();
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
