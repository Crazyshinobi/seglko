import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin", // Redirect unauthenticated users to the login page
  },
});

export const config = {
  matcher: ["/admin/dashboard"], // You can change this to "/admin/:path*" to protect all admin routes
};
