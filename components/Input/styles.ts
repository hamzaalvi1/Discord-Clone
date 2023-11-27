import { CSSObject } from "@emotion/react";

export const formControlStyles = {
  border: "none",
  marginBottom: "10px",
};

export const defaultLabelStyles: CSSObject = {
  fontSize: "xs",
  margin: "0 0 5px 5px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "lightGrey",
  letterSpacing: "0.16px",
};
export const defaultErrorStyles: CSSObject = {
  fontSize: "xs",
  color: "error",
};

export const defaultInputStyles: CSSObject = {
  height: "45px",
  fontSize: "xs",
  color: "white",
  background: "#1E1F22",
  border: "none",
  borderRadius: "sm",
  "&::placeholder": {
    fontSize: "xs",
    color: "lightGrey",
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 1px #1E1F22",
    borderColor: "#1E1F22",
  },
};
