import React from 'react';
import SearchBar from './SearchBar';


const LandingPage = (props) => {
  return (
    <div>
      <div>
        <h1>Cheappist</h1>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch}/>
      </div>
    </div>
  )
}

export default LandingPage;
