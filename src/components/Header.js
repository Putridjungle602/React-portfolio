import React from 'react';
import NavBar from "../NavBar.js";

function Header() {
  
  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
        <Link to="/">Keegan Houghten</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;