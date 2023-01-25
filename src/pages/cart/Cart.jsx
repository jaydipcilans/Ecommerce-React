import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Item</h1>
      </div>
      <div className="cartItems">
        {cartItems.map((product) => {
          return <CartItem data={product} />;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal: $ {totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Emapy </h1>
      )}
    </div>
  );
};
