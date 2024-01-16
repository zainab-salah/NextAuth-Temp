 
import LoginForm from "@/components/Forms/LoginForm";
import React from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  return (
    <LoginForm
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  );
};

export default SignInPage;