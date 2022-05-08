import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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
          <h2 className='thanks'>Thank you for your purchase!</h2>
        </div>
        <section className='container mx-auto px-4'>
          <h4 className='product-header'>Order Details</h4>
          <ul className='order-details'>
            <li className='detail'>Confirmation number: {currentOrder._id}</li>
            <li className='detail'>User: {renderUsername()}</li>
            <li className='detail'>Billing Address: </li>
            <li className='detail'>Shipping Address: </li>
            <li className='detail'>Order placed: {new Date(+currentOrder.purchaseDate).toDateString()}</li>
            <li className='detail'>Expected Delivery set for:  {new Date((+currentOrder.purchaseDate + 604800)).toDateString()}</li>
          </ul>
          <div>
            <h4 className='product-header'>Products in your Order</h4>
            <div className='order-details'>
              {currentOrder.products.map((product) => {
                return (<p>{product._id}</p>)
              })}
            </div>
          </div>
          <Link to="/">
            <p><button className={'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'}><span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 '>Back to Home</span></button></p>
          </Link>
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
