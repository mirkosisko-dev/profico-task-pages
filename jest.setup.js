import { render } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AuthActionsContext,
  AuthStateContext,
} from "@/features/auth/context/AuthContext";
import { TABS } from "@/components/tabs/constants";
import { TabsStateContext } from "@/features/tabs/context/TabsContext";
import React from "react";

const mockAuthActions = {
  login: jest.fn(),
  logout: jest.fn(),
};

const mockAuthState = {
  user: {
    id: 2,
    email: "test@test.com",
  },
  authenticated: true,
  isConnecting: false,
};

export const mockTabsState = {
  currentTab: TABS.FEATURED,
  setCurrentTab: jest.fn(),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const contextWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthStateContext.Provider value={mockAuthState}>
      <AuthActionsContext.Provider value={mockAuthActions}>
        <TabsStateContext.Provider value={mockTabsState}>
          {children}
        </TabsStateContext.Provider>
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  </QueryClientProvider>
);

export const renderComponent = (component) => {
  const result = render(component, {
    wrapper: contextWrapper,
  });
  return result;
};
