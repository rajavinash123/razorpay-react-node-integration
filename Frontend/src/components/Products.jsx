import React from "react";
import "../styles/Products.css";
import axios from "axios"

const Products = ({ data }) => {
  console.log(data);

  const checkbhoutProcess = async (amount) => {
   const {data:keyData}=await axios.get("/api/v1/getKey")
    const {data:orderData}= await axios.post("/api/v1/payment/process",{
      amount
    })
    console .log(orderData,keyData);
  };

  return (
    <div className="products-container">
      {data.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt="product"
            className="product-image"
          />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">
            price <strong>{item.price}</strong>
          </p>
          <button 
            className="pay-button" 
            onClick={() => checkbhoutProcess(item.price)}
          >
            {item.price}/-
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
