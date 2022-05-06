import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// NEED CART
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
} from '../utils/actions';
import { QUERY_BOXES } from '../utils/queries';
// NEED HELPERS.JS
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentBox, setCurrentBox] = useState({});

  const { loading, data } = useQuery(QUERY_BOXES);

  const boxes = data?.boxes || [];

  const { cart } = state;

  // THIS is a conditional to check if there are boxes in the IndexedDB database
  useEffect(() => {
    // already in global store
    if (boxes.length) {
      setCurrentBox(boxes.find((box) => box._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_BOXES,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('boxes', 'get').then((indexedBoxes) => {
        dispatch({
          type: UPDATE_BOXES,
          boxes: indexedBoxes,
        });
      });
    }
  }, [boxes, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      console.log('Filler');
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        frequency: parseInt(itemInCart.frequency) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        frequency: parseInt(itemInCart.frequency) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentBox, frequency: 1 },
      });
      idbPromise('cart', 'put', { ...currentBox, frequency: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentBox._id,
    });

    idbPromise('cart', 'delete', { ...currentBox });
  };

  return (
    <>
      {currentBox && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{currentBox.name}</h2>

          <p>{currentBox.description}</p>

          <p>
            <strong>Price:</strong>${currentBox.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentBox._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentBox.image}`}
            alt={currentBox.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
