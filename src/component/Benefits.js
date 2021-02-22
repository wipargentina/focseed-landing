import React from 'react';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h3>
          <span>Nuestra Propuesta</span>
        </h3>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-6x fa-seedling'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Semillas</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-6x fa-fill-drip'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Agroquímicos</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-6x fa-award'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Marcas Líderes</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-6x fa-truck-loading'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Solución Logística Integral</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-0'>
              <div className='card-img'>
                <i class='fas fa-6x fa-hands-helping'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Asesoramiento Especializado</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
