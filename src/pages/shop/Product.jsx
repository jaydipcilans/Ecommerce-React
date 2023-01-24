import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./shop.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addTOCart, cartItems } = useContext(ShopContext);
  
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addTOCart(id)}>
        Add TO Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
