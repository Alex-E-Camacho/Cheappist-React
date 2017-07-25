import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedItem: ''
    };
  }

  handleSearchInput(searchedItem) {
    this.setState({searchedItem});
  }

  render() {
    return (
      <div>
        <input
          value={this.state.searchedItem}
          placeholder="Search for..."
          onChange={event => this.handleSearchInput(event.target.value)}
        />
        <p>State is {this.state.searchedItem}</p>
      </div>
    )
  };
}

export default SearchBar;
