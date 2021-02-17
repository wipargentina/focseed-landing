import React from 'react';
import LogoBayer from '../assets/static/logo-bayer.png';
import LogoDekalb from '../assets/static/logo-dekalb.png';
import LogoRoundup from '../assets/static/logo-roundup.png';

export default function Validation() {
  return (
    <section className='validation'>
      <div className='container'>
        <h3>
          <span>Marcas que trabajamos</span>
        </h3>
        <div className='row justify-content-center'>
          <div className='col-6 col-md-3'>
            <img src={LogoBayer} alt='bayer' className='img-fluid' />
          </div>
          <div className='col-6 col-md-3'>
            <img src={LogoDekalb} alt='bayer' className='img-fluid' />
          </div>
          <div className='col-6 col-md-3'>
            <img src={LogoRoundup} alt='bayer' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
}
