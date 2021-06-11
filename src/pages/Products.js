import React from 'react';
import ListOfProducts from 'components/ListOfProducts';

const LIST_OF_PRODUCTS = [
  {
    id: 1,
    title: 'Bayer',
    description: 'descripcion del producto',
    image: 'images/logo-bayer.png',
    link: '/'
  },
  {
    id: 2,
    title: 'Dekalb',
    description: 'descripcion del producto',
    image: 'images/logo-dekalb.png',
    link: '/'
  },
  {
    id: 3,
    title: 'Asgrow',
    description: 'descripcion del producto',
    image: 'images/logo-asgrow.png',
    link: '/'
  },
  {
    id: 4,
    title: 'Roundup',
    description: 'descripcion del producto',
    image: 'images/logo-roundup.png',
    link: '/'
  },
  {
    id: 4,
    title: 'FielView',
    description: 'descripcion del producto',
    image: 'images/logo-fieldview.png',
    link: '/'
  }
];

export default function Products() {
  return (
    <section className='products'>
      <div className='container'>
        <h1 className='text-center'>Productos</h1>
        <div className='row justify-content-center'>
          <div className='col-sm-7 col-md-10 col-xl-9'>
            <ListOfProducts products={LIST_OF_PRODUCTS} />
          </div>
        </div>
      </div>
    </section>
  );
}
