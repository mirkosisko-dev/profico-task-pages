import { createContext, useContext } from 'react';

import { initialActions, initialState } from './state';
import { IAuthActions, IAuthState } from './types';

export const AuthStateContext = createContext<IAuthState>(initialState);
export const AuthActionsContext = createContext<IAuthActions>(initialActions);

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthActions = () => useContext(AuthActionsContext);
