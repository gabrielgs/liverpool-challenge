import React from 'react';
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ data }) => {
  let products;

  if (data.length > 0) {
    products = data.map(product => {
      return (
        <ProductCard product={product} />
      );
    });
  } else {
    products = 'Productos no encontrados'
  }

  return (
    <div>
      {products}
    </div>
  );
};

export default ProductList;
