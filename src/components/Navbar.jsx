import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "phosphor-react";
import "../components/Navbar.css";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const { getTotalCartItem } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="link">
        <Link to="/">Shop</Link>
        <Link to="cart">
          <ShoppingCart size={32} />
          ({getTotalCartItem()})
        </Link>
        <Link to="form">
          <Plus size={32} />
        </Link>
      </div>
    </div>
  );
};
