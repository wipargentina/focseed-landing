import React from 'react';
import { Link as Scroll } from 'react-scroll';
import Image from '../assets/static/feature.webp';

export default function Features() {
  return (
    <section className='features'>
      <div className='container'>
        <h3>
          <span>Como lo hacemos</span>
        </h3>
        <article className='row'>
          <div className='col-md-6'>
            <img className='img-fluid mb-5 mb-sm-0' src={Image} alt='' />
          </div>
          <div className='col-md-6'>
            <div className='content'>
              <p>
                <i className='fas fa-check'></i> Profesionales y próximos a tu
                campo, tu campaña al máximo! planificá tus compras y optimizá tu
                rinde con nuestro asesoramiento.
              </p>
              <p className='mb-4'>
                <i className='fas fa-check'></i> Somos representantes de las
                marcas líderes que ya elegís, además contamos con servicio de
                logística para llevarte una solución a cada situación.
              </p>
              <Scroll
                to='form'
                spy={true}
                smooth={true}
                offset={-100}
                duration={599}
                className='btn btn-lg btn-primary btn-cta'
              >
                Contactá a un asesor
              </Scroll>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
