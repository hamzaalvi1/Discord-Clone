"use client";

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { CSSObject } from "@emotion/react";
interface ModalProps {
  title: string;
  isOpen: boolean;
  isFooter?: boolean;
  onClose?: () => void;
  styleProps?: {
    modalContentStyles?: CSSObject;
    overlayStyles?: CSSObject;
    titleStyles?: CSSObject;
  };
  children?: React.ReactNode;
  footerContent?: React.ReactNode;
  size?: string;
  isFooterEnabled?: boolean;
  isCentered?: boolean;
  motionPreset?: MotionPreset;
}
type MotionPreset =
  | "slideInBottom"
  | "slideInRight"
  | "slideInTop"
  | "slideInLeft"
  | "scale"
  | "none";

const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose = () => {},
    title,
    styleProps,
    children,
    isFooterEnabled = false,
    footerContent,
    isCentered = true,
    motionPreset,
    size = "md",
    ...rest
  } = props;
  return (
    <ChakraModal
      isCentered={isCentered}
      motionPreset={motionPreset}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      // onOverlayClick={false}
      {...rest}
    >
      <ModalOverlay bg="blackAlpha.500" sx={styleProps?.overlayStyles} />
      <ModalContent sx={styleProps?.modalContentStyles}>
        <ModalHeader>
          <Text
            as={"h6"}
            fontWeight={"bold"}
            color={"gray.900"}
            fontSize={"md"}
            sx={styleProps?.titleStyles}
          >
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {isFooterEnabled && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
