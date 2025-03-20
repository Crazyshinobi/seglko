import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {

    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    if (path.startsWith("/admin") && !token) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    if (path.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "admin";
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*", 
    "/api/admin/:path*", 
  ],
};
