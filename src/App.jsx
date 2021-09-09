import React from "react";

import { Box, Container, Grid } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Clocks from "./components/Clocks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Box w="100vw" bg="#000b15">
        <Container maxW="container.xl">
          <Grid templateRows="3.5rem 1fr 3rem" gap={6} h="100vh" bg="brand.900">
            <Header />
            <Switch>
              <Box>
                <Route exact path="/" component={Clocks} />
                <Route exact path="/clocks" component={Clocks} />
              </Box>
            </Switch>

            <Footer />
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
