import React, { Component, Fragment } from "react";
import Table from "./common/Table";
import { Link } from "react-router-dom";

class UsersTable extends Component {
  columns = [
    {
      path: "email",
      label: "Email",
      content: (user) => (
        <Link to={"/users/" + user.id}>{user.email}</Link>
      ),
    },
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    {
      key: "delete",
      content: (user) =>
        <Fragment>
          <button
            onClick={() => {
              this.props.onDelete(user);
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </Fragment>
    },
  ];

  render() {
    const { users } = this.props;
    return (
      <Table
        columns={this.columns}
        data={users}
      />
    );
  }
}

export default UsersTable;
