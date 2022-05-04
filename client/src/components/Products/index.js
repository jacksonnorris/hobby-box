import React from 'react';
import ProductItem from '../ProductItem';

const Products = ({ products }) => {
  console.log(products.boxes)
  if (!products) return null
  if (!products.boxes.length) return <h3>No products</h3>
  return products.boxes.map(product => <ProductItem key={product._id} {...product} />);
};

export default Products;