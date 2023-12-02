import { initialState } from "./state";
import { ActionType, IAuthActionReducer, IAuthState } from "./types";

export const authReducer = (
  state: IAuthState,
  action: IAuthActionReducer
): IAuthState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        authenticated: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    case ActionType.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        authenticated: action.payload.authenticated,
      };
    case ActionType.IS_CONNECTING:
      return {
        ...state,
        isConnecting: action.payload.isConnecting,
      };
    case ActionType.CLEAR_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
