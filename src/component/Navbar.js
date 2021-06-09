import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/static/logo.svg';

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleLink = () => setIsNavCollapsed(true);
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <Link onClick={handleLink} className='navbar-brand mr-auto' to='/'>
          <img src={Logo} alt='' />
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          id='navbarSupportedContent'
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
