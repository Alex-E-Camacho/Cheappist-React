import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

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
            <Route exact path="/" component={(props) => (
              <div>
                <h1>Cheappist</h1>
                <SearchBar onSearch={this.searchOnSubmit}/>
                  <div>
                    <ResultsContainer results={this.state.submissions} />
                  </div>
              </div>
            )} />
      </BrowserRouter>
    );
  }
}

export default App;
