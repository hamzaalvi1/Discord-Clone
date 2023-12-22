import { Modal } from "@/components/Modal";
import { prismadb } from "@/libs/prismadb";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/actions";
import { modalContentStyles } from "./styles";
import { ToggleMode } from "@/components/ToggleMode";
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
  return (
    <Modal
      styleProps={{ modalContentStyles: modalContentStyles }}
      title="Select Your Server"
      isOpen={true}
      size="lg"
    />
  );
};
export default HomePage;
