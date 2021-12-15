import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "./components";

const App = ({ Component }) => {
  return (
    <div className="App">
      <ChakraProvider>
        <Component />
      </ChakraProvider>

      <Header />

      <nav className="navBar">
        <Link className="navBarLink" to="/">
          Home
        </Link>
        <Link className="navBarLink" to="/About">
          About
        </Link>
        <Link className="navBarLink" to="/Projects">
          Projects
        </Link>
      </nav>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
