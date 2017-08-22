import React from 'react';
import NavBar from './NavBar';
import ResultsContainer from './ResultsContainer';

const ResultsPage = (props) => {
  return (
    <div>
      <div>
        <NavBar onSearch={props.onSearch}/>
      </div>
      <div>
        <ResultsContainer results={props.results} />
      </div>
    </div>
  )
}

export default ResultsPage;
