import { CSSProperties } from "react";

export const loginCardStyles: CSSProperties = {
  background: "secondaryColor",
  width: "700px",
  height: "425px",
  boxShadow: "md",
  borderRadius: "md",
  padding: "15px",
  display: "grid",
  gridTemplateColumns: "60% 40%",
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

export const loginLeftWrapper: CSSProperties = {
  padding: "10px",
  flexFlow: "column",
  justifyContent: "center",
};
