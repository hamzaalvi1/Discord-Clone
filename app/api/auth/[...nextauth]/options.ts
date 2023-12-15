import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        const isUserExist = await prismadb.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }
        if (!isUserExist) {
          throw new Error("User does not exist");
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          isUserExist.password as string
        );
        if (!isCorrectPassword) {
          throw new Error("Please enter a valid password");
        }
        const { password, ...user } = isUserExist;

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
