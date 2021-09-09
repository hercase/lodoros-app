import React from "react";
import { Center, Flex, Text } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Center bg="brand.800">
      <Text as="samp" fontSize="sm">
        Made with
        <Text as="span" m={2} color="tomato">
          &#9829;
        </Text>
        by HerCase
      </Text>
    </Center>
  );
};

export default Header;
