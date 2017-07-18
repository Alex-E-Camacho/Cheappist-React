import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          username: "bob",
          email: "bob@test.com"
        },
        {
          id: 2,
          username: "jane",
          email: "jane@test.com"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default UserListContainer;
