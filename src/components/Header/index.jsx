import React from "react";
import Navigation from "./Navigation";
import { Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

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
        <Heading as="p" size="lg" color="white">
          Lodoros App
        </Heading>
      </Link>
      <Navigation />
    </Flex>
  );
};

export default Header;
