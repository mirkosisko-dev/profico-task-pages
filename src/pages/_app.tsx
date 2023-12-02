import { queryClient } from "@/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/_base.scss";
import AuthProvider from "@/features/auth/context/AuthProvider";
import { useAuthState } from "@/features/auth/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const { user } = useAuthState();
  console.log({ user });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
