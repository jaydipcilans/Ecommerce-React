import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/FormList.css";

function FormList() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { title: name, price: price };
    setData(newData);
    AddItemToApi(newData);
    console.log(newData);
  };

  const AddItemToApi = async (newData) => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then(
          toast.success("Data added Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="formList">
        <form onSubmit={handleSubmit}>
          <div className="productName">
            <label htmlFor="">Product Name:</label>
            <input
              type="text"
              name="ProductName"
              id="ProductName"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="productPrice">
            <label htmlFor="">Product Price:</label>
            <input
              type="number"
              name="ProductPrice"
              id="ProductPrice"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default FormList;
