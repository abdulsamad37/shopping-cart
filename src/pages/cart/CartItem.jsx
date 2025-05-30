import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>RS {price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(e.target.value)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
