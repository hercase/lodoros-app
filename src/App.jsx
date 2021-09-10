import React from "react";

import { Box, Container, Grid } from "@chakra-ui/react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./routes";

function App() {
  return (
    <Router>
      <Box w="100vw" bg="#000b15">
        <Container maxW="container.xl">
          <Grid templateRows="4rem 1fr 3rem" gap={6} h="100vh" bg="brand.900">
            <Header />
            <Box>
              <MainRoutes />
            </Box>
            <Footer />
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
