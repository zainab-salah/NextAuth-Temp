// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith("/adminpage") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/adminpage", "/client"] };
