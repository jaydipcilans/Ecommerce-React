import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./shop.css";

export const Product = (props) => {
  const [addNumber, setAddNumber] = useState();

  const { title, description, price, images } = props.data;

  const { addTOCart, isLoading } = useContext(ShopContext);

  const TotalItem = () => {
    setAddNumber();
  };

  return (
    <div className="product">
      {isLoading ? (
        <view>
          <h1>Loading......</h1>
        </view>
      ) : (
        <div>
          <img src={images[0]} alt="Loading..." />
          <div className="description">
            <p>
              <b>{title}</b>
            </p>
            <p>{description}</p>
            <p>$ {price}</p>
          </div>
          <button
            className="addToCartBtn"
            onClick={() => addTOCart(props.data)}
            addTotalNumber={TotalItem}
          >
            Add TO Cart {addNumber}
          </button>
        </div>
      )}
    </div>
  );
};
