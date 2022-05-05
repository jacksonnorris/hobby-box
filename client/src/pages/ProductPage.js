import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BOX } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import Cart from "../components/Cart";


const ProductPage = () => {
  const [state, dispatch] = useStoreContext();
  const { cart } = state;


  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === box.id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: box.id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...box, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...box, purchaseQuantity: 1 });
    }
  }

  const { boxId } = useParams();
  const { loading, data } = useQuery(QUERY_BOX, {
    variables: { boxId: boxId },
  });

  const box = data?.box;

  const breakline = '\u000A';

  if (loading) {
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