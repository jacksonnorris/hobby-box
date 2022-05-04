import React from 'react';

const ProductItem = ({ name, images, _id }) => {
  return (
    <div key={_id} className='card'>
      <h4>{name}</h4>
    </div>
  )
}

export default ProductItem;