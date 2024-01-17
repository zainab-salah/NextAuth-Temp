import LoginForm from "@/components/Forms/LoginForm";
import React from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  return (
    <section className="paddings">
      <div className="container">
        <LoginForm
          error={props.searchParams?.error}
          callbackUrl={props.searchParams?.callbackUrl}
        />
      </div>
    </section>
  );
};

export default SignInPage;
