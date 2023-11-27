"use client";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

import { Flex, Text } from "@chakra-ui/react";

const OAuthLogin = () => {
  return (
    <Flex as="div" flexFlow={"column"}>
      <Text
        textAlign={"center"}
        color={"lightGrey"}
        fontWeight={"medium"}
        mb={{ base: "0", sm: "5px" }}

      >
        OR
      </Text>
      <Button
        title="Login With Google"
        type="button"
        variant="oAuth"
        leftIcon={
          <FcGoogle
            size={24}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
      <Button
        title="Login With GitHub"
        type="button"
        variant="oAuth"
        leftIcon={
          <IoLogoGithub
            size={24}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
      <Button
        title="Login With Apple"
        type="button"
        variant="oAuth"
        disabled={true}
        leftIcon={
          <FaApple
            size={24}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
    </Flex>
  );
};

export default OAuthLogin;
