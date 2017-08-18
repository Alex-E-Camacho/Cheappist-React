import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './landing_page';

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
      <BrowserRouter>
            <Route exact path="/" render={() => <LandingPage onSearch={this.searchOnSubmit} />} />
      </BrowserRouter>
    );
  }
}

export default App;
