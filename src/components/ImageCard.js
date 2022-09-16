import React from "react";
import { Box, Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ImageCard() {
  return (
    <Grid h={"300px"} ml={10} mt={15} templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem w="100%" h="10">
        <Link to="/map">
          <Image
            width={391}
            style={{ position: "absolute" }}
            src="./images/banner-01.jpg"
          />
        </Link>
        <Text
          color={"white"}
          fontSize={"2xl"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            position: "relative",
            display: "flex",
            width: "-webkit-fill-available",
            justifyContent: "center",
            marginTop: "130px",
          }}
        >
          National Digital Health <br />
          Strategy Map
        </Text>
      </GridItem>
      <GridItem w="100%" h="10">
        {" "}
        <Link to="/map">
          <Image
            width={400}
            style={{ position: "absolute" }}
            src="./images/banner-02.jpg"
          />
        </Link>
        <Text
          color={"white"}
          fontSize={"2xl"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: "130px",
          }}
        >
          Digital Health Research <br />
          Development Map
        </Text>
      </GridItem>
      <GridItem w="100%" h="10">
        {" "}
        <Link to="/map">
          <Image
            width={400}
            style={{ position: "absolute" }}
            src="./images/banner-03.jpg"
          />
        </Link>
        <Text
          color={"white"}
          fontSize={"2xl"}
          justifyContent={"center"}
          style={{
            position: "relative",
            display: "flex",
            width: "-webkit-fill-available",
            justifyContent: "center",
            marginTop: "130px",
          }}
        >
          Digital Mental Health Research <br />
          Development Map
        </Text>
      </GridItem>
    </Grid>
  );
}

export default ImageCard;
