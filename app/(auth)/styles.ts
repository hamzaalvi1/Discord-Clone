import { CSSProperties } from "react";

export const layoutStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
  backgroundImage: "url('/images/loginbg.jpg')",
  backgroundSize: "cover",
  zIndex: "0",
  
};

export const overlayStyles: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  background: "#000",
  opacity: "0.15",
  zIndex: "-1",
};

