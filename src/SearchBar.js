import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedItem: '',
      searchedArea: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchItem(searchedItem) {
    this.setState({searchedItem});
  }

  handleSearchArea(searchedArea) {
    this.setState({searchedArea});
  }

  handleSubmit(e) {
    e.preventDefault();
    let input = this.state.searchedItem;
    this.props.onSearch(input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
