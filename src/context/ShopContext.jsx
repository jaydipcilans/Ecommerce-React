import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [responseData, setResponseData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].number > 0) {
        totalAmount += cartItems[item].number * cartItems[item].price;
        console.log(item);
      }
    }

    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].number > 0) {
        totalAmount += cartItems[item].number;
        console.log(item);
      }
    }

    return totalAmount;
  };

  const addTOCart = (data) => {
    if (!cartItems.find((obj) => obj.id === Number(data.id))) {
      const product = { ...data, number: 1 };
      cartItems.push(product);
      console.log(cartItems);
    } else {
      const productIndex = cartItems.findIndex((obj) => obj.id === data.id);
      console.log("productIndex", productIndex);
      const ItemQuntity = cartItems[productIndex].number;
      console.log("productIndex", productIndex);
      const NewCartItem = cartItems.map((product) => {
        if (product.id === data.id) {
          return { ...product, number: ItemQuntity + 1 };
        } else {
          return product;
        }
      });

      console.log(cartItems);
      setCartItems(NewCartItem);
    }
  };

  const removeFromCart = (data) => {
    if (data.number === 0) {
      const NewcartItem = cartItems.filter((item) => item.id !== data.id);

      setCartItems(NewcartItem);
    } else {
      const productIndex = cartItems.findIndex((obj) => obj.id === data.id);
      const ItemQuntity = cartItems[productIndex].number;
      const newCartItem = cartItems.map((product) => {
        if (product.id === data.id) {
          return { ...product, number: ItemQuntity - 1 };
        } else {
          return product;
        }
      });
      setCartItems(newCartItem);
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    console.log(newAmount);
  };

  const ProductItem = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      console.log("res", res);
      const data = await res.json();
      console.log("data", data);
      setResponseData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const SearchBar = async (Name) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${Name}`
      );
      const data = await res.json();
      setResponseData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const PagiNationItem = async (num) => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${num}`);
      const data = await res.json();
      setResponseData(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PagiNationItem();
  }, []);

  const contextValue = {
    responseData,
    cartItems,
    isLoading,
    addTOCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    ProductItem,
    getTotalCartItem,
    SearchBar,
    PagiNationItem
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
