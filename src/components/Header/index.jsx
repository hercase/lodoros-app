import React from "react";
import Navigation from "./Navigation";
import { Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";

import Logo from "../../assets/lodoros-logo.png";

const Header = () => {
  return (
    <Flex
      color="white"
      justify="space-between"
      align="center"
      bg="brand.700"
      px="4"
    >
      <Link to="/">
        <Image htmlWidth="237.5px" src={Logo} alt="logo" />
      </Link>
      <Navigation />
    </Flex>
  );
};

export default Header;
