import React from 'react';
import { Link } from 'react-router-dom';

export default function Tanks() {
  return (
    <section className='thanks'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1>Gracias por completar el formulario</h1>
            <p className='lead mb-4'>
              Uno de nuestros comerciales se pondrán en contacto contigo para
              brindarte más información sobre nuestra plataforma y ayudarte en
              lo que necesites.
            </p>
            <p className='lead mb-3'>
              Te invitamos a que conozcas nuestro mercado en{' '}
              <b>
                <a
                  href='https://mercado.genganar.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  className=''
                >
                  https://mercado.genganar.com
                </a>
              </b>
            </p>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-lg btn-primary mb-5'
            >
              Ir al Mercado GenGanar
            </a>
            <p className='mb-3'>
              Ademas ponemos a tu disposición un documento PDF para descargar
            </p>
            <Link to='/gracias' className='btn btn-lg btn-secondary mb-5'>
              Descargar Brochure
            </Link>
            <p className='mb-3'>
              Te invitamos a que nos sigas en nuestras redes
            </p>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-primary mb-5 mx-1'
            >
              Facebook
            </a>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-primary mb-5 mx-1'
            >
              Instagram
            </a>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-primary mb-5 mx-1'
            >
              Twitter
            </a>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-primary mb-5 mx-1'
            >
              Linkedin
            </a>
            <a
              href='https://mercado.genganar.com'
              rel='noopener noreferrer'
              target='_blank'
              className='btn btn-outline-primary mb-5 mx-1'
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
