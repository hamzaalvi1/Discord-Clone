"use client";
import { InputField } from "../Input";
import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { loginSchema } from "./ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type loginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <Box as="div">
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <InputField
          errors={errors}
          control={control}
          name="email"
          type="email"
          labelText="Email Address *"
        />
        <InputField
          errors={errors}
          control={control}
          name="password"
          type="password"
          labelText="Password *"
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default LoginForm;
