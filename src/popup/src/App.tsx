import React from "react";
import Router from "./router";
import Context from "./contexts";

const App = () => {
  return (
    <Context.Provider>
      <Router />
    </Context.Provider>
  );
};

export default App;
