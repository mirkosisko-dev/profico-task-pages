import { IUser } from "../types";

export const getStoredUserFromLS = (): IUser | null => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const storeUserToLS = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLS = () => {
  localStorage.removeItem("user");
};
