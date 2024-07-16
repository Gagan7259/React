import React, { useState } from "react";

function Items() {
  const [items, SetItems] = useState([]);

  const addItem = () => {
    SetItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Items;
