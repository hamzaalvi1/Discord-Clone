import { prismadb } from "@/libs/prismadb";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/actions";
import { ToggleMode } from "@/components/ToggleMode";
import { ServerModal } from "@/components/SeverModal";
const HomePage = async () => {
  const user = await getCurrentUser();
  const server = await prismadb.server.findFirst({
    where: {
      members: {
        some: {
          userId: user?.id,
        },
      },
    },
  });
  if (server?.id) {
    return redirect(`/servers/${server?.id}`);
  }
  return <ServerModal />  ;
};
export default HomePage;
