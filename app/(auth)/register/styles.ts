import { CSSProperties } from "react";
import { CSSObject } from "@emotion/react";

export const registerCardStyles: CSSObject = {
  background: "secondaryColor",
  width: "450px",
  height: "calc(100vh - 20%)",
  boxShadow: "md",
  borderRadius: "md",
  padding: "15px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  "@media screen and (max-width:575px)": {
    height: "auto",
    margin: " 0 10px",
  },
};

export const registerHeadingStyles: CSSProperties = {
  color: "white",
  fontWeight: "semibold",
  fontSize: "2xl",
  textAlign: "center",
  letterSpacing: "0.25px",
};

export const registerWrapper: CSSObject = {
  padding: "10px",
  flexFlow: "column",
  justifyContent: "center",
  "@media screen and (max-width:575px)": {
    padding: 0,
  },
};
