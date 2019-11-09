import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  IonApp,
  IonRouterOutlet,
  IonSpinner,
  IonReactRouter
} from "@ionic/react";

import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TabOneDetailPage from "./pages/TabOneDetailPage";

import { inject, observer } from "mobx-react";
class App extends Component {
  render() {
    return !this.props.store.authCheckComplete ? (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <IonSpinner name="circles" />
      </div>
    ) : (
      <IonReactRouter>
        <IonApp>
          <Switch>
            <Redirect exact from="/" to="home" />
            <Route path="/login" component={LoginPage} />
            <IonRouterOutlet>
              
              <PrivateRoute name="home" path="/home" component={HomePage} />
              <PrivateRoute
                path="/tab1-detail/:id"
                component={TabOneDetailPage}
              />
            </IonRouterOutlet>
          </Switch>
        </IonApp>
      </IonReactRouter>
    );
  }
}

export default inject("store")(observer(App));
