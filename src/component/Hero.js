import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1>Promovemos un campo sostenible, productivo y rentable.</h1>
            <p className='lead'>
              <b>Soluciones Focseed</b>, sumamos a nuestros productos el
              asesoramiento de nuestra área Técnica-Comercial, un combo que
              lleva tu rinde y producción al máximo.
            </p>
            <Scroll
              to='form'
              spy={true}
              smooth={true}
              offset={-100}
              duration={599}
              className='btn btn-primary text-uppercase btn-cta'
            >
              Más Información
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}
