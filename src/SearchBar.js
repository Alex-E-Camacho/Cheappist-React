import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedItem: '',
      searchedArea: '',
      fireRedirect: false
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
    this.setState({fireRedirect: true})
  }

  render() {
    const { fireRedirect } = this.state

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
        {fireRedirect && (<Redirect to="/submissions" />)}
      </div>
    )
  };
}

export default SearchBar;
