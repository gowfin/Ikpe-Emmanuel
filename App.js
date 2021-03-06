import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import Login from "./layout/auth/Login";
import Signup from "./layout/auth/Signup";
import Profile from "./layout/main/profile";

import Main from "./Main";
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Signup} />
          <Route exact path="/auth/profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
