import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Error from '../AppError/AppError';


export default function Nav() {
  return (
    <Error>

      <nav>
        <header>
          <h3> <a href="/">New Leaves 🍃</a></h3>
        </header>
        <ul >
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/AddArticle">New Leaf</Link></li>
          <li><Link to="/Feed">Leaf Pile</Link></li>
          <li><Link to="/SignUp">Sign-up</Link></li>
        </ul>
      </nav>
    </Error>

  );
};

