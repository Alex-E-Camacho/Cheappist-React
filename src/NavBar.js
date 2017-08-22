import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <h1><NavLink exact to="/">Cheappist</NavLink></h1>
        <SearchBar onSearch={props.onSearch}/>
      </nav>
    </div>
  )
}

export default NavBar;
