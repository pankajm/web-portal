/**
 * This component is rendered while adding or updating user. 
 */


import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import Form from "./common/Form";
import { getUser, updateUser, addUser } from "../services/userService";
import authService from "../services/auth";
import _ from "lodash";

class UserDetails extends Form {
  state = {
    data: {
      email: "",
      first_name: "",
      last_name: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.number(),
    email: Joi.string().email().required().label("Email"),
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
  };

  async componentDidMount() {
    await this.getUserDetails();
  }

  /**
   * Add and edit user actions are differentiated by "new" keyword in URL
   */
  async getUserDetails() {
    const { history, match } = this.props;
    if (match.params.id !== "new") {
      try {
        let response = await getUser(match.params.id);
        const { data: user } = response.data;
        const userObject = this.mapToUserObject(user);
        this.setState({ data: userObject });
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          return history.replace("/not-found");
        }
      }
    }
  }

  mapToUserObject(user) {
    const userObj = _.pick(user, [
      "id",
      "first_name",
      "last_name",
      "email",
    ]);
    return userObj;
  }

  doSubmit = async () => {

    try {
      const user = { ...this.state.data };
      if (!user.id) await addUser(user);
      else {
        const updatedUser = _.pick(user, [
          "email",
          "first_name",
          "last_name"
        ]);
        try {
          await updateUser(user.id, updatedUser);
        } catch (ex) {
          if (ex.response && ex.response.status === 404) {
            console.log("User not found")
          }
        }
      }
      this.props.history.push("/users");
    } catch (ex) {
      if (ex.response && [400, 401].includes(ex.response.status))
        console.log("Error occured in add user api");
    }
  };

  render() {
    if (!authService.getCurrentUser()) return <Redirect to="/login" />;
    return (
      <React.Fragment>
        <h1 className="mt-4">Add New User</h1>
        <form onSubmit={this.handleSubmit} className="mt-2">
          {this.renderInput("email", "Email")}
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name", "Last Name")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default UserDetails;
