import { signIn } from "next-auth/react";
import type { loginForm } from "@/components/Auth/LoginForm";
import { errorLogger, successLogger } from "@/components/Toaster";

type loginCredientialsParams = {
  values: loginForm;
};
type CustomError = {
  error: string;
  ok: boolean;
  status: number;
  url: string | null;
};

export const loginWithCredentials = async (params: loginCredientialsParams) => {
  const { values } = params;
  let success = false;
  try {
    const getCredentials = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (getCredentials?.status == 200 && getCredentials?.ok) {
      successLogger("Logged in");
      return { success: true };
    } else if (getCredentials?.status == 401 && !getCredentials?.ok) {
      errorLogger("Invalid credentials");
      return { success: false };
    }
    console.log(getCredentials, "getCredentials");
  } catch (err: unknown) {
    if (err instanceof Error) {
      errorLogger(err.message);
    } else if (!(err as CustomError)?.ok) {
      console.log(err, "err");
      return { success: false };
    }
  }
};
