import React from 'react';

const ProductItem = ({ name, images, _id }) => {
  return (
    <div key={_id} className='card'>
      <img src={images[0]} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default ProductItem;