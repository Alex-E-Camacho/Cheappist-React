import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <p>Username: {this.props.u.username}</p>
        <p>Email: {this.props.u.email}</p>
      </div>
    )
  }
}

export default UserInfo;
