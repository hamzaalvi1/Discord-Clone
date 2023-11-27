import { RegisterForm } from "@/components/Auth";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
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
          Welcome to Homee.
        </Heading>
        <Text
          as="p"
          textAlign={"center"}
          margin={{ base: "5px", sm: "10px 0" }}
          color={"lightGrey"}
          fontSize={"sm"}
        >
          Create an Account{" "}
        </Text>
        <RegisterForm />
      </Flex>
    </Box>
  );
};

export default RegisterPage;
