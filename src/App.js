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

  searchOnSubmit(searchedItem, searchedArea) {
    fetch(`http://localhost:3000/v1/submissions/?location=${searchedArea}`).then((response) => {response.json().then((results) =>
      this.setState({submissions: results})
    )}
  )}

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
