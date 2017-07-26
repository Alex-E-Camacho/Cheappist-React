import React, { Component } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: []
    };

    this.searchOnSubmit = this.searchOnSubmit.bind(this);
  }

  searchOnSubmit(searchedItem) {
    fetch(`http://localhost:3001/v1/submissions/?item=${searchedItem}`).then((response) => {
      console.log(response);
      response.json().then((json) => {
        this.setState({submissions: json})
      })
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar onSearch={this.searchOnSubmit}/>
        <p>{this.state.submissions.length}</p>
      </div>
    );
  }
}

export default App;
