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
  const { boxId } = useParams();
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_BOXES);
  const { loading: loadingBox, data: dataBox } = useQuery(QUERY_BOX, {
    variables: { boxId: boxId },
  });
  const boxes = data?.boxes || [];
  const box = dataBox?.box;

  useEffect(() => {
    // already in global store
    if (boxes.length) {
      setCurrentProduct(boxes.find((box) => box._id === boxId));
    }
    // retrieved from server
    else if (boxes) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: boxes,
      });

      boxes.forEach((product) => {
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
  }, [boxes, loading, dispatch, boxId]);


  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === boxId)
    console.log(addToCart, "ADD TO CART");
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
  if (loadingBox) {
    return <span>Loading</span>;
  }
  return (
    <main>
      <div className='productPage'>
        <Cart />
        <h3>{box.name} Box</h3>
        <div className='productContent'>
          <div className='imageWrapper'>
            <img id='mainImage' className='mainImage' src={box.images[0]} alt={box.name} />
            <div class='thumbImgWrapper'>
              {box.images.map((img) => (
                <button onClick={() => { document.getElementById('mainImage').setAttribute('src', img) }}>
                  <img className='thumbImg' src={img} alt={img} />
                </button>
              ))}
            </div>
          </div>
          <div className='infoWrapper'>
            <p>{box.description}</p>
            <p>This box is available for {box.price}</p>
            <p><button className={'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'} onClick={addToCart}><span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Add to cart</span></button></p>
          </div>
        </div>
      </div>
    </main>
  )
}


export default ProductPage;