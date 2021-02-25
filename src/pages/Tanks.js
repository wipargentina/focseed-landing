import React from 'react';

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
            <h5 className='mb-4'>
              Si lo prefieres, podes enviarnos un Whatsapp
            </h5>
            <a
              id='btn-whatsapp'
              href='https://wa.me/+5493584203306'
              className='button btn btn-lg btn-success mb-5'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className='fab fa-whatsapp mr-2'></div>
              +54 9 358 4203 306
            </a>
            <h6 className='mb-3'>
              Te invitamos a que nos sigas en nuestras redes
            </h6>
            <a
              id='btn-instagram'
              href='https://www.instagram.com/focseed_agro/'
              rel='noopener noreferrer'
              target='_blank'
              className='button btn btn-outline-secondary mb-5 mx-1'
            >
              <div className='fab fa-instagram mr-2'></div>
              Instagram
            </a>
            <a
              id='btn-linkedin'
              href='https://www.linkedin.com/company/focseed-agro/about/'
              rel='noopener noreferrer'
              target='_blank'
              className='button btn btn-outline-secondary mb-5 mx-1'
            >
              <div className='fab fa-linkedin mr-2'></div>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
