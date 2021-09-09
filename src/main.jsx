import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#023c69",
    800: "#0376ce",
    700: "#3ba8fc",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
