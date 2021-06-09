import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

import Logo from '../assets/static/logo.svg';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleLink = () => setIsNavCollapsed(true);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
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
              <Link
                className={
                  splitLocation[1] === '' ? 'nav-link active' : 'nav-link'
                }
                to='/'
              >
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  splitLocation[1] === 'sobre-nosotros'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to='/sobre-nosotros'
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  splitLocation[1] === 'productos'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to='/productos'
              >
                Productos
              </Link>
            </li>
            <li className='nav-item'>
              <Scroll
                to='form'
                spy={true}
                smooth={true}
                offset={-100}
                duration={0}
                className='nav-link'
              >
                Contacto
              </Scroll>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                <FaFacebookSquare />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
