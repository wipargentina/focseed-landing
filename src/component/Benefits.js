import React from 'react';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h2>
          <span>Nuestra Propuesta</span>
        </h2>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-7x fa-seedling'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Semillas</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-7x fa-fill-drip'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Agroquímicos y Agroinsumos</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-7x fa-award'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Marcas Líderes</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-7x fa-truck-loading'></i>
              </div>
              <div className='card-body'>
                <h3 className='card-title'>Solución Logística Integral</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-img'>
                <i class='fas fa-7x fa-hands-helping'></i>
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
