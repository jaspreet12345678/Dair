import React from "react";
import {
  Box,
  Text,
  Image,
  Spacer,

} from "@chakra-ui/react";

function Footer(props) {
  return (
    <Box mt={10} ml={10} display={"flex"}>
        <Text style={{"alignItems": "center", "display": "flex"}}>All right reserved. Copyright 2022 I- DAIR</Text>
        <Spacer />
        <Image mr={10} src="http://3.95.161.176/assets/images/logo.png"/>
    </Box>
  );
}

export default Footer;