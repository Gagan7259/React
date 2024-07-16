import React, { useState } from "react";

function Functionaaa() {
  const [counter, setCounter] = useState(0);
  function changevalue() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count{counter}
      </button>
    </div>
  );
}

export default Functionaaa;
