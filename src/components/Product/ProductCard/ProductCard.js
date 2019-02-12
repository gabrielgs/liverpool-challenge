import React from 'react';
import {
  ProductCardImage,
  ProductCardFigure,
  ProductCardWrapper
} from './ProductCard.styled'

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <ProductCardWrapper>
      <ProductCardFigure>
        <ProductCardImage src={`${product.productImage}`} alt="product" />
        <figcaption>
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </figcaption>
      </ProductCardFigure>
      <div>
        <span
          style={{cursor: 'pointer'}}
          onClick={onEdit}>Editar</span>
        <span
          style={{cursor: 'pointer'}}
          onClick={onDelete}>Eliminar</span>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;