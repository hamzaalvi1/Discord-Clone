"use client";
import { z } from "zod";
import { ModalForm } from "../ModalForm";
import { useForm } from "react-hook-form";
import { ModalConfig } from "@/config/constants";
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
      fieldType: ModalConfig.INPUT,
      placeholderText: "Enter Server Name",
      name: "serverName",
      type: "text",
      labelText: "Server Name",
    },
    {
      fieldType: ModalConfig.INPUT,
      placeholderText: "Enter Server Type",
      name: "serverType",
      type: "text",
      labelText: "Server Type",
    },
  ];
  const validationSchema = z.object({
    serverName: z
      .string()
      .trim()
      .min(1, { message: "Server Name is required" }),
    imgUrl: z.string().trim().min(1, { message: "Server Name is required" }),
  });
  return (
    <ModalForm
      modalFormConfig={formConfig}
      isOpen={true}
      onSubmit={onSubmit}
      title="Customize your server"
      headerDescription="Give your server a personality with a name and an image. You can always change it later"
      validationSchema={validationSchema}
    />
  );
};

export default ServerModal;
