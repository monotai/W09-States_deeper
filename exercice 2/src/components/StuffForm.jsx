import { useState } from "react";

export default function StuffForm({addStuff}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addButton = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please enter both a valid name and price!");
      return;
    }
    addStuff({name: name, price: parseFloat(price)});
    setName("");
    setPrice("");
  }

  return (
    <form className="stuff-form">
      <p>Stuff name {name}</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e) => {setName(e.target.value)}}/>

      <p>Stuff price {price}</p>
      <input type="number" placeholder="15" value={price} onChange={(e) => {setPrice(e.target.value)}}/>

      <button onClick={addButton}>Add Stuff</button>
    </form>
  );
}
