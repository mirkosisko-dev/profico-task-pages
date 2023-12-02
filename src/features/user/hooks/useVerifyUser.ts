import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "../api/user";
import { IAuthForm } from "@/features/auth/types";

const useAuthenticateUser = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (body: IAuthForm) => authenticateUser(body),
    onSuccess,
  });

export default useAuthenticateUser;
