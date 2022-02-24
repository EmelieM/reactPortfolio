import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { Header, Projects, Home, ContactMe, About } from "./components";

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
        <Link className="navBarLink" to="/about">
          About
        </Link>
        <Link className="navBarLink" to="/projects">
          Projects
        </Link>
        <Link className="navBarLink" to="/contactMe">
          Contact Me
        </Link>
      </nav>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contactMe">
          <ContactMe />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
