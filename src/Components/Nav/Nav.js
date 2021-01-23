import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Error from '../AppError/AppError';
import TokenService from '../../services/token-services'



export default class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoginLink() {
    return (
      <div className='Nav__logged-in'>
        <ul >
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/addarticle">New Leaf</Link></li>
          <li><Link to="/articles">Leaf Pile</Link></li>
          <li><Link to="/signup">Sign-up</Link></li>
        </ul>
      </div>
    )
  }

  renderLogoutLink() {
    return <ul >
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/addarticle">New Leaf</Link></li>
      <li><Link to="/articles">Leaf Pile</Link></li>
      <li>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
            </Link>
      </li>
    </ul>
  }

  render() {
    return (
      <Error>

        <nav>
          <div>
            <a href="/"><h1 className='logo'> New Leaves 🍃</h1></a>
          </div>
          <div>

            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>

        </nav>
      </Error >

    );
  }

};

