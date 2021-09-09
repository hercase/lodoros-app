import React from "react";
import { getTimeZoneDate } from "../../helpers";

import { Center, HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Clocks = () => {
  return (
    <Center>
      <HStack spacing="12px">
        <Text>{getTimeZoneDate("America/Argentina/Buenos_Aires")}</Text>

        <Image
          boxSize="25px"
          src={window.location.origin + "/img/argentina.svg"}
          alt="Bandera Argentina"
        />

        <Text>{getTimeZoneDate("Europe/Madrid")}</Text>
        <Image
          boxSize="25px"
          src={window.location.origin + "/img/spain.svg"}
          alt="Bandera Española"
        />
      </HStack>
    </Center>
  );
};

export default Clocks;
