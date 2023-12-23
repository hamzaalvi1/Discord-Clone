"use client";
import { Button } from "../Button";
import { InputField } from "../Input";
import { useForm } from "react-hook-form";
import { Box, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

export type ServerSetupForm = {
  imageUrl: string;
  serverName: string;
};

const ServerSetupForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<ServerSetupForm>({
    // resolver: zodResolver({}),
  });
  return (
    <Box as="div" marginBlock={{ base: 0, sm: "10px" }}>
      <form onSubmit={handleSubmit(() => {})}>
        <InputField
          control={control}
          error={errors["serverName"]?.message}
          name="serverName"
          type="text"
          labelText="Server Name"
          placeholder={"Enter Server Name"}
        />

        <Button
          title="Create"
          type="submit"
          loading={isSubmitting}
          margin={{ base: "10px 0", sm: "15px 0" }}
        />
      </form>
    </Box>
  );
};

export default ServerSetupForm;
