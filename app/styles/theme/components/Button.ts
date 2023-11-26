import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  borderRadius: "sm",
  fontWeight: "semibold",
  color: "#fff",
  backgroundColor: "primaryColor",
  width: "100%",
  display: "block",
  cursor: "pointer",
  minHeight: "45px",
  fontSize: "sm",
  marginBlock: "20px",
});

const secondary = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  color: "#000",
  backgroundColor: "transparent",
  width: "100%",
  display: "block",
  cursor: "pointer",
  minHeight: "50px",
  fontSize: "md",
  border: "2px solid",
  borderColor: "#000",
  marginBlock: "20px",
});

const oAuth = {
  fontSize: "sm",
  color: "blackColor",
  backgroundColor: "white",
  fontWeight: "semibold",
  minHeight: "45px",
  minWidth: "100%",
  height: "100%",
  cursor: "pointer",
  marginBlock: "10px",
  position: "relative",
  borderRadius: "sm",
};

export default defineStyleConfig({
  variants: { primary, oAuth, secondary },
});
