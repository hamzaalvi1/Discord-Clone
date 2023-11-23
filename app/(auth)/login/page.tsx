import { LoginForm } from "@/components/Auth";
import { Box, Heading, Text } from "@chakra-ui/react";
import {
  loginCardStyles,
  loginHeadingStyles,
  loginLeftWrapper,
  loginParaStyles,
} from "./styles";
const LoginPage = () => {
  return (
    <Box as="div" sx={loginCardStyles}>
      <Box as={"div"} sx={loginLeftWrapper}>
        <Heading as={"h2"} sx={loginHeadingStyles}>
          Welcome Back!
        </Heading>
        <Text as={"p"} sx={loginParaStyles}>
          We are are so excited to see you again!
        </Text>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
