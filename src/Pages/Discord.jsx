import React from "react";
import { Center, Flex, Spacer, Text } from "@chakra-ui/layout";

const Discord = () => {
  return (
    <Flex direction="column" align="center">
      <Text mb={4}>
        Grupo no BT <Text as="cite">(100% real no fake)</Text>
      </Text>
      <Center w={"90%"}>
        <iframe
          src="https://discord.com/widget?id=696793286442221688&theme=dark"
          width="100%"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </Center>
    </Flex>
  );
};

export default Discord;
