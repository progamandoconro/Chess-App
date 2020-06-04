import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Typography, Tab, Tabs } from "@material-ui/core/";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Container>
        <Tabs>
          <Link to="/">
            <Tab label="Home"></Tab>
          </Link>

          <Link to="/about">
            <Tab label="About"></Tab>
          </Link>

          <Link to="/topics">
            <Tab label="Topics"></Tab>
          </Link>
        </Tabs>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home() {
  return <Typography>Home</Typography>;
}

function About() {
  return <Typography>About</Typography>;
}

function Topics() {
  return <Typography>Topics </Typography>;
}
