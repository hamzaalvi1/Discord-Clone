import { CSSProperties } from "react";
import { CSSObject } from "@emotion/react";

export const loginCardStyles: CSSObject = {
  background: "secondaryColor",
  width: "700px",
  height: "425px",
  boxShadow: "md",
  borderRadius: "md",
  padding: "15px",
  display: "grid",
  gridTemplateColumns: "60% 40%",
  "@media screen and (max-width:575px)": {
    gridTemplateColumns: "100%",
    gridAutoColumns: "minmax(100px, auto)",
    height: "auto",
    margin: "5px",
  },
};

export const loginHeadingStyles: CSSProperties = {
  color: "white",
  fontWeight: "semibold",
  fontSize: "2xl",
  textAlign: "center",
  letterSpacing: "0.25px",
};

export const loginParaStyles: CSSProperties = {
  fontWeight: "normal",
  fontSize: "sm",
  textAlign: "center",
  color: "lightGrey",
  padding: "5px 0 10px",
};

export const loginLeftWrapper: CSSObject = {
  padding: "10px",
  flexFlow: "column",
  justifyContent: "center",
  "@media screen and (max-width:575px)": {
    padding: 0,
  },
};
