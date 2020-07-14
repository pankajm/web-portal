/**
 * App component mainly responsible for Routing
 */


import React, { Fragment, Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Calculator from "./components/Calculator";
import authService from "./services/auth"
import Profile from './components/Profile';

class App extends Component {
  state = {};

  componentDidMount() {
    const currentUser = authService.getCurrentUser();
    if (currentUser) this.setState({ currentUser });
  }

  render() {
    return (
      <Fragment>
        <Navbar currentUser={this.state.currentUser} />
        <main className="container">
          <Switch>
            <Route path="/users/:id" component={UserDetails}></Route>
            <Route path="/users" component={Users}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/calculator" component={Calculator}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Redirect from="/" exact to="/users" />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </Fragment >
    );
  }
}

export default App;
