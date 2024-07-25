import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const incr = (prevCount) => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decr = (prevCount) => {
    setCounter((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h2>useState Counter -{counter}</h2>
      <button onClick={incr}>Incr</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decr}>Decr</button>
    </div>
  );
}

export default Counter;
