import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UsersTable from "./UsersTable";
import Pagination from "./common/Pagination";
import userService from "../services/userService";
import authService from "../services/auth";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1
  };

  componentDidMount = async () => {
    const { currentPage } = this.state;
    const { data } = await userService.getUsers(currentPage);
    const { data: users } = data;
    this.setState({ users });
  };

  handleDelete = async (user) => {
    try {
      await userService.deleteUser(user.id);
      const users = this.deleteUserFromState(user);
      this.setState({ users });
    }
    catch (ex) {
      console.log('Error deleting user');
    }
  };

  handlePageChange = async (page) => {
    const { data } = await userService.getUsers(page);
    const { data: users } = data;
    this.setState({ users, currentPage: page });
  }

  handleAddUser = () => {
    this.props.history.push("/users/new");
  };


  /** This is to simulate delete action As we are using fake APIs  */

  deleteUserFromState = (user) => {
    const users = [...this.state.users];
    const filteredUsers = users.filter((item) => item.id !== user.id);
    return filteredUsers;
  }

  render() {
    if (!authService.getCurrentUser()) return <Redirect to="/login" />;
    return (
      <div className="row">
        <div className="col">
          <button
            onClick={this.handleAddUser}
            className="btn btn-primary mb-3 mt-3">
            Add User
          </button>
          <UsersTable
            users={this.state.users}
            onDelete={this.handleDelete}
          />
          <Pagination onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage} />
        </div>
      </div>
    );
  }
}

export default Users;
