import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./shop.css";

export const Product = (props) => {
  const { id, title, description, price, images } = props.data;

  const { addTOCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={images[0]} alt="Loding..." />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addTOCart(props.data)}>
        Add TO Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
