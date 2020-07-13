import React, { Component } from "react";
import UsersTable from "./UsersTable";
import _ from "lodash";
import { getUsers, deleteUser } from "../services/userService";
import Pagination from "./common/Pagination";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount = async () => {
    const { currentPage } = this.state;
    const { data } = await getUsers(currentPage);
    const { data: users } = data;
    this.setState({ users });
  };

  handleDelete = async (user) => {

  };

  handlePageChange = async (page) => {
    const { data } = await getUsers(page);
    const { data: users } = data;
    this.setState({ users, currentPage: page });
  }

  handleAddUser = () => {
    this.props.history.push("/users/new");
  };

  render() {

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
