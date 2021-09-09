import React from "react";

import { Box, Container, Grid } from "@chakra-ui/react";

import Clocks from "./components/Clocks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Box w="100vw" bg="gray.900">
      <Container maxW="container.xl" bg="gray.900">
        <Grid templateRows="3.5rem 1fr 3rem" gap={6} h="100vh" bg="brand.900">
          <Header />
          <Clocks />
          <Footer />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
