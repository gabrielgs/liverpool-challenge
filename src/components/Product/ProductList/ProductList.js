import React from 'react';
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ data, handlerClickEdit, handlerDeleteProduct }) => {
  let products;

  if (data.length > 0) {
    products = data.map(product => {
      return (
        <ProductCard
          product={product}
          onEdit={() => handlerClickEdit(product._id)}
          onDelete={() => handlerDeleteProduct(product._id)}/>
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
