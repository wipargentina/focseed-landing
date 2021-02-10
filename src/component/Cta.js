import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function Cta() {
  return (
    <div className='cta'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='cta-inner'>
              <h4>
                Los maíces más sembrados del mercado se cultivan con Soluciones
                Focseed.
              </h4>
              <Scroll
                to='form'
                spy={true}
                smooth={true}
                offset={-100}
                duration={599}
                className='btn btn-lg btn-primary'
              >
                Ver más
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
