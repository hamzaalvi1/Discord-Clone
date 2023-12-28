"use client";
import { Button } from "../Button";
import { Modal } from "@/components/Modal";
import { Box, Flex } from "@chakra-ui/react";
import type { ModalProps } from "../Modal/Modal";
import { ZodFirstPartySchemaTypes, z } from "zod";
import { ModalFormConfigHandler } from "@/hooks";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  titleStyles,
  modalFooterStyles,
  modalContentStyles,
  modalHeaderDescStyles,
  modalHeaderStyles,
} from "./styles";
export interface ModalFormConfig {
  fieldType: "input" | "select" | "uploadImg";
  placeholderText?: string;
  name: string;
  type?: string;
  labelText?: string;
  control?: unknown;
  options?: any[];
}

interface ModalFormProps extends ModalProps {
  isOpen: boolean;
  onSubmit: (values: unknown) => void;
  modalFormConfig: ModalFormConfig[];
  validationSchema: ZodFirstPartySchemaTypes;
}

const ModalForm: React.FC<ModalFormProps> = (props) => {
  const {
    title,
    isOpen,
    onSubmit,
    size = "2xl",
    modalFormConfig,
    validationSchema: ValidationSchema,
    headerDescription,
    overlayOpacity = "100",
  } = props;
  type ModalFormType = z.infer<typeof ValidationSchema>;
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ModalFormType>({
    resolver: zodResolver(ValidationSchema),
  });

  return (
    <Modal
      size={size}
      title={title}
      isOpen={isOpen}
      overlayOpacity={overlayOpacity}
      headerDescription={headerDescription}
      styleProps={{
        titleStyles: titleStyles,
        modalContentStyles: modalContentStyles,
        headerDescStyles: modalHeaderDescStyles,
        // modalHeaderStyles: modalHeaderStyles,
      }}
    >
      <Box as="div">
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
          <Box as="div" marginBlock={{ base: 0, sm: "10px" }}>
            {modalFormConfig.map((config, idx) => {
              return (
                <Box as="div" key={idx}>
                  {ModalFormConfigHandler({ ...config, control }, errors)}
                </Box>
              );
            })}
          </Box>
          <Flex as="div" sx={modalFooterStyles} justifyContent={"flex-end"}>
            <Button
              title="Create"
              type="submit"
              loading={isSubmitting}
              width={"140px"}
              minHeight={"35px"}
              borderRadius={3}
              lineHeight={"35px"}
              fontWeight={"medium"}
              letterSpacing={"0.5px"}
              margin={{ base: "0", sm: "0" }}
            />
          </Flex>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalForm;
