import { Box, Divider, Heading, Text, Center, Button } from "@chakra-ui/react";
import React from "react";
import { Flex } from "@chakra-ui/react";

function Content() {
  return (
    <Box maxW={1024} mx={"auto"}>
      <Flex justifyContent={"center"}>
        <Text fontWeight="bold" fontSize={"4xl"}>
          2022 GLOBAL RESEARCH MAP OF DIGITAL HEALTH & AI
        </Text>
      </Flex>
      <Divider />
        <Center>
      <Box w={960} alignContent="center" justifyContent={"center"}>
        <Text fontWeight={"bold"} mt={5}  fontSize={"2xl"} style={{"display":"flex" , "justifyContent": "center"}}>
          Connection dots between R&D landscape and the muturity of national DH
          strategies
        </Text>
        <Text mt={3} style={{"display":"flex" , "justifyContent": "center"}}>
          The Global research map aspire to bridge the AI Digital Health Divide
          in order to increase collaboration and coherence, to enhance adoption
           to maximize the impact of research. Our work is based on a new
          innovative methodology  bringing together clusters based on similarity
          and strategic bechmarking, creating a new world guidance map,
          identifying areas of opportunities for collaboration and to define the
          next steps.
        </Text>
        <Text mt={3}>The global R&D map deployed to date will showcase a comprehensive landscape view of the research and the parents across the world, divided into 9 sub regions, and show correlations and opportunities that were not visible earlier.</Text>
        <Text mt={3}>In 2022, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec porttitor leo. Pellentesque ultricies diam eget leo viverra efficitur. Morbi in egestas ex. Pellentesque congue gravida posuere. Etiam ex dui, accumsan eget molestie et, pharetra eget ipsum. Mauris id mauris urna. Vestibulum lacinia vulputate finibus.</Text>
        <Text mt={3} fontWeight={"bold"} style={{"textDecoration" : "underline"}}>I-DAIR GRM 2021 release is available here</Text>
        <Button mt={3} bg={"#64D3BB"}>Read More</Button>
      </Box>
      </Center>
    </Box>
  );
}

export default Content;