import React, { Component } from 'react';
import logo from './logo.svg';
import UserListContainer from './UserListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World!</p>
          <UserListContainer />
      </div>
    );
  }
}

export default App;
