import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  fontWeight: "normal",
  fontSize: "2xl",
  marginBlock: "10px",
});


export default defineStyleConfig({
    variants:{
        primary
    }
})