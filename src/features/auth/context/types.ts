import { IUser } from "@/features/user/types";

export enum ActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  LOAD_USER = "LOAD_USER",
  IS_CONNECTING = "IS_CONNECTING",
  CLEAR_STATE = "CLEAR_STATE",
}

export interface IAuthActions {
  login: (user: IUser) => Promise<void>;
  logout: () => Promise<void>;
}

export interface IAuthState {
  user: IUser | null;
  authenticated: boolean;
  isConnecting: boolean;
}

export interface IAuthActionReducer {
  type: ActionType;
  payload?: any;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}
