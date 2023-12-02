import Logo from "@/components/logo";
import AuthForm from "./AuthForm";

import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IAuthForm } from "../types";

import styles from "./Auth.module.scss";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const methods = useForm<IAuthForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className={styles.container}>
      <Logo />
      <h1>{isLogin ? "Login" : "Registration"}</h1>
      <FormProvider {...methods}>
        <AuthForm
          isLogin={isLogin}
          changeAuth={() => (isLogin ? setIsLogin(false) : setIsLogin(true))}
        />
      </FormProvider>
    </div>
  );
};

export default Auth;
