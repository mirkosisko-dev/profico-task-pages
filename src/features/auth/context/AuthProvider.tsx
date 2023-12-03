import { useEffect, useMemo, useReducer } from "react";
import { AuthActionsContext, AuthStateContext } from "./AuthContext";
import { authReducer } from "./reducer";
import { initialState } from "./state";
import { ActionType, IAuthProviderProps } from "./types";
import { IUser } from "@/features/user/types";
import {
  getStoredUserFromLS,
  removeUserFromLS,
  storeUserToLS,
} from "@/features/user/services/localStorage";

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loadInitialData = async () => {
      dispatch({
        type: ActionType.IS_CONNECTING,
        payload: { isConnecting: true },
      });
      try {
        const user = getStoredUserFromLS();
        dispatch({
          type: ActionType.LOAD_USER,
          payload: { user, authenticated: !!user },
        });
      } catch (error) {
        dispatch({
          type: ActionType.CLEAR_STATE,
        });
      } finally {
        dispatch({
          type: ActionType.IS_CONNECTING,
          payload: { isConnecting: false },
        });
      }
    };

    loadInitialData();
  }, []);

  const login = async (user: IUser) => {
    try {
      storeUserToLS(user);
      dispatch({
        type: ActionType.LOGIN,
        payload: { user },
      });
    } catch (error) {
      dispatch({ type: ActionType.CLEAR_STATE });
    }
  };

  const logout = async () => {
    removeUserFromLS();
    dispatch({ type: ActionType.LOGOUT });
  };

  const actions = useMemo(
    () => ({
      login,
      logout,
    }),
    []
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionsContext.Provider value={actions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
