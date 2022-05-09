import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation, useLazyQuery } from '@apollo/client';
import { QUERY_ADDRESS } from '../utils/queries';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';

function Success() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [userInfo, setUserInfo] = useState(null)
  const [currentOrder, setCurrentOrder] = useState([]);
  const [addOrder] = useMutation(ADD_ORDER);

  const [queryAddress] = useLazyQuery(QUERY_ADDRESS);

  useEffect(() => {
    (async () => {
      const { data } = await queryAddress({
        variables: { username: Auth.getProfile().data.username },
      });
      setUserInfo(data.queryAddress)
    })();
  }, []);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        console.log('dataFromResolver', data)

        setCurrentOrder(data.addOrder.order);
        setCurrentProducts(data.addOrder.products);
        // data.addOrder.products.forEach((item) => {
        //   idbPromise('cart', 'delete', item);
        // });
      }
    }
    saveOrder();
  }, [addOrder]);

  console.log('currentOrder', currentOrder);
  if (currentOrder && userInfo && currentProducts.length) {
    return (
      <main>
        <div>
          <div>
            <h2 className='thanks'>Thank you for your purchase!</h2>
          </div>
          <section className='container mx-auto px-4'>
            <h4 className='product-header'>Order Details</h4>
            <ul className='order-details'>
              <li className='detail'>Confirmation number: {currentOrder._id}</li>
              <li className='detail'>User: {Auth.getProfile().data.username}</li>
              <li className='detail'>Billing Address: {userInfo.billingAddress}</li>
              <li className='detail'>Shipping Address: {userInfo.shippingAddress}</li>
              <li className='detail'>Order placed: {new Date(+currentOrder.purchaseDate).toDateString()}</li>
              {/* <li className='detail'>Expected Delivery set for:  {(new Date().setDate(+(new Date().getDate() + 7))).toDateString()}</li> */}
            </ul>
            <div>
              <h4 className='product-header'>Products in your Order</h4>
              <div className='order-details'>
                {currentProducts.map((product) => {
                  return (<p>{product.name} | {product.price}</p>)
                })}
              </div>
            </div>
            <Link to="/">
              <p><button className={'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'}><span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 '>Back to Home</span></button></p>
            </Link>
          </section>
        </div>
      </main>
    );
  } else {
    return null;
  }
};

export default Success;
