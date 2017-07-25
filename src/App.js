import React, { Component } from 'react';
import NavBar from './NavBar';
import UserListContainer from './UserListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UserListContainer />
      </div>
    );
  }
}

export default App;
