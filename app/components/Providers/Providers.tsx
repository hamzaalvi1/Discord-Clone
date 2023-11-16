"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = (props: ProviderProps) => {
  const { children } = props;
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={true}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
