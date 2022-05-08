import React from 'react';
import { Link } from 'react-router-dom';


const ProductItem = ({ name, images, _id }) => {
  return (
    <div key={_id} className='card'>
      <Link to={`/products/${_id}`}>
        <img src={images[0]} alt={name} />
        <h4 className='box-title'>{name}</h4>
      </Link>
    </div>
  )
}

export default ProductItem;