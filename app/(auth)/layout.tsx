import { Box } from "@chakra-ui/react";
import { layoutStyles, overlayStyles } from "./styles";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box as="main" sx={layoutStyles}>
      <Box as="div" sx={overlayStyles} />
      {children}
    </Box>
  );
}
