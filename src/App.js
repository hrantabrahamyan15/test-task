import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";

import {
  HomeContainer,
  SignInContainer,
  SignUpContainer,
} from "./containers/index";
import { AuthLayouth } from "./layouts/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomeContainer />
        </Route>
        <Route path="/sign-in">
          <AuthLayouth contentTitle="Sign In" title="Sign In">
            <SignInContainer />
          </AuthLayouth>
        </Route>
        <Route path="/sign-up">
          <AuthLayouth contentTitle="Sign Up" title="Sign Up">
            <SignUpContainer />
          </AuthLayouth>
        </Route>
        <Route exact path="/" render={() => <Redirect to="/sign-in" />} />
      </Switch>
    </Router>
  );
};

export default App;
