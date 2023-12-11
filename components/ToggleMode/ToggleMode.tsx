"use client";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ToggleMode;
