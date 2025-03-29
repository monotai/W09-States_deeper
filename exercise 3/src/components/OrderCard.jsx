import React from "react";
import { useState } from "react";

export default function OrderCard({ order, change }) {
  const [value, setValue] = useState(order.quantity)

  const buttonColor = value <= 0 ? '#bfbfbf' : '#9cc54b';

  const increase = () => {
    setValue(value + 1);
    change((prevOrders) => [...prevOrders, {...order, quantity: value}]);
  };

  const decrease = () => {
    setValue(value - 1);
    if (value <= 0) {
      setValue(0);
    }
    change((prevOrders) => [...prevOrders, {...order, quantity: value}]);
  };

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" style={{ backgroundColor: `${buttonColor}` }} onClick={decrease}>-</div>
        <h4>{value}</h4>
        <div className="order-button" onClick={increase}>+</div>
      </div>
    </div>
  );
}
