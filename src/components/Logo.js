import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src="logo.png" />
       {/* <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text> */}
    </Box> 
  );
}