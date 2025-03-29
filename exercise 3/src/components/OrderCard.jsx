import React, { useState } from "react";

export default function OrderCard({ order, change }) {
  const [quantity, setQuantity] = useState(order.quantity);

  const buttonColor = quantity <= 0 ? "#bfbfbf" : "#9cc54b";

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    change({ ...order, quantity: newQuantity });
  };

  const increase = () => {
    handleQuantityChange(quantity + 1);
  };

  const decrease = () => {
    handleQuantityChange(Math.max(0, quantity - 1)); // Ensure quantity doesn't go below 0
  };

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price}</small>
      </div>
      <div className="order-quantity">
        <div
          className="order-button"
          style={{ backgroundColor: buttonColor }}
          onClick={decrease}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={increase}>
          +
        </div>
      </div>
    </div>
  );
}