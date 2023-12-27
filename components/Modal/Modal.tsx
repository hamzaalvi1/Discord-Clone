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
export interface ModalProps {
  title: string;
  isOpen: boolean;
  isFooter?: boolean;
  onClose?: () => void;
  styleProps?: {
    modalContentStyles?: CSSObject;
    overlayStyles?: CSSObject;
    titleStyles?: CSSObject;
    headerDescStyles?: CSSObject;
    modalHeaderStyles?: CSSObject;
  };
  children?: React.ReactNode;
  footerContent?: React.ReactNode;
  size?: string;
  isFooterEnabled?: boolean;
  isCentered?: boolean;
  motionPreset?: MotionPreset;
  overlayOpacity?: string;
  headerDescription?: string;
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
    footerContent,
    isCentered = true,
    motionPreset,
    size = "md",
    overlayOpacity = "400",
    headerDescription,
    isFooterEnabled = false,
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
      <ModalOverlay
        bg={`blackAlpha.${overlayOpacity}`}
        sx={styleProps?.overlayStyles}
      />
      <ModalContent
        sx={{ borderRadius: "md", ...styleProps?.modalContentStyles }}
      >
        <ModalHeader padding={0} sx={styleProps?.modalHeaderStyles}>
          <Text
            as={"h6"}
            fontWeight={"bold"}
            color={"gray.900"}
            fontSize={"md"}
            sx={styleProps?.titleStyles}
          >
            {title}
          </Text>
          {headerDescription && (
            <Text
              as={"p"}
              color={"gray.600"}
              fontSize={"sm"}
              fontWeight={"normal"}
              sx={styleProps?.headerDescStyles}
            >
              {headerDescription}
            </Text>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody sx={{ padding: 0 }}>{children}</ModalBody>
        {isFooterEnabled && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
