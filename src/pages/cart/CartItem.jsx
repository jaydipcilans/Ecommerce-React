import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./cart.css";

export const CartItem = (props) => {
  const { id, title, price, images } = props.data;

  const { cartItems, removeFromCart, addTOCart, updateCartItemCount } =
    useContext(ShopContext);
  const productIndex = cartItems.findIndex((obj) => obj.id === id);

  return (
    <div className="cartItem">
      <img src={images[0]} alt="Loading..." />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>$ {price}</p>
      </div>
      <div className="countHandler">
        <button
          onClick={() => removeFromCart(props.data)}
          style={{
            margin: "5px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          -
        </button>
        <input
          value={cartItems[productIndex].number}
          onChange={(e) => updateCartItemCount(Number(e.target.value))}
          style={{ margin: "5px", border: "none" }}
        />
        <button
          onClick={() => addTOCart(props.data)}
          style={{
            margin: "5px",
            backgroundColor: "black",
            borderRadius: "5px",
            color: "white",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
