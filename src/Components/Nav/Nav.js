import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <nav>
      <header>
        <h3>  New Leaves 🍃 </h3>
      </header>
      <ul >
        <li><a href="Login">Login</a></li>
        <li><a href="Search">Search</a></li>
        <li><a href="Post">New Leaf</a></li>
        <li><a href="Feed">Leaf Pile</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="SignUp">Sign-up</a></li>
      </ul>
    </nav>
  )
}

export default Nav;