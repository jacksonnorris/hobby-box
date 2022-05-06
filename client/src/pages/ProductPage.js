import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BOX } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import Cart from "../components/Cart";
import { QUERY_BOXES } from '../utils/queries';


const ProductPage = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const { cart, products } = state;
  
  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_BOXES);

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.boxes.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const { boxId } = useParams();
  const { loading: loadingBox, data: dataBox } = useQuery(QUERY_BOX, {
    variables: { boxId: boxId },
  });

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === boxId)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: boxId,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  }


  const box = dataBox?.box;

  const breakline = '\u000A';

  if (loadingBox) {
    return <span>Loading</span>;
  }
  return (
    <main>
      <div className='productPage'>
        <Cart />
        <h3>{box.name} Box</h3>
        <div className='productContent'>
          <img src={box.images[0]} alt={box.name} />
          <span>{box.description} {breakline}This box is available for {box.price}{breakline}<button onClick={addToCart}>Add to cart</button></span>

        </div>
      </div>
    </main>
  )
}

export default ProductPage;