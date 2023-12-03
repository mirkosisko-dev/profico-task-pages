import { createContext, useContext } from "react";

import { initialState } from "./state";
import { ITabsState } from "./types";

export const TabsStateContext = createContext<ITabsState>(initialState);

export const useTabsState = () => useContext(TabsStateContext);
