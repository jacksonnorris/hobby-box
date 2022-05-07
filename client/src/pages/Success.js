import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';



function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  useEffect(() => {
    async function saveOrder() {
      console.log('saveOrder called');
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);
      console.log('products', products);
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        console.log('data', data);
        const productData = data.addOrder.products;
        console.log('productData', productData);
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
    }
    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <section>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </section>
    </div>
  );
}

export default Success;
