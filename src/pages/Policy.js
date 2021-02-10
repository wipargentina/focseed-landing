import React from 'react';
import { Link } from 'react-router-dom';

export default function Policy() {
  return (
    <section className='policy'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1>Politicas de Privacidad</h1>
            <Link to='/'>Volver</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
