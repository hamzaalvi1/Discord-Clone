"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/styles/theme";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = (props: ProviderProps) => {
  const { children } = props;
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={true} theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
