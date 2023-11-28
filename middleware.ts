import { withAuth } from "next-auth/middleware";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];


export interface NextRequestWithAuth extends NextRequest {
  nextauth: { token: JWT | null };
}

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const pathname = req.nextUrl.pathname;

      if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/images") ||
        pathname === "/favicon.ico" ||
        pathname === "/__ENV.js" ||
        authRoutes.includes(pathname)
      ) {
        return true;
      }

      if (token) return true;

      return false;
    },
  },
  pages: {
    signIn: "/login",
  },
});
