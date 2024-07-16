import React, { useState } from "react";

function Cart() {
  const intialize = 0;
  const [count, setCount] = useState(intialize);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount=>prevCount + 1);
    }
  };
  return (
    <div>
      count:{count}
      <button
        onClick={() => {
          setCount(intialize);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button onClick={IncrementFive}>Increment 5</button>
    </div>
  );
}

export default Cart;
