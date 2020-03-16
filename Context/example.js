import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Home from "./Home";
import { myContext } from "./myContext";

export default function BasicExample() {
  const [value, setValue] = useState("");
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <myContext.Provider value={[value, setValue]}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </myContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
