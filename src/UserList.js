import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UserList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
          <ul>
            <UserInfo />
          </ul>
      </div>
    )
  }

}

export default UserList;
