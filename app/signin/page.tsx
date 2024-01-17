import LoginForm from "@/components/Forms/LoginForm";
import { getServerSession } from "next-auth";
 
 
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
 
type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = async (props: Props) => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/");
  }
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
