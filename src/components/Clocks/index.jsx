import React from "react";
import { isNight } from "../../helpers";
import {
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import useRealTime from "../../hooks/useRealTime";

import ArgFlag from "../../assets/argentina.svg";
import SpainFlag from "../../assets/spain.svg";

const Clocks = () => {
  const [argStringDate, argDate] = useRealTime(
    "America/Argentina/Buenos_Aires"
  );
  const [spainStringDate, spainDate] = useRealTime("Europe/Madrid");

  const lodorosTime = isNight(argDate) || isNight(spainDate) ? "NO" : "SI";

  return (
    <VStack spacing={["1.5rem", "2rem", "2.5rem"]}>
      <Center>
        <Stack direction={["column", "column", "row"]} spacing="12px">
          <HStack spacing={2}>
            <Image boxSize="25px" src={ArgFlag} alt="Bandera Argentina" />
            <Text fontSize={{ base: "0.875rem", md: "1rem" }}>
              {argStringDate}
            </Text>
            <Text>{isNight(argDate) ? "🌜" : "🌞"}</Text>
          </HStack>

          <HStack spacing={2}>
            <Image boxSize="25px" src={SpainFlag} alt="Bandera Española" />
            <Text fontSize={{ base: "0.875rem", md: "1rem" }}>
              {spainStringDate}
            </Text>
            <Text>{isNight(spainDate) ? "🌜" : "🌞"}</Text>
          </HStack>
        </Stack>
      </Center>
      <Heading as="h1" fontSize={["3xl", "4xl"]}>
        Lodoros time?
      </Heading>
      <Text fontSize={["12.5rem", "15.625rem", "18.75rem"]}>{lodorosTime}</Text>
    </VStack>
  );
};

export default Clocks;
