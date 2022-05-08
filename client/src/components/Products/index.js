import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_BOXES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Products = ({ products }) => {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_BOXES);
  const boxes = data?.boxes || [];
  useEffect(() => {
    if (boxes.length) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: boxes,
      });
      boxes.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((boxes) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: boxes,
        });
      });
    }
  }, [boxes, loading, dispatch]);

  if (!products) return null
  if (!products.length) return <h3>No products</h3>
  return products.map(product => <ProductItem key={product._id} {...product} />);
};

export default Products;