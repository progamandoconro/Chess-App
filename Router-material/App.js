import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, Container, Typography, Tab, Tabs } from "@material-ui/core/";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Container>
        <br />
        <hr />
        <Card>
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

            <Link to="/charts">
              <Tab label="Charts"></Tab>
            </Link>

            <Link to="/tables">
              <Tab label="Tables"></Tab>
            </Link>
          </Tabs>
        </Card>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/tables">
            <Tables />
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
  return (
    <Container>
      <br />
      <Typography>Home</Typography>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <br />
      <Typography>About</Typography>
    </Container>
  );
}

function Topics() {
  return (
    <Container>
      <br />
      <Typography>Topics</Typography>
    </Container>
  );
}

function Charts() {
  return (
    <Container>
      <br />
      <Typography>Charts</Typography>
    </Container>
  );
}

function Tables() {
  return (
    <Container>
      <br />
      <Typography>Tables</Typography>
    </Container>
  );
}
