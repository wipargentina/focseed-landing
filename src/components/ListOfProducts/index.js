import Product from 'components/Product';
import React from 'react';

export default function ListOfProducts({ products }) {
  //console.log(products);
  return (
    <div className='list-of-products'>
      <div className='row justify-content-center'>
        {products.map((product) => (
          <div key={product.id} className='col-md-6 col-lg-4'>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
