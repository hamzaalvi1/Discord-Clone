import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
export const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
