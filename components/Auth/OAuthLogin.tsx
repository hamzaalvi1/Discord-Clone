"use client";
import { Button } from "../Button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Flex, Text } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

type LoginType = "google" | "github" | "apple";

const OAuthLogin = () => {
  const handleOAuthLogin = async (loginType: LoginType) => {
    try {
      const response = await signIn(loginType);
    } catch (err) {
      console.log(err);
    }
  };
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
        handleClick={() => handleOAuthLogin("google")}
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
