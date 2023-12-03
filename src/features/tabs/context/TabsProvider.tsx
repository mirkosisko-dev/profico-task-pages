import { ITabsProviderProps } from "./types";
import { useState } from "react";
import { TabsStateContext } from "./TabsContext";
import { TABS } from "@/components/tabs/constants";

const TabsProvider = ({ children }: ITabsProviderProps) => {
  const [currentTab, setCurrentTab] = useState(TABS.FEATURED);

  const contextValue = {
    currentTab,
    setCurrentTab,
  };

  return (
    <TabsStateContext.Provider value={contextValue}>
      {children}
    </TabsStateContext.Provider>
  );
};

export default TabsProvider;
