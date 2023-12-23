"use client";
import { Modal } from "../Modal";
import { Button } from "../Button";
import {
  titleStyles,
  modalContentStyles,
  modalHeaderDescStyles,
} from "./styles";
import ServerSetupForm from "./ServerSetupForm";
const ServerModal = () => {
  const submitButton = () => {
    return (
      <Button
        title="Create"
        type="submit"
        loading={false}
        margin={{ base: "10px 0", sm: "15px 0" }}
      />
    );
  };
  return (
    <Modal
      size="2xl"
      isOpen={true}
      overlayOpacity={"100"}
      title="Customize your server"
      isFooterEnabled={true}
      headerDescription=" Give your server a personality with a name and an image. You can always change it later."
      styleProps={{
        titleStyles: titleStyles,
        modalContentStyles: modalContentStyles,
        headerDescStyles: modalHeaderDescStyles,
      }}
      footerContent={submitButton()}
    >
      <ServerSetupForm />
    </Modal>
  );
};

export default ServerModal;
