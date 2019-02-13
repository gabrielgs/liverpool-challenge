import React from 'react';
import {
  ProductCardImage,
  ProductCardFigure,
  ProductCardWrapper,
  ProductCardImageCaption,
  ProductCardActions
} from './ProductCard.styled'

const ProductCard = ({ product, onEdit, onDelete, actions }) => {
  return (
    <ProductCardWrapper>
      <ProductCardFigure>
        <ProductCardImage src={`${product.productImage}`} alt="product" />
        <ProductCardImageCaption>
          <h4>{product.name}</h4>
          <span>${product.price}</span>
        </ProductCardImageCaption>
      </ProductCardFigure>
      {
        actions && (
          <ProductCardActions>
            <span
              style={{cursor: 'pointer'}}
              onClick={onEdit}>Editar</span>
            <span
              style={{cursor: 'pointer'}}
              onClick={onDelete}>Eliminar</span>
          </ProductCardActions>
        )
      }
    </ProductCardWrapper>
  );
};

export default ProductCard;