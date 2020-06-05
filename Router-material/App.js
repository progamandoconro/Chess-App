import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Table,
  Card,
  Container,
  Typography,
  Tab,
  Tabs,
  TableCell,
} from "@material-ui/core/";
import "./App.css";

function Home() {
  return (
    <Container>
      <br />
      <Card>
        <Typography>Home</Typography>
      </Card>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <br />
      <Card>
        <Typography>About</Typography>
        {data}
      </Card>
    </Container>
  );
}

function Topics() {
  return (
    <Container>
      <br />
      <Card>
        <Typography>Topics</Typography>
      </Card>
    </Container>
  );
}

function Charts() {
  return (
    <Container>
      <br />
      <Card>
        <Typography>Charts</Typography>
      </Card>
    </Container>
  );
}

function Tables() {
  return (
    <Container>
      <br />
      <Card>
        <Typography>Tables</Typography>
        <Table>
          My Tables
          <TableCell>2</TableCell>
          <TableCell>2</TableCell>
          <TableCell>2</TableCell>
          <TableCell>2</TableCell>
        </Table>
      </Card>
    </Container>
  );
}

const data = [];

const callAPI = async () => {
  const res = await fetch(" https://api.github.com/users/programandoconro");
  const get = await res.json();
  const json = JSON.stringify(get);
  data.push(json);
};

export default function App() {
  callAPI();
  return (
    <Router>
      <Container className="App">
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
