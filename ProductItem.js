import React from 'react';
import Stars from '../Stars/Stars';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Stars rating={product.rating} />
    </div>
  );
};

export default ProductItem;
