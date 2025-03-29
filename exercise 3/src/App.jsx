import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const [value, setValue] = React.useState(3775.8)
  
  const changQuantity = (newUpdate) => {
    setOrders((prevOrders) => [...prevOrders, newUpdate])
    let newValue = 0.0;
    orders.forEach(({ price, quantity }) => { newValue += parseFloat(price) * parseFloat(quantity) });
    console.log(newValue)
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {ORDERS.map((order) => <OrderCard key={order.product} order={order} change={changQuantity}></OrderCard>)}
      </div>

      <CheckoutButton total={`${value}`}></CheckoutButton>
    </>
  );
}
