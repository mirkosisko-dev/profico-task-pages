import axios from "axios";
import { toast } from "react-toastify";

type CreateUserBody = {
  email: string;
  password: string;
};

const createUser = async (
  body: CreateUserBody,
  onSuccess?: () => void
): Promise<void> => {
  try {
    const response = await axios.post("/api/users/create", body);
    if (onSuccess) onSuccess();
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const authenticateUser = async (
  body: CreateUserBody,
  onSuccess?: () => void
): Promise<void> => {
  try {
    const response = await axios.post("/api/users/authenticate", body);
    if (onSuccess) onSuccess();
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export { createUser, authenticateUser };
