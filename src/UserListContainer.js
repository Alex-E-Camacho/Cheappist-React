import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/v1/users').then((response) => {
      response.json().then((json) => {
        this.setState({users: json})
      })
    })
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
