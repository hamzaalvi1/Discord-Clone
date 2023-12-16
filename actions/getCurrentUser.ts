import prismadb from "@/libs/prismadb";
import { getSession } from "./getSession";
import type { DefaultSession } from "next-auth";

export type currentUser = {
  id: string;
  name: string | null;
  password?: string | null;
  email: string | null;
  emailVerified: Date | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
} | null;

export const getCurrentUser = async () => {
  const session: DefaultSession | null = await getSession();
  let user: currentUser = null;
  if (session) {
    user = await prismadb.user.findUnique({
      where: { email: session?.user?.email as string },
    });
  }
  user?.password && delete user.password;

  return user;
};
