import { CSSProperties } from "react";

export const loginCardStyles: CSSProperties = {
  background: "secondaryColor",
  width: "700px",
  height: "400px",
  boxShadow: "md",
  borderRadius: "lg",
  padding: "15px",
  display: "grid",
  gridTemplateColumns: "60% 40%",
};

export const loginHeadingStyles: CSSProperties = {
  color: "white",
  fontWeight: "semibold",
  fontSize: "2xl",
  textAlign:"center",
  letterSpacing:"0.25px"
};

export const loginParaStyles: CSSProperties = {
  fontWeight: "normal",
  fontSize: "md",
  textAlign:"center",
  color:"lightGrey",
  padding: "10px 0"
};

export const loginLeftWrapper: CSSProperties = {
  padding: "10px",
}