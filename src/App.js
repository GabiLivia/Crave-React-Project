import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import Chips from "./pages/chips";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

const imageDetails = {
  width: 400,
  height: 500,
};

function App() {
  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/Crave-React-Project"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/chips"
                render={() => <Chips imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
