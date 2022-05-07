import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {

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
        <section>
          <h1>Success!</h1>
          <h2>Thank you for your purchase!</h2>
          <h2>You will now be redirected to the home page</h2>
          <p>{new Date(+currentOrder.purchaseDate).toDateString()}</p>
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Success;
