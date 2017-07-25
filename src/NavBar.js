import React from 'react';
import SearchBar from './SearchBar';

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <h1>Cheappist</h1>
        <SearchBar />
      </nav>
    </div>
  )
}

export default NavBar;
