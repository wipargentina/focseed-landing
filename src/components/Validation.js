import React from 'react';
import { Link } from 'react-router-dom';
import LogoBayer from '../assets/static/logo-bayer.png';
import LogoDekalb from '../assets/static/logo-dekalb.png';
// import LogoRoundup from '../assets/static/logo-roundup.png';
import LogoFieldview from '../assets/static/logo-fieldview.png';
import LogoAsgrow from '../assets/static/logo-asgrow.png';

export default function Validation() {
  return (
    <section className='validation'>
      <div className='container'>
        <h3>
          <span>Marcas que trabajamos</span>
        </h3>
        <div className='row justify-content-center'>
          <div className='col-6 col-md-2'>
            <img
              loading='lazy'
              src={LogoBayer}
              alt='bayer'
              className='img-fluid'
            />
          </div>
          <div className='col-6 col-md-2'>
            <img
              loading='lazy'
              src={LogoDekalb}
              alt='bayer'
              className='img-fluid'
            />
          </div>
          {/* <div className='col-6 col-md-2'>
            <img
              loading='lazy'
              src={LogoRoundup}
              alt='bayer'
              className='img-fluid'
            />
          </div> */}
          <div className='col-6 col-md-2'>
            <img
              loading='lazy'
              src={LogoFieldview}
              alt='bayer'
              className='img-fluid'
            />
          </div>
          <div className='col-6 col-md-2'>
            <img
              loading='lazy'
              src={LogoAsgrow}
              alt='bayer'
              className='img-fluid'
            />
          </div>
          <div className='text-center'>
            <Link to='/productos' className='btn btn-primary'>
              Más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
