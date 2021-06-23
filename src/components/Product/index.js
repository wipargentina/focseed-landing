import React from 'react';

export default function Product({ product }) {
  return (
    <div className='grid'>
      <div className='grid-image'>
        <img src={product.image} alt='' />
      </div>
      <div className='grid-content'>
        <h4>{product.title}</h4>
        <p
          className=''
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <a
          href={product.link}
          className='btn btn-secondary'
          target='_blank'
          rel='noopener noreferrer'
        >
          {product.cta}
        </a>
      </div>
    </div>
  );
}
