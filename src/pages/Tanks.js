import React from 'react';
import { Link } from 'react-router-dom';

export default function Tanks() {
  return (
    <section className='thanks'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1>Gracias por completar el formulario</h1>
            <p className='lead mb-5'>
              Uno de nuestros comerciales se pondrán en contacto contigo para
              brindarte más información sobre nuestros productosy servicios.
            </p>
            <h5 className='mb-4'>Descargá el catálogo de nuestros productos</h5>
            <Link to='/gracias' className='btn btn-lg btn-primary mb-5'>
              Descargar catálogo <b>¡AHORA!</b>
            </Link>
            <h6 className='mb-3'>
              Te invitamos a que nos sigas en nuestras redes
            </h6>
            <a
              href='/'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-secondary mb-5 mx-1'
            >
              Facebook
            </a>
            <a
              href='/'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-secondary mb-5 mx-1'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
