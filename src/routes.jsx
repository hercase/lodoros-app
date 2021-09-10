import React from "react";
import { Route, Switch } from "react-router";

// Pages
import Times from "./Pages/Times";
import Home from "./Pages/Home";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/times" component={Times} />
    </Switch>
  );
};

export default MainRoutes;
