import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/static/logo.svg';

export default function Navbar() {
  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <Link className='navbar-brand mx-auto' to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>
    </nav>
  );
}
