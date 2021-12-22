import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import addWhatsappLead from '../services/addWhatsappLead';

export default function FormWhatsapp() {
  const [show, setShow] = useState(false);
  const [sending, setSending] = useState(false);
  const [showError, setShowError] = useState(false);

  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out'
  });

  const [data, setData] = useState({
    name: '',
    phone: ''
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({
        fade: 'fade-in'
      });
    }, 4000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  const handleClick = () => {
    setShow(!show);
    setSending(false);
    setShowError(false);
    setData([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    setShowError(false);
    addWhatsappLead(data).then((res) => {
      if (res.status === 200) {
        setShow(false);
        window.open('https://wa.me/5493584203306', '_blank') ||
          window.location.replace('https://wa.me/5493584203306');

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'virtualPageview',
          category: 'goals',
          tag: 'whatsapp'
        });
      } else {
        setShowError(true);
      }
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='whatsapp-button'>
      {show ? (
        <div className='form'>
          <button className='btn btn-close-form' onClick={handleClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='form-label' htmlFor='name'>
                Nombre*
              </label>
              <input
                type='text'
                name='name'
                placeholder='Ingresá tu nombre'
                onChange={handleChange}
                className='form-control'
                required
              />
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='name'>
                Teléfono*
              </label>
              <input
                type='number'
                name='phone'
                placeholder='Ingresá tu teléfono'
                onChange={handleChange}
                className='form-control'
                required
              />
            </div>
            {showError ? <div className='error'>Hubo un error</div> : ''}
            {sending ? (
              <div className='btn btn-submit'>
                <span>Iniciando </span>
                <span
                  className='spinner-border spinner-border-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'></span>
              </div>
            ) : (
              <button className='btn btn-submit'>Iniciar Conversación</button>
            )}
          </form>
        </div>
      ) : (
        <button
          className={`btn btn-whatsapp ${fadeProp.fade}`}
          onClick={handleClick}
        >
          {/* <FaWhatsapp id='btn-whatsapp-home' /> */}
          <FontAwesomeIcon id='btn-whatsapp-home' icon={faWhatsapp} />
        </button>
      )}
    </div>
  );
}
