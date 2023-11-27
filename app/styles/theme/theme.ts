import { extendTheme } from "@chakra-ui/react";
import { OpenSans } from "@/components/Fonts";
import { Heading, Button } from "./components";

const colors = {
  primaryColor: "#FF385C",
  secondaryColor: "#313338",
  blackColor: "#1E1F22",
  lightGrey: "#9ea0a3",
  darkGrey: "#82868c",
  white: "#fff",
  error: "#E00B41",
};

const fontWeights = {
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
const fonts = {
  open_sans: OpenSans.style.fontFamily,
};

const breakpoints = {
  base: "0",
  sm: "575px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
  "2xl": "1600px",
};

const components = {
  Heading,
  Button,
};
export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
  components,
});
