import React from 'react';
import ListOfProducts from 'components/ListOfProducts';
import { products } from '../data/products.json';

export default function Products() {
  return (
    <section className='products'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-7 col-md-10 col-xl-9'>
            <ListOfProducts products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
