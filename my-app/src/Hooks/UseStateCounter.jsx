import React, { useEffect, useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
useEffect(()=>{
    document.title=`clicked ${count} times`
})
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UseStateCounter;
