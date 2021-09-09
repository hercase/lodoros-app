import React from "react";
import Navigation from "./Navigation";
import { Flex, Heading } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex
      color="white"
      justify="space-between"
      align="center"
      bg="brand.700"
      px="4"
    >
      <Heading as="p" size="lg" color="white">
        Lodoros App
      </Heading>
      <Navigation />
    </Flex>
  );
};

export default Header;
