import { TABS } from "@/components/tabs/constants";

export interface ITabsState {
  currentTab: TABS;
  setCurrentTab: (tab: TABS) => void;
}

export interface ITabsProviderProps {
  children: React.ReactNode;
}
