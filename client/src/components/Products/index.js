import React from 'react';
import ProductItem from '../ProductItem';

const Products = ({ products }) => {
  console.log(products)
  if (!products) return null
  if (!products.length) return <h3>No products</h3>
  return products.map(product => <ProductItem key={product._id} {...product} />);
};

export default Products;