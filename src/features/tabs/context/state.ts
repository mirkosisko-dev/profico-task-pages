import { TABS } from "@/components/tabs/constants";
import { ITabsState } from "./types";

export const initialState: ITabsState = {
  currentTab: TABS.FEATURED,
  setCurrentTab: () => {},
};
