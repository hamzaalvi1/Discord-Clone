"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ToasterProvider } from "../Toaster";
import { theme } from "@/app/styles/theme";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = (props: ProviderProps) => {
  const { children } = props;
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={true} theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ToasterProvider />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
