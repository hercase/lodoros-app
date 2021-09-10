import React from "react";
import { Route, Switch } from "react-router";

// Pages
import Times from "./Pages/Times";
import Home from "./Pages/Home";
import Discord from "./Pages/Discord";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Times} />
      {/* <Route exact path="/times" component={Times} /> */}
      {/* <Route exact path="/discord" component={Discord} /> */}
    </Switch>
  );
};

export default MainRoutes;
