import React from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <div>
        <Route path="/tweets/:handler?" component={Home} />
      </div>
    </React.Fragment>
  );
}

export default App;
