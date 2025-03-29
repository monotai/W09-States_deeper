import { useState, useEffect } from "react";
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
  const [orders, setOrders] = useState(ORDERS);
  const [total, setTotal] = useState(3775.8);

  const calculateTotal = () => {
    const newTotal = orders.reduce((acc, order) => {
      return acc + order.price * order.quantity;
    }, 0);
    setTotal(newTotal);
  };

  const changeQuantity = (updatedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.product === updatedOrder.product ? updatedOrder : order
    );
    setOrders(updatedOrders);
  };

  useEffect(() => {
    calculateTotal();
  }, [orders]);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>
      <div className="order-list">
        {orders.map((order) => (
          <OrderCard key={order.product} order={order} change={changeQuantity} />
        ))}
      </div>
      <CheckoutButton total={`${total}`}></CheckoutButton>
    </>
  );
}
