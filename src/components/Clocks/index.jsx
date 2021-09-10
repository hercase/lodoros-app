import React from "react";
import { getTimeZoneDate, isNight } from "../../helpers";
import { Center, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Clocks = () => {
  const [argStringDate, argDate] = getTimeZoneDate(
    "America/Argentina/Buenos_Aires"
  );
  const [spainStringDate, spainDate] = getTimeZoneDate("Europe/Madrid");
  const lodorosTime = isNight(argDate) || isNight(spainDate) ? "NO" : "SI";

  return (
    <VStack>
      <Center>
        <HStack spacing="12px">
          <Image
            boxSize="25px"
            src={window.location.origin + "/img/argentina.svg"}
            alt="Bandera Argentina"
          />
          <Text>{argStringDate}</Text>
          <Text>{isNight(argDate) ? "🌜" : "🌞"}</Text>
          <Text>/</Text>
          <Image
            boxSize="25px"
            src={window.location.origin + "/img/spain.svg"}
            alt="Bandera Española"
          />
          <Text>{spainStringDate}</Text>
          <Text>{isNight(spainDate) ? "🌜" : "🌞"}</Text>
        </HStack>
      </Center>
      <Heading as="h1" size="4xl">
        Lodoros time?
      </Heading>
      <Text fontSize="20rem">{lodorosTime}</Text>
    </VStack>
  );
};

export default Clocks;
