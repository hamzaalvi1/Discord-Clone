"use client";
import { fetchAPI } from "@/utils";
import { Button } from "../Button";
import { InputField } from "../Input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import { ApiMethods } from "@/config/constants";
import { AuthRoutes } from "@/config/api-routes";
import { registerSchema } from "./ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type registerForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registerForm>({
    resolver: zodResolver(registerSchema),
  });

  const handleStopOnPaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    evt.preventDefault();
  };

  const handleRegisterUser = async (values: registerForm) => {
    console.log(values, "values");
    const response = await fetchAPI({
      method: ApiMethods.POST,
      url: AuthRoutes.REGISTER,
      data: values,
    });
    console.log(response.data, "response");
  };

  return (
    <Box as="div" marginBlock={{ base: 0, sm: "10px" }}>
      <form onSubmit={handleSubmit((values) => handleRegisterUser(values))}>
        <InputField
          control={control}
          error={errors["username"]?.message}
          name="username"
          type="text"
          labelText="Username *"
          styleProps={{
            inputStyles: {
              marginBottom: errors["username"] ? "3px" : "10px ",
            },
          }}
        />
        <InputField
          control={control}
          error={errors["email"]?.message}
          name="email"
          type="email"
          labelText="Email Address *"
          styleProps={{
            inputStyles: {
              marginBottom: errors["email"] ? "3px" : "10px ",
            },
          }}
        />
        <InputField
          control={control}
          error={errors["password"]?.message}
          name="password"
          type="password"
          labelText="Password *"
          styleProps={{
            inputStyles: {
              marginBottom: errors["password"] ? "3px" : "10px ",
            },
          }}
        />
        <InputField
          control={control}
          error={errors["confirmPassword"]?.message}
          name="confirmPassword"
          type="password"
          labelText="Confirm Password *"
          onPaste={handleStopOnPaste}
          styleProps={{
            inputStyles: {
              marginBottom: errors["confirmPassword"] ? "3px" : "10px ",
            },
          }}
        />
        <Text
          as={"p"}
          fontSize={"12px"}
          color={"lightGrey"}
          fontWeight={"medium"}
          margin={{ base: "0 0", sm: "0 0 10px" }}
        >
          Contine to create your account or click already have an account
        </Text>
        <Button
          title="Continue"
          type="submit"
          loading={false}
          margin={{ base: "5px 0" }}
        />
      </form>
      <Text
        as="p"
        fontSize={"13px"}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}
        onClick={() => router.push("/login")}
      >
        Already have an account? <Text as="span"></Text>
      </Text>
    </Box>
  );
};

export default RegisterForm;
