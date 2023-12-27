"use client";
import { InputField } from "../Input";
import { ModalForm } from "../ModalForm";
import { useForm } from "react-hook-form";
import { ModalFormConfig } from "../ModalForm/ModalForm";

export type ServerSetupForm = {
  imageUrl: string;
  serverName: string;
};

const ServerModal = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<ServerSetupForm>({
    // resolver: zodResolver({}),
  });
  const onSubmit = (value: unknown) => {
    console.log(value);
  };
  const formConfig: ModalFormConfig[] = [
    {
      fieldType: "input",
      placeholderText: "Enter Server Name",
      name: "serverName",
      type: "text",
      labelText: "Server Name",
    },
  ];
  return (
    <ModalForm
      modalFormConfig={formConfig}
      isOpen={true}
      onSubmit={onSubmit}
      title="Customize your server"
      headerDescription="Give your server a personality with a name and an image. You can always change it later"
    >
      <InputField
        control={control}
        error={errors["serverName"]?.message}
        name="serverName"
        type="text"
        labelText="Server Name"
        placeholder={"Enter Server Name"}
      />
    </ModalForm>
  );
};

export default ServerModal;
