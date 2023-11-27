import { CSSProperties } from "react";
import { CSSObject } from "@emotion/react";

export const registerCardStyles: CSSObject = {
  background: "secondaryColor",
  width: "450px",
  height: "850px",
  boxShadow: "md",
  borderRadius: "md",
  padding: "15px",
  display: "flex",
  flexFlow: "column",
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
