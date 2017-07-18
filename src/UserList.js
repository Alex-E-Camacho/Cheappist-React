import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UserList extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
          <ul>
            {
              this.props.users.map((user) => {
                return <UserInfo u={user}/>
              }
            )
            }
          </ul>
      </div>
    )
  }

}

export default UserList;
