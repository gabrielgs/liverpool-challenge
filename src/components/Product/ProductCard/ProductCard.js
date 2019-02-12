import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <article>
      <figure>
        <img src={`${product.productImage}`} alt="product" />
        <figcaption>
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </figcaption>
      </figure>
    </article>
  );
};

export default ProductCard;