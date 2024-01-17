import UserCard from "@/components/Common/UserCard";
import Link from "next/link";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function ExtraPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <section className="paddings">
      <div className="container flex flex-col items-center justify-evenly ">
        <UserCard user={session?.user} pagetype={"Admin"} />

        <Link
          href="api/auth/signout"
          className="py-2 px-3 mt-10 bg-primary text-white"
        >
          تسجيل خروج
        </Link>
      </div>
    </section>
  );
}
