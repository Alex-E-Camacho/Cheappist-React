import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <UserList />
      </div>
    )
  }
}

export default UserListContainer;
