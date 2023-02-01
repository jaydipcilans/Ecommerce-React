import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
// import { ProductList } from "../../ProductList";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  const { responseData } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="shopItemList">
        {console.log(responseData)}
        {responseData?.products?.map((element, index) => (
          <div key={index}>
            <Product data={element} />
          </div>
        ))}
      </div>
    </div>
  );
};
