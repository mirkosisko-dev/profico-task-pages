import Input from "@/ui/input";
import Button from "@/ui/button";

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { IAuthForm } from "../types";
import { emailValidation } from "@/helpers/emailValidation";
import { useRouter } from "next/router";

import useCreateUser from "../../user/hooks/useCreateUser";
import useAuthenticateUser from "../../user/hooks/useVerifyUser";

import styles from "./AuthForm.module.scss";
import { useAuthActions } from "../context/AuthContext";
import { toast } from "react-toastify";

interface IAuthFormProps {
  isLogin?: boolean;
  changeAuth: () => void;
}

const AuthForm: FC<IAuthFormProps> = ({ isLogin = "false", changeAuth }) => {
  const router = useRouter();
  const { login } = useAuthActions();

  const onSuccess = (successMessage: string) => {
    login({ email: getValues("email") });
    toast.success(successMessage);
    router.push("/landing");
  };

  const { mutateAsync: createUser } = useCreateUser(() =>
    onSuccess("User created")
  );
  const { mutateAsync: authenticateUser } = useAuthenticateUser(() =>
    onSuccess("Successfully logged in")
  );

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors, isDirty, isValid },
  } = useFormContext<IAuthForm>();

  const onSubmit = async (data: IAuthForm) => {
    isLogin
      ? await authenticateUser({ ...data })
      : await createUser({ ...data });
  };

  return (
    <div className={styles.container}>
      <Input
        name="email"
        control={control}
        label="Email"
        validations={{
          maxLength: {
            value: 256,
            message: "Email is too long",
          },
          pattern: {
            value: emailValidation,
            message: "Wrong email format",
          },
          required: "Email is required",
        }}
        error={errors.email?.message}
      />
      <Input
        name="password"
        type="password"
        control={control}
        label="Password"
        validations={{
          required: "Email is required",
        }}
        error={errors.password?.message}
      />

      <Button
        label="Submit"
        onClick={handleSubmit(onSubmit)}
        disabled={!isDirty || !isValid}
      />
      <div className={styles.text}>
        <p onClick={changeAuth}>
          {isLogin
            ? `Don't have an account? Sign up!`
            : "Already have an account? Log in!"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
