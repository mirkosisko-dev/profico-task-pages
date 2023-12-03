import axios from "axios";
import { toast } from "react-toastify";
import { IUser } from "../types";

type CreateUserBody = {
  email: string;
  password: string;
};

const createUser = async (body: CreateUserBody): Promise<IUser> => {
  try {
    const response = await axios.post("/api/users/create", body);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

const authenticateUser = async (body: CreateUserBody): Promise<IUser> => {
  try {
    const response = await axios.post("/api/users/authenticate", body);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

export { createUser, authenticateUser };
