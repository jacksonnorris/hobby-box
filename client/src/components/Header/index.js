import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img className='headerImg' src='https://res.cloudinary.com/dfamiaufc/image/upload/v1651870362/Hobby%20Box/hobbyboxLogo_oys0lf.png' alt='Logo' />
        </Link>
        <span className='nav nav-spacer'></span>
        <span className='nav nav-links'>
          <Navbar />
        </span>
      </div>
    </header>
  );
};

export default Header;
