import React from 'react';

export default function Product({ product }) {
  return (
    <div className='card product-card'>
      <img src={product.image} alt='' className='card-image' />
      <div className='card-body'>
        <h4>{product.title}</h4>
        <p className='lead'>{product.description}</p>
        <a href={product.link} className='btn btn-primary'>
          Ver Catálogo
        </a>
      </div>
    </div>
  );
}
