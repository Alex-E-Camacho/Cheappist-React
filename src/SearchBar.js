import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedItem: '',
      searchedArea: ''
    };
  }

  handleSearchItem(searchedItem) {
    this.setState({searchedItem});
  }

  handleSearchArea(searchedArea) {
    this.setState({searchedArea});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            value={this.state.searchedItem}
            placeholder="Search for..."
            onChange={event => this.handleSearchItem(event.target.value)}
          />
          <input
            type="text"
            value={this.state.searchedArea}
            placeholder="Near..."
            onChange={event => this.handleSearchArea(event.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  };
}

export default SearchBar;
