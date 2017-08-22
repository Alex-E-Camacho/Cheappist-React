import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page';
import ResultsPage from './results_page';
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
        <Switch>
            <Route exact path="/" render={() => <LandingPage onSearch={this.searchOnSubmit} />} />
            <Route path="/submissions" render={() => <ResultsPage results={this.state.submissions} onSearch={this.searchOnSubmit}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
