import Logo from "@/components/logo";
import AuthForm from "./AuthForm";

import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IAuthForm } from "../types";
import { useAuthState } from "../context/AuthContext";
import { useRouter } from "next/router";

import styles from "./Auth.module.scss";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  const { authenticated } = useAuthState();

  const methods = useForm<IAuthForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (authenticated) router.push("/landing");
  }, [authenticated, router]);

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
