import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";

import Logo from "./Logo";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Image
        w="170px"
        color={["white", "white", "primary.500", "primary.500"]}
        src="../images/logo.png"
      />
      {/* <Logo
        w="170px"
        color={["white", "white", "primary.500", "primary.500"]}
      /> */}
      <MenuData />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {/* <MenuLinks isOpen={isOpen} /> */}
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      color="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    //fill="white"
    color="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuData = () => {
  return <Box display={{ base: "block", md: "block" }}>{<Data />}</Box>;
};

const Data = () => {
  return (
    <Text mr={500} fontSize={"2xl"}>
      The National Digital Health Strategy Map{" "}
    </Text>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["lightgray"]}
      color="black"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;
