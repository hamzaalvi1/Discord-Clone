import { JWT } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register"];

export interface NextRequestWithAuth extends NextRequest {
  nextauth: { token: JWT | null };
}

export default withAuth(
  (req: NextRequestWithAuth) => {
    const token = req.nextauth.token;
    const pathName = req.nextUrl.pathname;
    if (token && authRoutes.includes(pathName)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
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
    // pages: {
    //   signIn: "/login",
    // },
  }
);
export const config = {
  matcher: ["/login", "/register", "/:path*"],
};
