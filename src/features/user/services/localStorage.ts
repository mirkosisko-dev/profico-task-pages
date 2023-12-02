import { IUser } from "../types";

export function getStoredUserFromLS(): IUser | null {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
}

export function storeUserToLS(user: IUser) {
  localStorage.setItem("user", JSON.stringify(user));
}
