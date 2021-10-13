import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page from "../page";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Page.Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
