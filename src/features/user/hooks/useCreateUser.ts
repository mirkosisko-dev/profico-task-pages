import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/user";
import { IAuthForm } from "@/features/auth/types";

const useCreateUser = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (body: IAuthForm) => createUser(body),
    onSuccess,
  });

export default useCreateUser;
