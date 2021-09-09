import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#00182b",
    800: "#023c69",
    700: "#0376ce",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config, colors });

export default theme;
