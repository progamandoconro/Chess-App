import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BasicMoves from './BasicMoves';
import Captures from './Captures'

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/"> Home   </Link>
                <br />

                <Link to="/captures">   Captures </Link>
                <br />

                <Link to="/random">   Moves </Link>

                <br />


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/captures">
                        <Captures />
                    </Route>
                    <Route path="/random">
                        <BasicMoves />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}


