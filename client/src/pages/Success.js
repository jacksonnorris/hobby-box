import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USERNAME } from '../utils/queries';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';

function Success() {
  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }
  const currentUser = (renderUsername()).toString();
  console.log('currentUser', currentUser);

  const { loading, data } = useQuery(QUERY_USERNAME, {
    variables: { username: currentUser },
  });

  console.log('return from username query', data);

  const [currentOrder, setCurrentOrder] = useState(null);
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        console.log('data', data);
        setCurrentOrder(data.addOrder);
        const productData = data.addOrder.products;
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
    }
    saveOrder();
  }, [addOrder, currentOrder]);

  console.log('currentOrder', currentOrder);
  if (currentOrder) {
    return (
      <div>
        <div>
          <h1>Success!</h1>
          <h2>Thank you for your purchase!</h2>
        </div>
        <section className='container mx-auto px-4'>
          <h4>Order Details</h4>
          <p>User: {renderUsername()}</p>
          <p>Billing Adress: </p>
          <p>Shipping Address: </p>
          <p>Confirmation number: {currentOrder._id}</p>
          <p>Order placed: {new Date(+currentOrder.purchaseDate).toDateString()}</p>
          <p>Expected Delivery set for:  {new Date((+currentOrder.purchaseDate + 604800)).toDateString()}</p>
          <div>
            {currentOrder.products.map((product) => {
              return (<p>{product._id}</p>)
            })}
          </div>
        </section>
      </div>
    );
  } else if (loading) {
    return null;
  } else {
    return null;
  }
};

export default Success;
