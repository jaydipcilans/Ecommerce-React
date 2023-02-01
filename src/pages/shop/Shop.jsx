import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { responseData, SearchBar, PagiNationItem } = useContext(ShopContext);
  const [Name, setName] = useState("");
  const [number, setNumber] = useState(1);

  const handleInput = (e) => {
    setName(e.target.value);
    SearchBar(Name);
  };

  const buttonHandler = (e) => {
    setNumber(e.currentTarget.id);
  };

  const pageHandler = (number) => {
    const skipNumber = (number - 1) * 10;
    PagiNationItem(skipNumber);
  };

  useEffect(() => {
    pageHandler(number);
  }, [number]);

  const numberIncrease = (e) => {
    const newNumber = Number(e.currentTarget.id) + 1;
    setNumber(newNumber);
  };

  const numberDecrement = (e) => {
    const newNumber = e.currentTarget.id - 1;
    setNumber(newNumber);
  };

  return (
    <div className="shop">
      <div className="shop_list">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Prodct Here..."
            onChange={handleInput}
            className="input_shop"
          />
        </div>
      </div>

      <div className="shopItemList">
        {console.log(responseData)}
        {responseData?.products?.map((element, index) => (
          <div key={index}>
            <Product data={element} />
          </div>
        ))}
      </div>

      <div className="Pagination_bottom">
        {number <= 1 ? null : (
          <button onClick={numberDecrement} id={number} className="btn">
            &larr;
          </button>
        )}
        {newArr.map((num) => (
          <button id={num} onClick={buttonHandler} className="btn_bottom">
            {num}
          </button>
        ))}
        {number >= 9 ? null : (
          <button onClick={numberIncrease} id={number} className="btn">
            &rarr;
          </button>
        )}
        <p>Page {number} of 9</p>
      </div>
    </div>
  );
};
