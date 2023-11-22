import { extendTheme } from "@chakra-ui/react";
import { Heading } from "./components";

const colors = {
  primaryColor: "#5865F2",
  secondaryColor: "#313338",
  blackColor: "#1E1F22",
  lightGrey: "#9ea0a3",
  darkGrey: "#82868c",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const components = {
  Heading,
};
export const theme = extendTheme({
  colors,
  fontWeights,
  fontSizes,
  components,
});
