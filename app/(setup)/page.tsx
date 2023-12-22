import { Modal } from "@/components/Modal";
import { getCurrentUser } from "@/app/actions";
import { modalContentStyles } from "./styles";
import { ToggleMode } from "@/components/ToggleMode";
const HomePage = async () => {
  const user = await getCurrentUser();

  return (
    <main>
      <Modal
        styleProps={{ modalContentStyles: modalContentStyles }}
        title="Select Your Server"
        isOpen={true}
        size="lg"
      />
    </main>
  );
};
export default HomePage;
