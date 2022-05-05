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

  const breakline = '\u000A';

  if (loading) {
    return <span>Loading</span>;
  }
  return (
    <main>
      <div className='productPage'>
        <h3>{box.name} Box</h3>
        <div className='productContent'>
          <img src={box.images[0]} alt={box.name} />
          <span>{box.description} {breakline}This box is available for {box.price}</span>
        </div>
      </div>
    </main>
  )
}

export default ProductPage;