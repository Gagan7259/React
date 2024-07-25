import React, { useState } from "react";

const RenderuseState = () => {
  const [count, setCount] = useState(0);

  console.log("Usestate render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((c) => c + 5)}>Count 5</button>
    </div>
  );
};

export default RenderuseState;
