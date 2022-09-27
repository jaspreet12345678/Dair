import React from "react";
import Map3D from "./Graph";
import Map23D from "./Graph2";
import { Box, Flex, VStack } from "@chakra-ui/react";
const PieMain = () => {
  return (
    <>
      <VStack>
        <Map3D />

        <Map23D />
      </VStack>
    </>
  );
};

export default PieMain;
