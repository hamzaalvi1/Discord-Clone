import { LoginForm } from "@/components/Auth";
import { Box, Heading, Flex } from "@chakra-ui/react";
import {
  registerCardStyles,
  registerWrapper,
  registerHeadingStyles,
} from "./styles";
const RegisterPage = () => {
  return (
    <Box as="div" sx={registerCardStyles}>
      <Flex as={"div"} sx={registerWrapper}>
        <Heading as={"h2"} sx={registerHeadingStyles}>
          Create An Account
        </Heading>

        <LoginForm />
      </Flex>
    </Box>
  );
};

export default RegisterPage;
