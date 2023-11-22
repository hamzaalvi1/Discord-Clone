import { Box, Heading } from "@chakra-ui/react";

import { loginCardStyles } from "./styles";
const LoginPage = () => {
  return (
    <Box as="div" sx={loginCardStyles}>
      <Heading as={"h2"} fontSize={"xl"} fontWeight={"sm"}>Welcome back!</Heading>
    </Box>
  );
};

export default LoginPage;
