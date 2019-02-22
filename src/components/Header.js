import React from 'react';
import logo from './logo.svg';
import '../App.css';


const Header = () => {
  return(
    <div>
     <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    </div>
   
  )
}


export default Header;