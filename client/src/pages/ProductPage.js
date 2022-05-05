import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BOX } from '../utils/queries'

const ProductPage = () => {

  const { boxId } = useParams();
  const { loading, data } = useQuery(QUERY_BOX, {
    variables: { boxId: boxId },
  });

  const box = data?.box;

  if (loading) {
    return <span>Loading</span>;
  }
  return (
    <div className='productPage'>
      {box.name}
    </div>
  )
}

export default ProductPage;