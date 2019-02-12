import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <article>
      <figure>
        <img src={`${product.productImage}`} alt="product" />
        <figcaption>
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </figcaption>
      </figure>
      <div>
        <span
          style={{cursor: 'pointer'}}
          onClick={onEdit}>Editar</span>
        <span
          style={{cursor: 'pointer'}}
          onClick={onDelete}>Eliminar</span>
      </div>
    </article>
  );
};

export default ProductCard;