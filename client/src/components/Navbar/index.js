import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/aboutUs" className='nav-button'>
          About Us
        </Link>
        <Link to="/me" className='nav-button'>
          {Auth.getProfile().data.username}'s Profile
        </Link>
        <button className='nav-button' onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <Link to="/aboutUs">
        About Us
      </Link>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
    </>
  )
}

export default Navbar
