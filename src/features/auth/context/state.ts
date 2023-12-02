import { IAuthActions, IAuthState } from "./types";

export const initialState: IAuthState = {
  user: null,
  authenticated: false,
  isConnecting: false,
};

export const initialActions: IAuthActions = {
  login: async () => {
    // empty
  },
  logout: async () => {
    //empty
  },
};
