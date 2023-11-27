"use client";
import { Button } from "../Button";
import { InputField } from "../Input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import { loginSchema } from "./ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type loginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <Box as="div" marginBlock={{ base: 0, sm: "10px" }}>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <InputField
          control={control}
          error={errors["email"]?.message}
          name="email"
          type="email"
          labelText="Email Address *"
        />
        <InputField
          control={control}
          error={errors["password"]?.message}
          name="password"
          type="password"
          labelText="Password *"
        />
        <Text
          as={"p"}
          fontSize={"13px"}
          color={"blue.500"}
          cursor={"pointer"}
          fontWeight={"medium"}
        >
          Forgot your password?
        </Text>
        <Button
          title="Login"
          type="submit"
          loading={false}
          margin={{ base: "10px 0", sm: "15px 0" }}
        />
      </form>
      <Text as="p" fontSize={"13px"} color={"lightGrey"} fontWeight={"medium"}>
        Need an Account?{" "}
        <Text
          as="span"
          color={"blue.500"}
          cursor={"pointer"}
          onClick={() => router.push("/register")}
        >
          Register
        </Text>
      </Text>
    </Box>
  );
};

export default LoginForm;
