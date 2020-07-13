import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/users" component={Users}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/calculator" component={Calculator}></Route>
          <Redirect from="/" exact to="/users" />
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
