import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import {ProductWrapper, ProductGrid} from './ProductList.styled';

const ProductList = ({ data, handlerClickEdit, handlerDeleteProduct, actions }) => {
  let products;

  if (data.length > 0) {
    products = data.map(product => {
      return (
        <ProductCard
          product={product}
          onEdit={() => handlerClickEdit(product._id)}
          onDelete={() => handlerDeleteProduct(product._id)}
          actions={actions}/>
      );
    });
  }

  return (
    <ProductWrapper>
      <ProductGrid>
        {products}
      </ProductGrid>
    </ProductWrapper>
  );
};

export default ProductList;
