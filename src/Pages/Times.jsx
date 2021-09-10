import React from "react";
import Clocks from "../components/Clocks";
import { Heading, Text, VStack } from "@chakra-ui/layout";

const Times = () => {
  return (
    <div>
      <VStack spacing={12}>
        <Clocks />
      </VStack>
    </div>
  );
};

export default Times;
