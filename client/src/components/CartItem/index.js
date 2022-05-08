import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  // const onChange = (e) => {
  //   const value = e.target.value;
  //   if (value === '0') {
  //     dispatch({
  //       type: REMOVE_FROM_CART,
  //       _id: item._id
  //     });
  //     idbPromise('cart', 'delete', { ...item });

  //   } else {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: item._id,
  //       frequency: parseInt(value)
  //     });
  //     idbPromise('cart', 'put', { ...item, frequency: parseInt(value) });
  //   }
  // }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <span
          className="trash-button"
          role="img"
          aria-label="trash"
          onClick={() => removeFromCart(item)}
        >
          🗑️
        </span>
        <span>{item.name}, ${item.price}</span>
      </div>
    </div>
  );
}

export default CartItem;
