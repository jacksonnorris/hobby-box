import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_BOXES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Products = ({ products }) => {
  const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_BOXES);
  console.log('Data', data);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.boxes,
      });
      data.boxes.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  console.log(products)
  if (!products) return null
  if (!products.length) return <h3>No products</h3>
  return products.map(product => <ProductItem key={product._id} {...product} />);
};

export default Products;